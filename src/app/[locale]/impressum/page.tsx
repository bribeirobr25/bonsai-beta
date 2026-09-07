import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("impressum");
  return { title: t("title") };
}

export default async function ImpressumPage() {
  const t = await getTranslations("impressum");
  return (
    <article className="space-y-4">
      <h1 className="text-2xl font-semibold">{t("title")}</h1>
      <p>
        {t("body1")}
        <br />
        {t("body2")}
      </p>
      <p>{t("contact")}</p>
      <p className="alert">{t("note")}</p>
    </article>
  );
}
