import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black text-white font-mono py-4 border-t-4 border-green-400">
      <div className="flex justify-between max-w-screen-lg mx-auto">
        <ul className="flex mt-2">
          <li className="mx-2">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="mx-2">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="mx-2">
            <Link href="/membership">
              <a>Membership</a>
            </Link>
          </li>
        </ul>
        <div className="mt-1 text-xl">React-Fit</div>
        <ul className="flex items-center">
          <li className="mx-2">Log In</li>
          <li className="mx-2 bg-green-400 px-8 py-2 text-black">
            <Link href="/membership">
              <a>Subscribe</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
