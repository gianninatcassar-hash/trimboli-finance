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
  gold: "#0b3b5a", // navy accent
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

/* ---------- Logo fallback component ---------- */
const Logo = ({ srcs, alt }) => {
  const [idx, setIdx] = useState(0);
  if (idx >= srcs.length) return null;
  return (
    <img
      src={srcs[idx]}
      alt={alt}
      className="h-12 mx-auto"
      onError={() => setIdx((i) => i + 1)}
    />
  );
};

/* ---------- Topbar ---------- */
const Topbar = () => (
  <div className="w-full text-white" style={{ backgroundColor: COLORS.navyDark }}>
    <div className="mx-auto max-w-7xl px-4 py-3 flex justify-end">
      <div className="flex flex-col items-end gap-1">
        <a href={`tel:${BRAND.phone}`} className="text-xl font-bold whitespace-nowrap" style={{ color: "white" }}>
          📞 {BRAND.phone}
        </a>
        <a href={`mailto:${BRAND.email}`} className="text-base font-semibold whitespace-nowrap" style={{ color: "white" }}>
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
        {/* Removed brand text/logo completely */}

        <nav className="hidden md:flex items-center gap-8 ml-auto">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-slate-700 hover:text-slate-900">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-white shadow"
            style={{ backgroundColor: COLORS.gold }}
          >
            Book a consult
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg border p-2 ml-auto"
          aria-label="Menu"
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
          <a
            href="#contact"
            className="block rounded-lg px-4 py-2 text-center text-sm font-semibold text-white"
            style={{ backgroundColor: COLORS.gold }}
          >
            Book a consult
          </a>
        </div>
      )}
    </header>
  );
};

/* ---------- Hero Banner ---------- */
function HeroBanner() {
  const candidates = ["/hero-banner-clean.png", "/hero-banner.png", "/hero.jpg"];
  const [idx, setIdx] = useState(0);
  const src = candidates[idx];

  const handleError = () => {
    if (idx < candidates.length - 1) setIdx(idx + 1);
  };

  return (
    <section id="home" className="relative" style={{ backgroundColor: COLORS.navy }}>
      <img src={src} alt="Hero Banner" className="w-full h-auto block" onError={handleError} />
    </section>
  );
}

/* ---------- Page ---------- */
function App() {
  return (
    <div style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <Topbar />
      <Nav />
      <HeroBanner />

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
      {/* … keep your services, lenders, reviews, contact sections the same … */}
    </div>
  );
}

export default App;