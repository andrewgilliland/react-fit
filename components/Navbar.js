import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  function toggle() {
    setOpen(!isOpen);
  }

  function toggleKeyPress() {
    setOpen(!isOpen);
  }

  return (
    <nav className="relative bg-black text-white font-mono px-2 py-4 border-t-4 border-green-400">
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
            <a className="p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400">
              React-Fit
            </a>
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
          onClick={toggle}
          onKeyPress={toggleKeyPress}
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

      <div
        className={`absolute top-1 inset-x-0 p-2 transition transform origin-top-right md:hidden ${
          isOpen
            ? 'block duration-200 ease-out opacity-100 scale-100'
            : 'hidden duration-100 ease-in opacity-0 scale-95'
        }`}
      >
        <div className="bg-green-400 text-black p-4 shadow-offset-black">
          <button
            onClick={toggle}
            onKeyPress={toggleKeyPress}
            type="button"
            class="p-2 inline-flex items-center justify-center text-black hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
          >
            <span class="sr-only">Close menu</span>

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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="mt-2">
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
        </div>
      </div>
    </nav>
  );
}
