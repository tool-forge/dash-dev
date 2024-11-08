'use client';

import * as React from 'react';
import Link from 'next/link';

import {
  ListItem,
  NavigationMenu as NM,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components';
import { ChartNetwork } from 'lucide-react';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Heatmap',
    href: '/relatorios/heatmap',
    description:
      'Um heatmap mostrando os devs que realmente estão trabalhando.',
  },
  {
    title: 'PR Cycle Time',
    href: '/relatorios/pr-cycle-time',
    description: 'Pra mostrar que PRs não se entregam de um dia para o outro',
  },
  {
    title: 'Colaboração',
    href: '/relatorios/colaboracao',
    description: 'Quem realmente ajuda nessa merda',
  },
  {
    title: 'DORA metrics',
    href: '/relatorios/dora-metrics',
    description:
      'Indicadores para garantir que o o salário gigantesco que você paga pro seus devs está virando código de produção',
  },
  {
    title: 'Produtividade',
    href: '/relatorios/produtividade',
    description:
      'Métricas pra provar pro seu chefe que não dá pra entregar o estilo do botão novo em dois meses',
  },
  {
    title: 'Investimento de engenharia',
    href: '/relatorios/investimento-engenharia',
    description: 'Pra saber se você está trabalhando onde era pra trabalhar',
  },
];

export const NavigationMenu = () => {
  return (
    <NM>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Seu gerenciamento</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <ChartNetwork className="size-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">DashDev</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Uma solução elegante para saber quem não está trabalhando!
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="Dashboard">
                Resumo dos seus devs lerdos
              </ListItem>
              <ListItem href="/squads" title="Squads">
                Genrenciar seus squads
              </ListItem>
              <ListItem href="/developers" title="Developers">
                Gerenciar seus desenvolvedores
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href="/relatorios">Relatórios</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NM>
  );
};
