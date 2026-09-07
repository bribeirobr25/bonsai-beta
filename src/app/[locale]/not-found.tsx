import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("notFound");
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">{t("title")}</h1>
      <p className="text-muted">{t("body")}</p>
      <Link href="/" className="btn">
        {t("home")}
      </Link>
    </div>
  );
}
