import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';

import { goToBillingPortal } from '@/lib/db';
import { useAuth } from '@/lib/auth';
import Button from '@/components/Button';
import DashboardShell from '@/components/DashboardShell';
import WorkoutCard from '@/components/WorkoutCard';

export default function Standard() {
  const { user } = useAuth();
  const [isBillingLoading, setBillingLoading] = useState(false);

  if (user.stripeRole === 'free') {
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
        <title>Standard Workouts</title>
      </Head>
      <DashboardShell>
        <h1 className="font-mono font-semibold text-2xl mt-10">
          Standard Workouts
        </h1>
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
