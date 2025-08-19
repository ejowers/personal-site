import React from "react";
import { Timeline, TimelineEntry } from "@/components/ui/Timeline";
import Stack from "./ui/Stack";

// TODO: Add more details, there's room here. Pictures would be fun but I don't think I have any.
// TODO: Customize color of the company names and add links to the company websites. Could use the link preview here. Could add logos, the colors are a little weird.

const WorkHistory = () => {
  const data: TimelineEntry[] = [
    {
      year: "2024",
      logo: "/company-logos/marker-logo.png",
      url: "https://www.markerlearning.com/",
      lifeEvents: ["I had a baby"],
      jobTitle: "Staff Full-stack Software Engineer",
      companyName: "Marker Learning",
      description:
        "Currently wearing many hats on a scrappy team of engineering, product, design, and machine learning folks. Designing, prototyping, developing, iterating, and collecting user feedback. This is the stuff I love. Marker Learning enables school psychs to write reports faster so they can spend more time actually helping kids.",
    },
    {
      year: "2022",
      logo: "/company-logos/medely-logo.jpeg",
      url: "https://www.medely.com/",
      lifeEvents: ["I had a baby"],
      jobTitle: "Staff Frontend Software Engineer",
      companyName: "Medely",
      description:
        "Led, mentored, and facilitated a team of FE devs. Developed technical plans for new features and participated in system architecture and design. Hands on for high-priority bugs and urgent features.",
    },
    {
      year: "2021",
      logo: "/company-logos/carrierhq-logo.png",
      url: "https://www.linkedin.com/company/carrierhq/",
      lifeEvents: ["I had a baby"],
      jobTitle: "Senior Software Engineer → Engineering Manager",
      companyName: "CarrierHQ",
      description:
        "Streamlined the insurance process for small-fleet truckers, increasing throughput by 25%. Mentored a small team of developers and designed new system architecture. Worked closely with product and business to design and plan new features.",
    },
    {
      year: "2019",
      logo: "/company-logos/bpl-pixel-logo.png",
      url: "https://breakpoint-labs.com/",
      lifeEvents: ["I had a baby"],
      jobTitle: "Security Operations Developer (Software Engineer)",
      companyName: "BreakPoint Labs",
      description:
        "Developed software to display, track, and mitigate cybersecurity vulnerabilities and threats for the DoD. I am not a cybersecurity expert.",
    },
    {
      year: "2018",
      logo: "/company-logos/adl-black-logo.jpeg",
      url: "https://www.adlnet.gov/",
      lifeEvents: ["I had a baby"],
      jobTitle: "Software Engineer II",
      companyName: "SimIS/ADL Initiative",
      description: "No one knew what we were doing here. Moving on.",
    },
    {
      year: "2014",
      logo: "/company-logos/sdl-logo.jpeg",
      url: "https://www.sdl.usu.edu/",
      lifeEvents: ["I had a baby"],
      jobTitle: "Intern → Software Engineer I",
      companyName: "Space Dynamics Laboratory",
      description:
        "Designed and developed a satellite communications prototype (in 3 months!) that won the project full funding and went to space on the SHARP satellite mission. Completely the suite with features for mapping, scheduling, simulation, anomaly handling, and more. I was also the UI/UX designer.",
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
      <div className="h-[500px]"></div>
    </div>
  );
};

export default WorkHistory;
