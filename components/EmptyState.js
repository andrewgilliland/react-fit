import React from 'react';
import Link from 'next/link';
import DashboardShell from './DashboardShell';
import PrimaryButton from './PrimaryButton';

const EmptyState = () => (
  <DashboardShell>
    <div className="font-mono border-2 border-black shadow-offset-green mt-5 px-10 py-4">
      <h3 className="font-semibold mb-2">You haven't added any workouts</h3>
      <p className="mb-6">💪 Let's get started</p>
      {/* <PrimaryButton> */}
      <Link href="/workouts">
        <a className="bg-green-400 px-8 py-2 text-black border border-black shadow-offset-black hover:bg-green-500">
          Add Workout
        </a>
      </Link>
      {/* </PrimaryButton> */}
    </div>
  </DashboardShell>
);

export default EmptyState;
