import Head from 'next/head';
import Link from 'next/link';

import { useAuth } from '@/lib/auth';
import Layout from '@/components/Layout';

export default function Login() {
  const auth = useAuth();

  return (
    <Layout>
      <Head>
        <title>Log In</title>
      </Head>

      <main>
        <div className="font-mono border-2 border-black shadow-offset-green mt-5">
          <div className="bg-black p-6">
            <h1 className="text-2xl text-white font-bold">React-Fit</h1>

            <p className="text-white font-bold mt-2">
              Current user:
              <code className="text-sm text-green-400">
                {auth.user ? ` ${auth.user.name}` : 'none'}
              </code>
            </p>
          </div>
          <div className="p-6">
            {auth.user ? (
              <button
                className="bg-green-400 px-8 py-2 text-black border border-black shadow-offset-black mt-3"
                onClick={(e) => auth.signout()}
              >
                Sign Out
              </button>
            ) : (
              <div className="flex flex-col">
                <button
                  className="bg-green-300 px-8 py-2 text-black border border-black shadow-offset-black mt-3"
                  onClick={(e) => auth.signinWithGitHub()}
                >
                  <Link href="/dashboard">
                    <a>Sign In with GitHub</a>
                  </Link>
                </button>
                <button
                  className="bg-green-300 px-8 py-2 text-black border border-black shadow-offset-black mt-3"
                  onClick={(e) => auth.signinWithGoogle()}
                >
                  <Link href="/dashboard">
                    <a>Sign In with Google</a>
                  </Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}
