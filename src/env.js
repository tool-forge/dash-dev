import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),

    // Auth validations
    AUTH_SECRET: z
      .string()
      .refine(
        (str) => str.length > 0,
        'AUTH_SECRET must be a non-empty string'
      ),
    AUTH_GITHUB_ID: z
      .string()
      .refine(
        (str) => str.length > 0,
        'AUTH_GITHUB_ID must be a non-empty string'
      ),
    AUTH_GITHUB_SECRET: z
      .string()
      .refine(
        (str) => str.length > 0,
        'AUTH_GITHUB_SECRET must be a non-empty string'
      ),
    AUTH_URL: z.string().url().default('http://localhost:3000'),

    // Additional Postgres validations
    POSTGRES_URL: z
      .string()
      .url()
      .refine(
        (str) => !str.includes('YOUR_POSTGRES_URL_HERE'),
        'You forgot to change the default Postgres URL'
      ),

    POSTGRES_URL_NO_SSL: z
      .string()
      .url()
      .refine(
        (str) => !str.includes('YOUR_POSTGRES_URL_NO_SSL_HERE'),
        'You forgot to change the default URL (no SSL)'
      ),
    POSTGRES_URL_NON_POOLING: z
      .string()
      .url()
      .refine(
        (str) => !str.includes('YOUR_POSTGRES_URL_NON_POOLING_HERE'),
        'You forgot to change the default URL (non-pooling)'
      ),
    POSTGRES_USER: z
      .string()
      .refine(
        (str) => !str.includes('YOUR_POSTGRES_USER_HERE'),
        'You forgot to change the default Postgres user'
      ),
    POSTGRES_HOST: z
      .string()
      .refine(
        (str) => !str.includes('YOUR_POSTGRES_HOST_HERE'),
        'You forgot to change the default Postgres host'
      ),
    POSTGRES_PASSWORD: z
      .string()
      .refine(
        (str) => !str.includes('YOUR_POSTGRES_PASSWORD_HERE'),
        'You forgot to change the default Postgres password'
      ),
    POSTGRES_DATABASE: z
      .string()
      .refine(
        (str) => !str.includes('YOUR_POSTGRES_DATABASE_HERE'),
        'You forgot to change the default Postgres database'
      ),
  },
  client: {},
  runtimeEnv: {
    // Existing vars
    POSTGRES_URL: process.env.POSTGRES_URL,
    NODE_ENV: process.env.NODE_ENV,
    // Auth vars
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID,
    AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,
    AUTH_URL: process.env.AUTH_URL,
    // Additional Postgres vars
    POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL,
    POSTGRES_URL_NO_SSL: process.env.POSTGRES_URL_NO_SSL,
    POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
