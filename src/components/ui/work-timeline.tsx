"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Stack from "./Stack";
import Image from "next/image";

interface TimelineEntry {
  company: string;
  role: string;
  period: string;
  year: string;
  location: string;
  logo: string;
  achievements: string[];
}

export const WorkTimeline = ({ items }: { items: TimelineEntry[] }) => {
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
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl">
        {items.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-20 gap-0">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start flex-2/7">
              <div className="ml-1">
                <Image
                  src={item.logo}
                  alt={`${item.company} logo`}
                  width={55}
                  height={55}
                  className="rounded-lg object-contain border-6 border-white"
                />
              </div>
              {/* Desktop */}
              <h3 className="hidden md:block text-xl md:pl-10 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.year}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full flex-5/7">
              {/* Mobile */}
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.year}
              </h3>
              <div
                key={index}
                className="relative flex items-start mb-12 last:mb-0"
              >
                {/* Job Details */}
                <Stack>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.role}
                      </h3>
                      <p className="text-lg text-primary font-medium">
                        {item.company}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground flex items-start"
                      >
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </Stack>
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
