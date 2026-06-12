import Link from "next/link";

const researchAreas = [
  {
    title: "Smart Energy Systems",
    desc: "Researching integrated systems that combine electricity generation, hydrogen production, freshwater generation, and cooling technologies.",
  },
  {
    title: "Infrastructure Resilience",
    desc: "Evaluating resilience, recovery performance, and cascading failures across interconnected infrastructure systems.",
  },
  {
    title: "Simulation & Optimization",
    desc: "Using MATLAB, HOMER Pro, MG-OPT, and engineering models to evaluate performance under different scenarios.",
  },
  {
    title: "Dashboard Development",
    desc: "Building web-based dashboards and visual tools to communicate technical engineering results.",
  },
];

const technologies = [
  "MATLAB",
  "HOMER Pro",
  "HTML",
  "CSS",
  "JavaScript",
  "Optimization",
  "Research",
  "Data Analysis",
  "Simulation Modeling",
  "Monte Carlo Simulation",
  "Energy Systems",
  "Technical Documentation",
];

const contributions = [
  "Conducted literature reviews on integrated energy systems, hydrogen technologies, and infrastructure resilience.",
  "Supported simulation workflows using MATLAB and HOMER Pro.",
  "Evaluated energy system performance, sustainability, and feasibility across multiple operating scenarios.",
  "Created dashboard interfaces to visualize engineering outputs and simulation results.",
  "Developed engineering diagrams and workflow visualizations.",
  "Analyzed power generation, hydrogen production, freshwater generation, and cooling system interactions.",
  "Supported technical presentations, research reports, and engineering documentation.",
  "Investigated residential, industrial, transportation, agricultural, waterfront, airport, railway, and seaport applications.",
  "Performed parameter studies and scenario comparisons to identify optimal configurations.",
  "Collaborated with faculty researchers to evaluate smart and resilient energy solutions.",
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#fbf8ff] text-purple-950">
      {/* Navigation */}
      <nav className="border-b border-purple-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <Link href="/" className="font-serif text-2xl font-bold">
            Zainab<span className="text-purple-600">.</span>
          </Link>

          <Link
            href="/"
            className="rounded-full bg-purple-700 px-5 py-2 font-semibold text-white transition hover:bg-purple-800"
          >
            Back Home
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-8 py-20">
        <p className="mb-5 inline-flex rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-semibold text-purple-700 shadow-sm">
          Undergraduate Research Fellowship (USRF)
        </p>

        <h1 className="font-serif text-5xl font-bold md:text-7xl">
          Smart Energy Systems
          <span className="block text-purple-600">Research</span>
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-purple-900/70">
          As a Research Student Assistant within Ontario Tech University's
          Smart & Resilient Energy Systems research group, I support projects
          focused on energy optimization, sustainability, infrastructure
          resilience, hydrogen production, clean water generation, cooling
          technologies, and multi-generation energy systems.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {[
            ["2", "Research Positions"],
            ["10+", "Case Studies"],
            ["MATLAB", "Simulation Tool"],
            ["HOMER", "Validation Tool"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-purple-100 bg-white p-6 text-center shadow-sm"
            >
              <h3 className="text-3xl font-bold text-purple-700">{value}</h3>
              <p className="mt-2 text-purple-900/70">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Areas */}
      <section className="mx-auto max-w-7xl px-8 py-10">
        <h2 className="text-center font-serif text-4xl font-bold">
          Research Areas
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {researchAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-3xl border border-purple-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-purple-800">
                {area.title}
              </h3>

              <p className="mt-4 leading-8 text-purple-900/70">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Research */}
      <section className="mx-auto max-w-7xl px-8 py-16">
        <h2 className="text-center font-serif text-4xl font-bold">
          Featured Research Projects
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-purple-100 bg-white p-8 shadow-sm">
            <p className="font-bold text-purple-600">CURRENT PROJECT</p>

            <h3 className="mt-3 text-3xl font-bold">
              MG-OPT Dashboard
            </h3>

            <p className="mt-4 leading-8 text-purple-900/70">
              An integrated dashboard supporting analysis of power,
              hydrogen, cooling, and freshwater production through
              multi-generation energy systems.
            </p>

            <ul className="mt-6 space-y-2 text-purple-900/70">
              <li>• Dashboard Development</li>
              <li>• Energy System Analysis</li>
              <li>• Scenario Evaluation</li>
              <li>• Performance Visualization</li>
              <li>• MATLAB Integration</li>
            </ul>

            <Link
              href="/projects/mg-opt"
              className="mt-6 inline-block rounded-full bg-purple-700 px-5 py-3 font-bold text-white"
            >
              View Project →
            </Link>
          </div>

          <div className="rounded-3xl border border-purple-100 bg-white p-8 shadow-sm">
            <p className="font-bold text-purple-600">PREVIOUS PROJECT</p>

            <h3 className="mt-3 text-3xl font-bold">
              Infrastructure Resilience Calculator
            </h3>

            <p className="mt-4 leading-8 text-purple-900/70">
              A resilience assessment tool designed to evaluate recovery,
              outage propagation, cascading failures, and infrastructure
              vulnerability under extreme-event scenarios.
            </p>

            <ul className="mt-6 space-y-2 text-purple-900/70">
              <li>• Monte Carlo Simulation</li>
              <li>• Fragility Curves</li>
              <li>• Recovery Modeling</li>
              <li>• Risk Assessment</li>
              <li>• Resilience Metrics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="mx-auto max-w-7xl px-8 py-16">
        <h2 className="text-center font-serif text-4xl font-bold">
          Technologies & Tools
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-purple-100 bg-white px-5 py-3 text-purple-700 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Contributions */}
      <section className="mx-auto max-w-7xl px-8 py-16">
        <div className="rounded-[2rem] border border-purple-100 bg-white p-10 shadow-sm">
          <h2 className="font-serif text-4xl font-bold">
            My Contributions
          </h2>

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

      {/* Impact */}
      <section className="mx-auto max-w-7xl px-8 py-16">
        <div className="rounded-[2rem] bg-purple-700 p-10 text-white">
          <h2 className="font-serif text-4xl font-bold">
            Research Impact
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-purple-100">
            My research experience combines software development,
            engineering analysis, simulation modeling, and technical
            communication. Through dashboards, optimization studies,
            engineering diagrams, and simulation workflows, I help
            support the evaluation of sustainable and resilient energy
            systems capable of producing electricity, hydrogen,
            freshwater, and cooling simultaneously.
          </p>
        </div>
      </section>
    </main>
  );
}