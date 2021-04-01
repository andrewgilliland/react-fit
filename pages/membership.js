import { useState } from 'react';

import Head from 'next/head';
import Login from './login';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import { useAuth } from '@/lib/auth';
import { createCheckoutSession } from '@/lib/db';

export default function Membership() {
  const { user } = useAuth();
  const [isCheckoutLoading, setCheckoutLoading] = useState(false);
  const [isWarriorLoading, setWarriorLoading] = useState(false);

  if (!user) {
    return <Login />;
  }

  return (
    <Layout>
      <Head>
        <title>Membership</title>
      </Head>
      <main>
        <header className="font-mono mt-20 max-w-xl">
          <h1 className="text-4xl">Membership</h1>
          <p className="text-gray-500 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            vitae expedita? Fugiat qui, quasi similique sit laboriosam
            doloremque hic debitis cum tempora molestiae, natus dolor?
          </p>
        </header>
        <section className="flex gap-10 my-10 justify-center">
          <div className="border-2 border-black shadow-offset-green">
            <div className="bg-black p-6">
              <h3 className="text-2xl font-bold text-white">Standard Plan</h3>
              <p className="text-lg text-green-400 font-bold mt-1">$10/month</p>
            </div>
            <div className="p-6">
              <ul className="font-semibold mb-12">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <Button
                isLoading={isCheckoutLoading}
                onClick={(e) => {
                  setCheckoutLoading(true);
                  createCheckoutSession(
                    user.uid,
                    'price_1IWNpGKOxlmL0QgLktFANjlV'
                  );
                }}
              >
                Sign Up Now
              </Button>
            </div>
          </div>
          <div className="border-2 border-black shadow-offset-green">
            <div className="bg-black p-6">
              <h3 className="text-2xl font-bold text-white">Warrior Plan</h3>
              <p className="text-lg text-green-400 font-bold mt-1">$20/month</p>
            </div>
            <div className="p-6">
              <ul className="font-semibold">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
                <li>Feature 5</li>
              </ul>
              <Button
                isLoading={isWarriorLoading}
                onClick={(e) => {
                  setWarriorLoading(true);
                  createCheckoutSession(
                    user.uid,
                    'price_1IWNaRKOxlmL0QgLlEXlMbO3'
                  );
                }}
              >
                Sign Up Now
              </Button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
