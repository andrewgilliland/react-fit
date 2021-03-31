import React, { useState } from 'react';
import Link from 'next/link';
import DashboardShell from './DashboardShell';
import Button from './Button';
import { goToBillingPortal } from '@/lib/db';

const EmptyState = () => {
  const [isBillingLoading, setBillingLoading] = useState(false);

  return (
    <DashboardShell>
      <h1 className="font-mono font-semibold text-2xl mt-10">My Account</h1>
      <div className="font-mono border-2 border-black shadow-offset-green mt-5 px-10 py-4">
        <h3 className="font-semibold mb-2">You dont't have a membership.</h3>
        <p className="mb-6">💪 Let's get started</p>

        <Link href="/membership">
          <a className="bg-green-400 px-8 py-2 text-black border border-black shadow-offset-black hover:bg-green-500">
            Upgrade Membership
          </a>
        </Link>
      </div>
      <Button
        isLoading={isBillingLoading}
        onClick={(e) => {
          setBillingLoading(true);
          goToBillingPortal();
        }}
      >
        View Billing Portal
      </Button>
    </DashboardShell>
  );
};

export default EmptyState;
