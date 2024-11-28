import { UserRoleEnum } from '@/models/enums';
import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export const UserRoleEnums = pgEnum('role', [
  UserRoleEnum.OWNER,
  UserRoleEnum.ADMIN,
  UserRoleEnum.MANAGER,
  UserRoleEnum.USER,
]);

export const usersTable = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({ length: 255 }).notNull().unique(),
  org: varchar({ length: 255 }).notNull(),
  role: UserRoleEnums('role').notNull().default(UserRoleEnum.USER),
  active: boolean().notNull().default(true),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
  deletedAt: timestamp(),
});
