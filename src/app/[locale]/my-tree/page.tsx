import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type { AppLocale } from "@/i18n/routing";
import { requireUser } from "@/lib/auth/dal";
import { NO_INDEX } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("myTree");
  // Private surface: never indexed, never cached, no snippet (gate IDX-1).
  return { title: t("title"), robots: NO_INDEX };
}

export default async function MyTreePage({ params }: PageProps<"/[locale]/my-tree">) {
  const { locale } = await params;
  const { profile } = await requireUser(locale as AppLocale, `/${locale}/my-tree`);
  const t = await getTranslations("myTree");
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">{t("title")}</h1>
      <div className="card">
        <h2 className="font-semibold">{t("emptyTitle")}</h2>
        <p className="mt-1 text-sm text-muted">{t("emptyBody")}</p>
      </div>
      <p className="text-xs text-muted">{t("signedInAs", { email: profile.email })}</p>
    </div>
  );
}
