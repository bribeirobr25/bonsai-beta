import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { track } from "@/lib/events";

export default async function LandingPage({
  params,
  searchParams,
}: PageProps<"/[locale]">) {
  const { locale } = await params;
  const sp = await searchParams;
  const src = typeof sp.src === "string" ? sp.src : null;
  const t = await getTranslations("landing");
  await track({ name: "landing_view", locale: locale as "de" | "en", source: src });
  const startHref = src ? `/sign-in?src=${encodeURIComponent(src)}` : "/sign-in";
  return (
    <article className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">{t("title")}</h1>
        <p className="text-lg text-muted">{t("lead")}</p>
        <div className="flex flex-wrap gap-3">
          <Link href={startHref} className="btn btn-primary">
            {t("cta")}
          </Link>
          <Link href="/privacy" className="btn">
            {t("ctaSecondary")}
          </Link>
        </div>
      </section>
      <section className="grid gap-6 sm:grid-cols-2">
        <div className="card">
          <h2 className="font-semibold">{t("promiseTitle")}</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            <li>{t("promise1")}</li>
            <li>{t("promise2")}</li>
            <li>{t("promise3")}</li>
            <li>{t("promise4")}</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="font-semibold">{t("notTitle")}</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            <li>{t("not1")}</li>
            <li>{t("not2")}</li>
            <li>{t("not3")}</li>
          </ul>
        </div>
      </section>
      <p className="text-xs text-muted">{t("status")}</p>
    </article>
  );
}
