import Image from 'next/image';
import { CollaboratorWithStatsInterface } from '@/models/interfaces';

export const CollaboratorItem = ({
  collaborator,
}: {
  collaborator: CollaboratorWithStatsInterface;
}) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Image
        src={collaborator.avatar_url}
        alt={collaborator.login}
        className="rounded-lg aspect-square"
        width={32}
        height={32}
      />
      <div>
        <p className="text-lg font-semibold leading-none tracking-tight">
          {collaborator.login}
        </p>
        <span className="text-sm text-muted-foreground">
          {collaborator.role_name}
        </span>
      </div>
    </div>
    <div>
      <p className="text-sm text-muted-foreground text-right">
        {collaborator.totalCommits} commits
      </p>
      <div className="flex items-center gap-2">
        <p className="text-sm text-green-700 text-right">
          {collaborator.totalAdditions}++
        </p>
        <p className="text-sm text-red-700 text-right">
          {collaborator.totalDeletions}--
        </p>
      </div>
    </div>
  </div>
);
