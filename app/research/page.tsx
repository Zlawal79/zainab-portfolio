import Link from "next/link";

const stages = [
  ["1", "System Architecture", "Model the relationships between renewable generation, storage, hydrogen, freshwater, cooling, and supporting pathways."],
  ["2", "Optimization & Simulation", "Use engineering models, MG-OPT, MATLAB/Simulink, and scenario studies to evaluate integrated operation and trade-offs."],
  ["3", "Digital Twin", "Connect system states, service demand, component behaviour, and disturbances in a dynamic simulation workflow."],
  ["4", "Multi-Service Resilience", "Measure how well electricity, freshwater, hydrogen, cooling, and critical services are maintained during disruptions."],
  ["5", "Probability & Uncertainty", "Extend deterministic resilience analysis with fault-tree logic, probabilistic state transitions, and Monte Carlo analysis."],
  ["6", "Techno-Economic Analysis", "Study performance alongside feasibility, cost, sensitivity, and resource trade-offs."],
];

const services = [
  ["Electricity", "Generation, storage, backup supply, and critical electrical demand."],
  ["Freshwater", "Water-production pathways and service coverage under changing operating conditions."],
  ["Hydrogen", "Electrolysis, storage, fuel-cell interaction, and hydrogen-service availability."],
  ["Cooling", "Cooling demand and its dependence on available energy and integrated system operation."],
];

const tools = ["MATLAB", "Simulink", "MG-OPT", "HOMER Pro", "Python", "Monte Carlo Simulation", "Fault Tree Analysis", "Digital Twin Modeling", "Optimization", "Techno-Economic Analysis", "Technical Visualization", "Research Writing"];

const contributions = [
  "Built and refined simulation workflows for integrated multi-generation energy systems.",
  "Analyzed interactions between electricity, freshwater, hydrogen, cooling, storage, and backup generation.",
  "Developed multi-service resilience concepts that evaluate more than electrical supply alone.",
  "Worked with scenario-based disturbances, degradation, recovery, and service-coverage metrics.",
  "Extended the resilience framework toward probability-informed analysis using fault-tree logic and Monte Carlo uncertainty analysis.",
  "Supported HOMER-based validation and feasibility comparison workflows.",
  "Created dashboards, engineering diagrams, flowcharts, plots, and technical explanations for research communication.",
  "Conducted literature reviews and translated published methods into implementable modeling concepts.",
  "Prepared research reports, presentations, and public-safe technical documentation.",
];

export default function ResearchPage() {
  return <main className="min-h-screen bg-[#fbf8ff] text-purple-950">
    <nav className="sticky top-0 z-50 border-b border-purple-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <Link href="/" className="font-serif text-2xl font-bold">Zainab<span className="text-purple-600">.</span></Link>
        <div className="flex gap-3"><Link href="/projects/mg-opt" className="rounded-full border border-purple-200 px-5 py-2 font-semibold text-purple-700">MG-OPT</Link><Link href="/" className="rounded-full bg-purple-700 px-5 py-2 font-semibold text-white">Portfolio</Link></div>
      </div>
    </nav>

    <section className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
      <p className="inline-flex rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-bold text-purple-700">Applied Research · Smart & Resilient Energy Systems</p>
      <h1 className="mt-6 max-w-5xl font-serif text-5xl font-bold leading-tight md:text-7xl">Resilient multi-generation systems for <span className="text-purple-600">interconnected services.</span></h1>
      <p className="mt-7 max-w-4xl text-lg leading-8 text-purple-950/70">My research explores integrated energy systems that support electricity, freshwater, hydrogen, and cooling. The work brings together simulation, optimization, digital-twin concepts, resilience assessment, probabilistic modeling, uncertainty analysis, and techno-economic evaluation.</p>
      <p className="mt-4 max-w-4xl leading-7 text-purple-950/55">This portfolio presents the research workflow and my contributions at a public-safe level. Detailed unpublished model data and research-sensitive implementation details are intentionally omitted.</p>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-8 md:px-8">
      <div className="rounded-[2.5rem] bg-purple-950 p-8 text-white md:p-12">
        <p className="text-sm font-bold uppercase tracking-[.2em] text-purple-300">Research Question</p>
        <h2 className="mt-4 font-serif text-4xl font-bold">How can an interconnected multi-generation system remain useful when resources, components, and services are disrupted?</h2>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-purple-100">Rather than treating power, water, hydrogen, and cooling as isolated outputs, the research studies them as dependent services. A disturbance in one part of the system can change the availability of several others, so resilience must capture degradation, interdependency, and recovery across the full system.</p>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
      <p className="text-center text-sm font-bold uppercase tracking-[.2em] text-purple-600">Integrated Services</p>
      <h2 className="mt-3 text-center font-serif text-4xl font-bold md:text-5xl">One system, multiple essential outputs</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{services.map(([name,desc])=><div key={name} className="rounded-3xl border border-purple-100 bg-white p-7 shadow-sm"><h3 className="font-serif text-2xl font-bold text-purple-800">{name}</h3><p className="mt-3 leading-7 text-purple-950/65">{desc}</p></div>)}</div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
      <p className="text-center text-sm font-bold uppercase tracking-[.2em] text-purple-600">Research Workflow</p>
      <h2 className="mt-3 text-center font-serif text-4xl font-bold md:text-5xl">From architecture to probability-informed resilience</h2>
      <div className="mt-12 grid gap-5 md:grid-cols-2">{stages.map(([n,title,desc])=><div key={title} className="rounded-3xl border border-purple-100 bg-white p-7 shadow-sm"><div className="flex gap-5"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple-700 font-bold text-white">{n}</span><div><h3 className="text-2xl font-bold">{title}</h3><p className="mt-3 leading-7 text-purple-950/65">{desc}</p></div></div></div>)}</div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-purple-100 bg-white p-8 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-purple-600">Case Study Approach</p>
          <h2 className="mt-3 font-serif text-4xl font-bold">Community-scale integrated energy</h2>
          <p className="mt-5 leading-8 text-purple-950/70">A rural-community case study is used to explore how renewable generation, battery and hydrogen storage, fuel-cell backup, water production, cooling, and other energy pathways interact when demands and resource conditions change.</p>
          <p className="mt-4 leading-8 text-purple-950/70">The emphasis is not only on whether energy is available, but on which services remain covered, how interdependencies propagate stress, and how the system recovers.</p>
        </div>
        <div className="rounded-[2rem] bg-purple-700 p-8 text-white">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-purple-200">Probability Extension</p>
          <h2 className="mt-3 font-serif text-4xl font-bold">Moving beyond a single deterministic scenario</h2>
          <p className="mt-5 leading-8 text-purple-100">The current extension adds fault-tree reasoning, probabilistic system states, and Monte Carlo uncertainty analysis. This supports questions such as how component faults and resource shortages combine, how service-failure likelihood changes, and how uncertain recovery behaviour affects resilience.</p>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
      <h2 className="text-center font-serif text-4xl font-bold md:text-5xl">Tools & Methods</h2>
      <div className="mt-9 flex flex-wrap justify-center gap-3">{tools.map(t=><span key={t} className="rounded-full border border-purple-100 bg-white px-5 py-3 font-semibold text-purple-700 shadow-sm">{t}</span>)}</div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
      <div className="rounded-[2.5rem] border border-purple-100 bg-white p-8 shadow-sm md:p-10">
        <p className="text-sm font-bold uppercase tracking-[.2em] text-purple-600">My Role</p>
        <h2 className="mt-3 font-serif text-4xl font-bold">What I contributed</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">{contributions.map(x=><div key={x} className="rounded-2xl bg-purple-50 p-5 leading-7 text-purple-950/75">• {x}</div>)}</div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <div className="rounded-[2.5rem] bg-gradient-to-br from-purple-800 to-purple-950 p-9 text-white md:p-12">
        <p className="text-sm font-bold uppercase tracking-[.2em] text-purple-200">What this research taught me</p>
        <h2 className="mt-3 font-serif text-4xl font-bold">Engineering the model is only part of the problem.</h2>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-purple-100">The work strengthened my ability to connect software development, engineering models, uncertainty, validation, data visualization, and research communication. It also taught me to think about systems as networks of dependent services rather than isolated components.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Link href="/projects/mg-opt" className="rounded-full bg-white px-6 py-3 font-bold text-purple-900">Explore MG-OPT</Link><Link href="/" className="rounded-full border border-white/30 px-6 py-3 font-bold text-white">Back to portfolio</Link></div>
      </div>
    </section>
  </main>;
}
