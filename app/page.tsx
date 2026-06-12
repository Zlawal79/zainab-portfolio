"use client";

import Image from "next/image";
import { useState } from "react";

const links = {
  github: "https://github.com/Zlawal79",
  linkedin: "https://www.linkedin.com/in/zainab-lawal-4528a4313/",
  email: "mailto:Zainablawal714@gmail.com",
  resume: "/resume.pdf",
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
};

const experience: CardItem[] = [
  {
    id: "smart-energy-usrf",
    title: "Smart Energy Systems Research Assistant",
    category: "USRF Co-op | Full-Time",
    date: "May 2026 – August 2026",
    tools: ["MATLAB", "HOMER Pro", "MG-OPT", "RE-LLM", "HTML", "CSS", "JavaScript", "Research"],
    summary: "Researching integrated smart energy systems involving optimization, hydrogen production, clean water, cooling, and multi-generation energy applications.",
    bullets: [
      "Conducted research on integrated energy systems, energy optimization, sustainability, and energy resilience.",
      "Evaluated RE-LLM and MG-OPT frameworks for resilient and intelligent energy system research.",
      "Supported MATLAB and HOMER Pro simulation workflows for feasibility and performance testing.",
      "Defined case studies for residential, industrial, waterfront, airport, seaport, railway, farm, and transportation applications.",
      "Analyzed hydrogen production, fuel cells, electrolyzers, heating, cooling, clean water, waste treatment, EV, and FCV systems.",
      "Created dashboard-style outputs to visualize simulation results and energy performance metrics.",
      "Developed technical diagrams and workflow models to explain energy flows and system architecture.",
      "Prepared technical reports, presentations, and research documentation.",
    ],
  },
  {
    id: "smart-energy-part-time",
    title: "Student Research Assistant",
    category: "Smart Energy Systems & Infrastructure Resilience",
    date: "December 2025 – March 2026",
    tools: ["MATLAB", "Monte Carlo Simulation", "Risk Modeling", "Technical Diagrams", "Research"],
    summary: "Worked on resilience assessment, critical infrastructure modeling, disaster-impact analysis, and simulation-based research documentation.",
    bullets: [
      "Conducted literature reviews on infrastructure resilience, smart energy systems, and sustainable technologies.",
      "Designed a resilience assessment calculator for hybrid interconnected infrastructure systems.",
      "Implemented probabilistic models using wind-field decay, fragility curves, recovery modeling, and resilience metrics.",
      "Used Monte Carlo simulation logic to analyze uncertainty, cascading failures, and outage propagation.",
      "Created activity diagrams, sequence diagrams, technical diagrams, and computational workflows.",
      "Supported MATLAB-based modeling, resilience simulations, data analysis, and technical documentation.",
      "Collaborated with faculty researchers to evaluate infrastructure performance under extreme-event scenarios.",
      "Strengthened technical communication, research writing, and analytical problem-solving skills.",
    ],
  },
  {
    id: "rasam",
    title: "Rasam",
    category: "Front-End & Back-End Developer",
    date: "December 2025 – February 2026",
    tools: ["Front-End", "Back-End", "CRUD", "GitHub", "Agile", "Debugging"],
    summary: "Worked as a full-stack developer supporting application features, client-server communication, and usability improvements.",
    bullets: [
      "Designed and implemented full-stack features including Create, Read, Update, and Delete functionality.",
      "Developed user-friendly front-end components and connected them to back-end services.",
      "Managed data flow between client and server to support application functionality.",
      "Improved app stability by troubleshooting bugs and optimizing existing code.",
      "Participated in feature planning and agile development cycles.",
      "Collaborated on development tasks while strengthening practical software engineering experience.",
    ],
  },
  {
    id: "myhomeworkrewards",
    title: "MyHomeworkRewards",
    category: "Course Developer & Web Programmer",
    date: "February 2025 – April 2025",
    tools: ["HTML", "CSS", "Bootstrap", "JavaScript", "Sublime Text", "VS Code", "GitHub"],
    summary: "Created interactive Grade 12 Data Management lessons for an education technology platform focused on student engagement and accessible learning.",
    bullets: [
      "Developed curriculum-aligned lessons for Grade 12 Data Management.",
      "Created lessons on binomial, geometric, hypergeometric, and normal distributions, hypothesis testing, and confidence intervals.",
      "Built responsive and accessible lesson pages using HTML, CSS, Bootstrap, and JavaScript.",
      "Used visual examples, embedded questions, and practice activities to simplify complex math concepts.",
      "Worked in Sublime Text and Visual Studio Code to build and test lesson pages.",
      "Prioritized accessibility, intuitive layout, curriculum integration, and student engagement.",
      "Used GitHub for version control and project updates.",
    ],
    link: "https://app.myhomeworkrewards.com/lessons/Gr12/Math/Data_Management/data_management.php",
  },
];

const projects: CardItem[] = [
  {
    id: "equity-decoder",
    title: "Equity Decoder",
    category: "TECHNATION Canada AI Equity Challenge",
    date: "AI Equity Competition",
    tools: ["Python", "FastAPI", "Gemini API", "SpaCy NLP", "JavaScript", "HTML", "CSS", "Chrome Extension"],
    summary: "A bilingual AI-powered Chrome extension that analyzes job postings for bias, assigns an Equity Score, and provides inclusive rewrite suggestions.",
    bullets: [
      "Served as Frontend and UX Lead on a three-person Software Engineering team.",
      "Built a Chrome extension interface that lets users analyze highlighted job-posting text directly from the browser.",
      "Connected the frontend to a FastAPI backend using Gemini API for AI-powered bias detection.",
      "Helped design the Equity Score system to communicate inclusivity levels from 0–100.",
      "Supported detection of gendered, racialized, exclusionary, and inaccessible language.",
      "Included Canadian policy alignment with OHRC, AODA, and TEER considerations.",
      "Built dashboard-style outputs, color-coded highlights, and user-friendly feedback flows.",
      "Strengthened AI product design, frontend development, UX, teamwork, and technical pitching skills.",
    ],
    link: "https://github.com/equityDecoder/equitydecoderProject",
  },
  {
    id: "newleaf",
    title: "NewLeaf",
    category: "Hack the Valley",
    date: "Hackathon Project",
    tools: ["React Native", "Node.js", "Firebase", "Google Gemini", "AI Tools", "Mobile Development"],
    summary: "An AI-powered mobile companion that helps newcomers navigate life in a new country through checklists, cultural tips, chat support, and community resources.",
    bullets: [
      "Collaborated on a hackathon team to build a social-impact mobile app under time pressure.",
      "Developed features focused on helping newcomers feel confident, connected, and supported.",
      "Used React Native to build the mobile user interface.",
      "Used Firebase and Node.js to support backend functionality and data handling.",
      "Integrated Google Gemini and AI-powered tools for guidance and chat support.",
      "Created settlement checklists, cultural tips, and community support tools.",
      "Focused on empathy, accessibility, user experience, and technology for good.",
      "Improved teamwork, rapid prototyping, communication, and full-stack development skills.",
    ],
    link: "https://github.com/Inshalc/NewLeaf",
  },
  {
    id: "sdv-pipeline",
    title: "Software-Defined Vehicle Data Pipeline",
    category: "Digital Twin / Vehicle Systems",
    date: "Team Project",
    tools: ["Python", "FastAPI", "Docker", "Eclipse Zenoh", "Eclipse Ditto", "OpenSOVD", "Digital Twin"],
    summary: "An end-to-end software-defined vehicle data pipeline that simulates vehicle telemetry, transports data, stores digital twin state, and exposes diagnostics.",
    bullets: [
      "Built a real-time vehicle telemetry pipeline for speed, battery, temperature, RPM, and fault data.",
      "Used Eclipse Zenoh as a transport layer for vehicle signal routing.",
      "Used Eclipse Ditto as a backend digital twin to persist vehicle state and apply rules.",
      "Used FastAPI through OpenSOVD-style diagnostics to query vehicle health and active faults.",
      "Implemented controlled fault injection such as speed spikes, battery drops, and sensor freeze scenarios.",
      "Worked with Docker infrastructure to run Ditto and Zenoh services.",
      "Tested network scenarios such as delay, filtering, and message loss.",
      "Strengthened knowledge of digital twins, vehicle systems, backend APIs, diagnostics, and distributed pipelines.",
    ],
    link: "https://github.com/ayaanahmed05/vehicular-digital-twin-pipeline",
  },
  {
    id: "carboniq",
    title: "CarbonIQ",
    category: "Full-Stack Sustainability Dashboard",
    date: "Data Management Project",
    tools: ["Node.js", "Express.js", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "Chart.js", "OpenWeather API"],
    summary: "A personal carbon footprint tracker that helps users monitor, analyze, and reduce environmental impact through dashboards and reports.",
    bullets: [
      "Collaborated on a full-stack sustainability platform focused on carbon tracking.",
      "Built a dashboard for daily CO₂ emissions, categories, trends, and sustainability grading.",
      "Supported activity logging for transport, energy, food, and lifestyle activities.",
      "Used MySQL to organize users, activities, categories, suggestions, and reports.",
      "Used Node.js and Express.js to support backend API functionality.",
      "Used Chart.js and Bootstrap to create responsive dashboard-style visualizations.",
      "Included OpenWeather API integration to improve tracking accuracy.",
      "Practiced database design, full-stack development, API integration, and sustainability-focused software engineering.",
    ],
    link: "https://github.com/Inshalc/CarbonIQ",
  },
  {
    id: "battery-soh-chatbot",
    title: "Battery SOH Chatbot",
    category: "AI / Machine Learning / Competition Project",
    date: "Design and Analysis of Algorithms | 2nd Place",
    tools: ["Python", "Linear Regression", "Node.js", "Express.js", "React Native", "Expo", "Gemini API", "Machine Learning"],
    summary: "A battery health prediction and chatbot system that uses voltage-based features to predict Battery State of Health and explain battery condition.",
    bullets: [
      "Collaborated on a project that won 2nd place in a Design and Analysis of Algorithms competition.",
      "Built a machine learning pipeline for Battery State of Health prediction using voltage-related features.",
      "Used Linear Regression, feature scaling, preprocessing, and metrics such as R², MSE, and MAE.",
      "Created a backend API with Node.js and Express for battery prediction and chatbot messaging.",
      "Built a React Native mobile interface with battery input forms and chat components.",
      "Integrated Gemini API to provide battery health explanations, maintenance guidance, and technical support.",
      "Used a 60% threshold classification system to classify battery health status.",
      "Strengthened ML integration, API design, mobile development, data preprocessing, and teamwork skills.",
    ],
    link: "https://github.com/Inshalc/battery-soh-chatbot",
  },
  {
    id: "monte-carlo",
    title: "Monte Carlo Evacuation Simulator",
    category: "Simulation & Data Visualization",
    date: "School / Personal Project",
    tools: ["JavaScript", "HTML", "CSS", "Monte Carlo Simulation", "Data Visualization", "Risk Analysis"],
    summary: "A web-based evacuation simulation tool that models emergency behaviour using stochastic reaction times, queuing dynamics, and risk analysis.",
    bullets: [
      "Built a Monte Carlo simulation system for emergency evacuation scenarios.",
      "Modeled human behaviour using random reaction times and movement assumptions.",
      "Included queuing dynamics and path-based evacuation logic.",
      "Created interactive parameters to test different safety conditions.",
      "Visualized evacuation metrics such as worst-case risk and exceedance probability.",
      "Used sensitivity analysis to identify high-impact variables like occupancy and reaction time.",
    ],
  },
  {
    id: "distance-alert",
    title: "Distance-Sensing Alert System",
    category: "Accessibility-Focused Tech Project",
    date: "Hardware / Embedded Systems",
    tools: ["Arduino", "Ultrasonic Sensor", "LEDs", "Buzzer", "C/C++", "Inclusive Design"],
    summary: "An accessibility-focused alert system that uses audio and visual feedback to help users identify safe, cautious, and dangerous distances.",
    bullets: [
      "Built a real-time alert system using an ultrasonic sensor, LEDs, and a passive buzzer.",
      "Designed the project to support users with visual, hearing, or cognitive impairments.",
      "Used green, yellow, and red LED signals to represent safe, caution, and danger zones.",
      "Programmed different buzzer patterns to communicate distance warnings.",
      "Combined hardware wiring with C/C++ logic on Arduino.",
      "Focused on inclusive design and simple technology that can have meaningful impact.",
    ],
  },
  {
    id: "password-manager",
    title: "Password Manager",
    category: "Java Security Project",
    date: "Course / Personal Project",
    tools: ["Java", "SHA-256", "OOP", "GitHub", "Authentication"],
    summary: "A Java password manager focused on credential validation, secure storage concepts, authentication, and object-oriented programming.",
    bullets: [
      "Built user registration and login functionality.",
      "Used SHA-256 hashing concepts for secure credential handling.",
      "Applied object-oriented programming principles in Java.",
      "Implemented validation logic for safer user inputs.",
      "Used Git/GitHub for project version control.",
      "Strengthened authentication and software security fundamentals.",
    ],
  },
];

const leadership: CardItem[] = [
  {
    id: "enactus",
    title: "SkillSeries Ambassador & Enactus Pitcher",
    category: "Enactus Ontario Tech",
    date: "August 2025 – Present",
    tools: ["Public Speaking", "Team Leadership", "Entrepreneurship", "Pitching", "Stakeholder Engagement"],
    summary: "Represented Ontario Tech through Enactus competitions and contributed to SkillSeries, a student-led entrepreneurship initiative.",
    bullets: [
      "Contributed to SkillSeries, a student-led initiative helping aspiring entrepreneurs transform ideas into ventures.",
      "Served as a SkillSeries Ambassador promoting entrepreneurship, mentorship, networking, and professional development.",
      "Represented Ontario Tech at regional and national Enactus competitions.",
      "Delivered competitive pitches to judges, industry professionals, and business leaders.",
      "Helped Ontario Tech earn 2nd Runner-Up in the TD Entrepreneurship Challenge.",
      "Strengthened public speaking, communication, teamwork, entrepreneurship, and impact-measurement skills.",
      "Learned to step outside my technical comfort zone and think more entrepreneurially.",
    ],
  },
  {
    id: "orientation-leader",
    title: "Senior Orientation Leader",
    category: "Ontario Tech University",
    date: "August 2024 – Present",
    tools: ["Leadership", "Communication", "Mentorship", "Event Support", "Teamwork"],
    summary: "Welcomed incoming students, supported their transition to university, and mentored orientation volunteers.",
    bullets: [
      "Supported incoming students during their first steps into university life.",
      "Led orientation activities and helped create a welcoming campus environment.",
      "Mentored and supported new Orientation Leaders.",
      "Helped students find resources, build confidence, and feel connected.",
      "Strengthened communication, organization, leadership, and problem-solving skills.",
      "Contributed to a positive first-year experience for Ontario Tech students.",
    ],
  },
  {
    id: "peer-mentor",
    title: "Peer Mentor",
    category: "Ontario Tech University",
    date: "2025 – 2026",
    tools: ["Mentorship", "Student Support", "Academic Guidance", "Community Building"],
    summary: "Supported students through academic adjustment, university transition, and personal development.",
    bullets: [
      "Mentored students navigating engineering and university life.",
      "Provided academic and personal guidance to help students adjust.",
      "Connected students with campus resources and support systems.",
      "Helped create a supportive and inclusive environment.",
      "Built stronger listening, communication, and mentoring skills.",
      "Encouraged students to grow both inside and outside the classroom.",
    ],
  },
  {
    id: "cppnorth",
    title: "CppNorth Volunteer",
    category: "Canadian C++ Conference",
    date: "July 2025",
    tools: ["Volunteering", "C++ Community", "Networking", "Professional Development"],
    summary: "Volunteered at CppNorth, connecting with professionals and learning about real-world C++ applications and inclusive tech spaces.",
    bullets: [
      "Volunteered at one of Canada’s leading C++ conferences.",
      "Connected with software professionals, speakers, students, and volunteers.",
      "Learned about real-world C++ applications and technical problem-solving.",
      "Attended professional development sessions on communication and confidence.",
      "Gained exposure to inclusive technology communities and women in tech representation.",
      "Strengthened networking, confidence, and professional communication skills.",
    ],
  },
  {
    id: "women-engineering",
    title: "Women in Engineering",
    category: "STEM Community",
    date: "Volunteer / Member",
    tools: ["Outreach", "STEM Advocacy", "Mentorship", "Community"],
    summary: "Supported initiatives encouraging women and underrepresented students in engineering and technology.",
    bullets: [
      "Participated in outreach and student engagement activities.",
      "Supported representation and belonging in STEM spaces.",
      "Helped encourage students exploring engineering pathways.",
      "Built community through mentorship and shared experiences.",
      "Strengthened leadership and communication in STEM-focused spaces.",
      "Promoted inclusion and support for underrepresented students in engineering.",
    ],
  },
  {
    id: "black-excellence",
    title: "Black Excellence Award",
    category: "Award",
    date: "Leadership & Excellence",
    tools: ["Leadership", "Community Impact", "Academic Growth", "Excellence"],
    summary: "Recognized for leadership, excellence, community involvement, and positive impact.",
    bullets: [
      "Recognized for leadership and excellence.",
      "Represents academic, community, and personal growth.",
      "Highlights commitment to involvement beyond the classroom.",
      "Reflects dedication to leadership, mentorship, and service.",
      "Strengthened motivation to continue supporting student communities.",
      "Represents impact across academics, volunteering, and leadership.",
    ],
  },
];

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "React Native", "Node.js",
  "Python", "Java", "C++", "C#", "MySQL", "MongoDB", "MATLAB", "Firebase",
  "GitHub", "Tailwind CSS", "Bootstrap", "API Development", "Data Visualization",
  "Monte Carlo Simulation", "Simulation Modeling", "Agile SDLC", "Technical Documentation",
];

export default function Home() {
  const [selected, setSelected] = useState<CardItem | null>(null);

  return (
    <main className="min-h-screen bg-[#fbf8ff] text-[#25113f]">
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-purple-200 blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-96 w-96 rounded-full bg-fuchsia-100 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[30%] h-96 w-96 rounded-full bg-violet-100 blur-3xl" />
      </div>

      <nav className="sticky top-0 z-50 border-b border-purple-100 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <h1 className="font-serif text-2xl font-bold">Zainab<span className="text-purple-600">.</span></h1>
          <div className="hidden gap-6 rounded-full bg-purple-50 px-6 py-3 text-sm font-medium text-purple-700 md:flex">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#leadership">Leadership</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-8 py-24 md:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-semibold text-purple-700 shadow-sm">
            Software Engineering Student @ Ontario Tech University
          </p>
          <h2 className="font-serif text-5xl font-bold leading-tight md:text-7xl">
            Hi, I&apos;m Zainab.
            <span className="block bg-gradient-to-r from-purple-900 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
              I build thoughtful software with impact.
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-purple-900/70">
            I&apos;m a Software Engineering student, research assistant, full-stack developer,
            and student leader interested in AI, smart energy systems, accessibility,
            sustainability, and community-focused technology.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#experience" className="rounded-full bg-purple-700 px-7 py-4 font-bold text-white shadow-lg shadow-purple-200 transition hover:scale-105 hover:bg-purple-800">
              View Experience
            </a>
            <a href={links.resume} target="_blank" className="rounded-full border border-purple-200 bg-white px-7 py-4 font-bold text-purple-800 shadow-sm transition hover:scale-105 hover:bg-purple-50">
              View Resume
            </a>
          </div>
          <div className="mt-6 flex gap-4 font-semibold text-purple-700">
            <a href={links.github} target="_blank">GitHub</a>
            <a href={links.linkedin} target="_blank">LinkedIn</a>
            <a href={links.email}>Email</a>
          </div>
        </div>

        <div className="group relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-purple-300 to-fuchsia-200 opacity-80 blur-2xl transition group-hover:opacity-100" />
          <div className="relative rounded-[2rem] border border-purple-100 bg-white p-4 shadow-2xl transition hover:-translate-y-2">
            <Image src="/profile.png" alt="Zainab Lawal profile photo" width={500} height={500} className="rounded-[1.5rem] object-cover" priority />
            <div className="mt-4 rounded-2xl bg-purple-50 p-4">
              <p className="text-sm text-purple-500">Currently building</p>
              <p className="font-bold text-purple-950">Research dashboards, AI tools, and full-stack applications</p>
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <Section title="Experience" subtitle="Professional, research, and development roles." id="experience" items={experience} onSelect={setSelected} />
      <Section title="Projects, Hackathons & Competitions" subtitle="AI, web, simulation, accessibility, sustainability, and secure software projects." id="projects" items={projects} onSelect={setSelected} />
      <Section title="Leadership, Awards & Community" subtitle="Campus involvement, mentorship, entrepreneurship, volunteering, and recognition." id="leadership" items={leadership} onSelect={setSelected} />

      <section id="skills" className="mx-auto max-w-7xl px-8 py-20">
        <h2 className="text-center font-serif text-4xl font-bold text-purple-950">Tech I Work With</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full border border-purple-100 bg-white px-5 py-3 font-medium text-purple-700 shadow-sm transition hover:scale-110 hover:bg-purple-700 hover:text-white">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <footer id="contact" className="bg-white px-8 py-20 text-center">
        <h2 className="font-serif text-4xl font-bold text-purple-950">Let&apos;s build something meaningful.</h2>
        <p className="mt-4 text-purple-900/70">Open to software, data, research, and engineering co-op opportunities.</p>
        <div className="mt-8 flex justify-center gap-4">
          <a href={links.github} target="_blank" className="rounded-full bg-purple-700 px-6 py-3 font-bold text-white transition hover:scale-105">GitHub</a>
          <a href={links.linkedin} target="_blank" className="rounded-full bg-purple-50 px-6 py-3 font-bold text-purple-800 transition hover:scale-105">LinkedIn</a>
          <a href={links.resume} target="_blank" className="rounded-full border border-purple-200 bg-white px-6 py-3 font-bold text-purple-800 transition hover:scale-105">Resume</a>
        </div>
      </footer>

      {selected && <Modal item={selected} onClose={() => setSelected(null)} />}
    </main>
  );
}

function Stats() {
  return (
    <section className="mx-auto grid max-w-6xl gap-5 px-8 py-8 md:grid-cols-4">
      {[
        ["4", "Work Experiences"],
        ["10+", "Projects"],
        ["500+", "Volunteer Hours"],
        ["5+", "Leadership Roles"],
      ].map(([num, label]) => (
        <div key={`${num}-${label}`} className="rounded-3xl border border-purple-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
          <h3 className="font-serif text-4xl font-bold text-purple-800">{num}</h3>
          <p className="mt-2 text-purple-900/70">{label}</p>
        </div>
      ))}
    </section>
  );
}

function Section({ title, subtitle, id, items, onSelect }: {
  title: string;
  subtitle: string;
  id: string;
  items: CardItem[];
  onSelect: (item: CardItem) => void;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-8 py-20">
      <h2 className="text-center font-serif text-4xl font-bold text-purple-950 md:text-5xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-purple-900/60">{subtitle}</p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <button key={item.id} onClick={() => onSelect(item)} className="group rounded-3xl border border-purple-100 bg-white p-7 text-left shadow-sm transition hover:-translate-y-2 hover:border-purple-300 hover:bg-purple-700 hover:text-white hover:shadow-xl">
            <p className="mb-3 text-sm font-bold text-purple-600 group-hover:text-purple-100">{item.category}</p>
            <h3 className="font-serif text-3xl font-bold">{item.title}</h3>
            <p className="mt-2 text-sm opacity-70">{item.date}</p>
            <p className="mt-4 leading-7 opacity-80">{item.summary}</p>
            <p className="mt-5 font-bold">Click to learn more →</p>
          </button>
        ))}
      </div>
    </section>
  );
}

function Modal({ item, onClose }: { item: CardItem; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-purple-950/40 px-6 backdrop-blur-sm">
      <div className="max-h-[90vh] max-w-3xl overflow-y-auto rounded-[2rem] border border-purple-100 bg-white p-8 shadow-2xl">
        <p className="text-sm font-bold text-purple-600">{item.category}</p>
        <h3 className="mt-2 font-serif text-3xl font-bold text-purple-950">{item.title}</h3>
        <p className="mt-1 text-sm text-purple-500">{item.date}</p>
        <p className="mt-5 leading-8 text-purple-900/70">{item.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {item.tools.map((tool) => (
            <span key={tool} className="rounded-full bg-purple-50 px-3 py-1 text-sm font-semibold text-purple-700">
              {tool}
            </span>
          ))}
        </div>

        <ul className="mt-6 space-y-3 text-purple-900/75">
          {item.bullets.map((bullet) => (
            <li key={bullet}>• {bullet}</li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          {item.link && (
            <a href={item.link} target="_blank" className="rounded-full bg-purple-100 px-6 py-3 font-bold text-purple-800 transition hover:scale-105">
              Open Link
            </a>
          )}
          <button onClick={onClose} className="rounded-full bg-purple-700 px-6 py-3 font-bold text-white transition hover:scale-105">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}