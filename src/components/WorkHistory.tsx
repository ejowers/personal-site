import React from "react";
import { Timeline } from "@/components/ui/Timeline";

// TODO: Add more details, there's room here. Pictures would be fun but I don't think I have any.
// TODO: Customize color of the company names and add links to the company websites. Could use the link preview here. Could add logos, the colors are a little weird.

const WorkHistory = () => {
  const data = [
    {
      title: "2024",
      content: (
        // <div className="flex flex-row gap-2">
        //   {/* eslint-disable-next-line @next/next/no-img-element */}
        //   <img
        //     src="/company-logos/marker-logo.png"
        //     alt="Marker Learning"
        //     className="w-12 h-12 rounded-md"
        //   />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">
            Staff Full-stack Software Engineer
          </h1>
          <h2 className="text-lg font-bold text-blue-800">Marker Learning</h2>
          <div className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Currently wearing many hats on a scrappy team of engineering,
            product, design, and machine learning folks. Designing, prototyping,
            developing, iterating, and collecting user feedback. This is the
            stuff I love. Marker Learning enables school psychs to write reports
            faster so they can spend more time actually helping kids.
          </div>
        </div>
        // </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h1 className="text-2xl font-bold">
            Staff Frontend Software Engineer
          </h1>
          <h2 className="text-lg font-bold text-teal-600">Medely</h2>
          <div className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Led, mentored, and facilitated a team of FE devs. Developed
            technical plans for new features and participated in system
            architecture and design. Hands on for high-priority bugs and urgent
            features.
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <h1 className="text-2xl font-bold">
            Senior Software Engineer → Engineering Manager
          </h1>
          <h2 className="text-lg font-bold text-red-600">CarrierHQ</h2>
          <div className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Streamlined the insurance process for small-fleet truckers,
            increasing throughput by 25%. Mentored a small team of developers
            and designed new system architecture. Worked closely with product
            and business to design and plan new features.
          </div>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <h1 className="text-2xl font-bold">
            Security Operations Developer (Software Engineer)
          </h1>
          <h2 className="text-lg font-bold text-blue-800">BreakPoint Labs</h2>
          <div className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Developed software to display, track, and mitigate cybersecurity
            vulnerabilities and threats for the DoD. I am not a cybersecurity
            expert.
          </div>
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div>
          <h1 className="text-2xl font-bold">Software Engineer II</h1>
          <h2 className="text-lg font-bold text-orange-500">
            SimIS/ADL Initiative
          </h2>
          <div className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            No one knew what we were doing here. Moving on.
          </div>
        </div>
      ),
    },
    {
      title: "2014",
      content: (
        <div>
          <h1 className="text-2xl font-bold">Intern → Software Engineer I</h1>
          <h2 className="text-lg font-bold text-blue-600">
            Space Dynamics Laboratory
          </h2>
          <div className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Designed and developed a satellite communications prototype (in 3
            months!) that won the project full funding and went to space on the
            SHARP satellite mission. Completely the suite with features for
            mapping, scheduling, simulation, anomaly handling, and more. I was
            also the UI/UX designer.
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          What I Get Up To
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          I love working with startups and building products that people need.
        </p>
      </div>
      <Timeline data={data} />
    </div>
  );
};

export default WorkHistory;
