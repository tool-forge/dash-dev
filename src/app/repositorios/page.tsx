import { getRepos } from '@/server/repos';
import Image from 'next/image';
import { ReposFilter } from './components';
import { Skeleton } from '@/components';

const RetoritoriosPage = async ({
  searchParams,
}: {
  searchParams: { text?: string; language?: string };
}) => {
  const repos = await getRepos();
  const languages = [
    ...new Set(
      repos
        .map((repo) => repo.language)
        .filter((lang): lang is string => lang !== null && lang !== undefined)
    ),
  ];

  const filteredRepos = repos.filter((repo) => {
    const matchesText =
      !searchParams.text ||
      repo.name.toLowerCase().includes(searchParams.text.toLowerCase());
    const matchesLanguage =
      !searchParams.language || repo.language === searchParams.language;
    return matchesText && matchesLanguage;
  });

  return (
    <main className="flex h-full flex-col gap-6 py-4 px-16 lg:px-32">
      <ReposFilter
        languages={
          languages.map((language) => ({ label: language, value: language })) ||
          []
        }
      />
      <div className="flex bg-background p-4 rounded-lg h-full flex-col gap-4 lg:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {filteredRepos
          ? filteredRepos.map((repo) => (
              <a
                href={`/repositorios/${repo.name}`}
                className="w-full h-fit flex items-center gap-4 p-4 bg-background rounded-lg border border-border hover:bg-accent transition-all duration-200"
              >
                <Image
                  src={repo.owner.avatar_url}
                  alt={`${repo.owner.login}-${repo.name}-img`}
                  className="rounded-lg aspect-square"
                  width={64}
                  height={64}
                />
                <div className="flex flex-col space-y-1.5">
                  <p className="text-2xl font-semibold leading-none tracking-tight">
                    {repo.name}
                  </p>
                  <span className="text-sm text-muted-foreground">
                    {repo.language}
                  </span>
                </div>
              </a>
            ))
          : null}
      </div>
    </main>
  );
};

export default RetoritoriosPage;
