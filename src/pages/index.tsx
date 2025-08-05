import Hero from "@/components/Hero";
import Stack from "@/components/ui/Stack";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Code Monsters Home</title>
      </Head>
      <Hero />
      <Stack className="w-full p-8 sm:p-20">Hi</Stack>
    </>
  );
};

export default Home;
