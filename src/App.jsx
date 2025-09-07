// src/App.jsx
import React, { useState } from "react";

/* ---------- Brand & Theme ---------- */
const BRAND = {
  name: "Trimboli Finance",
  phone: "0432 068 076",
  email: "Rocky@trimbolifinance.com.au",
  tagline: "Mortgage solutions with clarity and care.",
};

const COLORS = {
  navy: "#0b3b5a",
  navyDark: "#07293f",
  gold: "#c7a144",
  paper: "#f6f8fb",
};

/* ---------- Small helpers ---------- */
const Kicker = ({ children }) => (
  <p
    className="uppercase tracking-[.22em] text-[11px] font-semibold"
    style={{ color: COLORS.gold }}
  >
    {children}
  </p>
);

const SectionHeader = ({ kicker, title, subtitle, center = true }) => (
  <div className={`mx-auto max-w-3xl ${center ? "text-center" : ""}`}>
    {kicker && <Kicker>{kicker}</Kicker>}
    <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 text-slate-600 leading-relaxed">{subtitle}</p>
    )}
  </div>
);

/* ---------- Topbar ---------- */
const Topbar = () => (
  <div className="w-full text-white" style={{ backgroundColor: COLORS.navyDark }}>
    <div className="mx-auto max-w-7xl px-4 py-3 flex justify-end gap-5">
      <a href={`mailto:${BRAND.email}`} className="text-sm md:text-base font-semibold">
        ✉️ {BRAND.email}
      </a>
      <a
        href={`tel:${BRAND.phone}`}
        className="text-sm md:text-base font-bold"
        style={{ color: COLORS.gold }}
      >
        📞 {BRAND.phone}
      </a>
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
        <a href="#home" className="text-lg font-semibold text-slate-800">
          {BRAND.name}
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-slate-700 hover:text-slate-900">
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${BRAND.email}?subject=${encodeURIComponent(
              "New consult request - website"
            )}&body=${encodeURIComponent(
              "Hi Trimboli Finance,\n\nName:\nPhone:\nNature of enquiry:\nBest time to contact:\n\nThanks!"
            )}`}
            className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-slate-900 shadow"
            style={{ backgroundColor: COLORS.gold }}
          >
            Book a consult
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg border p-2"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5" />
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
            href={`mailto:${BRAND.email}?subject=${encodeURIComponent(
              "New consult request - website"
            )}&body=${encodeURIComponent(
              "Hi Trimboli Finance,\n\nName:\nPhone:\nNature of enquiry:\nBest time to contact:\n\nThanks!"
            )}`}
            className="block rounded-lg px-4 py-2 text-center text-sm text-slate-900"
            style={{ backgroundColor: COLORS.gold }}
          >
            Book a consult
          </a>
        </div>
      )}
    </header>
  );
};

/* ---------- Page ---------- */
export default function App() {
  return (
    <div>
      {/* Top */}
      <Topbar />
      <Nav />

      {/* ---------- HERO ---------- */}
      <section id="home" className="relative">
        <div className="relative h-[72vh] md:h-[78vh]">
          {/* Banner image */}
          <img
            src="/hero-banner.png"
            alt="Trimboli Finance banner"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "center 40%" }}
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-slate-900/50" />
          {/* Content */}
          <div className="relative z-10 mx-auto max-w-6xl h-full px-6 sm:px-8 flex flex-col justify-center">
            <h1 className="text-white font-extrabold tracking-tight leading-[1.2] text-[38px] sm:text-5xl max-w-[24ch]">
              <span className="block">Finance made clear.</span>
              <span className="block mt-1">Results you can trust.</span>
            </h1>
            <p className="mt-3 text-white/90 text-lg">
              Mortgage solutions with clarity and care.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={
                  "mailto:" +
                  BRAND.email +
                  "?subject=" +
                  encodeURIComponent("New consult request - website") +
                  "&body=" +
                  encodeURIComponent(
                    "Hi Rocky,\n\nName:\nPhone:\nNature of enquiry:\nBest time to contact:\n\nThanks!"
                  )
                }
                className="rounded-xl px-6 py-3 font-semibold text-slate-900"
                style={{ backgroundColor: COLORS.gold }}
              >
                Book a consult
              </a>
              <a
                href="#services"
                className="rounded-xl px-6 py-3 font-semibold text-white border border-white/70"
              >
                Our services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHAT WE DO ---------- */}
      {/* (leave your services, quick strip, lenders, reviews, and contact sections as they are) */}
    </div>
  );
}