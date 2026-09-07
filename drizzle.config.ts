import { defineConfig } from "drizzle-kit";

// Migrations are written into supabase/migrations so that the Supabase CLI
// (`supabase db reset` locally, `supabase db push` for the linked project)
// remains the single applier. drizzle-kit only generates SQL here.
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./supabase/migrations",
  migrations: { prefix: "supabase" },
  dbCredentials: {
    url:
      process.env.DATABASE_URL ??
      "postgresql://postgres:postgres@127.0.0.1:54322/postgres",
  },
  strict: true,
  verbose: true,
});
