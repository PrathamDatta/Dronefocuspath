import CountUp from "./CountUp";
import { Reveal, Stagger, StaggerItem } from "./motion";

const SITE = "https://derospacesystems.com";

export function Stats() {
  const stats = [
    { n: 6, l: "operational gaps in fragmented UAV fleets" },
    { n: 3, l: "capabilities: infrastructure, air systems, training" },
    { n: 12, l: "locations linked into one picture in the model below" },
    { n: 12, l: "months of digital learning access per trainee" },
  ];
  return (
    <section className="border-b border-line bg-panel py-16">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">The problem</p>
          <h2 className="mt-4 max-w-2xl text-2xl font-medium leading-tight tracking-tight md:text-3xl">
            UAV operations are scaling: <em className="italic text-signal-dim">more aircraft</em>, and less time to respond.
          </h2>
        </Reveal>
        <Stagger className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.l} className="bg-panel p-6">
              <span className="font-mono text-3xl font-semibold text-signal-dim"><CountUp to={s.n} /></span>
              <p className="mt-2 text-sm leading-snug text-ink-muted">{s.l}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal>
          <p className="mt-8 max-w-3xl leading-relaxed text-ink-muted">
            Derospace enables authorities to govern, oversee and audit UAV operations across organisations and locations; empowers operators to plan, command and execute missions across platforms through one unified ecosystem; delivers rapid-deployment UAV capability when time matters; and prepares mission-ready operators and teams.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const pillars = [
  { n: "01", tag: "Mission Infrastructure", badge: "Patent pending", title: "Coordinate the Mission.", body: "Unified mission infrastructure for vendor-agnostic, multi-OEM, multi-mission, multi-location operations.", verbs: ["Govern", "Plan", "Command", "Execute", "Oversee", "Audit"], cta: "Explore DeroMiC", href: `${SITE}/deromic.html` },
  { n: "02", tag: "Mission Air Systems", badge: "Patent pending", title: "Mobilise UAV Capability.", body: "Rapid-mobility and deployment UAV systems for critical time windows.", verbs: ["Carry", "Deploy", "Fly", "See", "Act"], cta: "Explore dXcale", href: `${SITE}/dxcale.html` },
  { n: "03", tag: "Dronocation", badge: "DGCA-authorised", title: "Prepare the Operator.", body: "Remote-pilot training, certification and operational readiness through our DGCA-authorised RPTO, plus institutional programmes.", verbs: ["Train", "Certify", "Operate"], cta: "Explore Dronocation", href: `${SITE}/dronocation.html` },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="bg-paper py-24 md:py-28">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Capabilities</p>
          <h2 className="mt-4 max-w-2xl text-2xl font-medium leading-tight tracking-tight md:text-3xl">
            Three ways we move a mission forward.
          </h2>
        </Reveal>

        {/* node diagram: hub -> bus -> three nodes */}
        <div className="mt-16">
          <div className="mx-auto w-fit border border-graphite bg-graphite px-4 py-2 font-mono text-xs font-semibold tracking-[.1em] text-paper">MISSION</div>
          <div className="mx-auto h-10 w-px bg-line" aria-hidden />
          <Stagger className="grid border-t border-line md:grid-cols-3">
            {pillars.map((p) => (
              <StaggerItem key={p.n} className="relative border-b border-line md:border-b-0 md:border-r md:border-line md:last:border-r-0">
                <span className="absolute left-1/2 top-0 h-6 w-px -translate-x-1/2 -translate-y-6 bg-line md:block" aria-hidden />
                <div className="flex h-full flex-col p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-ink-muted">{p.n}</span>
                    <span className="border border-signal-dim/40 bg-signal-soft px-2 py-0.5 font-mono text-[11px] font-semibold text-signal-dim">{p.badge}</span>
                  </div>
                  <p className="mt-4 eyebrow !text-ink-muted">{p.tag}</p>
                  <h3 className="mt-2 text-xl font-medium tracking-tight">{p.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-ink-muted">{p.body}</p>
                  <p className="mt-5 flex flex-wrap gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[.06em] text-ink-muted">
                    {p.verbs.map((v, i) => (
                      <span key={v}>{v}{i < p.verbs.length - 1 && <span className="mx-1.5 text-line">&middot;</span>}</span>
                    ))}
                  </p>
                  <a href={p.href} className="btn btn-outline mt-6 self-start">{p.cta} →</a>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal>
          <p className="mt-10 max-w-3xl leading-relaxed text-ink-muted">
            <strong className="text-ink">How they fit.</strong> Our training prepares the people. Our drones put aircraft in the air fast. Our mission infrastructure governs, plans and oversees missions across teams and locations, and keeps the record. Each works on its own. Together, they take an operation from readiness to mission assurance.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const editions = [
  { k: "A", t: "Defence & National Security", d: "For armed forces, paramilitary, border and homeland security units.", b: "Configured for defence command structures, operational security requirements, sovereign deployments and distributed field operations.", href: `${SITE}/defence-national-security.html` },
  { k: "B", t: "Government / PSU", d: "For police, disaster management, utilities and public-sector undertakings.", b: "Configured for departmental governance, jurisdiction-based operations, multi-agency coordination and institutional accountability.", href: `${SITE}/government-psu.html` },
  { k: "C", t: "Private Enterprise", d: "For infrastructure, energy, mining and drone-service operators.", b: "Configured for enterprise organisational structures, multi-site operations, commercial workflows and scalable UAV deployments.", href: `${SITE}/private-enterprise.html` },
];

export function Editions() {
  return (
    <section id="editions" className="border-y border-line bg-graphite py-24 text-paper md:py-28">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow !text-signal">Editions &mdash; select configuration</p>
          <h2 className="mt-4 max-w-2xl text-2xl font-medium leading-tight tracking-tight md:text-3xl">
            Built for every scale of UAV operations.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-paper/70">
            One mission infrastructure. Configured for diverse operational environments. DeroMiC provides a common foundation for governance, mission planning, command, execution, oversight and audit across organisations, OEM platforms and locations.
          </p>
        </Reveal>
        <Stagger className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-paper/15 bg-paper/15 sm:grid-cols-3">
          {editions.map((e) => (
            <StaggerItem key={e.k} className="h-full">
              <a href={e.href} className="group flex h-full flex-col bg-graphite p-7 transition-colors hover:bg-graphite-deep">
                <span className="font-mono text-xs text-signal">MODE {e.k}</span>
                <h3 className="mt-4 text-lg font-medium">{e.t}</h3>
                <p className="mt-3 text-sm font-medium text-paper/90">{e.d}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-paper/60">{e.b}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-signal">
                  View edition <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10 grid gap-4 text-sm text-paper/70 sm:grid-cols-2">
          <p><b className="text-paper">India.</b> Pilot deployments and field-trial enquiries welcome.</p>
          <p><b className="text-paper">Global.</b> International partnership and deployment enquiries welcome.</p>
        </Reveal>
      </div>
    </section>
  );
}

const team = [
  ["01", "Girish Reddy", "Founder & CEO, Product & Core Architecture", "Holds a granted Indian patent, with over a decade in the UAV industry."],
  ["02", "Rajesh P", "Co-Founder, Business Operations", "25+ years in GIS, network-centric computing and urban mapping."],
  ["03", "Bernard Raja", "Co-Founder, Business Development & Strategic Sales", "25+ years of global leadership across aerospace engineering firms."],
  ["04", "Hrithik Shaw", "Co-Founder, Systems Engineering & Technology Validation", "Flight hardware, embedded systems, integration and testing."],
];

export function Team() {
  return (
    <section id="team" className="bg-paper py-24 md:py-28">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Team &mdash; roster</p>
          <h2 className="mt-4 text-2xl font-medium tracking-tight md:text-3xl">The people behind the mission.</h2>
          <p className="mt-5 max-w-2xl text-ink-muted">Founders with decades across UAVs, aerospace, geospatial systems and defence-sector programmes.</p>
        </Reveal>
        <Stagger className="mt-12 divide-y divide-line border-y border-line">
          {team.map(([id, n, r, b]) => (
            <StaggerItem key={n} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6">
              <span className="font-mono text-xs text-ink-muted sm:w-10">{id}</span>
              <span className="font-medium sm:w-44">{n}</span>
              <span className="text-sm text-signal-dim sm:w-72">{r}</span>
              <span className="text-sm leading-relaxed text-ink-muted">{b}</span>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10">
          <a href={`${SITE}/team.html`} className="btn btn-outline">Meet the team →</a>
        </Reveal>
      </div>
    </section>
  );
}

const faqs = [
  ["What does Derospace Systems do?", "Derospace Systems is an Indian deep-tech company building the infrastructure that lets many drones, from many makers, operate as one coordinated system. It offers DeroMiC mission infrastructure, dXcale rapid-deployment UAV systems and operator training through Dronocation, its DGCA-authorised Remote Pilot Training Organisation."],
  ["Where is Derospace Systems based?", "Derospace Systems is based in Bengaluru, India. Pilot deployments and field-trial enquiries are welcome in India, and international partnership and deployment enquiries are welcome from outside India."],
  ["Is Derospace technology Indian-owned?", "Yes. Derospace designs its own software, edge hardware and aircraft on Indian-owned IP, designed and developed in India. DeroMiC has a published Indian Patent Application 202541104086 A, and dXcale has a published patent application."],
  ["Is Derospace DGCA-authorised?", "Dronocation by Derospace Systems is a DGCA-authorised Remote Pilot Training Organisation (RPTO). Derospace is also a DPIIT-recognised startup under Startup India."],
  ["Who is DeroMiC for?", "DeroMiC is offered in three editions: Defence & National Security, Government / PSU and Private Enterprise."],
];

export function Faq() {
  return (
    <section id="faq" className="bg-panel py-24 md:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <p className="eyebrow">FAQ &mdash; log</p>
          <h2 className="mt-4 text-2xl font-medium tracking-tight md:text-3xl">Frequently asked questions.</h2>
        </Reveal>
        <Reveal>
          <div className="divide-y divide-line border-y border-line">
            {faqs.map(([q, a], i) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-medium">
                  <span><span className="mr-3 font-mono text-xs text-ink-muted">{String(i + 1).padStart(2, "0")}</span>{q}</span>
                  <span aria-hidden className="mt-0.5 shrink-0 font-mono text-signal-dim transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 pl-8 leading-relaxed text-ink-muted">{a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Cta() {
  return (
    <section id="contact" className="border-b border-line bg-paper px-6 py-20 md:px-10">
      <Reveal>
        <div className="mx-auto max-w-[1200px] border border-graphite bg-graphite px-8 py-14 text-center text-paper md:py-20">
          <p className="eyebrow !text-signal">Open for enquiries</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-medium tracking-tight md:text-3xl">Run your next field trial with us.</h2>
          <p className="mx-auto mt-5 max-w-xl text-paper/70">
            We offer no-cost, no-commitment field trials to selected government, PSU and critical-infrastructure operators.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={`${SITE}/contact.html`} className="btn btn-light">Request a field trial →</a>
            <a href={`${SITE}/contact.html`} className="btn btn-ghost !border-paper/30 !text-paper/80 hover:!border-paper hover:!text-paper">Talk to us</a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper py-8 font-mono text-xs text-ink-muted">
      <div className="container-x flex flex-wrap items-center justify-between gap-4">
        <p>© 2026 DEROSPACE SYSTEMS &middot; BENGALURU, IN &middot; PATENT PENDING &middot; DGCA-AUTHORISED RPTO</p>
        <a href={SITE} className="link-roll font-semibold">
          <span className="roll-track">
            <span className="roll-line text-signal-dim">derospacesystems.com</span>
            <span className="roll-line text-ink">derospacesystems.com</span>
          </span>
        </a>
      </div>
    </footer>
  );
}
