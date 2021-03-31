import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';

import fetcher from '../utils/fetcher';
import { useAuth } from '@/lib/auth';
import DashboardShell from '@/components/DashboardShell';
import Button from '@/components/Button';
import WorkoutCard from '@/components/WorkoutCard';

export default function Workouts() {
  const { user } = useAuth();
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
        <h1 className="font-mono font-semibold text-2xl mt-10">My Workouts</h1>

        <div className="flex gap-x-10">
          <div className="border-2 border-black shadow-offset-green">
            <div className="bg-black p-3">
              <h3 className="text-white text-xl font-mono font-bold">
                Standard
              </h3>
            </div>
            <div className="p-3">
              <Button>
                <Link href="/workouts/standard">
                  <a>Standard Workouts</a>
                </Link>
              </Button>
            </div>
          </div>

          <div className="border-2 border-black shadow-offset-green">
            <div className="bg-black p-3">
              <h3 className="text-white text-xl font-mono font-bold">
                Warrior
              </h3>
            </div>
            <div className="p-3">
              <Button>
                <Link href="/workouts/warrior">
                  <a>Warrior Workouts</a>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* {data.workouts.map((workout) => (
          <WorkoutCard
          key={workout.id}
          name={workout.name}
            description={workout.description}
            date={workout.date}
          />
        ))} */}
      </DashboardShell>
    </div>
  );
}
