import Head from 'next/head';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import { useAuth } from '@/lib/auth';
import { createCheckoutSession } from '@/lib/db';

export default function Membership() {
  const { user } = useAuth();

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
        <section className="flex gap-10 mt-10">
          <div className="border-2 border-black shadow-offset-green">
            <div className="bg-black p-6">
              <h3 className="text-2xl font-bold text-white">Standard Plan</h3>
            </div>
            <div className="p-6">
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <Button onClick={(e) => createCheckoutSession(user.uid)}>
                Sign Up
              </Button>
            </div>
          </div>
          <div className="border-2 border-black shadow-offset-green">
            <div className="bg-black p-6">
              <h3 className="text-2xl font-bold text-white">Warrior Plan</h3>
            </div>
            <div className="p-6">
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
                <li>Feature 5</li>
              </ul>
              <Button onClick={(e) => createCheckoutSession(user.uid)}>
                Sign Up
              </Button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
