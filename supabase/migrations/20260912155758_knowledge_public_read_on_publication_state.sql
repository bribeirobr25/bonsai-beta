--
-- Plan §16 step 3 · Knowledge public reads gate on publication_state.
--
-- The three policies previously read `status = 'published'`. That is equivalent
-- TODAY and a trap tomorrow: adding a content_status value would silently change
-- what is public unless someone remembered to edit three separate policies.
-- publication_state is the only column a public read may reference (plan §7),
-- and it is GENERATED, so the status -> visibility mapping exists in exactly one
-- place that no code path can write to.
--
-- HAND-EDITED, deliberately. drizzle-kit also emitted a DROP + re-ADD of the
-- generated publication_state column on all three tables, with a definition
-- byte-identical to the existing one - it cannot reliably diff generated
-- expressions. Applying that would rewrite three tables for no schema change
-- and bury the one statement that matters. Removed; the drizzle snapshot already
-- describes the column exactly as it exists, so the end state still matches.
--
ALTER POLICY "species_public_read" ON "species"
  TO anon, authenticated
  USING ("species"."publication_state" = 'PUBLIC_APPROVED');--> statement-breakpoint
ALTER POLICY "techniques_public_read" ON "techniques"
  TO anon, authenticated
  USING ("techniques"."publication_state" = 'PUBLIC_APPROVED');--> statement-breakpoint
ALTER POLICY "species_techniques_public_read" ON "species_techniques"
  TO anon, authenticated
  USING ("species_techniques"."publication_state" = 'PUBLIC_APPROVED');
