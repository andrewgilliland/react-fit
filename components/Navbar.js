import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black text-white font-mono px-2 py-4 border-t-4 border-green-400">
      <div className="flex justify-between md:justify-between max-w-screen-lg mx-auto">
        <ul className="hidden md:flex mt-2">
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
        <div className="mt-2 text-xl font-bold ">
          <Link href="/">
            <a className="p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400">React-Fit</a>
          </Link>
        </div>
        <ul className="hidden md:flex items-center">
          <li className="mx-2">Log In</li>
          <li className="mx-2 bg-green-400 px-8 py-2 text-black">
            <Link href="/membership">
              <a>Subscribe</a>
            </Link>
          </li>
        </ul>

        <button
          type="button"
          class="p-2 inline-flex md:hidden items-center justify-center text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>

          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
