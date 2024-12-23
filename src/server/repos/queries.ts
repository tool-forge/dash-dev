'use server';

import { auth } from '@/auth';
import fetchGit from '@/lib/axios';
import {
  CollaboratorInterface,
  CollaboratorWithStatsInterface,
  RepositoryInterface,
} from '@/models/interfaces';
import { AxiosError } from 'axios';

export const getRepos = async () => {
  const session = await auth();

  if (!session) {
    throw new Error('Unauthorized');
  }

  const org = session.user?.org;

  if (!org) {
    throw new Error('Organization not found');
  }

  try {
    const response = await fetchGit.get(`/orgs/${org}/repos`);
    return response.data as RepositoryInterface[];
  } catch (error) {
    const e = error as AxiosError;
    throw new Error(e.message);
  }
};

export const getRepoByName = async (name: string) => {
  const session = await auth();

  if (!session) {
    throw new Error('Unauthorized');
  }

  const org = session.user?.org;

  if (!org) {
    throw new Error('Organization not found');
  }

  try {
    const response = await fetchGit.get(`/repos/${org}/${name}`);
    return response.data as RepositoryInterface;
  } catch (error) {
    const e = error as AxiosError;
    throw new Error(e.message);
  }
};

const getCommitsStats = async (name: string, author: string) => {
  const session = await auth();

  if (!session) {
    throw new Error('Unauthorized');
  }

  const org = session.user?.org;

  try {
    const commits = await fetchGit.get(`/repos/${org}/${name}/commits`, {
      params: {
        since: new Date(new Date().setFullYear(new Date().getFullYear() - 1))
          .toISOString()
          .split('T')[0],
        until: new Date().toISOString().split('T')[0],
      },
    });

    return (await Promise.all(
      commits.data.map(async ({ url }: { url: string }) => {
        const commitStats = await fetchGit.get(url);
        return commitStats.data.stats;
      })
    )) as {
      total: number;
      additions: number;
      deletions: number;
    }[];
  } catch (error) {
    const e = error as AxiosError;
    throw new Error(e.message);
  }
};

export const getRepoCollaborators = async (name: string) => {
  const session = await auth();

  if (!session) {
    throw new Error('Unauthorized');
  }

  const org = session.user?.org;

  if (!org) {
    throw new Error('Organization not found');
  }

  try {
    const response = await fetchGit.get(`/repos/${org}/${name}/collaborators`);
    const collaborators = (response.data as CollaboratorInterface[]).slice(
      0,
      5
    );

    return (await Promise.all(
      collaborators.map(
        async ({ role_name, login, avatar_url, id, node_id }) => {
          const commits = await getCommitsStats(name, login);
          const totalCommits = commits.length;
          const totalAdditions = commits.reduce(
            (acc, curr) => acc + curr.additions,
            0
          );
          const totalDeletions = commits.reduce(
            (acc, curr) => acc + curr.deletions,
            0
          );

          return {
            role_name: role_name.charAt(0).toUpperCase() + role_name.slice(1),
            login,
            avatar_url,
            id,
            node_id,
            totalCommits,
            totalAdditions,
            totalDeletions,
          };
        }
      )
    )) as CollaboratorWithStatsInterface[];
  } catch (error) {
    const e = error as AxiosError;
    throw new Error(e.message);
  }
};
