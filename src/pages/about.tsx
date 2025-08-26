"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Mail,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/HeroBackground";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { usePopper } from "react-popper";
import { useFloating } from "@floating-ui/react-dom";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const sections = [
    { id: "hero", label: "Home" },
    { id: "career", label: "Career" },
    { id: "testimonials", label: "Testimonials" },
    { id: "tech", label: "Tech Stack" },
    { id: "work", label: "Work History" },
    { id: "contact", label: "Contact" },
  ];

  const testimonials = [
    {
      quote:
        "Emily's leadership in system design and team management transformed our entire development process. Her ability to balance technical excellence with people management is exceptional.",
      author: "Sarah Chen",
      role: "VP of Engineering",
      company: "TechCorp",
      skills: ["Engineering Management", "System Design", "Team Leadership"],
    },
    {
      quote:
        "Working with Emily was a masterclass in full-stack development. Her expertise in UI/UX design combined with backend architecture made our product both beautiful and scalable.",
      author: "Michael Rodriguez",
      role: "Product Manager",
      company: "StartupXYZ",
      skills: ["Software Development", "UI/UX Design", "Adaptability"],
    },
    {
      quote:
        "Emily's adaptability and technical leadership during our platform migration was incredible. She guided the team through complex challenges while maintaining high code quality.",
      author: "Jennifer Park",
      role: "Senior Developer",
      company: "InnovateLabs",
      skills: ["Team Leadership", "Adaptability", "System Design"],
    },
  ];

  const techStack = [
    { name: "React", logo: "/react-logo.png" },
    { name: "TypeScript", logo: "/typescript-logo.png" },
    { name: "JavaScript", logo: "/javascript-logo.png" },
    { name: "HTML5", logo: "/html5-logo.png" },
    { name: "CSS3", logo: "/css3-logo.png" },
    { name: "Python", logo: "/python-logo.png" },
    { name: "Django", logo: "/placeholder-1z7np.png" },
    { name: "TailwindCSS", logo: "/-css-logo.png" },
    { name: "Framer Motion", logo: "/framer-motion-logo-inspired.png" },
    { name: "GraphQL", logo: "/graphql-logo.png" },
  ];

  const workHistory = [
    {
      company: "TechCorp",
      role: "Senior Engineering Manager",
      period: "2022 - Present",
      logo: "/techcorp-logo.png",
      achievements: [
        "Led a team of 12 engineers across 3 product areas",
        "Architected microservices platform serving 1M+ users",
        "Reduced deployment time by 75% through CI/CD improvements",
      ],
    },
    {
      company: "StartupXYZ",
      role: "Full Stack Lead Developer",
      period: "2020 - 2022",
      logo: "/placeholder-3e5m9.png",
      achievements: [
        "Built MVP from scratch using React and Django",
        "Implemented real-time features with WebSocket architecture",
        "Mentored 5 junior developers and established code review process",
      ],
    },
    {
      company: "InnovateLabs",
      role: "Software Engineer",
      period: "2018 - 2020",
      logo: "/placeholder-lfpja.png",
      achievements: [
        "Developed responsive web applications with React and TypeScript",
        "Optimized database queries reducing load times by 60%",
        "Collaborated with design team to implement pixel-perfect UIs",
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "career",
        "testimonials",
        "tech",
        "work",
        "contact",
      ];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        setActiveSection(sections[sections.length - 1]);
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const { refs, floatingStyles } = useFloating();

  return (
    <div className="w-full h-full bg-background">
      {/* Vertical Side Navigation */}
      <nav className="fixed left-0 top-0 h-full w-20 py-20 z-50 flex flex-col items-center bg-transparent">
        <div className="flex flex-col justify-between h-full">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`writing-mode-vertical text-sm font-medium transition-colors duration-200 hover:text-[#8c52ff] px-4 item-center rounded-full ${
                activeSection === section.id
                  ? "bg-[#8c52ff] text-neutral-100 hover:text-neutral-100"
                  : "bg-transparent"
              }`}
              style={{ writingMode: "sideways-lr", textOrientation: "mixed" }}
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-light to-background bg-hero"
        >
          {/* <BackgroundBeamsWithCollision className="w-full min-h-screen"> */}
          <div className="text-center max-w-4xl px-28">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#8c52ff] via-[#ba62ff] to-[#d5c7ff] bg-clip-text text-transparent">
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
            <Button ref={refs.setReference}>Button</Button>
            <div ref={refs.setFloating} style={floatingStyles}>
              Tooltip
            </div>
            <Button
              onClick={() => scrollToSection("contact")}
              className="mt-8 bg-purple-main hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            >
              Let&apos;s Connect
            </Button>
          </div>
          {/* </BackgroundBeamsWithCollision> */}
        </section>

        {/* Career Stats Section */}
        <section id="career" className="py-20 px-28 bg-card">
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
                  <div className="text-4xl font-bold text-primary mb-2">
                    50+
                  </div>
                  <div className="text-muted-foreground">
                    Projects Completed
                  </div>
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
                  <div className="text-4xl font-bold text-primary mb-2">
                    1M+
                  </div>
                  <div className="text-muted-foreground">Users Impacted</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-28 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
              What People Say
            </h2>

            {/* Skills Highlighted */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {testimonials[currentTestimonial].skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 text-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Testimonial Carousel */}
            <div className="relative">
              <Card className="max-w-4xl mx-auto p-8">
                <CardContent className="pt-6">
                  <blockquote className="text-xl md:text-2xl text-center leading-relaxed mb-8 text-foreground">
                    {testimonials[currentTestimonial].quote}
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold text-lg text-foreground">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentTestimonial].role} at{" "}
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech" className="py-20 px-28 pb-40 bg-tech">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
              Technologies & Frameworks
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center p-6 bg-card rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-accent/10"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: "fadeInUp 0.6s ease-out forwards",
                  }}
                >
                  <img
                    src={tech.logo || "/placeholder.svg"}
                    alt={`${tech.name} logo`}
                    className="w-16 h-16 mb-4 object-contain"
                  />
                  <span className="text-sm font-medium text-foreground">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work History Timeline */}
        <section id="work" className="py-20pt-0 px-28 bg-purple-main">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
              Work Experience
            </h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

              {workHistory.map((job, index) => (
                <div
                  key={index}
                  className="relative flex items-start mb-12 last:mb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>

                  {/* Company Logo */}
                  <div className="ml-16 mr-6">
                    <img
                      src={job.logo || "/placeholder.svg"}
                      alt={`${job.company} logo`}
                      className="w-12 h-12 rounded-lg object-contain bg-card p-2"
                    />
                  </div>

                  {/* Job Details */}
                  <Card className="flex-1">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {job.role}
                          </h3>
                          <p className="text-lg text-primary font-medium">
                            {job.company}
                          </p>
                        </div>
                        <Badge variant="outline" className="text-sm">
                          {job.period}
                        </Badge>
                      </div>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground flex items-start"
                          >
                            <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
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
        <section id="contact" className="px-28 pt-60 bg-card bg-contact">
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
                      Ready to discuss your next project or explore
                      collaboration opportunities? Book a 30-minute call to chat
                      about how we can work together.
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
      </main>
      <footer className="row-start-3 flex w-full h-60 gap-4 md:gap-8 py-5 px-10 z-40 bg-white dark:bg-neutral-950 text-neutral-100 flex-wrap items-end justify-end bg-wave">
        {/* resume, socials, blob line */}
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinLogoIcon size="20px" weight="fill" className="rounded-2xl" />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubLogoIcon size="20px" weight="fill" className="rounded-2xl" />
          GitHub
        </a>
      </footer>

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
