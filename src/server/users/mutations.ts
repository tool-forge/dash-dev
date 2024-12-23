'use server';

import { CreateUserInterface } from '@/models/interfaces';
import { db } from '@/db';
import { auth } from '@/auth';
import { usersTable } from '@/db/schemas';

export const createUser = async (createUserInput: CreateUserInterface) => {
  const session = await auth();

  if (!session) {
    throw new Error('Unauthorized');
  }

  const user = await db.insert(usersTable).values(createUserInput).returning();

  return user;
};
