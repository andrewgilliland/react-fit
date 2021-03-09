import Head from 'next/head';
import Layout from '@/components/Layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <main>
        <header>
          <h1>A subscription designed for your fitness.</h1>
        </header>
      </main>
    </Layout>
  );
}
