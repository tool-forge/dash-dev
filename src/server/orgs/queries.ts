'use server';

import { auth } from '@/auth';
import fetchGit from '@/lib/axios';
import { AxiosError } from 'axios';

export const getOrgByName = async () => {
  const session = await auth();

  if (!session) {
    throw new Error('Unauthorized');
  }

  const org = session.user?.org;

  if (!org) {
    throw new Error('Organization not found');
  }

  try {
    const response = await fetchGit.get(`/orgs/${org}`);
    return response.data;
  } catch (error) {
    const e = error as AxiosError;
    throw new Error(e.message);
  }
};
