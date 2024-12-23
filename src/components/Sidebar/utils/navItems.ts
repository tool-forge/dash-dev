import {
  ClipboardPlus,
  Code,
  Home,
  LucideIcon,
  User,
  Users,
} from 'lucide-react';
import { routeNames } from '@/lib/routeNames';

export interface NavSubItem {
  title: string;
  url: string;
}

export interface NavItem extends NavSubItem {
  icon: LucideIcon;
  isActive?: boolean;
  items?: NavSubItem[];
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const navItems: NavGroup[] = [
  {
    label: 'Platforma',
    items: [
      {
        title: routeNames.home,
        url: '/',
        icon: Home,
      },
      {
        title: routeNames.relatorios,
        url: '/relatorios',
        icon: ClipboardPlus,
        isActive: true,
        items: [
          {
            title: routeNames.produtividade,
            url: '/relatorios/produtividade',
          },
          {
            title: routeNames['pr-cycle-time'],
            url: '/relatorios/pr-cycle-time',
          },
          {
            title: routeNames.heatmap,
            url: '/relatorios/heatmap',
          },
          {
            title: routeNames['dora-metrics'],
            url: '/relatorios/dora-metrics',
          },
          {
            title: routeNames.colaboracao,
            url: '/relatorios/colaboracao',
          },
          {
            title: routeNames['investimento-engenharia'],
            url: '/relatorios/investimento-engenharia',
          },
        ],
      },
      {
        title: routeNames.squads,
        url: '/squads',
        icon: Users,
      },
      {
        title: routeNames.developers,
        url: '/developers',
        icon: User,
      },
      {
        title: routeNames.repositorios,
        url: '/repositorios',
        icon: Code,
      },
    ],
  },
];
