import Link from "next/link";

const features = [
  "Multi-generation energy system analysis",
  "Electricity production evaluation",
  "Hydrogen production optimization",
  "Freshwater generation assessment",
  "Cooling system performance analysis",
  "Scenario-based system comparison",
  "User-configurable engineering parameters",
  "Interactive dashboard visualization",
  "HOMER Pro validation workflow support",
  "Engineering architecture diagrams",
  "Optimization-based decision support",
  "Multi-service resilience assessment",
  "Probability-informed disturbance analysis",
  "Monte Carlo uncertainty analysis",
  "Performance and feasibility reporting",
];

const outputs = ["Electricity", "Hydrogen", "Freshwater", "Cooling"];

const applications = [
  "Residential Communities",
  "Industrial Facilities",
  "Airports",
  "Seaports",
  "Railway Systems",
  "Waterfront Infrastructure",
  "Agricultural Operations",
  "Geothermal Sites",
];

const tools = [
  {
    name: "MATLAB / Simulink",
    purpose: "Used for dynamic simulation workflows, engineering calculations, digital-twin development, and scenario analysis.",
  },
  {
    name: "HOMER Pro",
    purpose: "Used for validation-style feasibility studies and energy system configuration testing.",
  },
  {
    name: "HTML",
    purpose: "Structured the dashboard interface, sections, tables, and input/output displays.",
  },
  {
    name: "CSS",
    purpose: "Styled the dashboard layout, cards, charts, navigation, and responsive interface.",
  },
  {
    name: "JavaScript",
    purpose: "Added interactivity, dynamic calculations, chart updates, and user-driven dashboard behavior.",
  },
  {
    name: "Chart.js",
    purpose: "Created visualizations for power, hydrogen, water, cooling, efficiency, and scenario comparisons.",
  },
  {
    name: "VS Code",
    purpose: "Used as the main development environment for building and editing dashboard files.",
  },
  {
    name: "Live Server",
    purpose: "Used to preview and test the dashboard locally during development.",
  },
  {
    name: "Mermaid Diagrams",
    purpose: "Created system architecture and workflow diagrams for technical communication.",
  },
  {
    name: "Research Literature",
    purpose: "Used published papers and reports to support assumptions, inputs, ranges, and case studies.",
  },
  {
    name: "Technical Documentation",
    purpose: "Prepared explanations, presentation materials, and public-safe project documentation.",
  },
  {
    name: "Optimization Concepts",
    purpose: "Supported analysis of trade-offs between power, hydrogen, water, cooling, cost, and feasibility.",
  },
];

const contributions = [
  "Developed dashboard-based visualizations for integrated energy system outputs.",
  "Created user-friendly interfaces for exploring energy system parameters and results.",
  "Analyzed multi-generation systems producing electricity, hydrogen, freshwater, and cooling.",
  "Designed diagrams showing system architecture, energy flows, and component interactions.",
  "Conducted literature review to support model assumptions, recommended values, and operating ranges.",
  "Compared operating modes, applications, and performance goals across different scenarios.",
  "Supported HOMER Pro validation workflows for feasibility-style analysis.",
  "Prepared technical documentation, presentation visuals, and public-safe explanations.",
  "Translated complex engineering results into clear dashboard sections for technical communication.",
  "Connected software development with engineering research and decision-making.",
  "Extended the workflow toward multi-service resilience, fault-tree reasoning, and Monte Carlo uncertainty analysis.",
];

const lessons = [
  "How to communicate complex engineering systems through dashboards and visuals.",
  "How simulation and optimization tools support engineering decision-making.",
  "How to structure technical information so both technical and non-technical audiences can understand it.",
  "How to evaluate systems with multiple outputs and competing objectives.",
  "How to connect research, software development, and engineering communication in one project.",
];

export default function MGOPTPage() {
  return (
    <main className="min-h-screen bg-[#fbf8ff] text-purple-950">
      <nav className="border-b border-purple-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <Link href="/" className="font-serif text-2xl font-bold">
            Zainab<span className="text-purple-600">.</span>
          </Link>

          <div className="flex gap-3">
            <Link
              href="/research"
              className="rounded-full border border-purple-200 bg-white px-5 py-2 font-semibold text-purple-700 transition hover:bg-purple-50"
            >
              Research
            </Link>

            <Link
              href="/"
              className="rounded-full bg-purple-700 px-5 py-2 font-semibold text-white transition hover:bg-purple-800"
            >
              Home
            </Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-8 py-20">
        <p className="mb-5 inline-flex rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-semibold text-purple-700 shadow-sm">
          Featured Research Project
        </p>

        <h1 className="font-serif text-5xl font-bold md:text-7xl">
          MG-OPT
          <span className="block text-purple-600">
            Multi-Generation Optimization Platform
          </span>
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-purple-900/70">
          MG-OPT stands for Multi-Generation Optimization Platform. It is an
          engineering dashboard and simulation-support system developed to
          evaluate integrated energy systems capable of producing electricity,
          hydrogen, freshwater, and cooling. The project connects research,
          optimization, dashboard development, scenario testing, and technical
          communication. The broader research workflow also connects the platform to digital-twin simulation, multi-service resilience, and probability-informed disturbance analysis.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/research"
            className="rounded-full bg-purple-700 px-6 py-3 font-bold text-white transition hover:bg-purple-800"
          >
            View Research Overview
          </Link>

          <Link
            href="/"
            className="rounded-full border border-purple-200 bg-white px-6 py-3 font-bold text-purple-800 transition hover:bg-purple-50"
          >
            Back to Portfolio
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-10">
        <div className="rounded-[2rem] border border-purple-100 bg-white p-10 shadow-sm">
          <h2 className="font-serif text-4xl font-bold">Problem Statement</h2>

          <p className="mt-6 leading-8 text-purple-900/70">
            Traditional energy systems are often analyzed as separate systems,
            such as power generation, hydrogen production, cooling, or water
            production. Multi-generation systems are more complex because they
            produce multiple outputs at the same time. MG-OPT was created to
            support a clearer way of studying these systems by organizing
            inputs, scenarios, results, and visual explanations in one
            dashboard-style platform.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-10">
        <div className="rounded-[2rem] bg-purple-700 p-10 text-white">
          <h2 className="font-serif text-4xl font-bold">
            System Outputs Evaluated
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-purple-100">
            The platform focuses on evaluating how one integrated energy system
            can support several useful outputs instead of only one.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {outputs.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white/10 p-5 text-center font-bold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-16">
        <h2 className="text-center font-serif text-4xl font-bold">
          Key Features
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              ✓ {feature}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-16">
        <h2 className="text-center font-serif text-4xl font-bold">
          Potential Applications
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center leading-8 text-purple-900/65">
          The dashboard was designed around real-world application categories
          where integrated energy systems may be useful.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {applications.map((app) => (
            <div
              key={app}
              className="rounded-2xl border border-purple-100 bg-white p-5 text-center shadow-sm"
            >
              {app}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-16">
        <div className="rounded-[2rem] bg-purple-700 p-10 text-white">
          <h2 className="font-serif text-4xl font-bold">
            Technologies & Tools
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {tools.map((tool) => (
              <div key={tool.name} className="rounded-2xl bg-white/10 p-5">
                <h3 className="text-xl font-bold">{tool.name}</h3>
                <p className="mt-2 leading-7 text-purple-100">
                  {tool.purpose}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-16">
        <div className="rounded-[2rem] border border-purple-100 bg-white p-10 shadow-sm">
          <h2 className="font-serif text-4xl font-bold">My Contributions</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {contributions.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-purple-50 p-4 text-purple-900/75"
              >
                • {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-16">
        <div className="rounded-[2rem] border border-purple-100 bg-white p-10 shadow-sm">
          <h2 className="font-serif text-4xl font-bold">What I Learned</h2>

          <div className="mt-6 space-y-4 leading-8 text-purple-900/70">
            {lessons.map((lesson) => (
              <p key={lesson}>• {lesson}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-16">
        <div className="rounded-[2rem] bg-purple-50 p-10">
          <h2 className="font-serif text-4xl font-bold">
            Public-Safe Project Note
          </h2>

          <p className="mt-5 leading-8 text-purple-900/70">
            This portfolio page explains the purpose, tools, features, and
            contributions of the MG-OPT work without publishing internal
            MATLAB files, unpublished research code, or private research
            documents. The goal is to show the software engineering,
            visualization, research, and technical communication skills involved
            while keeping the research work protected.
          </p>
        </div>
      </section>
    </main>
  );
}