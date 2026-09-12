CREATE TYPE "public"."data_quality" AS ENUM('OK', 'UNKNOWN');--> statement-breakpoint
CREATE TYPE "public"."moment_category" AS ENUM('acquisition', 'work', 'observation', 'health', 'milestone', 'other');--> statement-breakpoint
CREATE TYPE "public"."moment_kind" AS ENUM('event', 'state');--> statement-breakpoint
CREATE TYPE "public"."publication_state" AS ENUM('PUBLIC_APPROVED', 'INTERNAL_DRAFT_UNVERIFIED', 'UNAVAILABLE');--> statement-breakpoint
CREATE TYPE "public"."session_class" AS ENUM('USER', 'INTERNAL', 'QA');--> statement-breakpoint
CREATE TYPE "public"."subject_kind" AS ENUM('tree', 'composition');--> statement-breakpoint
CREATE TYPE "public"."subject_status" AS ENUM('alive', 'deceased', 'unknown');--> statement-breakpoint
ALTER TYPE "public"."locale" ADD VALUE 'es';--> statement-breakpoint
ALTER TYPE "public"."locale" ADD VALUE 'pt-BR';--> statement-breakpoint
CREATE TABLE "consent_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"document_id" text NOT NULL,
	"document_version" text NOT NULL,
	"locale" "locale" NOT NULL,
	"document_hash" text NOT NULL,
	"terms_ack" boolean NOT NULL,
	"research_consent" boolean NOT NULL,
	"accepted_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "consent_events" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "photos" DROP CONSTRAINT "photos_moment_id_moments_id_fk";
--> statement-breakpoint
ALTER TABLE "photos" ALTER COLUMN "moment_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "stratum" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "stratum" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "events" ADD COLUMN "session_class" "session_class" DEFAULT 'USER' NOT NULL;--> statement-breakpoint
ALTER TABLE "events" ADD COLUMN "data_quality" "data_quality" DEFAULT 'OK' NOT NULL;--> statement-breakpoint
ALTER TABLE "events" ADD COLUMN "pseudonym_version" integer DEFAULT 1 NOT NULL;--> statement-breakpoint
ALTER TABLE "events" ADD COLUMN "source_slug" text;--> statement-breakpoint
ALTER TABLE "events" ADD COLUMN "campaign_slug" text;--> statement-breakpoint
ALTER TABLE "events" ADD COLUMN "message_variant_id" text;--> statement-breakpoint
ALTER TABLE "moments" ADD COLUMN "moment_kind" "moment_kind";--> statement-breakpoint
ALTER TABLE "moments" ADD COLUMN "moment_category" "moment_category";--> statement-breakpoint
ALTER TABLE "moments" ADD COLUMN "ended_on" date;--> statement-breakpoint
ALTER TABLE "moments" ADD COLUMN "ended_precision" date_precision;--> statement-breakpoint
ALTER TABLE "moments" ADD COLUMN "intent" text;--> statement-breakpoint
ALTER TABLE "moments" ADD COLUMN "origin" text;--> statement-breakpoint
--
-- photos.tree_id: add -> backfill -> constrain.
--
-- The generated statement was `ADD COLUMN "tree_id" uuid NOT NULL`, which fails
-- outright on any table that already has rows, because there is no default to
-- fill them with. It would have passed on a fresh local database and failed on
-- Staging and Production. Ownership predicates depend on this column, so it
-- must end up NOT NULL - it just cannot start that way.
--
ALTER TABLE "photos" ADD COLUMN "tree_id" uuid;--> statement-breakpoint
UPDATE "photos" SET "tree_id" = "moments"."tree_id"
  FROM "moments"
  WHERE "moments"."id" = "photos"."moment_id"
    AND "photos"."tree_id" IS NULL;--> statement-breakpoint
-- Fail loudly rather than leave an unowned photo behind. A NULL here after the
-- backfill would mean a photo whose moment is missing, which RLS could not
-- scope to an owner - exactly the row that must never exist.
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM "photos" WHERE "tree_id" IS NULL) THEN
    RAISE EXCEPTION 'M1 backfill incomplete: % photo row(s) have no resolvable tree_id. Resolve before continuing; do not relax this constraint.',
      (SELECT count(*) FROM "photos" WHERE "tree_id" IS NULL);
  END IF;
END $$;--> statement-breakpoint
ALTER TABLE "photos" ALTER COLUMN "tree_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "photos" ADD COLUMN "normalized_key" text;--> statement-breakpoint
ALTER TABLE "photos" ADD COLUMN "derivative_key" text;--> statement-breakpoint
ALTER TABLE "photos" ADD COLUMN "exif_retained" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "researcher_contacts" ADD COLUMN "setup_assistance_minutes" integer;--> statement-breakpoint
ALTER TABLE "researcher_contacts" ADD COLUMN "import_assistance_minutes" integer;--> statement-breakpoint
ALTER TABLE "researcher_contacts" ADD COLUMN "support_minutes" integer;--> statement-breakpoint
ALTER TABLE "researcher_contacts" ADD COLUMN "intervention_count" integer;--> statement-breakpoint
ALTER TABLE "researcher_contacts" ADD COLUMN "data_correction_count" integer;--> statement-breakpoint
ALTER TABLE "researcher_contacts" ADD COLUMN "hidden_manual_minutes" integer;--> statement-breakpoint
ALTER TABLE "species" ADD COLUMN "publication_state" "publication_state" GENERATED ALWAYS AS (case when status = 'published' then 'PUBLIC_APPROVED'::publication_state when status = 'withdrawn' then 'UNAVAILABLE'::publication_state else 'INTERNAL_DRAFT_UNVERIFIED'::publication_state end) STORED;--> statement-breakpoint
ALTER TABLE "species_techniques" ADD COLUMN "publication_state" "publication_state" GENERATED ALWAYS AS (case when status = 'published' then 'PUBLIC_APPROVED'::publication_state when status = 'withdrawn' then 'UNAVAILABLE'::publication_state else 'INTERNAL_DRAFT_UNVERIFIED'::publication_state end) STORED;--> statement-breakpoint
ALTER TABLE "techniques" ADD COLUMN "publication_state" "publication_state" GENERATED ALWAYS AS (case when status = 'published' then 'PUBLIC_APPROVED'::publication_state when status = 'withdrawn' then 'UNAVAILABLE'::publication_state else 'INTERNAL_DRAFT_UNVERIFIED'::publication_state end) STORED;--> statement-breakpoint
ALTER TABLE "trees" ADD COLUMN "status" "subject_status" DEFAULT 'alive' NOT NULL;--> statement-breakpoint
ALTER TABLE "trees" ADD COLUMN "subject_kind" "subject_kind" DEFAULT 'tree' NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "session_class_default" "session_class";--> statement-breakpoint
ALTER TABLE "consent_events" ADD CONSTRAINT "consent_events_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "consent_events_user_accepted_idx" ON "consent_events" USING btree ("user_id","accepted_at");--> statement-breakpoint
ALTER TABLE "photos" ADD CONSTRAINT "photos_tree_id_trees_id_fk" FOREIGN KEY ("tree_id") REFERENCES "public"."trees"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "photos" ADD CONSTRAINT "photos_moment_id_moments_id_fk" FOREIGN KEY ("moment_id") REFERENCES "public"."moments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "photos_tree_idx" ON "photos" USING btree ("tree_id");--> statement-breakpoint
CREATE POLICY "consent_events_select_own" ON "consent_events" AS PERMISSIVE FOR SELECT TO "authenticated" USING ("consent_events"."user_id" = auth.uid());--> statement-breakpoint
CREATE POLICY "consent_events_insert_own" ON "consent_events" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK ("consent_events"."user_id" = auth.uid());--> statement-breakpoint
ALTER POLICY "photos_owner_all" ON "photos" TO authenticated USING (exists (select 1 from trees where trees.id = "photos"."tree_id" and trees.owner_id = auth.uid())) WITH CHECK (exists (select 1 from trees where trees.id = "photos"."tree_id" and trees.owner_id = auth.uid()));