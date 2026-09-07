/** Pure rules shared by the event writer and its tests (no server imports). */
export const PROMPT_WINDOW_HOURS = 72;

/** `prompted = researcher` when any researcher contact falls within the 72 h window. */
export function isPrompted(
  contactTimes: Array<Date | string>,
  now: Date = new Date(),
): boolean {
  const windowMs = PROMPT_WINDOW_HOURS * 3_600_000;
  return contactTimes.some((t) => {
    const at = new Date(t).getTime();
    return at <= now.getTime() && now.getTime() - at <= windowMs;
  });
}
