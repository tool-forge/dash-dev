interface RepoInfoItemProps {
  label: string;
  value?: string | null;
}

export const RepoInfoItem = ({ label, value }: RepoInfoItemProps) =>
  value ? (
    <div className="flex items-center justify-between gap-2">
      <p className="text-sm font-medium leading-none">{label}</p>
      <span className="text-sm text-muted-foreground">{value}</span>
    </div>
  ) : null;
