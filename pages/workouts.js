import Head from 'next/head';
import { useAuth } from '@/lib/auth';

export default function Workouts() {
  const auth = useAuth();

  return (
    <div>
      <Head>
        <title>React-Fit Workouts</title>
      </Head>

      <main>
        <h1>Workouts</h1>
      </main>
    </div>
  );
}
