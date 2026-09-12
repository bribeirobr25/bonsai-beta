/**
 * Rate-limit tiers · plan §24.2.
 *
 * Split out of rate-limit.ts, which carries `import "server-only"` and
 * therefore cannot be loaded by a test runner at all. These are plain data and
 * the numbers are the thing worth asserting, so they live where both the server
 * module and the tests can read them - rather than being duplicated into a test
 * fixture that could drift from production without anything failing.
 *
 * Each tier is a deliberate pair, not a round number.
 *
 * `authEmail` is the strictest because the cost lands on a THIRD PARTY: the
 * person whose address was typed in. Three links in fifteen minutes is more
 * than anyone needs and few enough to make inbox-bombing pointless.
 *
 * `authIp` is the companion limit, because per-email alone lets an attacker
 * walk an address list with every individual email under its own limit. It is
 * deliberately looser so a shared office or CGNAT address is not locked out by
 * ordinary use.
 */
export const TIERS = {
  authEmail: { limit: 3, windowSeconds: 15 * 60 },
  authIp: { limit: 12, windowSeconds: 60 * 60 },
  consent: { limit: 10, windowSeconds: 60 * 60 },
  export: { limit: 3, windowSeconds: 60 * 60 },
} as const;

export type Tier = keyof typeof TIERS;
