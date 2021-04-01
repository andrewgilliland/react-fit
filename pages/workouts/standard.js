import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';

import { useAuth } from '@/lib/auth';
import DashboardShell from '@/components/DashboardShell';
import WorkoutCard from '@/components/WorkoutCard';

export default function Standard() {
  const { user } = useAuth();

  if (user.stripeRole === 'standard' || 'warrior') {
    return (
      <div>
        <Head>
          <title>Standard Workouts</title>
        </Head>
        <DashboardShell>
          <h2 className="font-mono font-semibold text-2xl mt-10">
            Standard Workouts
          </h2>
          <section className="grid grid-cols-3 gap-10 mt-6">
            <WorkoutCard
              name="Upper Body Blast"
              date="4/1/21"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis soluta in expedita tenetur possimus?"
            />
            <WorkoutCard
              name="Loaded Legs"
              date="4/3/21"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis soluta in expedita tenetur possimus?"
            />
            <WorkoutCard
              name="Insane Abs"
              date="4/5/21"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis soluta in expedita tenetur possimus?"
            />
            
          </section>
        </DashboardShell>
      </div>
    );
  }

  return (
    <DashboardShell>
      <h2 className="font-mono font-semibold text-2xl mt-10">
        Unauthorized Content
      </h2>
      <p>Please go back to your Account page to upgrade your membership.</p>
    </DashboardShell>
  );
}
