import { getRepoByName, getRepoCollaborators } from '@/server/repos';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components';
import { CollaboratorItem, RepoInfoCard } from './components';

const RepoPage = async ({ params }: { params: { repo: string } }) => {
  const repo = await getRepoByName(params.repo);
  const collaborators = await getRepoCollaborators(params.repo);
  const sortedCollaborators = collaborators.sort(
    (a, b) => b.totalCommits - a.totalCommits
  );

  return repo ? (
    <main className="grid grid-cols-[450px_1fr]  p-4">
      <div className="flex flex-col gap-4">
        <RepoInfoCard repo={repo} />
        {collaborators ? (
          <Card>
            <CardHeader>
              <CardTitle>Top Colaboradores</CardTitle>
              <CardDescription>
                Dados coletados a partir dos últimos 12 meses
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {sortedCollaborators.map((collaborator) => (
                <CollaboratorItem collaborator={collaborator} />
              ))}
            </CardContent>
          </Card>
        ) : null}
      </div>
    </main>
  ) : null;
};

export default RepoPage;
