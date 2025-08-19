"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import LinkPreview from "./LinkPreview";
import Group from "./Group";
import Stack from "./Stack";

export type TimelineEntry = {
  year: string;
  jobTitle: string;
  companyName: string;
  description: string;
  logo: string;
  url: string;
  lifeEvents: string[];
};

// TODO: Add a left side that animation pops up little fun facts about the time period
// TODO: Change the color of the dot when the timeline reaches it. Maybe turn it into a star?

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 60%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef}>
      <div ref={ref} className="relative">
        {data.map((item, index) => (
          <div key={index} className="flex pt-10 md:pt-20 md:gap-10">
            {/* Icon or Logo */}
            <Group className="sticky z-40 justify-start gap-7 items-center top-40 self-start w-1/4">
              <LinkPreview url={item.url}>
                <div className="w-[50px] h-[50px]">
                  <img
                    src={item.logo}
                    alt="company logo"
                    className="rounded-lg border-5 border-white"
                  />
                </div>
              </LinkPreview>
              <h3 className="hidden md:block text-xl md:text-5xl font-bold">
                {item.year}
              </h3>
            </Group>
            {/* Right Content */}
            <div className="relative pl-4 pr-4 md:pl-10 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.year}
              </h3>
              <LinkPreview url={item.url}>
                <Stack>
                  <h1 className="relative block text-2xl font-bold text-neutral-800 tracking-wide">
                    {item.jobTitle}
                  </h1>
                  <h2 className="w-fit text-lg font-bold text-neutral-500">
                    {item.companyName}
                  </h2>
                  <div className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                    {item.description}
                  </div>
                </Stack>
              </LinkPreview>
            </div>
          </div>
        ))}
        {/* Line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-6 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <div
            style={{
              height: "100%",
              opacity: 1,
            }}
            className="absolute inset-x-0 top-0 w-[4px] bg-gradient-to-t from-purple-500  via-indigo-200 to-indigo-500 from-[20%] to-[60%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
