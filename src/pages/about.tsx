import PageLayout from "@/components/ui/PageLayout";
import React from "react";

const About = () => {
  return (
    <PageLayout>
      <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
        About Me
      </h2>
      <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
        I love working with startups and building products that people need.
      </p>
    </PageLayout>
  );
};

export default About;
