"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import StackIcon from "tech-stack-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Download, Mail, Calendar, ExternalLink } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/HeroBackground";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Group from "@/components/ui/Group";
import Stack from "@/components/ui/Stack";
import { WorkTimeline } from "@/components/ui/work-timeline";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { Badge } from "@/components/ui/badge";

export default function Portfolio() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: [
        "Emily was a standout engineering partner during our time together at Marker Learning. She consistently brought a high level of thoughtfulness, care, and technical rigor to everything she worked on. Emily brought deep expertise to our frontend stack, not only delivering tactically, but planning strategically for the long-term evolution of our frontend.",
        "What I appreciated most about Emily was her ability to see the bigger picture. She asked the hard questions early, often surfacing risks or gaps that could bite us. She understood when to take on risk in the short-term vs. when risk would cause too many issues in the mid- and long-term. Additionally, Emily is a product-minded engineer with an obsession for the user. I frequently leaned on Emily to surface UX challenges, and had trust that she could articulate UX improvements. This was especially crucial when we were in transition on our Design team.",
        "Beyond her technical contributions, Emily helped shape the engineering culture in positive ways. She advocated for clear standards, better collaboration, and more intentional engineering practices. In a time of transition, she was a steady and thoughtful voice.",
        "Any team would be lucky to have her.",
      ],
      author: "Rob Wilson",
      role: "Head of Engineering",
      company: "Marker Learning",
      skills: [
        "Frontend Expertise",
        "Strategic Planning",
        "Big-picture Thinking",
        "Customer-obsessed",
        "Engineering Leadership",
      ],
    },
    {
      quote: [
        "Emily was a fantastic team member and engineer. She regularly juggled multiple projects in a timely manner, along with mentoring junior engineers. While collaborating on several projects, she was able to identify tradeoffs in different approaches and made an outsized impact on solutions. She would make a great addition to any team.",
      ],
      author: "Hans Jaeger",
      role: "Director of Engineering",
      company: "CarrierHQ",
      skills: [
        "Multi-project Management",
        "High Velocity",
        "Mentoring",
        "Strategic Thinking",
      ],
    },
    {
      quote: [
        "Emily's adaptability and technical leadership during our platform migration was incredible. She guided the team through complex challenges while maintaining high code quality.",
      ],
      author: "Jennifer Park",
      role: "Senior Developer",
      company: "InnovateLabs",
      skills: ["Team Leadership", "Adaptability", "System Design"],
    },
  ];

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

  const workHistory = [
    {
      company: "Marker Learning",
      role: "Staff Software Engineer, Team Lead",
      period: "Aug 2024 - Aug 2025",
      year: "2024",
      location: "New York, NY (Remote)",
      logo: "/company-logos/marker-logo.png",
      achievements: [
        "Created an AI report writer for school psychologists, used across the country, to improve report writing efficiency, accuracy, and reliability",
        "Increased user trust in AI-generated content by citing document sources using custom WYSIWYG extensions",
        "Led a team of 8 engineers, collaborating with product, design, and stakeholders to ensure alignment on product delivery",
      ],
    },
    {
      company: "Medely",
      role: "Staff Frontend Software Engineer, Team Lead",
      period: "Dec 2022 - Aug 2024",
      year: "2022",
      location: "Santa Ana, CA (Remote)",
      logo: "/company-logos/medely-logo.jpeg",
      achievements: [
        "Personally led a project that won the contract for the largest surgical network in the US",
        "Increased developer velocity 2x by creating generic, reusable components for a complex credentialing flow",
        "Led a team of 4 engineers, individually mentoring devs through promotion and low performance",
      ],
    },
    {
      company: "CarrierHQ",
      role: "Senior Software Engineer -> Engineering Manager",
      period: "Sep 2021 - Oct 2022",
      year: "2021",
      location: "Indianapolis, IN (Hybrid)",
      logo: "/company-logos/carrierhq-logo.png",
      achievements: [
        "Streamlined the insurance process for small-fleet truckers, increasing throughput by 25%",
        "Managed a team of 8 engineers, improving team collaboration, performance, and React competency",
        "Designed new system architecture and established best practices, resulting in faster project delivery and decreased bugs",
      ],
    },
    {
      company: "BreakPoint Labs",
      role: "Software Engineer (Security Operations Developer)",
      period: "Feb 2019 - Aug 2021",
      year: "2019",
      location: "Arlington, VA (Remote)",
      logo: "/company-logos/bpl-pixel-logo.png",
      achievements: [
        "Developed software to dispaly, track, and mitigate cybersecurity vulnerabilitie and threats for the DoD",
        "Designed simple, intuituve UIs based on familiar tools to improve response time to incidents",
        "Engaged directly with government contacts to shape product direction and validate new features",
      ],
    },
    {
      company: "ADL Initiative",
      role: "Software Engineer II",
      period: "May 2018 - Feb 2019",
      year: "2018",
      location: "Orlando, FL",
      logo: "/company-logos/adl-logo.jpg",
      achievements: [
        "Enhanced military training systems and elevated eLearning capabilities",
        "Integrated disparate military training software into a unified suite with shared sign-on and databases, streamlining user access",
        "Developed the Total Learning Architecture aligned with military eLearning specifications (xAPI).",
      ],
    },
    {
      company: "Space Dynamic Laboratory",
      role: "Intern -> Software Engineer I",
      period: "April 2014 - May 2018",
      year: "2014",
      location: "Logan, UT",
      logo: "/company-logos/sdl-logo.jpeg",
      achievements: [
        "Designed and developed a satellite communications prototype that won full funding for the project",
        "Augmented the suite with features for 3D globe mapping, scheduling, event simulation, and anomaly handling",
        "I demoed to an Air Force general and my software is in space!",
      ],
    },
  ];

  const images = [
    {
      title: "My Face",
      image: "/emily-pics/1.jpeg",
      className:
        "absolute top-10 lg:left-[10%] md:left-[20%] left-[10%] rotate-[-5deg]",
    },
    {
      title: "My Face",
      image: "/emily-pics/1.jpeg",
      className:
        "absolute top-40 lg:left-[12%] md:left-[35%] left-[10%] rotate-[-7deg]",
    },
    {
      title: "My Face",
      image: "/emily-pics/2.jpeg",
      className:
        "absolute top-5 lg:left-[20%] md:left-[40%] left-[10%] rotate-[8deg]",
    },
    {
      title: "My Face",
      image: "/emily-pics/1.jpeg",
      className:
        "absolute top-32 lg:left-[27%] md:left-[55%] left-[17%] rotate-[10deg]",
    },
    {
      title: "My Face",
      image: "/emily-pics/2.jpeg",
      className:
        "absolute top-20 lg:left-[35%] md:left-[60%] left-[25%] rotate-[2deg]",
    },
    {
      title: "My Face",
      image: "/emily-pics/6.jpeg",
      className:
        "absolute top-24 lg:left-[22%] md:left-[45%] left-[12%] rotate-[-7deg]",
    },
    {
      title: "My Face",
      image: "/emily-pics/1.jpeg",
      className:
        "absolute top-8 lg:left-[15%] md:left-[30%] left-[5%] rotate-[4deg]",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full">
      <section
        id="hero"
        className="min-w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-light to-background"
      >
        <BackgroundBeamsWithCollision className="w-full min-h-screen">
          <div className="text-center max-w-4xl px-8 z-2">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-main via-[#ba62ff] to-purple-secondary bg-clip-text text-transparent">
              Emily Jowers
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Full Stack Software Engineer & Engineering Leader
            </p>
            <p className="text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about building scalable systems and leading
              high-performing teams. I bridge the gap between technical
              excellence and strategic leadership, creating solutions that drive
              business impact.
            </p>
            <Button
              onClick={() => scrollToSection("contact")}
              className="mt-8 bg-purple-electric hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            >
              Let&apos;s Connect
            </Button>
          </div>
        </BackgroundBeamsWithCollision>
      </section>

      {/* Career Stats Section */}
      <section id="career" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Career Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">6+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">12</div>
                <div className="text-muted-foreground">Team Members Led</div>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                <div className="text-muted-foreground">Users Impacted</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-20 px-8">
        {/* <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
          About Me
        </h2> */}
        <h2 className="justify-center items-center self-center mx-auto mb-16 max-w-lg  text-center text-2xl md:text-4xl font-black text-neutral-400  dark:text-neutral-800">
          <span className="bg-gradient-to-r from-purple-main to-[#ba62ff] bg-clip-text text-transparent">
            Hi
          </span>{" "}
          &#128075;{" "}
          <span className="bg-gradient-to-r from-[#ba62ff] to-purple-secondary bg-clip-text text-transparent">
            Nice to meet you!
          </span>
        </h2>
        <div>
          <div className="relative gap-4 w-full">
            <div className="w-full">
              <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip z-100">
                <p className="justify-center items-center self-center mx-auto max-w-lg -translate-y-100 text-center text-sm font-black text-neutral-400 dark:text-neutral-800">
                  You found the secret message! <br />
                  Give yourself a{" "}
                  <span className="text-xl bg-gradient-to-r from-purple-main via-[#ba62ff] to-purple-secondary bg-clip-text text-transparent">
                    high 5!
                  </span>
                  <br />
                  <span className="text-4xl">&#9995;</span>
                </p>
                {images.map((item, index) => (
                  <DraggableCardBody className={item.className} key={index}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="pointer-events-none relative z-10 h-80 w-80 object-cover"
                    />
                    <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                      {item.title}
                    </h3>
                  </DraggableCardBody>
                ))}
              </DraggableCardContainer>
            </div>
            <p className="justify-center items-center self-center mx-auto max-w-lg -translate-y-100 text-center text-2xl md:text-3xl font-black text-neutral-400  dark:text-neutral-800">
              Staff Frontend Engineer with 10+ years of experience transforming
              complex systems into
              <br />
              <span className="bg-gradient-to-r from-purple-main via-[#ba62ff] to-purple-secondary bg-clip-text text-transparent">
                simple, intuitive, user-friendly
              </span>
              <br />
              experiences. I love building products that are not only{" "}
              <span className="italic text-purple-secondary">functional</span> ,
              but{" "}
              <span className="bg-gradient-to-l from-purple-main via-[#ba62ff] to-purple-secondary bg-clip-text text-transparent">
                delightful
              </span>{" "}
              to use.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-screen mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            What People Say
          </h2>

          {/* Skills Highlighted */}
          <div className="flex flex-wrap justify-center gap-3 mb-5 max-w-[70%] h-[90px] mx-auto items-center">
            {testimonials[currentTestimonial].skills.map((skill, index) => (
              <motion.div key={skill}>
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm "
                  data-index={index}
                  style={{
                    opacity: 0,
                    animation: `fadeInUp 0.6s ease-out forwards ${
                      index * 30
                    }ms`,
                  }}
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>

          <Carousel className="embla__viewport">
            <Stack className="justify-center items-center w-full">
              <CarouselContent className="embla__container items-center">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={`${testimonial.author}-${index}`}
                    className="embla__slide w-full lg:w-70"
                  >
                    <Card className="max-w-4xl mx-auto p-8 h-full">
                      <CardContent className="pt-6">
                        <blockquote className="text-sm md:text-md text-center leading-relaxed mb-8 text-foreground">
                          {testimonial.quote.map((paragraph, index) => (
                            <p key={index} className="mb-2">
                              {paragraph}
                            </p>
                          ))}
                        </blockquote>
                        <div className="text-center">
                          <div className="font-semibold text-lg text-foreground">
                            {testimonial.author}
                          </div>
                          <div className="text-muted-foreground">
                            {testimonial.role} at {testimonial.company}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <Group className="gap-2">
                <CarouselPrevious onClick={prevTestimonial} />
                <CarouselNext onClick={nextTestimonial} />
              </Group>
            </Stack>
          </Carousel>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-20 px-8 pb-40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Technologies & Frameworks
          </h2>
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
        </div>
      </section>

      {/* Work History Timeline */}
      <section id="work" className="py-20pt-0 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Work Experience
          </h2>
          <div className="relative">
            <WorkTimeline items={workHistory} />
          </div>

          {/* Resume Download Button */}
          <div className="text-center mt-12">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 pt-60">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Let&apos;s Work Together
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-primary" />
                  Send a Message
                </h3>
                <form className="space-y-6">
                  <div>
                    <Input placeholder="Your Name" className="w-full" />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Input placeholder="Subject" className="w-full" />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      className="w-full"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Calendly Scheduling */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-primary" />
                  Schedule a Call
                </h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Ready to discuss your next project or explore collaboration
                    opportunities? Book a 30-minute call to chat about how we
                    can work together.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      30-minute consultation call
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      Project planning & strategy
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      Technical architecture discussion
                    </div>
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-6">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Book on Calendly
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
