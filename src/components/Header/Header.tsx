import Link from 'next/link';

import { auth } from '@/auth';
import { ProfileDropdown, ThemeButton } from './components';

const Header = async () => {
  const session = await auth();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-background p-6">
      <Link href="/">DashDev</Link>

      <div className="flex items-center gap-4">
        <ThemeButton />
        {session?.user?.image && session?.user?.name ? (
          <ProfileDropdown img={session.user.image} name={session.user.name} />
        ) : null}
      </div>
    </header>
  );
};

export default Header;
