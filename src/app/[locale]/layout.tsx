import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { SITE_NAME } from "@/lib/env";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "../globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: SITE_NAME, template: `%s · ${SITE_NAME}` },
  description: "A small research project: one bonsai's dated history.",
  /**
   * INDEXABLE BY DEFAULT, and private surfaces opt out individually.
   *
   * This layout previously set `robots: { index: false, follow: false }`, which
   * applied a blanket noindex to every page including the public website -
   * conflict C-06. It also silently defeated src/app/robots.ts: robots.txt
   * said Allow, the page meta said noindex, and the meta tag wins. A crawler
   * obeying either one would have been told something different.
   *
   * Per-surface now (gate IDX-1): the public website and Knowledge are
   * indexable because they support acquisition; /app/**, /j/**, /settings,
   * /my-tree, /sign-in and /consent each declare NO_INDEX themselves. Declared
   * per page rather than inferred from the path, so a new private route has to
   * make a visible choice instead of inheriting a default that happens to be
   * right.
   */
  robots: { index: true, follow: true },
};

/**
 * Pre-renders the locale segment for all four locales.
 *
 * Not sufficient on its own to make these routes static - SiteHeader renders
 * sign-in state, which is per-request - but it is necessary, and it removes
 * the locale param as a reason for dynamic rendering. The public Knowledge
 * routes that gate CSP-1 actually cares about arrive in Phase 2 and must be
 * static; see §14.1.
 */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  return (
    <html lang={locale} className={`${geist.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider>
          <SiteHeader />
          <main id="main" className="mx-auto w-full max-w-3xl flex-1 px-4 py-8">
            {children}
          </main>
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
