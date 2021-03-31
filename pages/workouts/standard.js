import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';

import { useAuth } from '@/lib/auth';
import DashboardShell from '@/components/DashboardShell';
import WorkoutCard from '@/components/WorkoutCard';

export default function Standard() {
  const { user } = useAuth();
  //   const { data } = useSWR('/api/workouts', fetcher);

  //   if (!data) {
  //     return (
  //       <DashboardShell>
  //         <p>No data!</p>
  //       </DashboardShell>
  //     );
  //   }

  if (user.stripeRole !== 'standard' || user.stripeRole !== 'warrior') {
    return (
      <DashboardShell>
        <h2 className="font-mono font-semibold text-2xl mt-10">
          Unauthorized Content
        </h2>
        <p>Please go back to your Account page to upgrade your membership.</p>
      </DashboardShell>
    );
  }

  return (
    <div>
      <Head>
        <title>React-Fit Standard Workouts</title>
      </Head>
      <DashboardShell>
        <h2 className="font-mono font-semibold text-2xl mt-10">
          Standard Workouts
        </h2>
      </DashboardShell>
    </div>
  );
}
