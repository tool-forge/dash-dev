import Image from 'next/image';
import { CloneButton } from './CloneButton';
import { RepositoryInterface } from '@/models/interfaces';
import { Separator } from '@/components';
import { RepoInfoItem } from './RepoInfoItem';

interface RepoInfoCardProps {
  repo: RepositoryInterface;
}

export const RepoInfoCard = ({ repo }: RepoInfoCardProps) => {
  return (
    <div className="w-full h-fit flex flex-col items-center gap-4 p-4 bg-background rounded-lg border border-border">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center w-full gap-2">
          <Image
            src={repo.owner.avatar_url}
            alt={repo.owner.login}
            className="rounded-lg aspect-square"
            width={32}
            height={32}
          />
          <div className="flex flex-1 flex-col items-start">
            <p className="text-2xl font-semibold leading-none tracking-tight">
              {repo.name}
            </p>
            <span className="text-sm text-muted-foreground">
              {repo.owner.login}
            </span>
          </div>
          <CloneButton url={repo.clone_url} />
        </div>
        <span className="text-sm text-muted-foreground text-justify">
          {repo.description}
        </span>
      </div>
      <Separator orientation="horizontal" className="w-full" />
      <div className="w-full flex flex-col gap-4">
        <RepoInfoItem label="Linguagem" value={repo.language} />
        <RepoInfoItem
          label="Data de criação"
          value={new Date(repo.created_at).toLocaleString('pt-BR')}
        />
        <RepoInfoItem
          label="Data de atualização"
          value={new Date(repo.updated_at).toLocaleString('pt-BR')}
        />
        <RepoInfoItem label="Privado" value={repo.private ? 'Sim' : 'Não'} />
      </div>
    </div>
  );
};
