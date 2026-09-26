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
    summary: "I built DataSage around a problem I wanted to solve with AI analytics: a generated answer can sound convincing even when the calculation behind it is wrong. The project separates deterministic data analysis from AI explanation so the evidence is established before the prose is generated.",
    bullets: [
      "Engineering flow: upload CSV/TSV/Excel → parse and validate → profile and calculate → build verified context → generate grounded explanations.",
      "Expanded the system into multi-file analysis across orders, products and refunds, including join validation and protection against double-counting.",
      "Verified case study: 32,313 unique orders, $1.94M gross revenue, 1,731/1,731 refund rows matched, and 4/4 product IDs matched.",
      "Built charts, grounded Q&A, executive summaries, evidence/limitation views, and PDF/Excel/CSV/PNG reporting.",
      "Key lesson: useful AI analytics needs an auditable calculation layer, explicit limitations, and testing—not just a chatbot interface.",
    ],
    link: "/projects/datasage",
  },
  {
    id: "sentinelml",
    title: "SentinelML",
    category: "Cybersecurity + Machine Learning",
    date: "Featured Project",
    tools: ["Machine Learning", "Cybersecurity", "IDS", "SOC Dashboard", "CIC-IDS-2017"],
    summary: "I started SentinelML to connect two sides of intrusion detection that are often separated in student projects: classifying structured network-flow data and communicating the result in a way a security analyst can actually investigate.",
    bullets: [
      "Pipeline: structured network-flow input → feature preparation → attack-category mapping → model evaluation → SOC-style alert presentation.",
      "Uses CIC-IDS-2017-oriented labels including Normal, DoS/DDoS, Brute Force, Botnet, Port Scan, Web Attack and Infiltration.",
      "Designed the dashboard around analyst-readable security events rather than exposing only opaque numeric model classes.",
      "Treats predictions as investigation signals rather than proof of malicious behaviour and keeps model claims tied to verified evaluation evidence.",
      "Key lesson: cybersecurity ML is also a communication problem—the output has to be understandable, testable, and responsibly presented.",
    ],
    link: "/projects/sentinelml",
  },
  {
    id: "careflow",
    title: "CareFlow Studio",
    category: "Software Engineering + Simulation",
    date: "Featured Project",
    tools: ["DSL", "Parser", "Interpreter", "Simulation", "Testing", "Healthcare Workflows"],
    summary: "CareFlow Studio began with a software-design question: what if complex operational workflows were represented as a language instead of being buried inside application logic? I built a custom DSL and runtime so workflow rules can be written, checked, executed, tested, and observed.",
    bullets: [
      "Language pipeline: CareFlow source → lexer/parser → AST → semantic validation → interpreter → runtime visualization.",
      "Built the language tooling and simulation layers for structured workflows, temporal behaviour, escalation logic and synthetic scenarios.",
      "Added a studio workspace with source editing, validation feedback, workflow diagrams, simulation controls and runtime visualization.",
      "Backed core behaviour with automated tests for tokenization, parsing, types, validation, interpretation and visualization.",
      "Key lesson: building a language requires thinking across syntax, semantics, state, execution, error handling, testing, and user-facing observability.",
    ],
    link: "/projects/careflow-studio",
  },
  {
    id: "skypredict",
    title: "SkyPredict",
    category: "Data Science + Machine Learning",
    date: "Featured Project",
    tools: ["Python", "scikit-learn", "Pandas", "Streamlit", "BTS Data", "Weather Data"],
    summary: "SkyPredict started with a practical ML question: how much can flight and weather information available before departure tell us about delay risk? I built the project as an end-to-end experiment, from public-data integration to leakage-aware modeling, evaluation, explainability, and an interactive app.",
    bullets: [
      "Data pipeline: 631,970 raw flights → cleaned flight records → hourly weather for 20 airports → 308,396 matched flight-weather observations with 99.98% weather matching.",
      "Engineering decision: excluded outcome-only information that would leak the answer into the model and make evaluation look better than real use.",
      "Compared Logistic Regression and Random Forest on held-out data using precision, recall, F1, ROC-AUC, confusion matrices and precision-recall behaviour.",
      "Random Forest reached 0.7427 ROC-AUC; the project also reports the 68.52% not-delayed class balance so accuracy is not presented without context.",
      "Built a three-part Streamlit experience for project context, prediction, and model results/insights.",
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
    summary: "A team hackathon build exploring how a private, hyper-local digital community could help Muslim stay-at-home mothers and homemakers find nearby connection and support without turning the experience into another public social network.",
    bullets: ["Product direction: invite-only onboarding, local event discovery, small support pods, chat, rewards, and privacy-conscious community flows.", "System design: Next.js + TypeScript on the frontend, with Supabase Auth, PostgreSQL, Realtime and Storage supporting identity, data and live community features.", "Location experience: MapLibre/OpenFreeMap supports nearby discovery while keeping the product centered on community rather than a generic map.", "My role: partnered with the team on the TechNisa build and contributed to bringing the product experience together under hackathon time constraints."],
    link: "https://github.com/imankamrann/TechNisa",
  },
  {
    id: "equity-decoder",
    title: "Equity Decoder",
    category: "TECHNATION Canada AI Equity Challenge",
    date: "Top 5 · AI Equity Data Student Challenge 2025",
    tools: ["Python", "FastAPI", "Gemini", "SpaCy", "Chrome Extension"],
    summary: "A bilingual AI-powered Chrome extension created around a practical hiring problem: potentially exclusionary language can be easy to miss when a job posting is written or reviewed quickly.",
    bullets: ["My role: Frontend and UX Lead on a three-person team, responsible for turning the analysis into a clear browser experience.", "Engineering flow: job-posting text moves from the Chrome extension into AI/NLP analysis and returns an Equity Score, flagged language, and more inclusive alternatives.", "Design decision: present the reasoning as actionable feedback rather than only returning a pass/fail label.", "Outcome: selected as a Top 5 project in TECHNATION Canada's 2025 AI Equity Data Student Challenge."],
    link: "/projects/equity-decoder",
  },
  {
    id: "newleaf",
    title: "NewLeaf",
    category: "Hack the Valley",
    date: "Hackathon Project",
    tools: ["React Native", "Node.js", "Firebase", "Gemini"],
    summary: "A hackathon project built around the experience of arriving somewhere new and having important settlement information spread across unfamiliar services, websites, and community resources.",
    bullets: ["Product approach: bring practical newcomer guidance into one mobile companion rather than asking users to search across disconnected sources.", "Engineering approach: combined a React Native interface, Node.js services, Firebase, and Gemini-powered guidance in one prototype.", "Design focus: kept empathy and accessibility central so the technology supported the newcomer journey instead of adding another complicated system.", "Hackathon learning: practiced prioritizing a useful end-to-end experience while making technical trade-offs under a short build window."],
    link: "/projects/newleaf",
  },
  {
    id: "battery-soh",
    title: "Battery SOH Chatbot",
    category: "Design & Analysis of Algorithms",
    date: "2nd Place",
    tools: ["Python", "Machine Learning", "React Native", "Node.js", "Gemini"],
    summary: "A battery State-of-Health project that moved beyond training a model by connecting the prediction to a mobile experience where a user could understand and discuss the result.",
    bullets: ["ML layer: built a voltage-feature prediction workflow in Python and evaluated the regression model with R², MSE and MAE rather than relying on a visual demo alone.", "Application layer: connected model output to a React Native interface and Node.js service so predictions could be used outside the notebook.", "Explanation layer: incorporated Gemini-assisted guidance to make battery-health output easier to interpret.", "Outcome: earned 2nd place in the course competition."],
    link: "/projects/battery-soh",
  },
  {
    id: "carboniq",
    title: "CarbonIQ",
    category: "Full-Stack Sustainability",
    date: "Team Project",
    tools: ["Node.js", "Express", "MySQL", "Chart.js", "OpenWeather"],
    summary: "A sustainability-focused full-stack project that turns everyday activity data into a carbon-footprint dashboard, making environmental impact easier to track over time instead of leaving it as an abstract number.",
    bullets: ["Full-stack flow: MySQL stores activity data, Node.js/Express handles application logic and APIs, and the frontend turns the records into usable feedback.", "Visualization: Chart.js communicates category and trend information so users can see how their activity patterns change.", "External context: OpenWeather adds environmental data to the application experience.", "Engineering learning: connected sustainability goals with database design, APIs, third-party data, and visual reporting."],
    link: "/projects/carboniq",
  },
];

const additionalProjects: CardItem[] = [
  {
    id: "vehicle-digital-twin",
    title: "Software-Defined Vehicle Data Pipeline",
    category: "Digital Twin + Vehicle Systems",
    date: "Engineering Project",
    tools: ["Python", "FastAPI", "Docker", "Eclipse Zenoh", "Eclipse Ditto"],
    summary: "A distributed software-defined vehicle project exploring how live or simulated telemetry can move through software services and stay synchronized with a digital representation of the vehicle.",
    bullets: ["Data path: vehicle telemetry → Eclipse Zenoh messaging → FastAPI services → Eclipse Ditto digital twin.", "Engineering focus: connected distributed communication, APIs and containerized services instead of treating the digital twin as a standalone visualization.", "Scenario layer: explored diagnostics, fault injection and networked vehicle behaviour to see how changes in the simulated system propagate through the pipeline.", "Why it matters: demonstrates how backend software, messaging and digital-twin concepts can work together in a modern vehicle architecture."],
    link: "https://github.com/ayaanahmed05/vehicular-digital-twin-pipeline",
  },
  {
    id: "evacuation",
    title: "Monte Carlo Evacuation Simulator",
    category: "Simulation + Risk Analysis",
    date: "Simulation Project",
    tools: ["JavaScript", "HTML", "CSS", "Monte Carlo", "Data Visualization"],
    summary: "A browser-based risk simulation that uses repeated randomized trials to explore a question a single deterministic run cannot answer well: how evacuation outcomes can vary when conditions are uncertain.",
    bullets: ["Simulation logic: repeated Monte Carlo trials generate a distribution of possible outcomes rather than one fixed answer.", "Interface: built the experience in JavaScript, HTML and CSS so the simulation can be explored interactively in the browser.", "Communication: visualized the results to make variability and risk easier to interpret.", "Engineering learning: strengthened the connection between probabilistic modeling, repeated simulation and decision-oriented visualization."],
  },
  {
    id: "distance-sensing",
    title: "Distance-Sensing Alert System",
    category: "Embedded + Inclusive Design",
    date: "Hardware Project",
    tools: ["Arduino", "C/C++", "Ultrasonic Sensor", "LED", "Buzzer"],
    summary: "An embedded prototype built around a simple accessibility idea: sense how close an object is and translate that physical measurement into feedback a user can notice quickly.",
    bullets: ["Input: an ultrasonic sensor continuously measures distance from nearby objects.", "Decision logic: C/C++ threshold logic on the Arduino converts sensor readings into different alert behaviour.", "Output: LED and buzzer feedback turns the measurement into visual and audible cues.", "Design focus: using more than one feedback channel reinforced inclusive-design thinking alongside hardware/software integration."],
  },
  {
    id: "password-manager",
    title: "Password Manager",
    category: "Java + Security Fundamentals",
    date: "Software Project",
    tools: ["Java", "SHA-256", "OOP", "Authentication"],
    summary: "A Java security project used to practice how credential-management features can be organized around authentication, hashing concepts, and maintainable object-oriented code.",
    bullets: ["Software design: separated password-management responsibilities using object-oriented Java structures rather than placing the workflow in one monolithic class.", "Security focus: worked with SHA-256 and authentication concepts while learning the difference between storing sensitive information and safely transforming/verifying it.", "Application logic: structured credential-management operations around clear user and authentication flows.", "Engineering learning: connected foundational security ideas with practical Java program design."],
    link: "https://github.com/Zlawal79/Password-manager",
  },
];

const experience: CardItem[] = [
  {
    id: "usrf",
    title: "Simulation-Based Resiliency Analysis of Hybrid Energy Systems",
    category: "Ontario Tech University · Research Co-op",
    date: "May 2025 – Present",
    tools: ["MATLAB", "Simulink", "HOMER Pro", "MG-OPT", "Python/Octave", "SOEC/SOFC", "Research"],
    summary: "Ongoing research co-op focused on simulation-based resiliency analysis of hybrid multi-generation energy systems and their application to sustainable rural communities. The work connects electricity, freshwater, hydrogen, cooling, storage, renewable and alternative energy pathways, digital twins, optimization, probabilistic resilience, uncertainty, sustainability, and software-based engineering analysis, with Gbamu-Gbamu, Nigeria as a major African case study.",
    bullets: ["Developed and evaluated MATLAB/Simulink digital-twin, MG-OPT, HOMER Pro, Python and Octave simulation/optimization workflows.", "Studied multi-generation interactions across electricity, freshwater, hydrogen, heating/cooling, storage, SOEC/SOFC, PEM electrolysis, MED desalination, thermal recovery, waste-to-energy and hybrid pathways.", "Extended the work into multi-service resilience using disturbance/recovery scenarios, fault-tree reasoning, probabilistic system states and Monte Carlo uncertainty analysis.", "Connected technical modeling to sustainability, environmental/resource trade-offs, lifecycle and techno-economic analysis, dashboards, reports, conference presentations and public-facing engineering communication."],
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

const conferenceHighlights: CardItem[] = [
  {
    id: "sege-2026",
    title: "IEEE SEGE 2026 — Research Presenter · Student Innovation Competition Awards",
    category: "14th International Conference on Smart Energy Grid Engineering",
    date: "August 19–21, 2026 · Ontario Tech University",
    tools: ["Research Presentation", "Energy Systems", "Simulation", "Resilience", "Technical Communication"],
    summary: "Presented “Analysis and Simulation of Integrated Multi-Generation Micro-Energy Systems in Rural African Communities” with Dr. Hossam A. Gabbar at IEEE SEGE 2026. The official conference site lists my project under the Student Innovation Competition Awards, recognizing my participation in the competition and the research presented.",
    bullets: [
      "Presented an integrated multi-generation energy-system study centered on resilient and sustainable infrastructure for rural African communities.",
      "Connected software simulation and engineering analysis with electricity, hydrogen, freshwater, heating/cooling, storage, SOEC/SOFC pathways, thermal recovery, and resource interdependencies.",
      "Used Gbamu-Gbamu, Ogun State, Nigeria as the primary rural-community case study.",
      "Communicated the work to an interdisciplinary smart-energy audience spanning grid engineering, renewables, storage, digital systems, sustainability, and nuclear/plasma research."
    ],
    link: "https://www.ieee-sege.com",
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
  ["Research & Simulation", ["MATLAB", "Simulink", "HOMER Pro", "MG-OPT", "Octave", "Monte Carlo Simulation", "Fault Tree Analysis", "Digital Twins", "Resilience Modeling", "Optimization", "SOEC / SOFC", "Hydrogen Systems", "Techno-Economic Analysis"]],
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
            <a href="#research">Research</a><a href="#projects">Projects</a><a href="#conference">Conferences</a><a href="#experience">Experience</a>
            <a href="#leadership">Leadership</a><a href="#credentials">Credentials</a><a href="#skills">Skills</a><a href="#connect">Connect</a>
          </div>
          <a href={links.resume} target="_blank" className="rounded-full bg-purple-700 px-5 py-2 text-sm font-bold text-white">Resume</a>
        </div>
      </nav>

      <section id="top" className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-[1.25fr_.75fr] md:px-8 md:py-28">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-semibold text-purple-700 shadow-sm">Software Engineering · Applied Research · AI/ML</p>
          <p className="mb-5 text-base font-bold text-purple-700">Seeking Winter 2027 and Summer 2027 co-op opportunities</p>
          <h1 className="font-serif text-5xl font-bold leading-[1.05] md:text-7xl">I build software and intelligent systems for <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">real-world problems.</span></h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-purple-950/70">I&apos;m Zainab Lawal, a Software Engineering student at Ontario Tech University. My work spans resilient energy infrastructure and digital twins, machine learning, cybersecurity, data products, and full-stack applications. I&apos;m currently seeking Winter 2027 and Summer 2027 co-op opportunities.</p>
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
              <p className="mt-5 max-w-3xl text-lg leading-8 text-purple-100">Researching interconnected systems that supply electricity, freshwater, hydrogen, heating and cooling. My work connects SOEC and PEM electrolysis, SOFC/fuel-cell pathways, MED desalination, thermal recovery, waste-to-energy, storage, digital-twin simulation, optimization, probabilistic resilience, uncertainty, sustainability, and techno-economic analysis.</p>
              <Link href="/research" className="mt-7 inline-block rounded-full bg-white px-6 py-3 font-bold text-purple-900">Explore the research →</Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["Digital Twin","SOEC / SOFC","Hydrogen Systems","Multi-Service Resilience","Monte Carlo","Techno-Economic Analysis"].map(x=><div key={x} className="rounded-2xl bg-white/10 p-4 font-semibold">{x}</div>)}
            </div>
          </div>
        </div>
      </section>

      <Section title="Featured Technical Projects" subtitle="Four projects that show how I approach AI, data, cybersecurity, simulation, and software engineering." id="projects" items={featuredProjects} onSelect={setSelected} featured />
      <Section title="Hackathons & Competitions" subtitle="Team builds created through rapid prototyping, technical competitions, and problem-focused challenges." id="hackathons" items={hackathons} onSelect={setSelected} />
      <div className="mx-auto max-w-7xl px-6 md:px-8"><div className="flex justify-center"><a href={links.devpost} target="_blank" className="rounded-full border border-purple-200 bg-white px-6 py-3 font-bold text-purple-800 shadow-sm">View my Devpost portfolio →</a></div></div>
      <Section title="Additional Engineering Projects" subtitle="Earlier builds that show breadth across digital twins, simulation, embedded systems, and software security." id="additional-projects" items={additionalProjects} onSelect={setSelected} />
      <Section title="Conference & Research Recognition" subtitle="Research presentation and student innovation recognition at an international smart-energy conference." id="conference" items={conferenceHighlights} onSelect={setSelected} />
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
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-purple-950/65">Explore my code, connect with me professionally, or view my résumé. For career-fair visitors, the QR codes below open my GitHub and LinkedIn directly.</p>
          <div className="mx-auto mt-8 grid max-w-xl gap-5 sm:grid-cols-2">
            <a href={links.github} target="_blank" className="rounded-3xl border border-purple-100 bg-purple-50 p-5 transition hover:-translate-y-1 hover:shadow-lg">
              <img src={"https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=" + encodeURIComponent(links.github)} alt="QR code for Zainab Lawal's GitHub" className="mx-auto h-44 w-44 rounded-xl bg-white p-2" />
              <p className="mt-4 font-bold text-purple-900">Scan for GitHub</p>
              <p className="mt-1 text-sm text-purple-950/55">@Zlawal79</p>
            </a>
            <a href={links.linkedin} target="_blank" className="rounded-3xl border border-purple-100 bg-purple-50 p-5 transition hover:-translate-y-1 hover:shadow-lg">
              <img src={"https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=" + encodeURIComponent(links.linkedin)} alt="QR code for Zainab Lawal's LinkedIn" className="mx-auto h-44 w-44 rounded-xl bg-white p-2" />
              <p className="mt-4 font-bold text-purple-900">Scan for LinkedIn</p>
              <p className="mt-1 text-sm text-purple-950/55">Zainab Lawal</p>
            </a>
          </div>
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
