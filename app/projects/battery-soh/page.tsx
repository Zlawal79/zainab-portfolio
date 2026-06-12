import Link from "next/link";

const features = [
  "Battery State of Health (SOH) prediction",
  "Machine learning model integration",
  "21-cell battery voltage analysis",
  "AI-powered battery assistant",
  "Mobile application interface",
  "Real-time health classification",
  "Battery maintenance recommendations",
  "Gemini-powered chatbot support",
  "Battery diagnostics dashboard",
  "Cross-platform mobile support",
];

const tools = [
  {
    name: "Python",
    purpose:
      "Data preprocessing, machine learning workflows, model training, and evaluation.",
  },
  {
    name: "Linear Regression",
    purpose:
      "Machine learning model used to predict battery State of Health (SOH).",
  },
  {
    name: "Pandas",
    purpose:
      "Data cleaning, transformation, and analysis of battery datasets.",
  },
  {
    name: "Scikit-Learn",
    purpose:
      "Model training, evaluation, preprocessing, and prediction workflows.",
  },
  {
    name: "Node.js",
    purpose:
      "Backend API development and communication between the mobile app and machine learning model.",
  },
  {
    name: "Express.js",
    purpose:
      "REST API development for battery prediction endpoints.",
  },
  {
    name: "React Native",
    purpose:
      "Cross-platform mobile application development.",
  },
  {
    name: "Expo",
    purpose:
      "Mobile development and testing environment.",
  },
  {
    name: "Google Gemini",
    purpose:
      "AI chatbot integration for battery explanations and recommendations.",
  },
  {
    name: "JavaScript",
    purpose:
      "Frontend and backend application functionality.",
  },
  {
    name: "GitHub",
    purpose:
      "Version control and collaborative development.",
  },
  {
    name: "VS Code",
    purpose:
      "Primary development environment.",
  },
];

const contributions = [
  "Collaborated on the design and development of an AI-powered battery health platform.",
  "Worked on machine learning workflows for battery State of Health prediction.",
  "Supported data preprocessing and battery dataset analysis.",
  "Contributed to backend API integration and prediction workflows.",
  "Developed and tested mobile application functionality.",
  "Integrated AI-powered battery support using Gemini.",
  "Participated in debugging, testing, and feature refinement.",
  "Helped transform battery analytics into a user-friendly mobile experience.",
];

export default function BatterySOHPage() {
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
          Machine Learning & Mobile Development Project
        </p>

        <h1 className="font-serif text-5xl font-bold md:text-7xl">
          Battery SOH
          <span className="block text-purple-600">
            AI Battery Health Assistant
          </span>
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-purple-900/70">
          Battery SOH is an AI-powered mobile application that predicts Battery
          State of Health (SOH) using machine learning and provides users with
          battery insights through an intelligent chatbot. The platform combines
          predictive analytics, mobile development, artificial intelligence, and
          battery diagnostics into one user-friendly solution.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/Inshalc/battery-soh-chatbot"
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
            Battery health is often difficult for users to understand without
            specialized knowledge. Traditional battery monitoring tools provide
            technical values but limited explanations. This project was designed
            to predict battery State of Health and provide meaningful guidance
            through AI-powered explanations and recommendations.
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
              <div key={tool.name} className="rounded-2xl bg-white/10 p-5">
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
            Model Performance
          </h2>

          <div className="mt-6 space-y-4 text-purple-900/70">
            <p>• Machine Learning Model: Linear Regression</p>
            <p>• R² Score: 0.5081</p>
            <p>• Mean Squared Error (MSE): 0.0021</p>
            <p>• Mean Absolute Error (MAE): 0.0359</p>
            <p>• Real-time SOH prediction support</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-16">
        <div className="rounded-[2rem] bg-purple-700 p-10 text-white">
          <h2 className="font-serif text-4xl font-bold">
            Competition Outcome
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-purple-100">
            This project was developed as part of a software engineering
            competition and earned 2nd Place. The project demonstrated how
            machine learning, mobile development, and artificial intelligence
            can be combined to create practical solutions for battery health
            monitoring and user education.
          </p>
        </div>
      </section>
    </main>
  );
}