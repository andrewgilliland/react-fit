import { useState } from 'react';
import Head from 'next/head';
import useSWR from 'swr';

import DashboardShell from '@/components/DashboardShell';
import Button from '@/components/Button';
import WorkoutCard from '@/components/WorkoutCard';
import { useAuth } from '@/lib/auth';
import { goToBillingPortal } from '@/lib/db';

export default function Warrior() {
  const { user } = useAuth();
  const [isBillingLoading, setBillingLoading] = useState(false);
  //   const { data } = useSWR('/api/workouts', fetcher);

  //   if (!data) {
  //     return (
  //       <DashboardShell>
  //         <p>No data!</p>
  //       </DashboardShell>
  //     );
  //   }

  if (user?.stripeRole !== 'warrior') {
    return (
      <DashboardShell>
        <h1 className="font-mono font-semibold text-xl mt-10">
          Upgrade your membership to view this awesome content.
        </h1>
        <Button
          isLoading={isBillingLoading}
          onClick={(e) => {
            setBillingLoading(true);
            goToBillingPortal();
          }}
        >
          Upgrade Membership
        </Button>
      </DashboardShell>
    );
  }

  return (
    <div>
      <Head>
        <title>Warrior Workouts</title>
      </Head>
      <DashboardShell>
        <h1 className="font-mono font-semibold text-2xl mt-10">
          Warrior Workouts
        </h1>
        <section className="grid grid-cols-3 gap-10 mt-6">
          <WorkoutCard
            name="Chest Annihilation"
            date="4/1/21"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis soluta in expedita tenetur possimus?"
          />
          <WorkoutCard
            name="Back Attack"
            date="4/2/21"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis soluta in expedita tenetur possimus?"
          />
          <WorkoutCard
            name="Sky's Out, Thighs Out"
            date="4/3/21"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis soluta in expedita tenetur possimus?"
          />
          <WorkoutCard
            name="Boulder Shoulders"
            date="4/4/21"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis soluta in expedita tenetur possimus?"
          />
          <WorkoutCard
            name="Awesome Arms"
            date="4/5/21"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis soluta in expedita tenetur possimus?"
          />
          <WorkoutCard
            name="Glute Goodness"
            date="4/6/21"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis soluta in expedita tenetur possimus?"
          />
        </section>
      </DashboardShell>
    </div>
  );
}
