import Head from 'next/head';

import { useAuth } from '@/lib/auth';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>React-Fit</title>
      </Head>

      <main>
        <div className="font-mono border-2 border-black shadow-offset-green mt-5 p-4">
          <h1>Fitness Delivered</h1>
        </div>
      </main>
    </Layout>
  );
}
