import { z } from "zod";

const schema = z.object({
  DATABASE_URL: z.string().min(1),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  /** Supabase publishable key (formerly "anon key"). Safe for the browser. */
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: z.string().min(1),
  /** Supabase secret key (formerly "service_role"). Server only. */
  SUPABASE_SECRET_KEY: z.string().min(1),
  /** Pepper for event pseudonyms. Rotating it breaks per-user sequences. */
  EVENTS_PEPPER: z.string().min(16),
  /** Vercel sends `Authorization: Bearer <CRON_SECRET>` to cron routes. */
  CRON_SECRET: z.string().min(16).optional(),
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
});

let cached: z.infer<typeof schema> | undefined;

/** Parsed lazily so that `next build` does not need every variable. */
export function env() {
  if (!cached) {
    const parsed = schema.safeParse(process.env);
    if (!parsed.success) {
      const missing = parsed.error.issues.map((i) => i.path.join(".")).join(", ");
      throw new Error(`Invalid environment: ${missing}`);
    }
    cached = parsed.data;
  }
  return cached;
}

export const CONSENT_VERSION = "0.3";
export const SITE_NAME = "Bar-Bonsai";
