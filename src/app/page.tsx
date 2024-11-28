import { getRepos } from '@/server/repos';

const Home = async () => {
  const repos: any[] = (await getRepos()) || [];

  return (
    <main className="w-screen h-[calc(100vh-4rem)] p-12">
      {repos.map(({ name, disabled, archived }: any, i) => (
        <p key={`${name}-${i}`}>{name}</p>
      ))}
      {JSON.stringify(repos[0])}
    </main>
  );
};

export default Home;
