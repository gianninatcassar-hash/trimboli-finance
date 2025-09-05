import React, { useState } from "react";

/* ---------- Brand & Theme ---------- */
const BRAND = {
  name: "Trimboli Finance",
  tagline: "Mortgage solutions with clarity and care.",
  phone: "0432 068 076",
  email: "Rocky@trimbolifinance.com.au",
};

const COLORS = {
  navy: "#0b3b5a",
  navyDark: "#07293f",
  ink: "#0f172a",
  paper: "#f8f9fb",
};

/* ---------- Small helpers ---------- */
const Kicker = ({ children }) => (
  <p className="uppercase tracking-[.2em] text-xs font-semibold" style={{ color: COLORS.navy }}>
    {children}
  </p>
);

const SectionHeader = ({ kicker, title, subtitle }) => (
  <div className="mx-auto max-w-3xl text-center">
    {kicker && <Kicker>{kicker}</Kicker>}
    <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
    {subtitle && <p className="mt-3 text-slate-600 leading-relaxed">{subtitle}</p>}
  </div>
);

/* ---------- Topbar ---------- */
const Topbar = () => (
  <div className="w-full text-white" style={{ backgroundColor: COLORS.navyDark }}>
    <div className="mx-auto max-w-7xl px-4 py-3 flex justify-end">
      <div className="flex flex-col items-end gap-1">
        <a
          href={`tel:${BRAND.phone}`}
          className="text-xl font-bold whitespace-nowrap"
          style={{ color: "white" }}
        >
          📞 {BRAND.phone}
        </a>
        <a
          href={`mailto:${BRAND.email}`}
          className="text-base font-semibold whitespace-nowrap"
          style={{ color: "white" }}
        >
          ✉️ {BRAND.email}
        </a>
      </div>
    </div>
  </div>
);

/* ---------- Nav ---------- */
const Nav = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#lenders", label: "Lenders" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src="/logo-horizontal-dark.svg" alt="Trimboli Finance" className="h-8 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-slate-700 hover:text-slate-900">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-white shadow"
            style={{ backgroundColor: COLORS.navy }}
          >
            Book a consult
          </a>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg border p-2"
          onClick={() => setOpen(!open)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"/>
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-2">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="block text-sm text-slate-700">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

/* ---------- Page ---------- */
function App() {
  return (
    <div>
      <Topbar />
      <Nav />

      {/* HERO BANNER */}
      <section id="home" className="relative">
        <div
          className="h-[70vh] md:h-[78vh] w-full bg-cover bg-center"
          style={{ backgroundImage: "url(/hero-banner.png)" }}
        />
      </section>

      {/* QUICK STRIP */}
      <section className="py-6" style={{ backgroundColor: COLORS.paper }}>
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {["Access to 40+ lenders","Tailored options, clear guidance","We negotiate so you don’t have to"].map((txt) => (
            <div key={txt} className="rounded-xl bg-white px-4 py-3 shadow-sm border border-slate-100">
              <span className="text-sm font-medium text-slate-700">{txt}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader kicker="What We Do" title="Mortgage Solutions" subtitle="Expert support across the full lending journey." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "First-home buyers", d: "Grants, deposits, borrowing power, lender policy." },
              { t: "Refinance & repricing", d: "Lower rates, cash-backs, structure review." },
              { t: "Investment loans", d: "Interest-only, splits, tax-smart structuring." },
              { t: "Construction & reno", d: "Progress payments and build-specific policies." },
              { t: "Self-employed", d: "Alt-doc solutions for complex income." },
              { t: "Car & asset finance", d: "Fast approvals and competitive rates." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl bg-white p-6 shadow border border-slate-100">
                <h3 className="mt-4 font-semibold text-lg">{c.t}</h3>
                <p className="mt-2 text-slate-600">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LENDERS */}
      <section id="lenders" className="py-16 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <Kicker>A Selection From Our Panel of Lenders</Kicker>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Access to Australia’s Leading Banks & Lenders</h2>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
            {[
              { src: "/logos/bb.png", alt: "Westpac" },
              { src: "/logos/cbaa.png", alt: "Commonwealth Bank" },
              { src: "/logos/anz.png", alt: "ANZ" },
              { src: "/logos/ingg.png", alt: "ING" },
              { src: "/logos/sc.png", alt: "Suncorp" },
              { src: "/logos/so.png", alt: "Macquarie" },
              { src: "/logos/bom.png", alt: "Bank Australia" },
              { src: "/logos/bw.png", alt: "Bankwest" },
              { src: "/logos/afgh.png", alt: "AFG" },
            ].map((l) => (
              <img key={l.alt} src={l.src} alt={l.alt} className="h-12 mx-auto" />
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20" style={{ backgroundColor: COLORS.paper }}>
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader kicker="Reviews" title="What our clients say" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { name: "Sarah M.", text: "Rocky made refinancing simple and stress-free. Clear options, great rate." },
              { name: "Daniel P.", text: "First-home journey felt easy. Professional, patient, and proactive." },
              { name: "Melissa T.", text: "From application to settlement, everything was handled perfectly." },
            ].map((r, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow border border-slate-100">
                <p className="text-yellow-500">★★★★★</p>
                <p className="mt-2 text-slate-700 italic">“{r.text}”</p>
                <p className="mt-3 font-semibold" style={{ color: COLORS.navy }}>— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-16 text-white" style={{ background: `linear-gradient(135deg, ${COLORS.navy}, ${COLORS.navyDark})` }}>
        <div className="mx-auto max-w-5xl px-4 text-center">
          <Kicker>Get in Touch</Kicker>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Speak with Us</h2>
          <p className="mt-3 text-white/90">
            Whether you’re buying, refinancing or investing — let’s map your next step with confidence.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-lg">
            <a href={`tel:${BRAND.phone}`} className="rounded-lg px-6 py-3 font-semibold text-slate-900" style={{ backgroundColor: "white", color: COLORS.navy }}>
              Call {BRAND.phone}
            </a>
            <a href={`mailto:${BRAND.email}`} className="rounded-lg px-6 py-3 font-semibold border border-white/70">
              Email {BRAND.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
