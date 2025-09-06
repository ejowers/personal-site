"use client";

import React from "react";
import Image from "next/image";
import Group from "@/components/ui/Group";
import Stack from "@/components/ui/Stack";

const AboutPage = () => {
  return (
    <Stack className="w-full max-w-6xl mx-auto gap-30 sm:gap-50 pt-20">
      {/* Hero */}
      <section
        id="hero"
        className="w-full flex items-top justify-center px-8 sm:px-15 md:px-30 lg:px-15 xl:px-0"
      >
        <Group className="h-fit justify-between gap-15 xl:gap-30 flex-col lg:flex-row">
          <Stack className="gap-10 flex-4 justify-center">
            <h1>
              Hi <span className="inline-block -scale-x-[1]">&#128075;</span>{" "}
              I&apos;m <span className="text-violet-400">Emily Jowers</span>
            </h1>
            <h2 className="text-violet-300">Nice to meet you!</h2>
            <p className="leading-relaxed">
              {`I've been a software engineer for over 10 years now and leading
              teams for the last 4. I've learned a lot over those years, like
              how to center a <div /> and also how to scale a team. I love
              simplifying complexity and automating away inefficient
              processes. I am passionate about creating positive user and
              developer experiences through beautiful UIs, intuitive
              functionality, and empathetic, candid leadership.`}
            </p>
          </Stack>
          <Stack className="gap-8 flex-5 justify-center">
            <Image
              src="/emily-pics/emily-image.png"
              alt="Image of Emily Jowers standignn triumphantly infront of a sunbeam graphic"
              width={2000}
              height={2000}
              className="w-full"
            />
          </Stack>
        </Group>
      </section>
    </Stack>
  );
};

export default AboutPage;
