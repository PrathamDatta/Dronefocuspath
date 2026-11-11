import CountUp from "./CountUp";
import { HoverLift, Reveal, Stagger, StaggerItem } from "./motion";

const SITE = "https://derospacesystems.com";

export function Stats() {
  const stats = [
    { n: 0, l: "operational gaps in fragmented UAV fleets" },
    { n: 3, l: "capabilities: infrastructure, air systems, training" },
    { n: 12, l: "months of digital learning access per trainee" },
  ];
  return (
    <section className="border-b border-line bg-white py-24">
      <div className="container-x grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <Reveal>
          <p className="eyebrow">The problem</p>
          <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
            UAV operations are scaling: more aircraft, and less time to respond.
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-ink-muted">
            Derospace enables authorities to govern, oversee and audit UAV operations across organisations and locations, empowers operators to plan, command and execute missions through one unified ecosystem, delivers rapid-deployment UAV capability when time matters, and prepares mission-ready operators and teams.
          </p>
        </Reveal>
        <Stagger className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-1">
          {stats.map((s) => (
            <StaggerItem key={s.l} className="flex items-baseline gap-5 bg-white p-6">
              <span className="min-w-[72px] text-3xl font-semibold text-primary">
                <CountUp to={s.n} />
              </span>
              <span className="text-sm text-ink-muted">{s.l}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

const pillars = [
  { n: "01", tag: "Mission Infrastructure", badge: "Patent pending", title: "Coordinate the Mission.", body: "Unified mission infrastructure for vendor-agnostic, multi-OEM, multi-mission, multi-location operations.", verbs: "Govern · Plan · Command · Execute · Oversee · Audit", cta: "Explore DeroMiC", href: `${SITE}/deromic.html`, img: "/assets/deromic-shot.webp" },
  { n: "02", tag: "Mission Air Systems", badge: "Patent pending", title: "Mobilise UAV Capability.", body: "Rapid-mobility and deployment UAV systems for critical time windows.", verbs: "Carry · Deploy · Fly · See · Act", cta: "Explore dXcale", href: `${SITE}/dxcale.html`, img: "/assets/dx-b.jpg" },
  { n: "03", tag: "Dronocation", badge: "DGCA-authorised", title: "Prepare the Operator.", body: "Remote-pilot training, certification and operational readiness through our DGCA-authorised RPTO, plus institutional programmes.", verbs: "Train · Certify · Operate", cta: "Explore Dronocation", href: `${SITE}/dronocation.html`, img: "/assets/training.jpg" },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="bg-primary-soft py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Capabilities</p>
          <h2 className="mt-4 max-w-2xl text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
            Three ways we move a mission forward.
          </h2>
        </Reveal>
        <div className="mt-16 space-y-8">
          {pillars.map((p, i) => (
            <Reveal key={p.n}>
              <div className={`grid overflow-hidden rounded-3xl bg-white shadow-card lg:grid-cols-2 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <div className="relative min-h-[260px] bg-primary-deep">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={`${p.tag} product view`} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-90" />
                  <span className="absolute left-6 top-6 rounded-full bg-white/90 px-3 py-1 font-mono text-xs font-semibold text-primary">{p.n}</span>
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="eyebrow">{p.tag}</span>
                    <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-dark">{p.badge}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-4 leading-relaxed text-ink-muted">{p.body}</p>
                  <p className="mt-6 font-mono text-xs uppercase tracking-[.1em] text-primary">{p.verbs}</p>
                  <a href={p.href} className="btn btn-primary mt-8 self-start">
                    {p.cta} <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-12 max-w-3xl leading-relaxed text-ink-muted">
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
    <section id="editions" className="bg-primary-deep py-24 text-white md:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow !text-accent-light">Editions</p>
          <h2 className="mt-4 max-w-2xl text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
            Built for every scale of UAV operations.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-white/75">
            One mission infrastructure, configured for diverse operational environments. DeroMiC is a common foundation for governance, planning, command, execution, oversight and audit across organisations, OEM platforms and locations.
          </p>
        </Reveal>
        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {editions.map((e) => (
            <StaggerItem key={e.k} className="h-full">
              <HoverLift className="h-full">
                <a href={e.href} className="group flex h-full flex-col rounded-2xl border border-white/15 bg-white/5 p-8 transition-colors hover:border-accent hover:bg-white/10">
                  <span className="font-mono text-xs text-accent-light">EDITION {e.k}</span>
                  <h3 className="mt-4 text-xl font-semibold">{e.t}</h3>
                  <p className="mt-3 text-sm font-medium text-white/90">{e.d}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">{e.b}</p>
                  <span className="mt-8 text-sm font-semibold text-accent">
                    View edition <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </a>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10 grid gap-4 text-sm text-white/75 sm:grid-cols-2">
          <p><b className="text-white">India.</b> Pilot deployments and field-trial enquiries welcome.</p>
          <p><b className="text-white">Global.</b> International partnership and deployment enquiries welcome.</p>
        </Reveal>
      </div>
    </section>
  );
}

const team = [
  ["GR", "Girish Reddy", "Founder & CEO", "Holds a granted Indian patent, with over a decade in the UAV industry."],
  ["RP", "Rajesh P", "Co-Founder, Business Operations", "25+ years in GIS, network-centric computing and urban mapping."],
  ["BR", "Bernard Raja", "Co-Founder, Business Development", "25+ years of global leadership across aerospace engineering firms."],
  ["HS", "Hrithik Shaw", "Co-Founder, Systems Engineering", "Flight hardware, embedded systems, integration and testing."],
];

export function Team() {
  return (
    <section id="team" className="py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Team</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">The people behind the mission.</h2>
          <p className="mt-6 max-w-2xl text-ink-muted">Founders with decades across UAVs, aerospace, geospatial systems and defence-sector programmes.</p>
        </Reveal>
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map(([i, n, r, b]) => (
            <StaggerItem key={n} className="h-full">
              <HoverLift className="h-full rounded-2xl border border-line p-6 transition-shadow hover:shadow-card">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-primary font-mono text-sm font-semibold text-white">{i}</div>
                <h3 className="mt-5 text-lg font-semibold">{n}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{r}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{b}</p>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10">
          <a href={`${SITE}/team.html`} className="btn btn-outline">Meet the team <span aria-hidden>→</span></a>
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
    <section id="faq" className="bg-primary-soft py-24 md:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">Frequently asked questions.</h2>
        </Reveal>
        <Reveal>
          <div className="divide-y divide-line rounded-2xl border border-line bg-white">
            {faqs.map(([q, a]) => (
              <details key={q} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {q}
                  <span aria-hidden className="text-xl text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 leading-relaxed text-ink-muted">{a}</p>
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
    <section id="contact" className="px-6 py-24 md:px-8">
      <Reveal>
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center text-white md:py-24">
          <h2 className="mx-auto max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">Run your next field trial with us.</h2>
          <p className="mx-auto mt-5 max-w-xl text-white/80">
            We offer no-cost, no-commitment field trials to selected government, PSU and critical-infrastructure operators.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={`${SITE}/contact.html`} className="btn btn-light">Request a field trial <span aria-hidden>→</span></a>
            <a href={`${SITE}/contact.html`} className="btn btn-ghost">Talk to us</a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-10 text-sm text-ink-muted">
      <div className="container-x flex flex-wrap items-center justify-between gap-4">
        <p>© Derospace Systems. Bengaluru, India.</p>
        <a href={SITE} className="font-semibold text-primary hover:underline">derospacesystems.com</a>
      </div>
    </footer>
  );
}
