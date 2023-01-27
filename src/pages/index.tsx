import Head from 'next/head';
import { Electrolize } from '@next/font/google';
import NavBar from '@/components/Navbar/NavBar';

const electrolize = Electrolize({
  weight: ['400'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`${electrolize.className} w-full h-screen bg-gray-900 text-white`}
      >
        <NavBar />
      </main>
    </>
  );
}
