'use server';

import { auth } from '@/auth';
import fetchGit from '@/lib/axios';
import { AxiosError } from 'axios';

export const getRepos = async () => {
  const session = await auth();

  if (!session) {
    throw new Error('Unauthorized');
  }

  try {
    const response = await fetchGit.get(`/user/repos`);
    return response.data;
  } catch (error) {
    const e = error as AxiosError;
    console.error(e);
  }
};
