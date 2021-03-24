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
          <button onClick={(e) => createCheckoutSession(user.uid)}>
            Sign Up
          </button>
        </header>
      </main>
    </Layout>
  );
}
