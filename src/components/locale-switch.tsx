"use client";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { Link, usePathname } from "@/i18n/navigation";

/**
 * Switches locale on the same path, keeping query parameters such as `?src=`.
 *
 * ACCESSIBILITY. W7 requires that the **current language is announced** and
 * that the control is keyboard accessible with no flag-only affordance. Before
 * this, a screen-reader user heard only a link reading "Deutsch" with nothing
 * saying which language the page was already in - the active locale was not
 * rendered at all, so there was no `aria-current` to carry it.
 *
 * Both locales now render: the current one as plain text marked
 * `aria-current="true"`, the other as a link. `lang` on each element tells the
 * screen reader to pronounce "Deutsch" in German rather than reading it with
 * English phonemes, which is the difference between a usable control and a
 * confusing one.
 */
export function LocaleSwitch({
  label,
  currentLabel,
}: {
  label: string;
  currentLabel: string;
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const other = locale === "de" ? "en" : "de";
  const query = Object.fromEntries(searchParams.entries());
  return (
    <span className="flex items-center gap-2 whitespace-nowrap">
      <span aria-current="true" lang={locale} className="text-fg">
        {currentLabel}
      </span>
      <span aria-hidden="true" className="text-muted">
        ·
      </span>
      <Link
        href={{ pathname, query }}
        locale={other}
        className="whitespace-nowrap text-muted"
        hrefLang={other}
        lang={other}
      >
        {label}
      </Link>
    </span>
  );
}
