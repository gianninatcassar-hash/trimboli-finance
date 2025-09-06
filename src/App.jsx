import React, { useState } from "react";

/* ---------- Brand & Theme ---------- */
const BRAND = {
  tagline: "Mortgage solutions with clarity and care.",
  phone: "0432 068 076",
  email: "Rocky@trimbolifinance.com.au",
};

const COLORS = {
  navy: "#0b3b5a",
  navyDark: "#07293f",
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

/* Try multiple filenames for a logo; hide if none load */
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
        <a href={`tel:${BRAND.phone}`} className="text-xl font-bold whitespace-nowrap">📞 {BRAND.phone}</a>
        <a href={`mailto:${BRAND.email}`} className="text-base font-semibold whitespace-nowrap">✉️ {BRAND.email}</a>
      </div>
    </div>
  </div>
);

/* ---------- Nav (no brand text/logo on the left) ---------- */
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
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center">
        <nav className="ml-auto hidden md:flex items-center gap-8">
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
          className="md:hidden ml-auto inline-flex items-center justify-center rounded-lg border p-2"
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
            style={{ backgroundColor: COLORS.navy }}
          >
            Book a consult
          </a>
        </div>
      )}
    </header>
  );
};

/* ---------- Hero Banner (fallback filenames, no crop) ---------- */
function HeroBanner() {
  const candidates = ["/hero-banner-clean.png", "/hero-banner.png", "/hero.jpg"];
  const [idx, setIdx] = useState(0);
  const src = candidates[idx];
  const handleError = () => idx < candidates.length - 1 && setIdx(idx + 1);

  return (
    <section id="home" className="relative" style={{ backgroundColor: COLORS.navy }}>
      <img src={src} alt="Hero Banner" className="w-full h-auto block" onError={handleError} />
    </section>
  );
}

/* ---------- Page ---------- */
export default function App() {
  return (
    <div style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <Topbar />
      <Nav />
      <HeroBanner />

      {/* SERVICES — same look as before (photos above titles), now ABOVE the quick strip */}
      <section id="services" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            kicker="What We Do"
            title="Mortgage Solutions"
            subtitle="Expert support across the full lending journey."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "First-home buyers", d: "Grants, deposits, borrowing power, lender policy.", img: "/first-home.png" },
              { t: "Refinance & repricing", d: "Lower rates, cash-backs, structure review.", img: "/refinance.png" },
              { t: "Investment loans", d: "Interest-only, splits, tax-smart structuring.", img: "/investment.png" },
              { t: "Construction & reno", d: "Progress payments and build-specific policies.", img: "/construction-loan.png" },
              { t: "Self-employed", d: "Alt-doc solutions for complex income.", img: "/self-employed.png" },
              { t: "Car & asset finance", d: "Fast approvals and competitive rates.", img: "/car.png" },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl bg-white shadow border border-slate-100 overflow-hidden text-center">
                <img src={c.img} alt={c.t} className="w-full h-40 object-cover" />
                <div className="p-6">
                  <h3 className="font-semibold text-lg">{c.t}</h3>
                  <p className="mt-2 text-slate-600">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK STRIP — now below Services */}
      <section className="py-8" style={{ backgroundColor: COLORS.paper }}>
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            "Access to 40+ trusted lenders giving you choice and flexibility.",
            "Tailored loan options and expert guidance every step of the way.",
            "We negotiate to secure the best rate and help you take advantage of cash-back offers.",
          ].map((txt) => (
            <div key={txt} className="rounded-xl bg-white px-6 py-6 shadow-sm border border-slate-100 flex items-center justify-center">
              <span className="text-base md:text-lg font-semibold text-slate-800 leading-snug">{txt}</span>
            </div>
          ))}
        </div>
      </section>

      {/* LENDERS — includes your new logos */}
      <section id="lenders" className="py-16 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <Kicker>A Selection From Our Panel of Lenders</Kicker>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Access to Australia’s Leading Banks & Lenders</h2>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
            <Logo alt="Westpac" srcs={["/logos/westpac.png", "/logos/bb.png"]} />
            <Logo alt="Commonwealth" srcs={["/logos/cba.png", "/logos/cbaa.png", "/logos/commonwealth.png"]} />
            <Logo alt="ANZ" srcs={["/logos/anz.png"]} />
            <Logo alt="ING" srcs={["/logos/ing.png", "/logos/ingg.png"]} />
            <Logo alt="Suncorp" srcs={["/logos/suncorp.png", "/logos/sc.png"]} />
            <Logo alt="Macquarie" srcs={["/logos/macquarie.png", "/logos/so.png"]} />
            <Logo alt="Bank of Melbourne" srcs={["/logos/bom.png"]} />
            <Logo alt="Bankwest" srcs={["/logos/bankwest.png", "/logos/bw.png"]} />
            <Logo alt="AFG" srcs={["/logos/afg.png", "/logos/afgh.png"]} />

            {/* NEW logos you asked to add */}
            <Logo alt="HSBC" srcs={["/logos/hsbc.png"]} />
            <Logo alt="RedZed" srcs={["/logos/red.png"]} />
            <Logo alt="Liberty" srcs={["/logos/liberty.png"]} />
            <Logo alt="AMP" srcs={["/logos/amp.png"]} />
            <Logo alt="Resimac" srcs={["/logos/rest.png"]} />
            <Logo alt="Macquarie Extra" srcs={["/logos/mac.png"]} />
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

          <div className="mt-10 text-center">
            <a
              href="https://g.page/r/YOUR-GOOGLE-REVIEW-LINK/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg px-6 py-3 font-semibold text-white"
              style={{ backgroundColor: COLORS.navy }}
            >
              Leave a Google Review
            </a>
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
            <a href={`tel:${BRAND.phone}`} className="rounded-lg px-6 py-3 font-semibold text-white" style={{ backgroundColor: COLORS.navy, border: "1px solid rgba(255,255,255,.35)" }}>
              Call {BRAND.phone}
            </a>
            <a href={`mailto:${BRAND.email}`} className="rounded-lg px-6 py-3 font-semibold text-white" style={{ border: "1px solid rgba(255,255,255,.7)" }}>
              Email {BRAND.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}