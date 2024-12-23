import Link from 'next/link';
import { ChartNetwork } from 'lucide-react';

import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from './primitives';
import { useSession } from 'next-auth/react';

export const SidebarHeaderLink = () => {
  const { data } = useSession();

  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            className="hover:bg-accent transition-colors duration-200"
            size="lg"
            asChild
          >
            <Link href="/">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <ChartNetwork className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold">DashDev</span>
                {data?.user?.org && (
                  <span className="text-xs">{data.user.org}</span>
                )}
              </div>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
};
