import type { EmailOtpType } from "@supabase/supabase-js";
import { NextResponse, type NextRequest } from "next/server";
import { safeNextPath } from "@/lib/auth/dal";
import { createClient } from "@/lib/supabase/server";

/** Magic-link landing: PKCE `code` or `token_hash` + `type`, then redirect. */
export async function GET(request: NextRequest) {
  const { searchParams, origin } = request.nextUrl;
  const next = safeNextPath(searchParams.get("next"), "/de/consent");
  const locale = next.startsWith("/en") ? "en" : "de";
  const supabase = await createClient();

  const code = searchParams.get("code");
  const tokenHash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;

  let ok = false;
  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    ok = !error;
  } else if (tokenHash && type) {
    const { error } = await supabase.auth.verifyOtp({ type, token_hash: tokenHash });
    ok = !error;
  }
  return NextResponse.redirect(
    ok ? `${origin}${next}` : `${origin}/${locale}/sign-in?error=link`,
  );
}
