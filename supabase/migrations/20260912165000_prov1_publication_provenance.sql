--
-- Gate PROV-1 · plan §24.5 item 2 · Founder ruling OI-49 (APPROVED)
--
-- "A published Knowledge field without provenance is a BUG, not a cosmetic gap"
-- and "reviewed_at must never be refreshed without an actual review event."
--
-- Until now both rules lived in prose. The gate row existed in the registry and
-- enforced nothing, which is worse than having no row: the registry claimed
-- coverage the database did not provide.
--
-- Two constraints, and they address different failures.
--
-- 1. NEVER POST-DATE. `reviewed_at` in the future means somebody typed a date
--    forward - one UPDATE away during a bulk edit - and the record would then
--    LOOK freshly reviewed to every reader and every freshness query. This is
--    the highest-consequence failure available in this product: it silently
--    converts unreviewed AI-generated horticultural advice into
--    apparently-current reviewed guidance. A CHECK cannot reference now(),
--    because a check must be immutable, so it is enforced by trigger.
--
-- 2. PUBLISHED IMPLIES PROVENANCE. A row may only reach status 'published'
--    while it has a reviewer, a review timestamp, and at least one
--    field_sources row. Enforced at write time rather than trusted to the
--    admin UI, because publication is exactly the act that must not be
--    possible by accident.
--
-- Applied only to the tables that HAVE review columns: species and
-- species_techniques. `techniques` has no reviewed_at/reviewed_by, so there is
-- nothing to enforce there yet - stated rather than silently skipped.
--

create or replace function public.prov1_publication_guard()
returns trigger
language plpgsql
as $$
declare
  source_count int;
begin
  -- Rule 1: applies on every write, published or not. A future review date is
  -- never legitimate, even on an internal draft.
  if new.reviewed_at is not null and new.reviewed_at > now() then
    raise exception
      'PROV-1: reviewed_at may not be in the future (got %, now is %). Freshness is never simulated by re-stamping; re-review the record instead.',
      new.reviewed_at, now()
      using errcode = 'check_violation';
  end if;

  -- Rule 2: only constrains the transition into a published state.
  if new.status = 'published' then
    if new.reviewed_by is null or new.reviewed_at is null then
      raise exception
        'PROV-1: cannot publish % without a reviewer and a review timestamp (reviewed_by=%, reviewed_at=%).',
        tg_table_name, new.reviewed_by, new.reviewed_at
        using errcode = 'check_violation';
    end if;
    select count(*) into source_count
      from public.field_sources fs
      where fs.record_id = new.id::text;
    if source_count = 0 then
      raise exception
        'PROV-1: cannot publish %  (id=%) with no field_sources rows. A published field without provenance is a bug, not a cosmetic gap.',
        tg_table_name, new.id
        using errcode = 'check_violation';
    end if;
  end if;

  return new;
end;
$$;--> statement-breakpoint

create trigger prov1_species
  before insert or update on public.species
  for each row execute function public.prov1_publication_guard();--> statement-breakpoint

create trigger prov1_species_techniques
  before insert or update on public.species_techniques
  for each row execute function public.prov1_publication_guard();
