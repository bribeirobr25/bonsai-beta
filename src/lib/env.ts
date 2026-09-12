import { z } from "zod";

const schema = z.object({
  DATABASE_URL: z.string().min(1),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  /** Supabase publishable key (formerly "anon key"). Safe for the browser. */
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: z.string().min(1),
  /** Supabase secret key (formerly "service_role"). Server only. */
  SUPABASE_SECRET_KEY: z.string().min(1),
  /**
   * Pepper for event pseudonyms.
   *
   * Long-lived by design; routine rotation is NOT required and would destroy
   * longitudinal continuity for no security gain. An emergency rotation
   * (suspected or confirmed compromise) increments EVENTS_PSEUDONYM_VERSION
   * alongside it, so both generations coexist and prior rows stay readable -
   * they are never re-pseudonymized, which would need the old secret anyway.
   * Plan §24.7.
   */
  EVENTS_PEPPER: z.string().min(16),
  /**
   * Which generation of EVENTS_PEPPER is in use. Stamped onto every event.
   *
   * Without this an emergency rotation would silently break continuity:
   * pseudonyms would change with nothing recording why, and a longitudinal
   * query spanning the boundary would report a population of strangers as
   * churn. Bump it in the SAME deploy as the secret.
   */
  EVENTS_PSEUDONYM_VERSION: z.coerce.number().int().positive().default(1),
  /**
   * Default session classification for this deployment (OI-50, plan §24.8).
   *
   * Staging is set to INTERNAL so its traffic can never be mistaken for
   * evidence. Production leaves this unset and therefore defaults to USER,
   * because the common case in production IS a real user - and an
   * unclassified event must count as evidence rather than be silently
   * excluded, which is the safe direction for a metric that decides whether to
   * kill a hypothesis.
   */
  SESSION_CLASS_DEFAULT: z.enum(["USER", "INTERNAL", "QA"]).default("USER"),
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

/**
 * Bumped 0.3 -> 0.4 on 12 September 2026.
 *
 * The rule in AGENTS.md is that this tracks the consent copy verbatim, so a
 * change to src/content/privacy.{de,en}.md must bump it. Two changes forced
 * this one: Founder ruling B-6 removed the PostHog declaration (it named an
 * Art. 28 processor that exists nowhere in the codebase - conflict C-21), and
 * the identity strings moved from Bar-Bonsai to Bonsai.
 *
 * Not cosmetic. Anyone who consented under 0.3 agreed to a notice that named a
 * processor we never used; they are re-asked at next sign-in, and the ledger
 * (consent_events) records which version and which exact wording each person
 * saw. The in-force record is docs/07-legal/CONTENT-CONSENT-v0.4.md.
 *
 * B-5 is still open: the controller contact and §5 DDG details remain
 * placeholders, and gate LEG-1 must block a public release while they do.
 */
export const CONSENT_VERSION = "0.4";
/**
 * The product name lives HERE and in the message catalogues, never inlined.
 *
 * Plan §2.7: `Bonsai` is the Functional Beta public identity, not a ratified
 * trademark; final naming is DEFERRED PENDING VALIDATION. So a rename has to
 * stay cheap, which means exactly one constant and one catalogue entry.
 */
export const SITE_NAME = "Bonsai";
