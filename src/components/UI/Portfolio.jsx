"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, MapPin, Download, Phone, CircleUserRound, Code2, Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import { Badge } from "./badge";

// ====== YOUR CV DATA ======
const INFO = {
  name: "Gauri Shrotria",
  tagline: "Aspiring Software Engineer | Web Development & React Enthusiast",
  about:
    "Enthusiastic and detail-oriented aspiring Software Developer with hands-on knowledge of Python,Java , HTML, CSS, JavaScript, Node.js and React.js. Passionate about building responsive and user-friendly web applications. Seeking an entry-level role to contribute to real-world projects, grow under the guidance of experienced professionals, and continuously learn in a dynamic, innovation-driven environment.",
  location: "Greater Noida, Uttar Pradesh, India",
  email: "gaurishrotria@gmail.com",
  phone: "+91 9675368856",
  socials: {
    github: "https://github.com/Gauri01-31",
    linkedin: "https://www.linkedin.com/in/gauri-shrotria-39a5672a3/",
    leetcode: "https://leetcode.com/u/Gauri_Shrotria/",
  },
};

const SKILLS = [
  "HTML", "CSS", "JavaScript", "React.js",
  "Java", "Python", "SQL", "MySQL",
  "Git/GitHub", "Time Management", "Teamwork", "Creativity", "Adaptability"
];

const PROJECTS = [
  {
    title: "Meditation & Mindfulness App",
    description:
      "Responsive web app promoting mental wellness with categorized meditation types and external practice links. Integrated user login and registration using MySQL to store credentials and preferences. Designed a calming UI with smooth navigation for an immersive user experience.",
    tech: ["React", "HTML", "CSS", "MySQL"],
    repo: "https://github.com/Gauri01-31/MeditationApp.git",
    demo: "",
  },
  {
    title: "Student–Teacher Portal (Group Project)",
    description:
      "Developed a web-based portal to streamline communication and data management between students and teachers. Designed and implemented a relational database schema to store student records, attendance, grades, assignments, and schedules.",
    tech: ["React", "MySQL", "JavaScript"],
    demo: "",
  },
];

const EXPERIENCE = [
  {
    role: "Android Developer Intern (Virtual)",
    company: "Google",
    period: "Oct – Dec 2024",
    bullets: [
      "Completed a virtual internship focused on Android development.",
      "Built Android app modules using Java and XML, and learned Firebase integration for authentication and data storage.",
    ],
  },
];

const EDUCATION = [
  {
    degree: "B.Tech in Computer Engineering",
    school: "Galgotias University, Greater Noida, UP",
    period: "2023 – 2027 (expected)",
    bullets: ["CGPA: 8.24", "Relevant coursework: DSA, DBMS, OS, CN, Web Development"],
  },
  {
    degree: "Senior Secondary (Class XII)",
    school: "Dewan Public School, Meerut, UP",
    period: "2021 – 2022",
    bullets: ["PCM with Computer Science"],
  },
];

// ====== SMALL UI HELPERS ======
const Section = ({ id, icon: Icon, title, children }) => (
  <section id={id} className="scroll-mt-24">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="mb-6 flex items-center gap-2"
    >
      <Icon className="h-6 w-6" />
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">{title}</h2>
    </motion.div>
    {children}
  </section>
);

const Chip = ({ children }) => (
  <Badge className="mr-2 mb-2 px-3 py-1 text-sm rounded-full">{children}</Badge>
);

// ====== MAIN COMPONENT ======
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 relative z-10">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold">{INFO.name}</span>
          </div>
          <nav className="hidden sm:flex items-center gap-4 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#education" className="hover:underline">Education</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <main className="mx-auto max-w-6xl px-4">
        <section className="py-12 sm:py-20 grid lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              Hi, I’m {INFO.name} <span className="inline-block">👋</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">{INFO.tagline}</p>
            <p className="mt-3 text-slate-600 max-w-2xl">{INFO.about}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild className="rounded-2xl">
                <a href="#projects"><Code2 className="mr-2 h-4 w-4" /> View Projects</a>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl">
                <a href={INFO.socials.github} target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4"/> GitHub</a>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl">
                <a href={INFO.socials.linkedin} target="_blank" rel="noreferrer"><Linkedin className="mr-2 h-4 w-4"/> LinkedIn</a>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl">
              <a href={INFO.socials.leetcode} target="_blank" rel="noreferrer">
                <Code2 className="mr-2 h-4 w-4"/> LeetCode
              </a>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600">
              <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4"/>{INFO.location}</span>
            </div>
          </motion.div>
          
          <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:justify-self-centre"
          >
          <Card className="rounded-2xl shadow-md relative max-w-xs mx-auto overflow-hidden">
            <CardContent className="p-4 flex flex-col items-center">
              
              {/* Profile Image */}
              <div className="w-52 h-52 rounded-full overflow-hidden mb-4 relative">
                <Image
                  src="/my-photo.jpeg"
                  alt="Gauri Shrotria"
                  width={208}   // width = 48 * 4
                  height={208}  // height = 32 * 4
                  className="object-cover object-right"
                />
              </div>

              {/* Short Info */}
              <p className="text-slate-600 text-lg text-center">
                Python / Java • Developer 
              </p>

              {/* Contact Info */}
              <div className="mt-4 grid gap-2 text-sm text-center">
                <a className="inline-flex items-center justify-center gap-2 hover:underline" href={`mailto:${INFO.email}`}>
                  <Mail className="h-4 w-4"/> {INFO.email}
                </a>
                <a className="inline-flex items-center justify-center gap-2 hover:underline" href={`tel:${INFO.phone}`}>
                  <Phone className="h-4 w-4"/> {INFO.phone}
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        </section>

        {/* ABOUT */}
        <Section id="about" icon={CircleUserRound} title="About">
          <Card className="rounded-3xl">
            <CardContent className="p-6 text-slate-700 leading-relaxed">
              {INFO.about}
            </CardContent>
          </Card>
        </Section>

        {/* SKILLS */}
        <Section id="skills" icon={Code2} title="Skills">
          <Card className="rounded-3xl">
            <CardContent className="p-6">
              <div className="flex flex-wrap">
                {SKILLS.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </CardContent>
          </Card>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" icon={Sparkles} title="Projects">
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <Card key={p.title} className="rounded-3xl hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-slate-600">{p.description}</p>
                  <div className="mt-3 flex flex-wrap">
                    {p.tech.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-3">
                    {p.repo && (
                      <Button asChild size="sm" variant="outline" className="rounded-2xl">
                        <a href={p.repo} target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4"/> Repo</a>
                      </Button>
                    )}
                    {p.demo && (
                      <Button asChild size="sm" className="rounded-2xl">
                        <a href={p.demo} target="_blank" rel="noreferrer"><ExternalLink className="mr-2 h-4 w-4"/> Live</a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" icon={Briefcase} title="Experience">
          <div className="grid gap-6">
            {EXPERIENCE.map((e) => (
              <Card key={e.role} className="rounded-3xl">
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold">{e.role} · {e.company}</h3>
                    <span className="text-sm text-slate-600">{e.period}</span>
                  </div>
                  <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                    {e.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* EDUCATION */}
        <Section id="education" icon={GraduationCap} title="Education">
          <div className="grid gap-6">
            {EDUCATION.map((ed) => (
              <Card key={ed.school} className="rounded-3xl">
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold">{ed.degree}</h3>
                    <span className="text-sm text-slate-600">{ed.period}</span>
                  </div>
                  <p className="mt-1 text-slate-700">{ed.school}</p>
                  <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                    {ed.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" icon={Mail} title="Contact">
          <Card className="rounded-3xl">
            <CardContent className="p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <a className="inline-flex items-center gap-2 hover:underline" href={`mailto:${INFO.email}`}><Mail className="h-4 w-4"/>{INFO.email}</a>
                <a className="inline-flex items-center gap-2 hover:underline" href={`tel:${INFO.phone}`}><Phone className="h-4 w-4"/>{INFO.phone}</a>
                <a className="inline-flex items-center gap-2 hover:underline" href={INFO.socials.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4"/>GitHub</a>
                <a className="inline-flex items-center gap-2 hover:underline" href={INFO.socials.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4"/>LinkedIn</a>
              </div>
            </CardContent>
          </Card>
        </Section>

        {/* FOOTER */}
        <footer className="py-12 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {INFO.name}. Built with React, Tailwind & shadcn/ui.
        </footer>
      </main>
    </div>
  );
}
