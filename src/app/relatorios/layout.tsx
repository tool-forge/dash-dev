'use client';

import { ChartNetwork } from 'lucide-react';
import { usePathname } from 'next/navigation';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components';

const RelatoriosLayout = ({ children }: { children: React.ReactNode }) => {
  const routesList = usePathname().split('/').slice(1);

  const handleRouteName = (route: string) => {
    return route
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <main className="p-12 flex flex-col gap-12 max-w-screen h-[calc(100vh-4rem)] max-h-[calc(100vh-4rem)]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <ChartNetwork />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            {routesList.length === 1 ? (
              <BreadcrumbPage>Relatórios</BreadcrumbPage>
            ) : (
              <BreadcrumbLink href="/relatorios">Relatórios</BreadcrumbLink>
            )}
          </BreadcrumbItem>
          {routesList.length > 1 ? (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  {handleRouteName(routesList[1])}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </>
          ) : null}
        </BreadcrumbList>
      </Breadcrumb>
      {children}
    </main>
  );
};

export default RelatoriosLayout;
