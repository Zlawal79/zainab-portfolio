import Link from "next/link";

const features = [
  "Carbon footprint tracking",
  "Activity logging",
  "Personalized sustainability suggestions",
  "Emission trend analysis",
  "Sustainability grading",
  "PDF report generation",
  "CSV export functionality",
  "Weather API integration",
  "User authentication",
  "Interactive dashboard visualizations",
];

const tools = [
  {
    name: "Node.js",
    purpose: "Backend server development and API functionality.",
  },
  {
    name: "Express.js",
    purpose: "REST API development and application routing.",
  },
  {
    name: "MySQL",
    purpose: "Database storage for users, activities, reports, and sustainability data.",
  },
  {
    name: "HTML",
    purpose: "Frontend page structure and content organization.",
  },
  {
    name: "CSS",
    purpose: "User interface styling and responsive design.",
  },
  {
    name: "JavaScript",
    purpose: "Interactive dashboard functionality and data handling.",
  },
  {
    name: "Bootstrap",
    purpose: "Responsive UI components and layout design.",
  },
  {
    name: "Chart.js",
    purpose: "Emission trend visualization and dashboard charts.",
  },
  {
    name: "OpenWeather API",
    purpose: "Weather integration for environmental calculations.",
  },
  {
    name: "VS Code",
    purpose: "Primary development environment.",
  },
  {
    name: "GitHub",
    purpose: "Version control and team collaboration.",
  },
];

const contributions = [
  "Collaborated on the design and development of a full-stack sustainability platform.",
  "Supported database design and data organization.",
  "Developed dashboard interfaces and sustainability visualizations.",
  "Worked on user experience and responsive design improvements.",
  "Contributed to sustainability tracking and reporting features.",
  "Participated in project planning, testing, debugging, and feature development.",
  "Helped connect software engineering principles with environmental sustainability goals.",
];

export default function CarbonIQPage() {
  return (
    <main className="min-h-screen bg-[#fbf8ff] text-purple-950">
      <nav className="border-b border-purple-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <Link href="/" className="font-serif text-2xl font-bold">
            Zainab<span className="text-purple-600">.</span>
          </Link>

          <Link
            href="/"
            className="rounded-full bg-purple-700 px-5 py-2 font-semibold text-white"
          >
            Back Home
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-8 py-20">
        <p className="mb-5 inline-flex rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-semibold text-purple-700">
          Sustainability & Data Project
        </p>

        <h1 className="font-serif text-5xl font-bold md:text-7xl">
          CarbonIQ
          <span className="block text-purple-600">
            Carbon Footprint Tracking Platform
          </span>
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-purple-900/70">
          CarbonIQ is a full-stack sustainability platform designed to help
          users track, analyze, and reduce their carbon footprint. The platform
          combines data analytics, sustainability insights, environmental
          reporting, and dashboard visualizations to encourage more sustainable
          decision-making.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/Inshalc/CarbonIQ"
            target="_blank"
            className="rounded-full bg-purple-700 px-6 py-3 font-bold text-white transition hover:bg-purple-800"
          >
            View GitHub
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-10">
        <div className="rounded-[2rem] border border-purple-100 bg-white p-10 shadow-sm">
          <h2 className="font-serif text-4xl font-bold">
            Problem Statement
          </h2>

          <p className="mt-6 leading-8 text-purple-900/70">
            Many people want to reduce their environmental impact but struggle
            to understand how their daily activities contribute to carbon
            emissions. CarbonIQ was created to provide users with meaningful
            insights, sustainability recommendations, and visual feedback to
            help them make more environmentally conscious decisions.
          </p>
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
              className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm"
            >
              ✓ {feature}
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
              <div
                key={tool.name}
                className="rounded-2xl bg-white/10 p-5"
              >
                <h3 className="text-xl font-bold">{tool.name}</h3>

                <p className="mt-2 text-purple-100">
                  {tool.purpose}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="mx-auto max-w-7xl px-8 py-16">
        <div className="rounded-[2rem] border border-purple-100 bg-white p-10 shadow-sm">
          <h2 className="font-serif text-4xl font-bold">
            What I Learned
          </h2>

          <div className="mt-6 space-y-4 text-purple-900/70">
            <p>
              • How full-stack systems combine databases, APIs, and frontend interfaces.
            </p>

            <p>
              • How sustainability data can be transformed into meaningful insights.
            </p>

            <p>
              • How to visualize complex environmental information through dashboards.
            </p>

            <p>
              • How APIs and external data sources can improve application functionality.
            </p>

            <p>
              • How software engineering can contribute to real-world environmental challenges.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-16">
        <div className="rounded-[2rem] bg-purple-700 p-10 text-white">
          <h2 className="font-serif text-4xl font-bold">
            Project Impact
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-purple-100">
            CarbonIQ demonstrates how software engineering, data management,
            APIs, and sustainability analytics can work together to help users
            better understand and reduce their environmental impact through
            data-driven decision-making.
          </p>
        </div>
      </section>
    </main>
  );
}