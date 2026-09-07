import type { Metadata } from "next";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { getTranslations } from "next-intl/server";
import { Markdown } from "@/lib/markdown";
import { CONSENT_VERSION } from "@/lib/env";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("privacy");
  return { title: t("title") };
}

export default async function PrivacyPage({ params }: PageProps<"/[locale]/privacy">) {
  const { locale } = await params;
  const t = await getTranslations("privacy");
  const source = await readFile(
    path.join(process.cwd(), "src", "content", `privacy.${locale === "en" ? "en" : "de"}.md`),
    "utf8",
  );
  return (
    <article className="space-y-4">
      <h1 className="text-2xl font-semibold">{t("title")}</h1>
      <p className="text-xs text-muted">{t("version", { version: CONSENT_VERSION })}</p>
      <Markdown source={source} />
    </article>
  );
}
