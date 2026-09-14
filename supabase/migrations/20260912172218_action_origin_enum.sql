CREATE TYPE "public"."action_origin" AS ENUM('spontaneous', 'guided_workshop', 'reminder_assisted', 'researcher_prompted', 'instructor_requested', 'unknown');--> statement-breakpoint
--
-- moments.origin: text -> action_origin, guarded.
--
-- The generated cast is `USING "origin"::"public"."action_origin"`, which fails
-- on ANY existing value outside the six enum members - and fails with
-- Postgres's generic "invalid input value for enum" rather than with anything
-- that tells an operator which row or which value. No rows carry a value today
-- (M1 added the column and nothing writes it yet), so this is a guard for
-- Staging and Production, where that may not hold.
--
-- Same trap as the photos.tree_id backfill in M1: a cast or constraint that
-- passes on an empty local table and fails on a populated remote one.
--
DO $$
DECLARE
  bad text;
BEGIN
  SELECT string_agg(DISTINCT origin, ', ') INTO bad
    FROM "moments"
    WHERE origin IS NOT NULL
      AND origin NOT IN ('spontaneous','guided_workshop','reminder_assisted',
                         'researcher_prompted','instructor_requested','unknown');
  IF bad IS NOT NULL THEN
    RAISE EXCEPTION
      'M-action_origin: moments.origin holds value(s) outside the W7 §28.5 vocabulary: %. Map them explicitly before migrating; do not widen the enum to accommodate a typo.',
      bad;
  END IF;
END $$;--> statement-breakpoint
ALTER TABLE "moments" ALTER COLUMN "origin" SET DATA TYPE "public"."action_origin" USING "origin"::"public"."action_origin";--> statement-breakpoint
ALTER TABLE "events" ADD COLUMN "origin" "action_origin";