'use server';

import { eq } from 'drizzle-orm';

import { auth } from '@/auth';
import { db } from '@/db';
import { usersTable } from '@/db/schemas';
import { UserInterface } from '@/models/interfaces';

export const getUserByEmail = async (
  email: string
): Promise<UserInterface | undefined> => {
  const user = await db.query.usersTable.findFirst({
    where: eq(usersTable.email, email),
  });

  return user;
};
