import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seite nicht gefunden · Page not found · Bar-Bonsai",
  robots: { index: false, follow: false },
};

/**
 * Unmatched URLs. This file bypasses the locale layout by design (Next.js
 * `globalNotFound`), so it carries both languages and its own styles.
 */
export default function GlobalNotFound() {
  return (
    <html lang="de" className={`${geist.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12">
          <p className="font-semibold tracking-tight">Bar-Bonsai</p>
          <section className="mt-8 space-y-2">
            <h1 className="text-2xl font-semibold">Seite nicht gefunden</h1>
            <p className="text-muted">Diese Adresse gibt es nicht.</p>
            <Link href="/de" className="btn mt-2">
              Zur Startseite
            </Link>
          </section>
          <section className="mt-10 space-y-2" lang="en">
            <h2 className="text-2xl font-semibold">Page not found</h2>
            <p className="text-muted">This address does not exist.</p>
            <Link href="/en" className="btn mt-2">
              Back to the start
            </Link>
          </section>
        </main>
      </body>
    </html>
  );
}
