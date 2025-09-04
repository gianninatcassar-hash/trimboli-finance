import React, { useState } from "react";

/* ---------- Brand & Theme ---------- */
const BRAND = {
  name: "Trimboli Finance",
  tagline: "Helping you secure the right loan, stress-free.",
  phone: "0433 068 076",
  email: "Rocky@trimbolifinance.com", // ← change if needed
  principal: "Rocky Trimboli",
};

const NAVY = {
  base: "#0b3b5a",
  dark: "#07293f",
  light: "#f8f9fb",
};

/* ---------- Small helpers ---------- */
const SectionHeading = ({ kicker, title, subtitle }) => (
  <div className="mx-auto max-w-3xl text-center">
    {kicker && (
      <p className="uppercase tracking-widest text-sm font-semibold" style={{ color: NAVY.base }}>
        {kicker}
      </p>
    )}
    <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
    {subtitle && <p className="mt-3 text-slate-600 leading-relaxed">{subtitle}</p>}
  </div>
);

/* ---------- Navigation ---------- */
const Nav = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#lenders", label: "Lenders" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header
      className="sticky top-0 z-40 border-b"
      style={{ backdropFilter: "blur(8px)", backgroundColor: "rgba(255,255,255,0.85)", borderColor: "#e5e7eb" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span
            className="inline-flex size-9 items-center justify-center rounded-xl text-white font-bold"
            style={{ backgroundColor: NAVY.base }}
          >
            T
          </span>
          <div>
            <p className="font-semibold leading-tight">{BRAND.name}</p>
            <p className="text-xs text-slate-500 -mt-0.5">By {BRAND.principal}</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm"
              style={{ color: "#334155" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = NAVY.base)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#334155")}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold text-white shadow hover:shadow-md"
            style={{ backgroundColor: NAVY.base }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = NAVY.dark)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = NAVY.base)}
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-3 space-y-2">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="block text-sm" style={{ color: "#334155" }}>
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block rounded-xl px-4 py-2 text-sm font-semibold text-center text-white shadow hover:shadow-md"
            style={{ backgroundColor: NAVY.base }}
          >
            Free consult
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
      <Nav />

      {/* Hero */}
      <section id="home" className="py-20" style={{ backgroundColor: NAVY.light }}>
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
              className="inline-flex items-center rounded-xl px-6 py-3 text-lg font-semibold text-white shadow hover:shadow-md"
              style={{ backgroundColor: NAVY.base }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = NAVY.dark)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = NAVY.base)}
            >
              Talk to Rocky today
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16" style={{ backgroundColor: NAVY.light }}>
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            kicker="What we do"
            title="Mortgage solutions"
            subtitle="First home, refinance, investment, construction, self-employed, and more."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "First-home loans", body: "Deposit options, grants, and lender policy guidance." },
              { title: "Refinancing", body: "Lower rates, cash-backs, and better features." },
              { title: "Investment loans", body: "Structure, interest-only, and portfolio growth." },
              { title: "Construction", body: "Progress payments and build-specific policies." },
              { title: "Self-employed", body: "Alt-doc and solutions for complex income." },
              { title: "Car & asset finance", body: "Fast approvals and competitive rates." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl bg-white p-6 shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-lg text-slate-900">{c.title}</h3>
                <p className="mt-2 text-slate-600">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lenders (logos served from /public/logos/) */}
      <section id="lenders" className="py-16 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="uppercase tracking-widest text-sm font-semibold" style={{ color: NAVY.base }}>
            A Selection From Our Panel of Lenders
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Access to Australia’s Leading Banks & Lenders
          </h2>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
            <img src="/logos/westpac.png"        alt="Westpac"           className="h-12 mx-auto" />
            <img src="/logos/cba.png"            alt="Commonwealth Bank" className="h-12 mx-auto" />
            <img src="/logos/anz.png"            alt="ANZ"               className="h-12 mx-auto" />
            <img src="/logos/ing.png"            alt="ING"               className="h-12 mx-auto" />
            <img src="/logos/suncorp.png"        alt="Suncorp"           className="h-12 mx-auto" />
            <img src="/logos/macquarie.png"      alt="Macquarie"         className="h-12 mx-auto" />
            <img src="/logos/bankaustralia.png"  alt="Bank Australia"    className="h-12 mx-auto" />
            <img src="/logos/bankwest.png"       alt="Bankwest"          className="h-12 mx-auto" />
            <img src="/logos/afg.png"            alt="AFG"               className="h-12 mx-auto" />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20" style={{ backgroundColor: NAVY.light }}>
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            kicker="Reviews"
            title="What our clients say"
            subtitle={`Here’s what recent clients have said about working with ${BRAND.principal}.`}
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { name: "Sarah M.", text: "Rocky made refinancing so simple. Clear explanations and a great rate." },
              { name: "Daniel P.", text: "First-home buyer made easy. Professional, patient, and reassuring." },
              { name: "Melissa T.", text: "Stress-free process from start to finish. Highly recommend." },
            ].map((r, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow">
                <p className="text-yellow-500">★★★★★</p>
                <p className="mt-2 text-slate-700 italic">“{r.text}”</p>
                <p className="mt-3 font-semibold" style={{ color: NAVY.base }}>— {r.name}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://g.page/r/YOUR-GOOGLE-REVIEW-LINK/review" // ← replace with your real Google review link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl px-6 py-3 text-lg font-semibold text-white shadow hover:shadow-md"
              style={{ backgroundColor: NAVY.base }}
            >
              Leave a Google Review
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            kicker="Get in Touch"
            title="Contact Rocky Trimboli"
            subtitle="Whether you're buying your first home, refinancing, or investing, we're here to help."
          />
          <div className="mt-8 space-y-4 text-lg">
            <p>
              📞{" "}
              <a href={`tel:${BRAND.phone}`} className="font-semibold" style={{ color: NAVY.base }}>
                {BRAND.phone}
              </a>
            </p>
            <p>
              📧{" "}
              <a href={`mailto:${BRAND.email}`} className="font-semibold" style={{ color: NAVY.base }}>
                {BRAND.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-white text-center text-sm" style={{ backgroundColor: NAVY.base }}>
        <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
        <p className="mt-2">
          Credit Representative of AFG (Australian Finance Group). Australian Credit Licence No. [YOUR ACL NUMBER].
        </p>
        <div className="mt-4 flex justify-center">
          <img src="/logos/afg.png" alt="AFG" className="h-8" />
        </div>
      </footer>
    </div>
  );
}

