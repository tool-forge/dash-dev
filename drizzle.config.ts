import { defineConfig } from 'drizzle-kit';

import { env } from '@/env';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schemas/index.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.POSTGRES_URL,
  },
});
