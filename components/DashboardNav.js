import Link from 'next/link';

import { useAuth } from '@/lib/auth';

const DashboardNav = () => {
  const auth = useAuth();

  return (
    <nav className="relative bg-black text-white font-mono px-2 py-4 border-t-4 border-green-400">
      <div className="flex justify-between md:justify-between max-w-screen-lg mx-auto">
        <ul className="hidden md:flex mt-2">
          <li className="mx-2">
            <Link href="/workouts">
              <a>Workouts</a>
            </Link>
          </li>
          <li className="mx-2">
            <Link href="/programs">
              <a>Programs</a>
            </Link>
          </li>
        </ul>
        <ul className="hidden md:flex items-center">
          <li className="mx-2">
            <Link href="/account">
              <a>Account</a>
            </Link>
          </li>
          <li className="mx-2">
            <img className="h-10 w-10 rounded-full" src={auth.user.photoUrl} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DashboardNav;
