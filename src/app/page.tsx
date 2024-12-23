import { getRepos } from '@/server/repos';

const Home = async () => {
  const repos: any[] = (await getRepos()) || [];

  return <div className="p-12">HomePage</div>;
};

export default Home;
