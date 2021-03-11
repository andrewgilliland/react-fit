import Head from 'next/head';
import Layout from '@/components/Layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <main>
        <header className="font-mono mt-20 max-w-xl">
          <h1 className="text-4xl">
            A subscription designed for your fitness.
          </h1>
          <p className="text-gray-500 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            vitae expedita? Fugiat qui, quasi similique sit laboriosam
            doloremque hic debitis cum tempora molestiae, natus dolor?
          </p>
        </header>
      </main>
    </Layout>
  );
}
