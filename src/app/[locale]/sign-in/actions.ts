"use server";
import { z } from "zod";
import { redirect } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import { safeNextPath } from "@/lib/auth/dal";
import { env } from "@/lib/env";
import { createClient } from "@/lib/supabase/server";
import { track } from "@/lib/events";
import { sanitizeSource } from "@/lib/source";

const input = z.object({
  email: z.string().trim().email().max(254),
  locale: z.enum(routing.locales),
  src: z.string().trim().max(64).optional().or(z.literal("")),
  next: z.string().max(512).optional().or(z.literal("")),
});

export async function sendMagicLink(formData: FormData) {
  const parsed = input.safeParse({
    email: formData.get("email"),
    locale: formData.get("locale"),
    src: formData.get("src") ?? "",
    next: formData.get("next") ?? "",
  });
  const locale = (parsed.success ? parsed.data.locale : "de") as AppLocale;
  if (!parsed.success) {
    redirect({ href: "/sign-in?error=invalid", locale });
    return;
  }
  const { email } = parsed.data;
  const src = sanitizeSource(parsed.data.src) ?? "";
  const consentPath = `/${locale}/consent${src ? `?src=${encodeURIComponent(src)}` : ""}`;
  const next = safeNextPath(parsed.data.next || null, consentPath);
  const callback = new URL("/auth/callback", env().NEXT_PUBLIC_SITE_URL);
  callback.searchParams.set("next", next);

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: callback.toString(), data: { locale, src: src || null } },
  });
  if (error) {
    console.error("[auth] signInWithOtp failed", error.message);
    redirect({ href: "/sign-in?error=send", locale });
    return;
  }
  await track({ name: "signup_started", locale, source: src || null });
  redirect({ href: "/sign-in?sent=1", locale });
}

export async function signOut(formData: FormData) {
  const locale = (formData.get("locale") as AppLocale) || "de";
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect({ href: "/", locale });
}
