import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useAuth } from '../lib/auth';

export default function Home() {
  const auth = useAuth();

  return (
    <div className={styles.container}>
      <Head>
        <title>React-Fit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="font-mono border-2 border-black shadow-offset-green">
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
              <button
                className="bg-green-300 px-8 py-2 text-black border border-black shadow-offset-black mt-3"
                onClick={(e) => auth.signinWithGitHub()}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
