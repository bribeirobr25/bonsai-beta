import type { Metadata } from "next";
import { getFormatter, getTranslations } from "next-intl/server";
import type { AppLocale } from "@/i18n/routing";
import { requireUser } from "@/lib/auth/dal";
import { deleteAccount, setResearchConsent, updateLocale } from "./actions";
import { NO_INDEX } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("settings");
  // Private surface: never indexed, never cached, no snippet (gate IDX-1).
  return { title: t("title"), robots: NO_INDEX };
}

export default async function SettingsPage({
  params,
  searchParams,
}: PageProps<"/[locale]/settings">) {
  const { locale } = await params;
  const sp = await searchParams;
  const { profile } = await requireUser(locale as AppLocale, `/${locale}/settings`);
  const t = await getTranslations("settings");
  const f = await getFormatter();
  const date = (d: Date) => f.dateTime(d, { dateStyle: "medium" });

  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-semibold">{t("title")}</h1>
      {sp.saved === "1" && <p className="alert alert-ok">{t("saved")}</p>}
      {sp.error === "confirm" && (
        <p role="alert" className="alert">
          {t("deleteError")}
        </p>
      )}

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t("account")}</h2>
        <p className="text-sm">
          <span className="text-muted">{t("email")}:</span> {profile.email}
        </p>
        <form action={updateLocale} className="flex flex-wrap items-end gap-3">
          <input type="hidden" name="locale" value={locale} />
          <label className="space-y-1">
            <span className="text-sm font-medium">{t("language")}</span>
            <select name="newLocale" defaultValue={profile.locale} className="field">
              <option value="de">Deutsch</option>
              <option value="en">English</option>
            </select>
          </label>
          <button type="submit" className="btn">
            {t("save")}
          </button>
          <p className="w-full text-xs text-muted">{t("languageHint")}</p>
        </form>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t("research")}</h2>
        <p className="text-sm">
          {profile.researchConsent
            ? t("researchOn", { version: profile.consentVersion, date: date(profile.consentAt) })
            : t("researchOff")}
        </p>
        {!profile.researchConsent && profile.researchConsentWithdrawnAt && (
          <p className="text-xs text-muted">
            {t("researchWithdrawnAt", { date: date(profile.researchConsentWithdrawnAt) })}
          </p>
        )}
        <p className="text-xs text-muted">{t("researchText")}</p>
        <form action={setResearchConsent}>
          <input type="hidden" name="locale" value={locale} />
          <input type="hidden" name="grant" value={profile.researchConsent ? "0" : "1"} />
          <button type="submit" className="btn">
            {profile.researchConsent ? t("researchWithdraw") : t("researchGrant")}
          </button>
        </form>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t("data")}</h2>
        <div className="card">
          <h3 className="font-semibold">{t("exportTitle")}</h3>
          <p className="mt-1 text-sm text-muted">{t("exportBody")}</p>
          <a href="/api/export" className="btn mt-3 inline-block" download>
            {t("exportButton")}
          </a>
        </div>
        <div className="card border-danger">
          <h3 className="font-semibold">{t("deleteTitle")}</h3>
          <p className="mt-1 text-sm text-muted">{t("deleteBody")}</p>
          <form action={deleteAccount} className="mt-3 flex flex-wrap items-end gap-3">
            <input type="hidden" name="locale" value={locale} />
            <label className="space-y-1">
              <span className="text-sm font-medium">{t("deleteConfirmLabel")}</span>
              <input name="confirm" className="field" autoComplete="off" />
            </label>
            <button type="submit" className="btn btn-danger">
              {t("deleteButton")}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
