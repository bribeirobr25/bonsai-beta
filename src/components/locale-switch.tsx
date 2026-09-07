"use client";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { Link, usePathname } from "@/i18n/navigation";

/** Switches locale on the same path, keeping query parameters such as `?src=`. */
export function LocaleSwitch({ label }: { label: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const other = locale === "de" ? "en" : "de";
  const query = Object.fromEntries(searchParams.entries());
  return (
    <Link
      href={{ pathname, query }}
      locale={other}
      className="whitespace-nowrap text-muted"
      hrefLang={other}
    >
      {label}
    </Link>
  );
}
