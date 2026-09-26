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
  ["Electricity", "Generation, storage, backup supply, and critical electrical demand across interconnected community services."],
  ["Freshwater", "MED desalination, water treatment, irrigation demand, and freshwater service coverage under changing operating conditions."],
  ["Hydrogen", "PEM and SOEC electrolysis, hydrogen storage, SOFC interaction, thermal integration, and hydrogen-service availability."],
  ["Heating & Cooling", "Absorption refrigeration/cooling, thermal demand, cold-storage applications, and recovery of useful heat across the integrated system."],
];

const conversionSystems = [
  ["SOEC — Solid Oxide Electrolysis", "High-temperature steam electrolysis is studied alongside PEM electrolysis. The research examines how SOEC can use electricity and thermal energy, including recovered waste heat, to reduce electrical demand and strengthen integration within a multi-generation system."],
  ["SOFC — Solid Oxide Fuel Cell", "SOFC technology is studied for efficient electricity and heat production and as part of a coupled hydrogen-energy pathway. Its useful thermal output creates opportunities for combined heat-and-power operation and for supporting other thermal processes."],
  ["PEM Electrolysis", "PEM provides a lower-temperature hydrogen-production pathway and a reference for comparing electrical demand, hydrogen output, storage requirements, and integration with variable renewable generation."],
  ["SOEC–SOFC Thermal Integration", "A key direction is recovering useful heat from SOFC, gas-turbine, geothermal, or other thermal pathways and using it to support SOEC operation, linking hydrogen production, electricity generation, heat recovery, and system efficiency."],
  ["MED Desalination", "Multi-Effect Distillation connects the energy system to freshwater production, allowing water demand and thermal-energy requirements to be studied alongside electricity, hydrogen, and community service coverage."],
  ["Absorption Refrigeration & Cooling", "Absorption refrigeration/cooling converts available thermal energy into useful cooling, connecting heat recovery to community cooling, agriculture, food preservation, and cold-storage applications."],
  ["Waste-to-Energy & Biogas", "Waste and biogas pathways treat local waste streams as potential energy resources, supporting circular-resource use and broader Waste–Water–Energy–Transportation–Food sustainability objectives."],
  ["Thermal, Nuclear & Hybrid Generation", "The broader architecture considers renewable, geothermal, gas-turbine, organic-cycle, nuclear, storage, and other hybrid pathways where appropriate, emphasizing how generation, conversion, recovery, and storage technologies work together."],
];

const tools = ["MATLAB", "Simulink", "MG-OPT", "HOMER Pro", "Python", "Octave", "SOEC", "SOFC", "PEM Electrolysis", "MED Desalination", "Absorption Refrigeration", "Heat Recovery", "Monte Carlo Simulation", "Fault Tree Analysis", "Digital Twin Modeling", "Optimization", "Techno-Economic Analysis", "Lifecycle Analysis", "Technical Visualization", "Research Writing"];

const contributions = [
  "Built and refined simulation workflows for integrated multi-generation energy systems.",
  "Analyzed interactions between electricity, freshwater, hydrogen, heating/cooling, storage, backup generation, and thermal-energy recovery.",\n  "Studied PEM and SOEC hydrogen-production pathways, including high-temperature electrolysis and the role of recovered heat in reducing electrical demand.",\n  "Investigated SOFC electricity-and-heat production and its integration with hydrogen, thermal recovery, and other multi-generation subsystems.",\n  "Connected MED desalination and absorption refrigeration/cooling to the broader energy-water-hydrogen system and community service demands.",
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
      <p className="inline-flex rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-bold text-purple-700">Applied Research · Hybrid Energy · Resilience · Sustainability</p>
      <h1 className="mt-6 max-w-5xl font-serif text-5xl font-bold leading-tight md:text-7xl">Resilient multi-generation systems for <span className="text-purple-600">interconnected services.</span></h1>
      <p className="mt-7 max-w-4xl text-lg leading-8 text-purple-950/70">My ongoing co-op research explores simulation-based resiliency analysis of hybrid multi-generation energy systems supporting electricity, freshwater, hydrogen, heating and cooling. The work connects renewable and alternative energy pathways, storage, waste-to-energy and heat-recovery concepts, digital-twin simulation, optimization, probabilistic resilience, uncertainty analysis, lifecycle and techno-economic evaluation, and software-based engineering tools.</p>
      <p className="mt-4 max-w-4xl leading-7 text-purple-950/55">This portfolio presents the research workflow and my contributions at a public-safe level. Detailed unpublished model data and research-sensitive implementation details are intentionally omitted.</p>
    </section>

    <section className="mx-auto max-w-7xl px-6 pb-8 md:px-8">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-purple-100 bg-white p-6 shadow-sm"><p className="text-xs font-bold uppercase tracking-[.18em] text-purple-600">Co-op Research</p><p className="mt-2 text-xl font-bold">May 2025 – Present</p><p className="mt-2 text-sm leading-6 text-purple-950/60">Smart & Resilient Energy Systems, Ontario Tech University</p></div>
        <div className="rounded-3xl border border-purple-100 bg-white p-6 shadow-sm"><p className="text-xs font-bold uppercase tracking-[.18em] text-purple-600">Primary Case Study</p><p className="mt-2 text-xl font-bold">Gbamu-Gbamu, Nigeria</p><p className="mt-2 text-sm leading-6 text-purple-950/60">Rural African community case study for integrated multi-service energy access.</p></div>
        <div className="rounded-3xl border border-purple-100 bg-white p-6 shadow-sm"><p className="text-xs font-bold uppercase tracking-[.18em] text-purple-600">Research Output</p><p className="mt-2 text-xl font-bold">IEEE SEGE 2026</p><p className="mt-2 text-sm leading-6 text-purple-950/60">Research presentation and official Student Innovation Competition Awards listing.</p></div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-8 md:px-8">
      <div className="rounded-[2.5rem] bg-purple-950 p-8 text-white md:p-12">
        <p className="text-sm font-bold uppercase tracking-[.2em] text-purple-300">Research Question</p>
        <h2 className="mt-4 font-serif text-4xl font-bold">How can hybrid multi-generation energy systems sustain essential services in rural communities when renewable resources, components, and interconnected services experience disturbances?</h2>
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
      <p className="text-center text-sm font-bold uppercase tracking-[.2em] text-purple-600">Energy Conversion & Integration</p>
      <h2 className="mt-3 text-center font-serif text-4xl font-bold md:text-5xl">More than generation: converting energy, heat, water, and hydrogen</h2>
      <p className="mx-auto mt-5 max-w-4xl text-center text-lg leading-8 text-purple-950/65">A major part of the research is understanding how individual technologies behave inside an interconnected system. The work goes beyond renewable generation to examine electrolysis, fuel cells, desalination, thermal recovery, cooling, waste-derived energy, storage, and hybrid generation pathways.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">{conversionSystems.map(([name,desc])=><div key={name} className="rounded-3xl border border-purple-100 bg-white p-7 shadow-sm"><h3 className="font-serif text-2xl font-bold text-purple-800">{name}</h3><p className="mt-3 leading-7 text-purple-950/65">{desc}</p></div>)}</div>
      <div className="mt-6 rounded-3xl bg-purple-950 p-8 text-white">
        <p className="text-xs font-bold uppercase tracking-[.18em] text-purple-300">SOEC Research Focus</p>
        <h3 className="mt-3 font-serif text-3xl font-bold">Connecting high-temperature electrolysis with waste-heat recovery</h3>
        <p className="mt-4 max-w-5xl leading-8 text-purple-100">The SOEC work evaluates high-temperature steam electrolysis alongside the existing PEM pathway rather than simply replacing it. The research compares hydrogen-production efficiency, electrical demand, thermal integration, and overall system performance. Because SOEC can use thermal energy as part of electrolysis, recovered heat from SOFCs and other thermal sources can become a useful system resource. This creates a deeper integration loop between electricity, heat, hydrogen production, storage, and later generation.</p>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <div className="rounded-[2.5rem] border border-purple-100 bg-white p-8 shadow-sm md:p-10">
        <p className="text-sm font-bold uppercase tracking-[.2em] text-purple-600">Energy + Environment + Software</p>
        <h2 className="mt-3 font-serif text-4xl font-bold">A cross-disciplinary engineering problem</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl bg-purple-50 p-6"><h3 className="text-xl font-bold">Energy Systems</h3><p className="mt-3 leading-7 text-purple-950/65">Renewable generation, batteries, PEM and SOEC hydrogen production, hydrogen storage, SOFC/fuel-cell generation, geothermal and thermal pathways, nuclear and hybrid-energy concepts, waste-to-energy/biogas, gas-turbine and organic-cycle pathways, heat recovery, and integrated multi-generation operation.</p></div>
          <div className="rounded-2xl bg-purple-50 p-6"><h3 className="text-xl font-bold">Environment & Sustainability</h3><p className="mt-3 leading-7 text-purple-950/65">Rural energy access, MED-based freshwater production, water treatment, irrigation and agriculture, cooling and cold storage, waste-resource recovery, resource efficiency, lifecycle and emissions considerations, and resilient community infrastructure. The broader research connects energy decisions to environmental and community-service outcomes.</p></div>
          <div className="rounded-2xl bg-purple-50 p-6"><h3 className="text-xl font-bold">Software & Modeling</h3><p className="mt-3 leading-7 text-purple-950/65">MATLAB/Simulink digital twins, MG-OPT, HOMER Pro validation, Python/Octave workflows, dashboards, optimization, Monte Carlo analysis, fault/event-tree reasoning, visualization, and reproducible scenario studies.</p></div>
        </div>
        <div className="mt-6 rounded-2xl border border-purple-200 p-6"><h3 className="text-xl font-bold">Nuclear & Hybrid-Energy Systems</h3><p className="mt-3 leading-7 text-purple-950/65">Nuclear energy is part of the broader hybrid multi-generation research scope alongside renewable, thermal, hydrogen, storage, and other integrated energy pathways. The research examines how diverse generation technologies and coupled services can be represented within resilient, sustainable energy-system architectures, while individual case studies use the technologies and assumptions appropriate to their scenario.</p></div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-purple-100 bg-white p-8 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-purple-600">Case Study Approach</p>
          <h2 className="mt-3 font-serif text-4xl font-bold">Community-scale integrated energy</h2>
          <p className="mt-5 leading-8 text-purple-950/70">Gbamu-Gbamu in Ogun State, Nigeria is the primary rural African case study used to explore how renewable generation, battery and hydrogen storage, fuel-cell backup, water production, cooling, and other energy pathways interact when demands and resource conditions change.</p>
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
      <div className="mb-16 rounded-[2.5rem] bg-purple-950 p-8 text-white md:p-10">
        <p className="text-sm font-bold uppercase tracking-[.2em] text-purple-300">IEEE SEGE 2026</p>
        <h2 className="mt-3 font-serif text-4xl font-bold">Analysis and Simulation of Integrated Multi-Generation Micro-Energy Systems in Rural African Communities</h2>
        <p className="mt-5 max-w-4xl leading-8 text-purple-100">I presented this work with Dr. Hossam A. Gabbar at the 14th IEEE International Conference on Smart Energy Grid Engineering at Ontario Tech University. The official SEGE 2026 conference site lists my project under its Student Innovation Competition Awards, recognizing my participation in the competition and the research I presented.</p>
        <a href="https://www.ieee-sege.com" target="_blank" className="mt-7 inline-block rounded-full bg-white px-6 py-3 font-bold text-purple-900">IEEE SEGE 2026</a>
      </div>
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
