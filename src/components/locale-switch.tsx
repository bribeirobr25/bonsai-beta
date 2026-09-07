"use client";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export function LocaleSwitch({ label }: { label: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const other = locale === "de" ? "en" : "de";
  return (
    <Link href={pathname} locale={other} className="text-muted" hrefLang={other}>
      {label}
    </Link>
  );
}
