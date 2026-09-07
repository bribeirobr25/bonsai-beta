import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getAuthUser } from "@/lib/auth/dal";
import { LocaleSwitch } from "./locale-switch";
import { signOut } from "@/app/[locale]/sign-in/actions";

export async function SiteHeader() {
  const t = await getTranslations("common");
  const user = await getAuthUser();
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="font-semibold tracking-tight">
          {t("appName")}
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          {user ? (
            <>
              <Link href="/my-tree">{t("nav.myTree")}</Link>
              <span className="text-muted" title={t("comingLater")}>
                {t("nav.explore")}
              </span>
              <Link href="/settings">{t("nav.settings")}</Link>
              <form action={signOut}>
                <button type="submit" className="link">
                  {t("signOut")}
                </button>
              </form>
            </>
          ) : (
            <Link href="/sign-in">{t("signIn")}</Link>
          )}
          <LocaleSwitch label={t("switchLocale")} />
        </nav>
      </div>
    </header>
  );
}
