interface RepositoryPermissionsInterface {
  admin: boolean;
  maintain: boolean;
  push: boolean;
  triage: boolean;
  pull: boolean;
}

export interface CollaboratorInterface {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: 'User' | 'Organization';
  user_view_type: 'public' | 'private';
  site_admin: boolean;
  permissions: RepositoryPermissionsInterface;
  role_name: 'admin' | 'maintain' | 'write' | 'triage' | 'read';
}

export interface CollaboratorWithStatsInterface {
  role_name: string;
  login: string;
  avatar_url: string;
  id: number;
  node_id: string;
  totalCommits: number;
  totalAdditions: number;
  totalDeletions: number;
}
