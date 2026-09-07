import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link, redirect } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { getCurrentUser } from "@/lib/auth/dal";
import { CONSENT_VERSION } from "@/lib/env";
import { sanitizeSource } from "@/lib/source";
import { submitConsent } from "./actions";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("consent");
  return { title: t("title") };
}

export default async function ConsentPage({
  params,
  searchParams,
}: PageProps<"/[locale]/consent">) {
  const { locale } = await params;
  const sp = await searchParams;
  const current = await getCurrentUser();
  if (!current) redirect({ href: "/sign-in", locale: locale as AppLocale });
  if (current?.profile && current.profile.consentVersion === CONSENT_VERSION)
    redirect({ href: "/my-tree", locale: locale as AppLocale });

  const t = await getTranslations("consent");
  const src = sanitizeSource(sp.src) ?? "";
  const error = sp.error === "required";
  const privacy = (chunks: React.ReactNode) => (
    <Link href="/privacy" className="underline" target="_blank" rel="noopener">
      {chunks}
    </Link>
  );
  const b = (chunks: React.ReactNode) => <strong>{chunks}</strong>;

  return (
    <form action={submitConsent} className="mx-auto max-w-xl space-y-6">
      <h1 className="text-2xl font-semibold">{t("title")}</h1>
      <p>{t.rich("intro1", { b })}</p>
      <p>{t("intro2")}</p>
      {error && (
        <p role="alert" className="alert">
          {t("errorRequired")}
        </p>
      )}
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="src" value={src} />
      <label className="flex gap-3 rounded-md border border-line p-3">
        <input type="checkbox" name="terms" required className="mt-1" />
        <span className="text-sm">{t.rich("required", { b, privacy })}</span>
      </label>
      <label className="flex gap-3 rounded-md border border-line p-3">
        <input type="checkbox" name="research" className="mt-1" />
        <span className="text-sm">{t.rich("optional", { b, privacy })}</span>
      </label>
      <button type="submit" className="btn btn-primary">
        {t("submit")}
      </button>
      <p className="text-xs text-muted">{t("version", { version: CONSENT_VERSION })}</p>
    </form>
  );
}
