import { Suspense } from "react";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getCurrentUser } from "@/lib/auth/dal";
import { CONSENT_VERSION } from "@/lib/env";
import { LocaleSwitch } from "./locale-switch";
import { signOut } from "@/app/[locale]/sign-in/actions";

export async function SiteHeader() {
  const t = await getTranslations("common");
  const locale = await getLocale();
  const current = await getCurrentUser();
  const signedIn = Boolean(current);
  // Product navigation appears only once the current consent is on record.
  const ready = current?.profile?.consentVersion === CONSENT_VERSION;
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-4 gap-y-1 px-4 py-3">
        <Link href="/" className="mr-auto whitespace-nowrap font-semibold tracking-tight">
          {t("appName")}
        </Link>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          {ready && (
            <>
              <Link href="/my-tree" className="whitespace-nowrap">
                {t("nav.myTree")}
              </Link>
              <span className="whitespace-nowrap text-muted" title={t("comingLater")}>
                {t("nav.explore")}
              </span>
              <Link href="/settings" className="whitespace-nowrap">
                {t("nav.settings")}
              </Link>
            </>
          )}
          {signedIn ? (
            <form action={signOut}>
              <input type="hidden" name="locale" value={locale} />
              <button type="submit" className="link whitespace-nowrap">
                {t("signOut")}
              </button>
            </form>
          ) : (
            <Link href="/sign-in" className="whitespace-nowrap">
              {t("signIn")}
            </Link>
          )}
          <Suspense fallback={null}>
            <LocaleSwitch label={t("switchLocale")} />
          </Suspense>
        </nav>
      </div>
    </header>
  );
}
