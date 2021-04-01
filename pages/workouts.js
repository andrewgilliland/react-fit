import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';

import fetcher from '../utils/fetcher';
import { useAuth } from '@/lib/auth';
import DashboardShell from '@/components/DashboardShell';
import Login from './login';
import Button from '@/components/Button';
import WorkoutCard from '@/components/WorkoutCard';

export default function Workouts() {
  const { user } = useAuth();
  const { data } = useSWR('/api/workouts', fetcher);

  if (!user) {
    return <Login />;
  }

  return (
    <div>
      <Head>
        <title>React-Fit Workouts</title>
      </Head>
      <DashboardShell>
        <h1 className="font-mono font-semibold text-2xl mt-10">My Workouts</h1>

        <div className="flex gap-x-10 mt-10">
          <div className="border-2 border-black shadow-offset-green max-w-xs">
            <div className="bg-black p-6">
              <h3 className="text-white text-2xl font-bold">Standard</h3>
              <p className="text-lg text-green-400 font-bold mt-1">
                3 Workouts/Week
              </p>
            </div>
            <div className="p-6">
              <p className="font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                repellat nesciunt placeat sint amet soluta, similique dolor.
                Nemo placeat corrupti rem exercitationem voluptate? Ad
                aspernatur architecto, debitis recusandae repellat mollitia.
              </p>
              <Button>
                <Link href="/workouts/standard">
                  <a className="w-full">Standard Workouts</a>
                </Link>
              </Button>
            </div>
          </div>

          <div className="border-2 border-black shadow-offset-green max-w-xs">
            <div className="bg-black p-6">
              <h3 className="text-white text-2xl font-bold">Warrior</h3>
              <p className="text-lg text-green-400 font-bold mt-1">
                6 Workouts/Week
              </p>
            </div>
            <div className="p-6">
              <p className="font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                repellat nesciunt placeat sint amet soluta, similique dolor.
                Nemo placeat corrupti rem exercitationem voluptate? Ad
                aspernatur architecto, debitis recusandae repellat mollitia.
              </p>
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
