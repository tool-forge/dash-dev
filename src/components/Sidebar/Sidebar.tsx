'use client';

import { Bot, ChevronRight, SquareTerminal } from 'lucide-react';
import { BookOpen, Settings2 } from 'lucide-react';
import {
  Sb,
  SidebarContent,
  SidebarFooterMenu,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeaderLink,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from './components';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../Collapsible';
import { navItems } from './utils/navItems';
import Link from 'next/link';

export const Sidebar = () => {
  return (
    <Sb collapsible="icon">
      <SidebarHeaderLink />
      <SidebarContent>
        {navItems.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarMenu>
              {group.items.map((item) =>
                item.items ? (
                  <Collapsible
                    key={item.title}
                    asChild
                    defaultOpen={item.isActive}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={item.title}>
                          {item.icon && <item.icon />}
                          <span className="hover:text-primary transition-colors duration-200">
                            {item.title}
                          </span>
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <a href={subItem.url}>
                                  <span className="hover:text-primary transition-colors duration-200">
                                    {subItem.title}
                                  </span>
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton tooltip={item.title} asChild>
                      <Link href={item.url}>
                        {item.icon && <item.icon />}
                        <span className="hover:text-primary transition-colors duration-200">
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooterMenu />
    </Sb>
  );
};
