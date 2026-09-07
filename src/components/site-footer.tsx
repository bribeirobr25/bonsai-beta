import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { CONSENT_VERSION } from "@/lib/env";

export async function SiteFooter() {
  const t = await getTranslations("common");
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-2 px-4 py-4 text-xs text-muted">
        <span>{t("footer.notice")}</span>
        <span className="flex gap-4">
          <Link href="/privacy">
            {t("footer.privacy")} v{CONSENT_VERSION}
          </Link>
          <Link href="/impressum">{t("footer.impressum")}</Link>
        </span>
      </div>
    </footer>
  );
}
