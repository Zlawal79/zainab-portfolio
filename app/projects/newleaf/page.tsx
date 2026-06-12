import Link from "next/link";

const features = [
  "AI-powered newcomer support assistant",
  "Personalized settlement checklist",
  "Cultural tips and guidance",
  "Community resource hub",
  "Real-time AI chat support",
  "Mobile-first design",
  "Personalized recommendations",
  "Resource discovery for newcomers",
];

const tools = [
  {
    name: "React Native",
    purpose: "Built the mobile application interface and user experience.",
  },
  {
    name: "Node.js",
    purpose: "Supported backend functionality and application logic.",
  },
  {
    name: "Firebase",
    purpose: "Managed authentication, cloud services, and data storage.",
  },
  {
    name: "Google Gemini",
    purpose: "Provided AI-powered guidance and conversational support.",
  },
  {
    name: "JavaScript",
    purpose: "Implemented application functionality and interactive features.",
  },
  {
    name: "GitHub",
    purpose: "Used for version control, collaboration, and project management.",
  },
  {
    name: "Mobile UI/UX Design",
    purpose: "Designed intuitive user experiences focused on accessibility and ease of use.",
  },
  {
    name: "Hackathon Development",
    purpose: "Rapid prototyping and development under strict time constraints.",
  },
];

const contributions = [
  "Collaborated with teammates to design and develop a mobile solution focused on helping newcomers settle into a new country.",
  "Supported frontend development and user experience design.",
  "Worked with AI-powered tools to provide helpful and personalized guidance.",
  "Contributed to feature planning, brainstorming, and project implementation.",
  "Focused on accessibility, usability, and social impact.",
  "Participated in rapid prototyping, testing, debugging, and presentation preparation.",
  "Helped transform a real-world challenge into a functional software solution.",
];

export default function NewLeafPage() {
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
        <p className="mb-5 inline-flex rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-semibold text-purple-700">
          Hack the Valley Project
        </p>

        <h1 className="font-serif text-5xl font-bold md:text-7xl">
          NewLeaf
          <span className="block text-purple-600">
            AI-Powered Newcomer Companion
          </span>
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-purple-900/70">
          NewLeaf is a mobile application created during Hack the Valley to help
          newcomers confidently navigate life in a new country. By combining
          artificial intelligence, personalized guidance, and community
          resources, NewLeaf aims to make settlement easier, less overwhelming,
          and more accessible.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/Inshalc/NewLeaf"
            target="_blank"
            className="rounded-full bg-purple-700 px-6 py-3 font-bold text-white transition hover:bg-purple-800"
          >
            View GitHub
          </a>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-7xl px-8 py-10">
        <div className="rounded-[2rem] border border-purple-100 bg-white p-10 shadow-sm">
          <h2 className="font-serif text-4xl font-bold">
            Problem Statement
          </h2>

          <p className="mt-6 leading-8 text-purple-900/70">
            Moving to a new country can be overwhelming. Newcomers often face
            challenges understanding important processes, finding trusted
            resources, adapting to cultural differences, and building support
            networks. Our team wanted to create a solution that provides
            practical guidance and personalized support through technology.
          </p>
        </div>
      </section>

      {/* Features */}
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

      {/* Technologies */}
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

      {/* Team */}
      <section className="mx-auto max-w-7xl px-8 py-10">
        <div className="rounded-[2rem] border border-purple-100 bg-white p-10 shadow-sm">
          <h2 className="font-serif text-4xl font-bold">
            Team
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-purple-50 p-5">
              <h3 className="font-bold text-purple-800">
                Zainab Lawal
              </h3>

              <p className="mt-2 text-purple-900/70">
                Software Engineering Student, Developer, Researcher,
                and Hackathon Participant.
              </p>
            </div>

            <div className="rounded-2xl bg-purple-50 p-5">
              <h3 className="font-bold text-purple-800">
                Inshal Chaudhry
              </h3>

              <p className="mt-2 text-purple-900/70">
                Teammate and co-developer for the NewLeaf project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Learned */}
      <section className="mx-auto max-w-7xl px-8 py-16">
        <div className="rounded-[2rem] border border-purple-100 bg-white p-10 shadow-sm">
          <h2 className="font-serif text-4xl font-bold">
            What I Learned
          </h2>

          <div className="mt-6 space-y-4 text-purple-900/70">
            <p>
              • How to rapidly develop and pitch a product under hackathon conditions.
            </p>

            <p>
              • How AI can be used to improve accessibility and support real-world challenges.
            </p>

            <p>
              • How to collaborate effectively in a fast-paced team environment.
            </p>

            <p>
              • How to balance technical implementation with user-centered design.
            </p>

            <p>
              • How technology can create meaningful social impact when designed thoughtfully.
            </p>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="mx-auto max-w-7xl px-8 py-16">
        <div className="rounded-[2rem] bg-purple-700 p-10 text-white">
          <h2 className="font-serif text-4xl font-bold">
            Project Outcome
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-purple-100">
            NewLeaf demonstrated how AI-powered mobile applications can help
            newcomers feel more supported and informed during their transition
            to a new country. Through collaboration, rapid development, and a
            focus on social impact, the project transformed a real-world problem
            into a practical and user-focused solution.
          </p>
        </div>
      </section>
    </main>
  );
}