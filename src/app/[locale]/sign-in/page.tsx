import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link, redirect } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { getAuthUser } from "@/lib/auth/dal";
import { sanitizeSource } from "@/lib/source";
import { sendMagicLink } from "./actions";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("signIn");
  return { title: t("title") };
}

export default async function SignInPage({
  params,
  searchParams,
}: PageProps<"/[locale]/sign-in">) {
  const { locale } = await params;
  const sp = await searchParams;
  const t = await getTranslations("signIn");
  if (await getAuthUser()) redirect({ href: "/consent", locale: locale as AppLocale });

  const sent = sp.sent === "1";
  const error = typeof sp.error === "string" ? sp.error : null;
  const src = sanitizeSource(sp.src) ?? "";
  const next = typeof sp.next === "string" ? sp.next : "";

  return (
    <div className="mx-auto max-w-md space-y-6">
      <h1 className="text-2xl font-semibold">{t("title")}</h1>
      {sent ? (
        <div className="card">
          <h2 className="font-semibold">{t("sentTitle")}</h2>
          <p className="mt-1 text-sm text-muted">{t("sentBody")}</p>
        </div>
      ) : (
        <form action={sendMagicLink} className="space-y-4">
          <p className="text-muted">{t("lead")}</p>
          {error && (
            <p role="alert" className="alert">
              {t(error === "link" ? "errorLink" : error === "send" ? "errorSend" : "errorInvalid")}
            </p>
          )}
          <input type="hidden" name="locale" value={locale} />
          <input type="hidden" name="src" value={src} />
          <input type="hidden" name="next" value={next} />
          <label className="block space-y-1">
            <span className="text-sm font-medium">{t("emailLabel")}</span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              inputMode="email"
              className="field"
            />
          </label>
          <button type="submit" className="btn btn-primary w-full">
            {t("submit")}
          </button>
          <p className="text-xs text-muted">
            {t.rich("legal", {
              privacy: (chunks) => (
                <Link href="/privacy" className="underline">
                  {chunks}
                </Link>
              ),
            })}
          </p>
        </form>
      )}
    </div>
  );
}
