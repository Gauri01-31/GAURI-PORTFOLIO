"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, MapPin, Phone, CircleUserRound, Code2, Briefcase, GraduationCap, Sparkles, Trophy } from "lucide-react";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import { Badge } from "./badge";

// ====== YOUR CV DATA (matched to resume) ======
const INFO = {
  name: "Gauri Shrotria",
  tagline: "Computer Science Undergraduate | AI/ML & Software Developer",
  about:
    "Computer Science undergraduate targeting AI/ML and Software Developer roles. I've built an agentic expense assistant using Gemini tool calling with vision-based bill extraction, a CNN-based emotion recognition model with TensorFlow, and responsive client websites with WordPress and custom CSS. I'm comfortable turning requirements into clean, working products.",
  location: "Greater Noida, Uttar Pradesh, India",
  email: "gaurishrotria@gmail.com",
  phone: "+91 9675368856",
  socials: {
    github: "https://github.com/Gauri01-31",
    linkedin: "https://www.linkedin.com/in/gauri-shrotria-39a5672a3/",
    leetcode: "https://leetcode.com/u/Gauri_Shrotria/",
  },
};

const SKILLS = {
  Languages: ["JavaScript", "Python", "SQL", "Java (academic level)"],
  "Web Development": ["HTML", "CSS", "React.js", "WordPress", "Elementor", "Streamlit"],
  Databases: ["MySQL", "PostgreSQL", "SQLite"],
  "Data & ML": ["Power BI", "DAX", "Pandas", "NumPy", "TensorFlow", "Keras", "scikit-learn", "Gemini API (LLM tool calling)"],
  Tools: ["Git", "GitHub", "Docker", "Figma", "Google Colab"],
  "Core CS": ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
};

const PROJECTS = [
  {
    title: "Expense & Bill AI Agent",
    description:
      "Agentic expense assistant built with the Gemini API and tool calling: the model selects and chains 8 tools (add expense, spending summaries, budgets, due dates, reminders) to answer natural-language requests. Extracts receipts and bills (images and PDFs) into structured fields with a confidence score, with human review before saving and duplicate detection. Data stored in SQLite, with proactive alerts for overdue bills and budgets above 80%. Deployed online as a Streamlit app.",
    tech: ["Python", "Gemini API", "Streamlit", "SQLite"],
    repo: "https://github.com/Gauri01-31/expense-agent",
    demo: "https://expense-agent-gwmsfsk6vmh8xvhhpcmxou.streamlit.app/",
    demoLabel: "Live demo",
  },
  {
    title: "Ecommerce Blinkit Sales Dashboard",
    description:
      "Interactive Power BI dashboard analyzing sales, revenue, product categories, outlet performance and customer trends. Wrote DAX measures to turn raw data into insights.",
    tech: ["Power BI", "DAX"],
    repo: "https://github.com/Gauri01-31/Ecommerce-Blinkit-Sales-Dashboard",
    demo: "",
  },
  {
    title: "Facial Emotion Recognition",
    description:
      "CNN built with TensorFlow and Keras to classify facial emotions, reaching about 93% test accuracy. Improved performance with image preprocessing and data augmentation, and evaluated on a held-out test set in Google Colab.",
    tech: ["Python", "TensorFlow", "Keras", "CNN", "Google Colab"],
    repo: "", // ADD: GitHub repo URL if you have one
    demo: "https://colab.research.google.com/drive/1tY9jI4dA2sdCM0w3LUbhMcutj2hX9UbK",
    demoLabel: "Colab notebook",
  },
];

const EXPERIENCE = [
  {
    role: "Web Developer Intern (WordPress)",
    company: "ReadyCoder",
    period: "Jun 2026 – Sep 2026",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7513535388553101314",
    linkLabel: "LinkedIn post",
    bullets: [
      "Built and maintained responsive websites for business and legal-service clients using WordPress, Elementor, custom CSS, themes, and plugins.",
      "Created reusable components and a consistent design system across 15+ service pages, improving mobile responsiveness and layout consistency.",
      "Implemented client requirements across desktop and mobile, improving page layouts, usability, and SEO-friendly content structure.",
    ],
  },
  {
    role: "AI-ML Virtual Internship",
    company: "Google",
    period: "Jul 2025 – Sep 2025",
    link: "https://drive.google.com/file/d/1dZPiREd7VmvsM4eK2TqOWTecM3mpSazr/view?usp=drivesdk",
    linkLabel: "View certificate",
    bullets: [
      "Built and evaluated machine learning models in Python using TensorFlow and scikit-learn.",
      "Handled data preprocessing, training, testing, and evaluation, and compared model performance.",
    ],
  },
];

const EDUCATION = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "Galgotias University, Greater Noida",
    period: "2023 – 2027",
    bullets: ["CGPA: 8.52/10", "Core CS: DSA, OOP, DBMS, Operating Systems, Computer Networks"],
  },
  {
    degree: "Senior Secondary Education (PCM)",
    school: "Dewan Public School",
    period: "2021 – 2022",
    bullets: ["77.6%"],
  },
  {
    degree: "Secondary Education",
    school: "Dewan Public School",
    period: "2019 – 2020",
    bullets: ["82.3%"],
  },
];

const ACHIEVEMENTS = [
  {
    title: "Data Science with Python",
    detail: "Wipro TalentNext · Jul–Oct 2026 · ID: TNext-SE-2026-DS 260680302",
    link: "https://drive.google.com/file/d/1TNIBJb4d3Z0UVIMVfnRP3xqnUx27k0Ol/view?usp=sharing",
  },
  {
    title: "4th Place",
    detail: "IEEE IC2PCT 2026 Competition · 2026",
    link: "", // ADD (optional): certificate, result page or photo link
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
            <a href="#achievements" className="hover:underline">Achievements</a>
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
                <a href={INFO.socials.leetcode} target="_blank" rel="noreferrer"><Code2 className="mr-2 h-4 w-4"/> LeetCode</a>
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
            className="lg:justify-self-center"
          >
            <Card className="rounded-2xl shadow-md relative max-w-xs mx-auto overflow-hidden">
              <CardContent className="p-4 flex flex-col items-center">
                {/* Profile Image */}
                <div className="w-52 h-52 rounded-full overflow-hidden mb-4 relative">
                  <Image
                    src="/my-photo.jpeg"
                    alt="Gauri Shrotria"
                    width={208}
                    height={208}
                    className="object-cover object-right"
                  />
                </div>

                {/* Short Info */}
                <p className="text-slate-600 text-lg text-center">
                  AI/ML & Software Developer
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
            <CardContent className="p-6 space-y-4">
              {Object.entries(SKILLS).map(([group, items]) => (
                <div key={group}>
                  <h3 className="mb-2 text-sm font-semibold text-slate-700">{group}</h3>
                  <div className="flex flex-wrap">
                    {items.map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </div>
                </div>
              ))}
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
                        <a href={p.demo} target="_blank" rel="noreferrer"><ExternalLink className="mr-2 h-4 w-4"/> {p.demoLabel || "Live"}</a>
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
                  {e.link && (
                    <Button asChild size="sm" variant="outline" className="mt-4 rounded-2xl">
                      <a href={e.link} target="_blank" rel="noreferrer"><ExternalLink className="mr-2 h-4 w-4"/> {e.linkLabel || "View certificate"}</a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* EDUCATION */}
        <Section id="education" icon={GraduationCap} title="Education">
          <div className="grid gap-6">
            {EDUCATION.map((ed) => (
              <Card key={ed.degree} className="rounded-3xl">
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

        {/* ACHIEVEMENTS */}
        <Section id="achievements" icon={Trophy} title="Achievements & Certifications">
          <div className="grid sm:grid-cols-2 gap-6">
            {ACHIEVEMENTS.map((a) => (
              <Card key={a.title} className="rounded-3xl">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold">{a.title}</h3>
                  <p className="mt-1 text-slate-700">{a.detail}</p>
                  {a.link && (
                    <Button asChild size="sm" variant="outline" className="mt-3 rounded-2xl">
                      <a href={a.link} target="_blank" rel="noreferrer"><ExternalLink className="mr-2 h-4 w-4"/> View certificate</a>
                    </Button>
                  )}
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