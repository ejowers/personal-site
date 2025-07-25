import Hero from "@/components/Hero";
import WorkHistory from "@/components/WorkHistory";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Code Monsters Home</title>
      </Head>
      <Hero />
      <WorkHistory />
    </>
  );
}
