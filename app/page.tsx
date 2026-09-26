"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = {
  github: "https://github.com/Zlawal79",
  linkedin: "https://www.linkedin.com/in/zainab-lawal-4528a4313/",
  email: "mailto:Zainablawal714@gmail.com",
  resume: "/resume.pdf",
  devpost: "https://devpost.com/zainablawal714?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
};

type CardItem = {
  id: string;
  title: string;
  category: string;
  date: string;
  tools: string[];
  summary: string;
  bullets: string[];
  link?: string;
  detail?: string;
};

const featuredProjects: CardItem[] = [
  {
    id: "datasage",
    title: "DataSage",
    category: "AI + Data Analytics",
    date: "Featured Project",
    tools: ["AI", "Data Analysis", "Grounded Q&A", "Data Visualization", "Full-Stack"],
    summary: "A grounded AI data-analysis application that turns uploaded datasets into profiles, charts, evidence-backed answers, and executive insights.",
    bullets: [
      "Designed a workflow for uploading and profiling structured datasets.",
      "Built grounded question-answering so responses stay tied to the user's data.",
      "Added automatic and user-selected visualizations for exploratory analysis.",
      "Created executive-summary, evidence, limitation, and investigation views.",
      "Focused on making data analysis understandable to non-technical users.",
    ],
    link: "/projects/datasage",
  },
  {
    id: "sentinelml",
    title: "SentinelML",
    category: "Cybersecurity + Machine Learning",
    date: "Featured Project",
    tools: ["Machine Learning", "Cybersecurity", "IDS", "SOC Dashboard", "CIC-IDS-2017"],
    summary: "A machine-learning intrusion-detection concept and SOC-style dashboard for classifying network traffic and communicating security events.",
    bullets: [
      "Designed around the CIC-IDS-2017 network intrusion dataset.",
      "Organizes traffic into normal and multiple attack categories.",
      "Combines ML-oriented detection with a security-operations dashboard experience.",
      "Emphasizes transparent inputs, labels, testing, and responsible model communication.",
    ],
    link: "/projects/sentinelml",
  },
  {
    id: "careflow",
    title: "CareFlow Studio",
    category: "Software Engineering + Simulation",
    date: "Featured Project",
    tools: ["DSL", "Parser", "Interpreter", "Simulation", "Testing", "Healthcare Workflows"],
    summary: "A workflow simulation and cyber-operational readiness platform built around a custom domain-specific language, parser, interpreter, and synthetic scenarios.",
    bullets: [
      "Designed a custom workflow language and execution pipeline.",
      "Built parsing and interpretation logic for structured workflow scenarios.",
      "Modeled temporal safety and escalation behaviour with synthetic data.",
      "Created dashboard-style outputs for inspecting workflow execution.",
      "Used tests to validate core language and simulation behaviour.",
    ],
    link: "/projects/careflow-studio",
  },
  {
    id: "skypredict",
    title: "SkyPredict",
    category: "Data Science + Machine Learning",
    date: "Featured Project",
    tools: ["Python", "scikit-learn", "Pandas", "Streamlit", "BTS Data", "Weather Data"],
    summary: "An end-to-end flight-delay prediction project combining public flight records and hourly weather data with reproducible ML evaluation and an interactive app.",
    bullets: [
      "Processed more than 600,000 raw flight records and matched flight-weather observations.",
      "Compared Logistic Regression and Random Forest classifiers on held-out data.",
      "Evaluated precision, recall, F1, ROC-AUC, confusion matrices, and precision-recall behaviour.",
      "Avoided target leakage by excluding outcome-only flight information.",
      "Built an interactive Streamlit experience for prediction and model insights.",
    ],
    link: "/projects/skypredict",
  },
];

const hackathons: CardItem[] = [
  {
    id: "rahma-technisa",
    title: "Rahma",
    category: "TechNisa Hacks 2026 · Team Project",
    date: "Hackathon Project",
    tools: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "MapLibre"],
    summary: "Contributed to an invite-only, hyper-local community platform for Muslim stay-at-home mothers and homemakers, centered on local gatherings, small support pods, privacy-conscious onboarding, and community engagement.",
    bullets: ["Partnered with a team on the TechNisa hackathon build.", "The platform includes event discovery, pods and chat, rewards, onboarding, maps, and privacy-focused account flows.", "The implementation uses Next.js, TypeScript, Supabase, PostgreSQL, Realtime, Storage, and MapLibre/OpenFreeMap."],
    link: "https://github.com/imankamrann/TechNisa",
  },
  {
    id: "equity-decoder",
    title: "Equity Decoder",
    category: "TECHNATION Canada AI Equity Challenge",
    date: "AI Equity Competition",
    tools: ["Python", "FastAPI", "Gemini", "SpaCy", "Chrome Extension"],
    summary: "A bilingual AI-powered Chrome extension that analyzes job postings for potentially exclusionary language and provides inclusive rewrite suggestions.",
    bullets: ["Frontend and UX Lead on a three-person team.", "Connected browser workflows to AI/NLP analysis.", "Designed accessible, dashboard-style feedback and an Equity Score."],
    link: "/projects/equity-decoder",
  },
  {
    id: "newleaf",
    title: "NewLeaf",
    category: "Hack the Valley",
    date: "Hackathon Project",
    tools: ["React Native", "Node.js", "Firebase", "Gemini"],
    summary: "An AI-powered mobile companion designed to help newcomers navigate settlement tasks, cultural information, and community resources.",
    bullets: ["Built under hackathon time constraints.", "Combined mobile development, backend services, and AI guidance.", "Focused on empathy, accessibility, and newcomer support."],
    link: "/projects/newleaf",
  },
  {
    id: "battery-soh",
    title: "Battery SOH Chatbot",
    category: "Design & Analysis of Algorithms",
    date: "2nd Place",
    tools: ["Python", "Machine Learning", "React Native", "Node.js", "Gemini"],
    summary: "A battery State-of-Health prediction and explanation system combining machine learning, a mobile interface, and AI-assisted guidance.",
    bullets: ["Built a voltage-feature ML workflow.", "Connected predictions to a mobile and chatbot experience.", "Earned 2nd place in the course competition."],
    link: "/projects/battery-soh",
  },
  {
    id: "carboniq",
    title: "CarbonIQ",
    category: "Full-Stack Sustainability",
    date: "Team Project",
    tools: ["Node.js", "Express", "MySQL", "Chart.js", "OpenWeather"],
    summary: "A full-stack carbon-footprint dashboard for tracking activities, trends, categories, and sustainability insights.",
    bullets: ["Worked across database, API, and dashboard layers.", "Built visual reporting with Chart.js.", "Connected sustainability goals with practical full-stack engineering."],
    link: "/projects/carboniq",
  },
];

const experience: CardItem[] = [
  {
    id: "usrf",
    title: "Smart Energy Systems Research Assistant",
    category: "Ontario Tech University · USRF Co-op",
    date: "May 2026 – August 2026",
    tools: ["MATLAB", "Simulink", "HOMER Pro", "MG-OPT", "Research"],
    summary: "Worked on integrated multi-generation energy research spanning electricity, freshwater, hydrogen, cooling, digital-twin simulation, optimization, resilience, and technical communication.",
    bullets: ["Developed and evaluated simulation and optimization workflows.", "Connected engineering analysis with dashboards and visual communication.", "Supported scenario studies, validation workflows, technical reports, and presentations."],
    detail: "/research",
  },
  {
    id: "research-part-time",
    title: "Student Research Assistant",
    category: "Smart Energy Systems & Infrastructure Resilience",
    date: "December 2025 – April 2026",
    tools: ["MATLAB", "Monte Carlo", "Risk Modeling", "Resilience"],
    summary: "Supported infrastructure resilience research using probabilistic modeling, recovery concepts, simulation, literature review, and technical diagrams.",
    bullets: ["Studied uncertainty, cascading failures, and recovery.", "Worked with Monte Carlo and resilience modeling concepts.", "Translated research methods into computational and visual workflows."],
    detail: "/research",
  },
  {
    id: "rasam",
    title: "Rasam",
    category: "Front-End & Back-End Developer",
    date: "December 2025 – February 2026",
    tools: ["Frontend", "Backend", "CRUD", "GitHub", "Agile"],
    summary: "Supported full-stack application development, client-server communication, debugging, and feature delivery.",
    bullets: ["Implemented CRUD functionality.", "Connected frontend components to backend services.", "Participated in planning, debugging, and iterative development."],
  },
  {
    id: "myhomework",
    title: "MyHomeworkRewards",
    category: "Course Developer & Web Programmer",
    date: "February 2025 – April 2025",
    tools: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    summary: "Built interactive Grade 12 Data Management lesson pages with an emphasis on accessibility and clear learning experiences.",
    bullets: ["Developed curriculum-aligned interactive lessons.", "Used responsive web technologies and visual examples.", "Focused on accessibility and student engagement."],
  },
];

const leadership: CardItem[] = [
  { id:"enactus", title:"SkillSeries Ambassador & Enactus Pitcher", category:"Enactus Ontario Tech", date:"2025 – Present", tools:["Public Speaking","Entrepreneurship","Leadership"], summary:"Represented Ontario Tech through entrepreneurship programming and competitive pitching.", bullets:["Contributed to SkillSeries entrepreneurship programming.","Represented Ontario Tech at Enactus competitions.","Helped the team earn 2nd Runner-Up in the TD Entrepreneurship Challenge."] },
  { id:"orientation", title:"Senior Orientation Leader", category:"Ontario Tech University", date:"2024 – Present", tools:["Leadership","Mentorship","Communication"], summary:"Helped welcome incoming students and supported orientation volunteers and campus transition.", bullets:["Led orientation activities.","Mentored newer student leaders.","Connected students with resources and community."] },
  { id:"peer", title:"Peer Mentor", category:"Ontario Tech University", date:"2025 – 2026", tools:["Mentorship","Student Support","Community"], summary:"Supported students navigating academics, engineering, and university life.", bullets:["Provided peer guidance.","Connected students to campus supports.","Built an inclusive mentoring environment."] },
  { id:"cppnorth", title:"CppNorth Volunteer", category:"Canadian C++ Conference", date:"July 2025", tools:["Networking","Volunteering","Professional Development"], summary:"Volunteered at a Canadian C++ conference and engaged with the professional software community.", bullets:["Supported conference activities.","Connected with developers and speakers.","Expanded exposure to professional software engineering."] },
];


const credentials = [
  { title: "AI Equity Data Challenge — Top 5", issuer: "TECHNATION Canada", date: "Issued November 26, 2025", status: "Achievement", description: "Placed in the Top 5 of TECHNATION Canada's AI Equity Data Student Challenge." },
  { title: "Smart Communities Challenge — Recognition of Participation", issuer: "Brilliant Catalyst at Ontario Tech University · Earth District", date: "Issued March 16, 2026", status: "Credential", description: "Recognition for participation in the 2026 Earth District: Smart Communities Challenge." },
  { title: "Welfare Pet Food and Supplies Corp. Customer Experience Brief", issuer: "Riipen Labs", date: "Completed August 28, 2026", status: "Project Credential", description: "Completed an employer project demonstrating product, market-positioning, strategic-planning, mockup, and customer-experience skills." },
  { title: "Seize the Moment: Software Development Training Completion", issuer: "Brilliant Catalyst at Ontario Tech University", date: "Issued January 13, 2025", status: "Training", description: "Completed software development training covering software technologies, development methodologies, and foundational coding skills." },
  { title: "IBM Fundamentals Certificate", issuer: "IBM", date: "In progress", status: "In Progress", description: "Currently working toward completion; the verified credential will be added when earned." },
];

const skillGroups = [
  ["Software Engineering", ["JavaScript", "TypeScript", "React", "Next.js", "React Native", "Node.js", "Java", "C++", "C#", "Git/GitHub", "API Development"]],
  ["AI, ML & Data", ["Python", "Pandas", "scikit-learn", "Machine Learning", "Data Visualization", "SQL", "Grounded AI Workflows"]],
  ["Research & Simulation", ["MATLAB", "Simulink", "HOMER Pro", "Monte Carlo Simulation", "Digital Twins", "Resilience Modeling", "Optimization"]],
  ["Product & Collaboration", ["Agile SDLC", "Technical Documentation", "Research Communication", "UX", "Public Speaking", "Team Leadership"]],
];

export default function Home() {
  const [selected, setSelected] = useState<CardItem | null>(null);
  return (
    <main className="min-h-screen bg-[#fbf8ff] text-[#25113f]">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-purple-200/70 blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-96 w-96 rounded-full bg-fuchsia-100 blur-3xl" />
      </div>

      <nav className="sticky top-0 z-50 border-b border-purple-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <a href="#top" className="font-serif text-2xl font-bold">Zainab<span className="text-purple-600">.</span></a>
          <div className="hidden items-center gap-5 text-sm font-semibold text-purple-800 lg:flex">
            <a href="#research">Research</a><a href="#projects">Projects</a><a href="#experience">Experience</a>
            <a href="#leadership">Leadership</a><a href="#credentials">Credentials</a><a href="#skills">Skills</a><a href="#connect">Connect</a>
          </div>
          <a href={links.resume} target="_blank" className="rounded-full bg-purple-700 px-5 py-2 text-sm font-bold text-white">Resume</a>
        </div>
      </nav>

      <section id="top" className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-[1.25fr_.75fr] md:px-8 md:py-28">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-semibold text-purple-700 shadow-sm">Software Engineering · Applied Research · AI/ML</p>
          <h1 className="font-serif text-5xl font-bold leading-[1.05] md:text-7xl">I build software and intelligent systems for <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">real-world problems.</span></h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-purple-950/70">I&apos;m Zainab Lawal, a Software Engineering student at Ontario Tech University. My work spans resilient energy infrastructure and digital twins, machine learning, cybersecurity, data products, and full-stack applications.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full bg-purple-700 px-7 py-4 font-bold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1">Explore My Work</a>
            <Link href="/research" className="rounded-full border border-purple-200 bg-white px-7 py-4 font-bold text-purple-800 transition hover:-translate-y-1">Research Case Study</Link>
            <a href={links.github} target="_blank" className="rounded-full border border-purple-200 bg-white px-7 py-4 font-bold text-purple-800">GitHub</a>
            <a href={links.linkedin} target="_blank" className="rounded-full border border-purple-200 bg-white px-7 py-4 font-bold text-purple-800">LinkedIn</a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-sm">
          <div className="rounded-[2rem] border border-purple-100 bg-white p-4 shadow-2xl">
            <Image src="/profile.png" alt="Zainab Lawal" width={500} height={500} className="rounded-[1.5rem] object-cover" priority />
            <div className="mt-4 rounded-2xl bg-purple-50 p-5">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-purple-500">Current focus</p>
              <p className="mt-2 font-bold">Applied ML, software systems, and resilient infrastructure research.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="research" className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-purple-950 p-8 text-white shadow-xl md:p-12">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-purple-300">Featured Research</p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[1.25fr_.75fr]">
            <div>
              <h2 className="font-serif text-4xl font-bold md:text-5xl">Resilient Multi-Generation Energy Systems</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-purple-100">Researching interconnected systems that supply electricity, freshwater, hydrogen, and cooling. My work connects digital-twin simulation, optimization, probabilistic resilience assessment, uncertainty analysis, and technical visualization.</p>
              <Link href="/research" className="mt-7 inline-block rounded-full bg-white px-6 py-3 font-bold text-purple-900">Explore the research →</Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["Digital Twin","Optimization","Multi-Service Resilience","Monte Carlo","Fault Trees","Techno-Economic Analysis"].map(x=><div key={x} className="rounded-2xl bg-white/10 p-4 font-semibold">{x}</div>)}
            </div>
          </div>
        </div>
      </section>

      <Section title="Featured Technical Projects" subtitle="Four projects that show how I approach AI, data, cybersecurity, simulation, and software engineering." id="projects" items={featuredProjects} onSelect={setSelected} featured />
      <Section title="Hackathons & Competitions" subtitle="Team builds created through rapid prototyping, technical competitions, and problem-focused challenges." id="hackathons" items={hackathons} onSelect={setSelected} />
      <div className="mx-auto max-w-7xl px-6 md:px-8"><div className="flex justify-center"><a href={links.devpost} target="_blank" className="rounded-full border border-purple-200 bg-white px-6 py-3 font-bold text-purple-800 shadow-sm">View my Devpost portfolio →</a></div></div>
      <Section title="Experience" subtitle="Research and software roles where I applied engineering, development, and technical communication." id="experience" items={experience} onSelect={setSelected} />
      <Section title="Leadership & Community" subtitle="Experiences that strengthened how I lead, communicate, mentor, and represent technical work." id="leadership" items={leadership} onSelect={setSelected} />


      <section id="credentials" className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <p className="text-center text-sm font-bold uppercase tracking-[.2em] text-purple-600">Learning & Recognition</p>
        <h2 className="mt-3 text-center font-serif text-4xl font-bold md:text-5xl">Credentials & Achievements</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center leading-7 text-purple-950/60">Verified training, challenge recognition, employer projects, and continuing professional development.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {credentials.map(item => <div key={item.title} className="rounded-3xl border border-purple-100 bg-white p-7 shadow-sm">
            <div className="flex items-start justify-between gap-3"><p className="text-xs font-bold uppercase tracking-[.14em] text-purple-600">{item.issuer}</p><span className="shrink-0 rounded-full bg-purple-50 px-3 py-1 text-xs font-bold text-purple-700">{item.status}</span></div>
            <h3 className="mt-4 font-serif text-2xl font-bold text-purple-950">{item.title}</h3>
            <p className="mt-2 text-sm font-semibold text-purple-950/50">{item.date}</p>
            <p className="mt-4 leading-7 text-purple-950/70">{item.description}</p>
          </div>)}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <p className="text-center text-sm font-bold uppercase tracking-[.2em] text-purple-600">Technical Toolkit</p>
        <h2 className="mt-3 text-center font-serif text-4xl font-bold md:text-5xl">What I work with</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {skillGroups.map(([group, items]) => <div key={group as string} className="rounded-3xl border border-purple-100 bg-white p-7 shadow-sm"><h3 className="text-xl font-bold text-purple-900">{group}</h3><div className="mt-5 flex flex-wrap gap-2">{(items as string[]).map(s=><span key={s} className="rounded-full bg-purple-50 px-3 py-2 text-sm font-semibold text-purple-700">{s}</span>)}</div></div>)}
        </div>
      </section>

      <section id="connect" className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="rounded-[2.5rem] border border-purple-100 bg-white p-8 text-center shadow-xl md:p-12">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-purple-600">Let&apos;s Connect</p>
          <h2 className="mt-3 font-serif text-4xl font-bold md:text-5xl">Continue the conversation.</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-purple-950/65">Explore my code, connect with me professionally, or view my résumé. QR codes for GitHub and LinkedIn will also live here for career-fair visitors viewing the portfolio on a laptop.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={links.github} target="_blank" className="rounded-full bg-purple-700 px-6 py-3 font-bold text-white">GitHub</a>
            <a href={links.devpost} target="_blank" className="rounded-full bg-purple-50 px-6 py-3 font-bold text-purple-800">Devpost</a>
            <a href={links.linkedin} target="_blank" className="rounded-full bg-purple-50 px-6 py-3 font-bold text-purple-800">LinkedIn</a>
            <a href={links.resume} target="_blank" className="rounded-full border border-purple-200 px-6 py-3 font-bold text-purple-800">Resume</a>
            <a href={links.email} className="rounded-full border border-purple-200 px-6 py-3 font-bold text-purple-800">Email</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-purple-100 bg-white px-8 py-8 text-center text-sm text-purple-950/55">Zainab Lawal · Software Engineering · Ontario Tech University</footer>
      {selected && <Modal item={selected} onClose={() => setSelected(null)} />}
    </main>
  );
}

function Section({title,subtitle,id,items,onSelect,featured=false}:{title:string;subtitle:string;id:string;items:CardItem[];onSelect:(item:CardItem)=>void;featured?:boolean}) {
  return <section id={id} className="mx-auto max-w-7xl px-6 py-20 md:px-8">
    <p className="text-center text-sm font-bold uppercase tracking-[.2em] text-purple-600">{featured ? "Selected Work" : id === "experience" ? "Professional Journey" : id === "leadership" ? "Beyond the Code" : "Build · Learn · Collaborate"}</p>
    <h2 className="mt-3 text-center font-serif text-4xl font-bold md:text-5xl">{title}</h2>
    <p className="mx-auto mt-4 max-w-3xl text-center leading-7 text-purple-950/60">{subtitle}</p>
    <div className="mt-12 grid gap-6 md:grid-cols-2">
      {items.map(item=><button key={item.id} onClick={()=>onSelect(item)} className={"group rounded-3xl border p-7 text-left shadow-sm transition hover:-translate-y-2 hover:shadow-xl "+(featured?"border-purple-200 bg-white":"border-purple-100 bg-white")}>
        <p className="text-xs font-bold uppercase tracking-[.14em] text-purple-600">{item.category}</p>
        <h3 className="mt-3 font-serif text-3xl font-bold text-purple-950">{item.title}</h3>
        <p className="mt-2 text-sm text-purple-950/50">{item.date}</p>
        <p className="mt-4 leading-7 text-purple-950/70">{item.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">{item.tools.slice(0,5).map(t=><span key={t} className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">{t}</span>)}</div>
        <p className="mt-6 font-bold text-purple-700">View details →</p>
      </button>)}
    </div>
  </section>
}

function Modal({item,onClose}:{item:CardItem;onClose:()=>void}) {
  return <div className="fixed inset-0 z-[100] flex items-center justify-center bg-purple-950/45 px-5 backdrop-blur-sm" onClick={onClose}>
    <div className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] bg-white p-8 shadow-2xl" onClick={e=>e.stopPropagation()}>
      <p className="text-xs font-bold uppercase tracking-[.15em] text-purple-600">{item.category}</p>
      <h3 className="mt-2 font-serif text-4xl font-bold text-purple-950">{item.title}</h3>
      <p className="mt-4 leading-8 text-purple-950/70">{item.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">{item.tools.map(t=><span key={t} className="rounded-full bg-purple-50 px-3 py-1 text-sm font-semibold text-purple-700">{t}</span>)}</div>
      <ul className="mt-7 space-y-3 text-purple-950/75">{item.bullets.map(b=><li key={b}>• {b}</li>)}</ul>
      <div className="mt-8 flex flex-wrap gap-3">
        {item.detail && <Link href={item.detail} className="rounded-full bg-purple-700 px-6 py-3 font-bold text-white">Explore case study</Link>}
        {item.link && (item.link.startsWith("/") ? <Link href={item.link} className="rounded-full bg-purple-100 px-6 py-3 font-bold text-purple-800">View project</Link> : <a href={item.link} target="_blank" className="rounded-full bg-purple-100 px-6 py-3 font-bold text-purple-800">View GitHub</a>)}
        <button onClick={onClose} className="rounded-full border border-purple-200 px-6 py-3 font-bold text-purple-800">Close</button>
      </div>
    </div>
  </div>
}
