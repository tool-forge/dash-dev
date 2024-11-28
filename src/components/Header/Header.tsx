import Link from 'next/link';
import { ChartNetwork } from 'lucide-react';

import { auth } from '@/auth';
import { NavigationMenu, ProfileDropdown, ThemeButton } from './components';
import { Separator } from '@/components';

const Header = async () => {
  const session = await auth();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-background h-16 p-4 px-6">
      <div className="flex items-center gap-4 h-full">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold transition-colors duration-200 hover:text-primary"
        >
          <ChartNetwork />
          DashDev
        </Link>
        {session?.user?.role ? (
          <>
            <Separator orientation="vertical" />
            <NavigationMenu />
          </>
        ) : null}
      </div>

      <div className="flex items-center gap-4">
        <ThemeButton />
        {session?.user ? (
          <ProfileDropdown img={session.user.image} name={session.user.name} />
        ) : null}
      </div>
    </header>
  );
};

export default Header;
