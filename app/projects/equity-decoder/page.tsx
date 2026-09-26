import Link from "next/link";

const features = [
  "Real-time job posting analysis",
  "Bias detection using AI and NLP",
  "Equity Score (0–100)",
  "Inclusive language recommendations",
  "OHRC compliance considerations",
  "AODA accessibility considerations",
  "TEER alignment checks",
  "Color-coded issue highlighting",
  "AI-generated rewrite suggestions",
  "Interactive analytics dashboard",
];

const tools = [
  {
    name: "Python",
    purpose: "Backend development and AI processing workflows.",
  },
  {
    name: "FastAPI",
    purpose: "Built API endpoints for text analysis and recommendation generation.",
  },
  {
    name: "Google Gemini",
    purpose: "Generated inclusive rewrite suggestions and language recommendations.",
  },
  {
    name: "SpaCy NLP",
    purpose: "Supported natural language processing and text analysis.",
  },
  {
    name: "JavaScript",
    purpose: "Frontend functionality and browser extension interactions.",
  },
  {
    name: "HTML",
    purpose: "Structured the Chrome extension interface and dashboard.",
  },
  {
    name: "CSS",
    purpose: "Designed a clean and accessible user experience.",
  },
  {
    name: "Chrome Extensions",
    purpose: "Integrated analysis directly into users' browsing workflow.",
  },
  {
    name: "GitHub",
    purpose: "Version control and team collaboration.",
  },
  {
    name: "VS Code",
    purpose: "Primary development environment.",
  },
];

const contributions = [
  "Served as Frontend and UX Lead for Equity Decoder.",
  "Designed the Chrome extension user interface.",
  "Developed user-facing analysis and dashboard components.",
  "Supported integration between frontend and AI analysis workflows.",
  "Participated in testing, debugging, and feature refinement.",
  "Collaborated with teammates to improve usability and accessibility.",
  "Contributed to research on bias detection and inclusive hiring practices.",
  "Helped present the project during the TECHNATION AI Equity Data Challenge · Top 5.",
];

export default function EquityDecoderPage() {
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
          TECHNATION AI Equity Challenge
        </p>

        <h1 className="font-serif text-5xl font-bold md:text-7xl">
          Equity Decoder
          <span className="block text-purple-600">
            AI-Powered Hiring Equity Tool
          </span>
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-purple-900/70">
          Equity Decoder is an AI-powered Chrome extension that helps
          organizations create more inclusive job postings. The platform
          identifies potentially biased language, generates inclusive
          alternatives, calculates an Equity Score, and supports alignment
          with Canadian accessibility and equity frameworks.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/equityDecoder/equitydecoderProject"
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
            Job postings often contain language that unintentionally excludes
            qualified candidates. Gender-coded wording, inflated
            requirements, and inaccessible language can discourage people from
            applying. Equity Decoder was designed to help organizations identify
            and improve these issues before publishing job opportunities.
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
                <h3 className="text-xl font-bold">
                  {tool.name}
                </h3>

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
            Competition Experience
          </h2>

          <p className="mt-6 leading-8 text-purple-900/70">
            Equity Decoder was developed as part of the TECHNATION AI Equity
            Data Challenge, where the project placed in the Top 5. Working through multiple competition stages allowed our
            team to combine software engineering, artificial intelligence,
            accessibility considerations, policy research, and user-centered
            design into one practical solution.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-16">
        <div className="rounded-[2rem] bg-purple-700 p-10 text-white">
          <h2 className="font-serif text-4xl font-bold">
            Project Impact
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-purple-100">
            Equity Decoder demonstrates how AI can be used to improve fairness,
            accessibility, and inclusion within hiring processes. By helping
            organizations identify and rewrite potentially exclusionary language,
            the project supports a more equitable and accessible employment
            experience for job seekers.
          </p>
        </div>
      </section>
    </main>
  );
}