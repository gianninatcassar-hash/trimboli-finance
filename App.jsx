import React, { useState } from "react";

const BRAND = {
  name: "Trimboli Finance",
  tagline: "Helping you secure the right loan, stress-free.",
  phone: "0433 068 076",
  email: "Rocky@trimbolifinance.com",
  address: "",
  abn: "",
  creditLicense: "",
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
  principal: "Rocky Trimboli",
};

const SectionHeading = ({ kicker, title, subtitle }) => (
  <div className="mx-auto max-w-3xl text-center">
    {kicker && (
      <p className="uppercase tracking-widest text-sm text-sky-600 font-semibold">{kicker}</p>
    )}
    <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
    {subtitle && (
      <p className="mt-3 text-slate-600 leading-relaxed">{subtitle}</p>
    )}
  </div>
);

const Nav = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#calculator", label: "Calculator" },
    { href: "#reviews", label: "Reviews" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex size-9 items-center justify-center rounded-xl bg-sky-600 text-white font-bold">T</span>
          <div>
            <p className="font-semibold leading-tight">{BRAND.name}</p>
            <p className="text-xs text-slate-500 -mt-0.5">By {BRAND.principal}</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-slate-700 hover:text-sky-700">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold bg-sky-600 text-white shadow hover:shadow-md"
          >
            Free consult
          </a>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl border p-2"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 6.75h16.5m-16.5 6.75h16.5" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-3 space-y-2">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="block text-sm text-slate-700 hover:text-sky-700">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block rounded-xl px-4 py-2 text-sm font-semibold bg-sky-600 text-white shadow hover:shadow-md text-center"
          >
            Free consult
          </a>
        </div>
      )}
    </header>
  );
};

export default function App() {
  return (
    <div>
      <Nav />
      <main>
        <section id="home" className="py-20 bg-sky-50">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              Welcome to {BRAND.name}
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              At {BRAND.name}, led by {BRAND.principal}, we make home loans and refinancing simple, personal, and stress-free.
            </p>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center rounded-xl px-6 py-3 text-lg font-semibold bg-sky-600 text-white shadow hover:shadow-md"
              >
                Talk to Rocky today
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white border-t border-slate-200">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              kicker="Get in Touch"
              title="Contact Rocky Trimboli"
              subtitle="Whether you're buying your first home, refinancing, or investing, we're here to help."
            />
            <div className="mt-8 space-y-4 text-lg text-slate-700">
              <p>📞 <a href={`tel:${BRAND.phone}`} className="text-sky-600 font-semibold">{BRAND.phone}</a></p>
              <p>📧 <a href={`mailto:${BRAND.email}`} className="text-sky-600 font-semibold">{BRAND.email}</a></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
