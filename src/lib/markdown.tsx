import type { ReactNode } from "react";

/**
 * Minimal renderer for the privacy notice: headings (##/###), paragraphs,
 * bold, links, bullet lists and pipe tables. No HTML pass-through.
 */
export function renderInline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[^)\s]*)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) out.push(<strong key={k++}>{m[1]}</strong>);
    else
      out.push(
        <a key={k++} href={m[3]} className="underline" rel="noopener">
          {m[2]}
        </a>,
      );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function splitBlocks(md: string): string[][] {
  const blocks: string[][] = [];
  let current: string[] = [];
  for (const line of md.replace(/\r/g, "").split("\n")) {
    if (line.trim() === "") {
      if (current.length) blocks.push(current);
      current = [];
    } else if (/^#{1,3} /.test(line)) {
      // A heading is always its own block, even without a blank line after it.
      if (current.length) blocks.push(current);
      blocks.push([line]);
      current = [];
    } else current.push(line);
  }
  if (current.length) blocks.push(current);
  return blocks;
}

function tableCells(line: string) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((c) => c.trim());
}

export function Markdown({ source }: { source: string }) {
  return (
    <div className="prose-bb">
      {splitBlocks(source).map((lines, i) => {
        const first = lines[0];
        if (first.startsWith("### ")) return <h3 key={i}>{renderInline(first.slice(4))}</h3>;
        if (first.startsWith("## ")) return <h2 key={i}>{renderInline(first.slice(3))}</h2>;
        if (first.startsWith("# ")) return <h1 key={i}>{renderInline(first.slice(2))}</h1>;
        if (lines.every((l) => /^\s*[-*] /.test(l)))
          return (
            <ul key={i}>
              {lines.map((l, j) => (
                <li key={j}>{renderInline(l.replace(/^\s*[-*] /, ""))}</li>
              ))}
            </ul>
          );
        if (lines.every((l) => l.trim().startsWith("|"))) {
          const rows = lines.filter((l) => !/^\|\s*-{2,}/.test(l.trim()));
          const [head, ...body] = rows.map(tableCells);
          return (
            <div key={i} className="overflow-x-auto">
              <table>
                <thead>
                  <tr>{head.map((c, j) => <th key={j}>{renderInline(c)}</th>)}</tr>
                </thead>
                <tbody>
                  {body.map((r, j) => (
                    <tr key={j}>{r.map((c, k) => <td key={k}>{renderInline(c)}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        return <p key={i}>{renderInline(lines.join(" "))}</p>;
      })}
    </div>
  );
}
