'use client';

import React from 'react';

import { usePathname } from 'next/navigation';
import { ThemeButton } from './components';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Separator,
  SidebarTrigger,
} from '@/components';
import { cn } from '@/lib/utils';
import { routeNames } from '@/lib/routeNames';

export const Header = () => {
  const pathname = usePathname();

  const routesList = pathname
    .split('/')
    .slice(1)
    .map((route) => routeNames[route as keyof typeof routeNames]);

  return (
    <header className="flex bg-background h-16 shrink-0 items-center border-b gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {routesList.map((route, i) => {
              const isLast = i === routesList.length - 1;

              return !route ? (
                <BreadcrumbItem key={route}>
                  <BreadcrumbPage>Home</BreadcrumbPage>
                </BreadcrumbItem>
              ) : (
                <React.Fragment key={route}>
                  <BreadcrumbItem key={route}>
                    <BreadcrumbPage
                      className={cn(!isLast && 'hidden md:block text-inherit')}
                    >
                      {route}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                  {!isLast && (
                    <BreadcrumbSeparator className="hidden md:block" />
                  )}
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex mr-2 justify-end flex-1">
        <ThemeButton />
      </div>
    </header>
  );
};
