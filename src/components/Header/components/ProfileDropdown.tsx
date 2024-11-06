import Image from 'next/image';
import { LogOut } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components';
import { signOutAction } from '@/server/signOut';

interface ProfileDropdownProps {
  img: string;
  name: string;
}

export const ProfileDropdown = async ({ img, name }: ProfileDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          src={img}
          alt={`${name} avatar`}
          className="rounded-full cursor-pointer"
          width={42}
          height={42}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem onClick={signOutAction} className="cursor-pointer">
          <LogOut />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
