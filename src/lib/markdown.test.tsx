import { describe, expect, it } from "vitest";
import { renderInline, splitBlocks } from "./markdown";

describe("markdown helpers", () => {
  it("splits blocks on blank lines", () => {
    expect(splitBlocks("a\nb\n\nc")).toEqual([["a", "b"], ["c"]]);
  });
  it("renders bold and links", () => {
    const nodes = renderInline("**Bold** and [link](https://example.org) end");
    expect(nodes).toHaveLength(4);
    expect(typeof nodes[0]).toBe("object");
    expect(nodes[1]).toBe(" and ");
    expect(nodes[3]).toBe(" end");
  });
});
