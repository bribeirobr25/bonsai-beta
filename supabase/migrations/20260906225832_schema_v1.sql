CREATE TYPE "public"."alias_kind" AS ENUM('synonym', 'common_de', 'common_en', 'cultivar');--> statement-breakpoint
CREATE TYPE "public"."cohort" AS ENUM('L2_fragmented', 'L2_coherent', 'workshop', 'explore', 'share_recipient', 'direct');--> statement-breakpoint
CREATE TYPE "public"."contact_kind" AS ENUM('message', 'call', 'day0', 'day8', 'other');--> statement-breakpoint
CREATE TYPE "public"."content_status" AS ENUM('legacy_raw', 'ai_draft', 'normalized', 'review_required', 'practitioner_reviewed', 'published', 'withdrawn');--> statement-breakpoint
CREATE TYPE "public"."created_via" AS ENUM('workshop', 'explore', 'direct', 'share');--> statement-breakpoint
CREATE TYPE "public"."date_precision" AS ENUM('exact', 'month', 'year', 'unknown');--> statement-breakpoint
CREATE TYPE "public"."locale" AS ENUM('de', 'en');--> statement-breakpoint
CREATE TYPE "public"."moment_source" AS ENUM('import', 'manual');--> statement-breakpoint
CREATE TYPE "public"."moment_type" AS ENUM('acquired', 'photo', 'repotted', 'pruned', 'wired', 'styled', 'health', 'other');--> statement-breakpoint
CREATE TYPE "public"."prompted" AS ENUM('none', 'researcher');--> statement-breakpoint
CREATE TYPE "public"."record_type" AS ENUM('species', 'technique', 'species_technique', 'tree');--> statement-breakpoint
CREATE TYPE "public"."research_status" AS ENUM('queued', 'resolving', 'ambiguous', 'researching', 'drafted', 'failed');--> statement-breakpoint
CREATE TYPE "public"."research_trigger" AS ENUM('lookup_miss', 'founder', 'backfill');--> statement-breakpoint
CREATE TYPE "public"."species_confidence" AS ENUM('unknown', 'probable', 'confirmed');--> statement-breakpoint
CREATE TYPE "public"."stratum" AS ENUM('fragmented', 'coherent', 'na');--> statement-breakpoint
CREATE TYPE "public"."taken_at_source" AS ENUM('exif', 'file', 'user', 'unknown');--> statement-breakpoint
CREATE TABLE "content_versions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"record_type" "record_type" NOT NULL,
	"record_id" text NOT NULL,
	"version" integer NOT NULL,
	"diff" jsonb,
	"actor" text NOT NULL,
	"at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "content_versions" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid,
	"pseudonym" text,
	"anon_id" text,
	"name" text NOT NULL,
	"props" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"cohort" "cohort",
	"source" text,
	"locale" "locale",
	"session_id" text,
	"prompted" "prompted" DEFAULT 'none' NOT NULL,
	"occurred_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "events" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "field_sources" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"record_type" "record_type" NOT NULL,
	"record_id" text NOT NULL,
	"field" text NOT NULL,
	"value" jsonb,
	"source_url" text,
	"quote" text,
	"confidence" text,
	"run_id" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "field_sources" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "keepalive" (
	"id" integer PRIMARY KEY NOT NULL,
	"last_ping" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "keepalive" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "moments" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tree_id" uuid NOT NULL,
	"type" "moment_type" NOT NULL,
	"occurred_on" date NOT NULL,
	"occurred_precision" date_precision DEFAULT 'exact' NOT NULL,
	"note_raw" text,
	"note_structured" jsonb,
	"source" "moment_source" DEFAULT 'manual' NOT NULL,
	"ai_suggested" boolean DEFAULT false NOT NULL,
	"ai_edited" boolean DEFAULT false NOT NULL,
	"superseded_by" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "moments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "photos" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"moment_id" uuid NOT NULL,
	"storage_key" text NOT NULL,
	"taken_at" timestamp with time zone,
	"taken_at_source" "taken_at_source" DEFAULT 'unknown' NOT NULL,
	"width" integer,
	"height" integer,
	"bytes" integer,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "photos" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "researcher_contacts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"kind" "contact_kind" NOT NULL,
	"at" timestamp with time zone DEFAULT now() NOT NULL,
	"note" text
);
--> statement-breakpoint
ALTER TABLE "researcher_contacts" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "share_links" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tree_id" uuid NOT NULL,
	"token" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"revoked_at" timestamp with time zone
);
--> statement-breakpoint
ALTER TABLE "share_links" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "species" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"legacy_id" text,
	"gbif_key" integer,
	"accepted_name" text NOT NULL,
	"family" text,
	"names_by_locale" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"climate" text[] DEFAULT '{}' NOT NULL,
	"position" text,
	"sun" text,
	"leaf_type" text,
	"flowering" text,
	"native_region" text,
	"temperature_min_c" integer,
	"temperature_max_c" integer,
	"description_by_locale" jsonb,
	"status" "content_status" DEFAULT 'legacy_raw' NOT NULL,
	"reviewed_by" uuid,
	"reviewed_at" timestamp with time zone,
	"version" integer DEFAULT 1 NOT NULL,
	"confidence" text,
	"publication_eligible" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "species" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "species_aliases" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"species_id" uuid NOT NULL,
	"name" text NOT NULL,
	"kind" "alias_kind" NOT NULL,
	"source" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "species_aliases" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "species_research_jobs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"requested_name" text NOT NULL,
	"species_id" uuid,
	"trigger" "research_trigger" NOT NULL,
	"status" "research_status" DEFAULT 'queued' NOT NULL,
	"cost_usd" numeric(10, 4),
	"model" text,
	"requested_by" uuid,
	"log" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"finished_at" timestamp with time zone
);
--> statement-breakpoint
ALTER TABLE "species_research_jobs" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "species_techniques" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"species_id" uuid NOT NULL,
	"technique_key" text NOT NULL,
	"locale" "locale" DEFAULT 'en' NOT NULL,
	"description" text,
	"timing_raw" text,
	"timing_trigger" text,
	"maturity_raw" text,
	"maturity" text,
	"contraindication" jsonb,
	"status" "content_status" DEFAULT 'legacy_raw' NOT NULL,
	"reviewed_by" uuid,
	"reviewed_at" timestamp with time zone,
	"version" integer DEFAULT 1 NOT NULL,
	"confidence" text,
	"publication_eligible" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "species_techniques" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "techniques" (
	"key" text PRIMARY KEY NOT NULL,
	"names_by_locale" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"description_by_locale" jsonb,
	"status" "content_status" DEFAULT 'legacy_raw' NOT NULL,
	"version" integer DEFAULT 1 NOT NULL,
	"publication_eligible" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "techniques" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "trees" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"owner_id" uuid NOT NULL,
	"name" text,
	"species_id" uuid,
	"species_text_raw" text,
	"species_confidence" "species_confidence" DEFAULT 'unknown' NOT NULL,
	"acquired_on" date,
	"acquired_precision" date_precision DEFAULT 'unknown' NOT NULL,
	"acquisition_context" text,
	"cover_photo_id" uuid,
	"created_via" "created_via" DEFAULT 'direct' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "trees" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"locale" "locale" DEFAULT 'de' NOT NULL,
	"consent_version" text NOT NULL,
	"consent_at" timestamp with time zone NOT NULL,
	"terms_ack" boolean NOT NULL,
	"research_consent" boolean DEFAULT false NOT NULL,
	"research_consent_withdrawn_at" timestamp with time zone,
	"cohort" "cohort" DEFAULT 'direct' NOT NULL,
	"source" text,
	"stratum" "stratum" DEFAULT 'na' NOT NULL,
	"is_admin" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "moments" ADD CONSTRAINT "moments_tree_id_trees_id_fk" FOREIGN KEY ("tree_id") REFERENCES "public"."trees"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "moments" ADD CONSTRAINT "moments_superseded_by_moments_id_fk" FOREIGN KEY ("superseded_by") REFERENCES "public"."moments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "photos" ADD CONSTRAINT "photos_moment_id_moments_id_fk" FOREIGN KEY ("moment_id") REFERENCES "public"."moments"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "researcher_contacts" ADD CONSTRAINT "researcher_contacts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "share_links" ADD CONSTRAINT "share_links_tree_id_trees_id_fk" FOREIGN KEY ("tree_id") REFERENCES "public"."trees"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "species_aliases" ADD CONSTRAINT "species_aliases_species_id_species_id_fk" FOREIGN KEY ("species_id") REFERENCES "public"."species"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "species_research_jobs" ADD CONSTRAINT "species_research_jobs_species_id_species_id_fk" FOREIGN KEY ("species_id") REFERENCES "public"."species"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "species_techniques" ADD CONSTRAINT "species_techniques_species_id_species_id_fk" FOREIGN KEY ("species_id") REFERENCES "public"."species"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "species_techniques" ADD CONSTRAINT "species_techniques_technique_key_techniques_key_fk" FOREIGN KEY ("technique_key") REFERENCES "public"."techniques"("key") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "trees" ADD CONSTRAINT "trees_owner_id_users_id_fk" FOREIGN KEY ("owner_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "trees" ADD CONSTRAINT "trees_species_id_species_id_fk" FOREIGN KEY ("species_id") REFERENCES "public"."species"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "trees" ADD CONSTRAINT "trees_cover_photo_id_photos_id_fk" FOREIGN KEY ("cover_photo_id") REFERENCES "public"."photos"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_id_users_id_fk" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "content_versions_record_idx" ON "content_versions" USING btree ("record_type","record_id");--> statement-breakpoint
CREATE INDEX "events_name_occurred_idx" ON "events" USING btree ("name","occurred_at");--> statement-breakpoint
CREATE INDEX "events_pseudonym_idx" ON "events" USING btree ("pseudonym");--> statement-breakpoint
CREATE INDEX "field_sources_record_idx" ON "field_sources" USING btree ("record_type","record_id");--> statement-breakpoint
CREATE INDEX "moments_tree_occurred_idx" ON "moments" USING btree ("tree_id","occurred_on");--> statement-breakpoint
CREATE INDEX "photos_moment_idx" ON "photos" USING btree ("moment_id");--> statement-breakpoint
CREATE INDEX "researcher_contacts_user_at_idx" ON "researcher_contacts" USING btree ("user_id","at");--> statement-breakpoint
CREATE UNIQUE INDEX "share_links_token_key" ON "share_links" USING btree ("token");--> statement-breakpoint
CREATE UNIQUE INDEX "species_slug_key" ON "species" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "species_accepted_name_idx" ON "species" USING btree ("accepted_name");--> statement-breakpoint
CREATE UNIQUE INDEX "species_aliases_unique" ON "species_aliases" USING btree ("species_id","name","kind");--> statement-breakpoint
CREATE INDEX "species_aliases_name_idx" ON "species_aliases" USING btree ("name");--> statement-breakpoint
CREATE INDEX "species_research_jobs_status_idx" ON "species_research_jobs" USING btree ("status","created_at");--> statement-breakpoint
CREATE UNIQUE INDEX "species_techniques_unique" ON "species_techniques" USING btree ("species_id","technique_key","locale");--> statement-breakpoint
CREATE INDEX "trees_owner_idx" ON "trees" USING btree ("owner_id");--> statement-breakpoint
CREATE POLICY "moments_owner_all" ON "moments" AS PERMISSIVE FOR ALL TO "authenticated" USING (exists (select 1 from trees where trees.id = "moments"."tree_id" and trees.owner_id = auth.uid())) WITH CHECK (exists (select 1 from trees where trees.id = "moments"."tree_id" and trees.owner_id = auth.uid()));--> statement-breakpoint
CREATE POLICY "photos_owner_all" ON "photos" AS PERMISSIVE FOR ALL TO "authenticated" USING (exists (select 1 from moments join trees on trees.id = moments.tree_id where moments.id = "photos"."moment_id" and trees.owner_id = auth.uid())) WITH CHECK (exists (select 1 from moments join trees on trees.id = moments.tree_id where moments.id = "photos"."moment_id" and trees.owner_id = auth.uid()));--> statement-breakpoint
CREATE POLICY "share_links_owner_all" ON "share_links" AS PERMISSIVE FOR ALL TO "authenticated" USING (exists (select 1 from trees where trees.id = "share_links"."tree_id" and trees.owner_id = auth.uid())) WITH CHECK (exists (select 1 from trees where trees.id = "share_links"."tree_id" and trees.owner_id = auth.uid()));--> statement-breakpoint
CREATE POLICY "species_public_read" ON "species" AS PERMISSIVE FOR SELECT TO "anon", "authenticated" USING ("species"."status" = 'published');--> statement-breakpoint
CREATE POLICY "species_techniques_public_read" ON "species_techniques" AS PERMISSIVE FOR SELECT TO "anon", "authenticated" USING ("species_techniques"."status" = 'published');--> statement-breakpoint
CREATE POLICY "techniques_public_read" ON "techniques" AS PERMISSIVE FOR SELECT TO "anon", "authenticated" USING ("techniques"."status" = 'published');--> statement-breakpoint
CREATE POLICY "trees_owner_all" ON "trees" AS PERMISSIVE FOR ALL TO "authenticated" USING ("trees"."owner_id" = auth.uid()) WITH CHECK ("trees"."owner_id" = auth.uid());--> statement-breakpoint
CREATE POLICY "users_select_own" ON "users" AS PERMISSIVE FOR SELECT TO "authenticated" USING ("users"."id" = auth.uid());--> statement-breakpoint
CREATE POLICY "users_update_own" ON "users" AS PERMISSIVE FOR UPDATE TO "authenticated" USING ("users"."id" = auth.uid()) WITH CHECK ("users"."id" = auth.uid());