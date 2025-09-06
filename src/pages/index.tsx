"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Group from "@/components/ui/Group";
import Stack from "@/components/ui/Stack";
import StackIcon from "tech-stack-icons";

export default function Portfolio() {
  // const testimonials = [
  //   {
  //     quote: [
  //       "Emily was a standout engineering partner during our time together at Marker Learning. She consistently brought a high level of thoughtfulness, care, and technical rigor to everything she worked on. Emily brought deep expertise to our frontend stack, not only delivering tactically, but planning strategically for the long-term evolution of our frontend.",
  //     ],
  //     author: "Rob Wilson",
  //     role: "Head of Engineering",
  //     company: "Marker Learning",
  //     skills: [
  //       "Engineering Leadership",
  //       "Frontend Expertise",
  //       "Strategic Planning",
  //     ],
  //   },
  //   {
  //     quote: [
  //       "What I appreciated most about Emily was her ability to see the bigger picture. She asked the hard questions early, often surfacing risks or gaps that could bite us. She understood when to take on risk in the short-term vs. when risk would cause too many issues in the mid- and long-term. Additionally, Emily is a product-minded engineer with an obsession for the user. I frequently leaned on Emily to surface UX challenges, and had trust that she could articulate UX improvements. This was especially crucial when we were in transition on our Design team.",
  //     ],
  //     author: "Rob Wilson",
  //     role: "Head of Engineering",
  //     company: "Marker Learning",
  //     skills: ["Big-picture Thinking", "Risk Management", "Customer-obsessed"],
  //   },
  //   {
  //     quote: [
  //       "Beyond her technical contributions, Emily helped shape the engineering culture in positive ways. She advocated for clear standards, better collaboration, and more intentional engineering practices. In a time of transition, she was a steady and thoughtful voice. Any team would be lucky to have her.",
  //     ],
  //     author: "Rob Wilson",
  //     role: "Head of Engineering",
  //     company: "Marker Learning",
  //     skills: ["Engineering Leadership"],
  //   },
  //   {
  //     quote: [
  //       "Emily was a fantastic team member and engineer. She regularly juggled multiple projects in a timely manner, along with mentoring junior engineers. While collaborating on several projects, she was able to identify tradeoffs in different approaches and made an outsized impact on solutions. She would make a great addition to any team.",
  //     ],
  //     author: "Hans Jaeger",
  //     role: "Director of Engineering",
  //     company: "CarrierHQ",
  //     skills: ["Multi-project Management", "Mentoring", "Strategic Thinking"],
  //   },
  // ];

  const techStack = [
    { name: "React", logo: "react" },
    { name: "TypeScript", logo: "typescript" },
    { name: "JavaScript", logo: "js" },
    { name: "HTML5", logo: "html5" },
    { name: "CSS3", logo: "css3" },
    { name: "Python", logo: "python" },
    { name: "Django", logo: "django" },
    { name: "TailwindCSS", logo: "tailwindcss" },
    { name: "Framer Motion", logo: "framer" },
    { name: "GraphQL", logo: "graphql" },
  ];

  // const workHistory = [
  //   {
  //     company: "Marker Learning",
  //     role: "Staff Software Engineer, Team Lead",
  //     period: "Aug 2024 - Aug 2025",
  //     year: "2024",
  //     location: "New York, NY (Remote)",
  //     logo: "/company-logos/marker-logo.png",
  //     achievements: [
  //       "Created an AI report writer for school psychologists, used across the country, to improve report writing efficiency, accuracy, and reliability",
  //       "Increased user trust in AI-generated content by citing document sources using custom WYSIWYG extensions",
  //       "Led a team of 8 engineers, collaborating with product, design, and stakeholders to ensure alignment on product delivery",
  //     ],
  //   },
  //   {
  //     company: "Medely",
  //     role: "Staff Frontend Software Engineer, Team Lead",
  //     period: "Dec 2022 - Aug 2024",
  //     year: "2022",
  //     location: "Santa Ana, CA (Remote)",
  //     logo: "/company-logos/medely-logo.jpeg",
  //     achievements: [
  //       "Personally led a project that won the contract for the largest surgical network in the US",
  //       "Increased developer velocity 2x by creating generic, reusable components for a complex credentialing flow",
  //       "Led a team of 4 engineers, individually mentoring devs through promotion and low performance",
  //     ],
  //   },
  //   {
  //     company: "CarrierHQ",
  //     role: "Senior Software Engineer -> Engineering Manager",
  //     period: "Sep 2021 - Oct 2022",
  //     year: "2021",
  //     location: "Indianapolis, IN (Hybrid)",
  //     logo: "/company-logos/carrierhq-logo.png",
  //     achievements: [
  //       "Streamlined the insurance process for small-fleet truckers, increasing throughput by 25%",
  //       "Managed a team of 8 engineers, improving team collaboration, performance, and React competency",
  //       "Designed new system architecture and established best practices, resulting in faster project delivery and decreased bugs",
  //     ],
  //   },
  //   {
  //     company: "BreakPoint Labs",
  //     role: "Software Engineer (Security Operations Developer)",
  //     period: "Feb 2019 - Aug 2021",
  //     year: "2019",
  //     location: "Arlington, VA (Remote)",
  //     logo: "/company-logos/bpl-pixel-logo.png",
  //     achievements: [
  //       "Developed software to dispaly, track, and mitigate cybersecurity vulnerabilitie and threats for the DoD",
  //       "Designed simple, intuituve UIs based on familiar tools to improve response time to incidents",
  //       "Engaged directly with government contacts to shape product direction and validate new features",
  //     ],
  //   },
  //   {
  //     company: "ADL Initiative",
  //     role: "Software Engineer II",
  //     period: "May 2018 - Feb 2019",
  //     year: "2018",
  //     location: "Orlando, FL",
  //     logo: "/company-logos/adl-logo.jpg",
  //     achievements: [
  //       "Enhanced military training systems and elevated eLearning capabilities",
  //       "Integrated disparate military training software into a unified suite with shared sign-on and databases, streamlining user access",
  //       "Developed the Total Learning Architecture aligned with military eLearning specifications (xAPI).",
  //     ],
  //   },
  //   {
  //     company: "Space Dynamic Laboratory",
  //     role: "Intern -> Software Engineer I",
  //     period: "April 2014 - May 2018",
  //     year: "2014",
  //     location: "Logan, UT",
  //     logo: "/company-logos/sdl-logo.jpeg",
  //     achievements: [
  //       "Designed and developed a satellite communications prototype that won full funding for the project",
  //       "Augmented the suite with features for 3D globe mapping, scheduling, event simulation, and anomaly handling",
  //       "I demoed to an Air Force general and my software is in space!",
  //     ],
  //   },
  // ];

  // const images = [
  //   {
  //     title: "My Face",
  //     image: "/emily-pics/1.jpeg",
  //     className:
  //       "absolute top-10 lg:left-[10%] md:left-[20%] left-[10%] rotate-[-5deg]",
  //   },
  //   {
  //     title: "My Face",
  //     image: "/emily-pics/1.jpeg",
  //     className:
  //       "absolute top-40 lg:left-[12%] md:left-[35%] left-[10%] rotate-[-7deg]",
  //   },
  //   {
  //     title: "My Face",
  //     image: "/emily-pics/2.jpeg",
  //     className:
  //       "absolute top-5 lg:left-[20%] md:left-[40%] left-[10%] rotate-[8deg]",
  //   },
  //   {
  //     title: "My Face",
  //     image: "/emily-pics/1.jpeg",
  //     className:
  //       "absolute top-32 lg:left-[27%] md:left-[55%] left-[17%] rotate-[10deg]",
  //   },
  //   {
  //     title: "My Face",
  //     image: "/emily-pics/2.jpeg",
  //     className:
  //       "absolute top-20 lg:left-[35%] md:left-[60%] left-[25%] rotate-[2deg]",
  //   },
  //   {
  //     title: "My Face",
  //     image: "/emily-pics/6.jpeg",
  //     className:
  //       "absolute top-24 lg:left-[22%] md:left-[45%] left-[12%] rotate-[-7deg]",
  //   },
  //   {
  //     title: "My Face",
  //     image: "/emily-pics/1.jpeg",
  //     className:
  //       "absolute top-8 lg:left-[15%] md:left-[30%] left-[5%] rotate-[4deg]",
  //   },
  // ];

  // const scrollToSection = (sectionId: string) => {
  //   document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  // };

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
              I&apos;m a Software Engineer and Engineering Leader who&apos;s
              passionate about creating exceptional user experiences and
              high-performing teams that love what they do. I bridge the gap
              between technical excellence and strategic leadership, creating
              solutions that drive business impact.
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

      {/* Career Stats Section */}
      <section
        id="career"
        className="w-full flex items-top justify-center px-15 sm:px-30"
      >
        <Group className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-14">
          <Stack className="w-full h-[130px] border-black border-2 justify-center items-center">
            <h3>10+</h3>
            <p className="text-sm text-center">years experience</p>
          </Stack>
          <Stack className="w-full h-[130px] border-black border-2 justify-center items-center">
            <h3>4</h3>
            <p className="text-sm text-center">years leading</p>
          </Stack>
          <Stack className="w-full h-[130px] border-black border-2 justify-center items-center">
            <h3>15</h3>
            <p className="text-sm text-center">team members led</p>
          </Stack>
          <Stack className="w-full h-[130px] border-black border-2 justify-center items-center">
            <h3>1M+</h3>
            <p className="text-sm text-center">users served</p>
          </Stack>
        </Group>
      </section>

      {/* Tech Stack Section */}
      <section
        id="tech"
        className="w-full flex items-top justify-center px-15 sm:px-30"
      >
        <Stack className="justify-center items-center gap-8">
          <h2>Favorite Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                className="group"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="absolute z-10 opactiy-30 rounded-full blur-md"
                  style={{
                    background: "radial-gradient(white #3984ff00 80%)",
                    left: 0,
                    top: 0,
                  }}
                />
                <div className="flex flex-col items-center p-6 bg-card rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-accent/10 font-medium hover:font-bold">
                  <StackIcon
                    name={tech.logo}
                    className="w-16 h-16 mb-4 object-contain"
                  />
                  <span className="text-sm">{tech.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </Stack>
      </section>

      {/* About Me */}
      <section
        id="about"
        className="w-full flex items-top justify-center px-15 sm:px-30"
      ></section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="w-full flex items-top justify-center px-15 sm:px-30"
      ></section>

      {/* Work History Timeline */}
      <section
        id="work"
        className="w-full flex items-top justify-center px-15 sm:px-30"
      ></section>

      {/* Contact Section */}
      <section
        id="contact"
        className="w-full flex items-top justify-center px-15 sm:px-30"
      ></section>
    </Stack>
  );
}
