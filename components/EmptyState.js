import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import DashboardShell from './DashboardShell';
import Button from './Button';
import { useAuth } from '@/lib/auth';
import { goToBillingPortal } from '@/lib/db';

const EmptyState = () => {
  const { user } = useAuth();
  const [isBillingLoading, setBillingLoading] = useState(false);

  return (
    <>
      <Head>
        <title>Account</title>
      </Head>
      <DashboardShell>
        <h1 className="font-mono font-semibold text-2xl mt-10"> My Account</h1>
        <div className="bg-black shadow-offset-green p-6 mt-6">
          {user.name ? (
            <div className="font-xl font-semibold text-white">
              Name: <span className="text-green-400">{user.name}</span>
            </div>
          ) : (
            <></>
          )}
          <div className="font-xl font-semibold text-white mt-2">
            Email: <span className="text-green-400">{user.email}</span>
          </div>
          <div className="font-xl font-semibold text-white mt-2">
            Current Plan:{' '}
            <span className="text-green-400">{user.stripeRole}</span>
          </div>
        </div>
        <div className="font-mono border-2 border-black shadow-offset-green mt-5 px-10 py-4">
          <h3 className="font-semibold mb-2">Dont't have a membership?</h3>
          <p className="mb-6">💪 Get Started Today</p>

          <Link href="/membership">
            <a className="bg-green-400 px-8 py-2 text-black border border-black shadow-offset-black hover:bg-green-500">
              Start Membership
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
    </>
  );
};

export default EmptyState;
