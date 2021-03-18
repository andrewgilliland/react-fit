import Head from 'next/head';
import useSWR from 'swr';

import fetcher from '../utils/fetcher';
import { useAuth } from '@/lib/auth';
import DashboardShell from '@/components/DashboardShell';
import WorkoutCard from '@/components/WorkoutCard';

export default function Workouts() {
  const auth = useAuth();
  const { data } = useSWR('/api/workouts', fetcher);

  if (!data) {
    return (
      <DashboardShell>
        <p>No data!</p>
      </DashboardShell>
    );
  }

  return (
    <div>
      <Head>
        <title>React-Fit Workouts</title>
      </Head>
      <DashboardShell>
        {data.workouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            name={workout.name}
            description={workout.description}
            date={workout.date}
          />
        ))}
      </DashboardShell>
    </div>
  );
}
