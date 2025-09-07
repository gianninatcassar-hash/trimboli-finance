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
  gold: "#c7a144",
  paper: "#f8f9fb",
};

/* ---------- Small helpers ---------- */
const Kicker = ({ children }) => (
  <p className="uppercase tracking-[.2em] text-xs font-semibold" style={{ color: COLORS.gold }}>
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
        <a href={`tel:${BRAND.phone}`} className="text-xl font-bold whitespace-nowrap" style={{ color: COLORS.gold }}>
          📞 {BRAND.phone}
        </a>
        <a
          href={`mailto:${BRAND.email}`}
          className="text-base font-semibold transition-colors whitespace-nowrap"
          style={{ color: "white" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.gold)}
          onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
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
          <span className="text-lg font-semibold text-slate-800">Trimboli Finance</span>
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
              `Hi Trimboli Finance,%0A%0AName:%20%0APhone:%20%0ANature%20of%20enquiry:%20%0ABest%20time%20to%20contact:%20%0A%0AThanks!`
            )}`}
            className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-white shadow"
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
              `Hi Rocky,%0A%0AName:%20%0APhone:%20%0ANature%20of%20enquiry:%20%0ABest%20time%20to%20contact:%20%0A%0AThanks!`
            )}`}
            className="block rounded-lg px-4 py-2 text-center text-sm text-white"
            style={{ backgroundColor: COLORS.gold }}
          >
            Book a consult
          </a>
        </div>
      )}
    </header>
  );
};

/* =========================================================
   PAGE
   ========================================================= */
export default function App() {
  return (
    <div>
      <Topbar />
      <Nav />
     {{/* ---------- HERO (centered, no overlap) ---------- */}
<section id="home" className="relative">
  <div className="relative h-[72vh] md:h-[80vh] bg-[#0b3b5a] overflow-hidden">
    {/* Banner image */}
    <img
      src="/hero-banner.png?v=2"   // cache-bust
      alt=""
      className="absolute inset-0 h-full w-full object-cover"
      style={{ objectPosition: "center 50%" }}  // adjust 45–55% to taste
    />

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/55" />

    {/* Centered content */}
    <div className="absolute inset-0 grid place-items-center px-4">
      <div className="z-10 w-full max-w-5xl">
        <h1 className="text-white font-extrabold leading-tight text-4xl md:text-6xl">
          Finance made clear.
          <span className="block">Results you can trust.</span>
        </h1>

        <p className="mt-4 text-white/90 text-lg md:text-xl">
          Mortgage solutions with clarity and care.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={`mailto:Rocky@trimbolifinance.com.au?subject=${encodeURIComponent(
              "New consult request - website"
            )}&body=${encodeURIComponent(
              "Hi Trimboli Finance,\n\nName:\nPhone:\nNature of enquiry:\nBest time to contact:\n\nThanks!"
            )}`}
            className="inline-flex items-center rounded-xl px-6 py-3 font-semibold text-slate-900 shadow-md hover:shadow-lg transition"
            style={{ backgroundColor: "#c7a144" }}
          >
            Book a consult
          </a>

          <a
            href="#services"
            className="inline-flex items-center rounded-xl px-6 py-3 font-semibold border border-white text-white hover:bg-white hover:text-slate-900 transition"
          >
            Our services
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* ---------- SERVICES (What we do) ---------- */}
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
              <div key={c.t} className="rounded-2xl bg-white p-6 shadow border border-slate-100">
                {c.img && <img src={c.img} alt={c.t} className="h-36 w-full object-cover rounded-lg mb-4" />}
                <h3 className="mt-1 font-semibold text-lg">{c.t}</h3>
                <p className="mt-2 text-slate-600">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- QUICK STRIP ---------- */}
      <section className="py-6" style={{ backgroundColor: COLORS.paper }}>
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {[
            "Access to 40+ trusted lenders giving you choice and flexibility.",
            "Tailored loan options and expert guidance every step of the way.",
            "We negotiate to secure the best rate and help you take advantage of cash-back offers.",
          ].map((txt) => (
            <div key={txt} className="rounded-xl bg-white px-4 py-4 shadow-sm border border-slate-100">
              <span className="text-base font-medium text-slate-700">{txt}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- LENDERS ---------- */}
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
              { src: "/logos/so.png", alt: "Macquarie (old)" },
              { src: "/logos/bom.png", alt: "Bank of Melbourne" },
              { src: "/logos/bw.png", alt: "Bankwest" },
              { src: "/logos/afgh.png", alt: "AFG" },
              // Extras you asked for
              { src: "/logos/hsbc.png", alt: "HSBC" },
              { src: "/logos/red.png", alt: "RedZed" },
              { src: "/logos/liberty.png", alt: "Liberty" },
              { src: "/logos/amp.png", alt: "AMP" },
              { src: "/logos/rest.png", alt: "Resimac" },
              { src: "/logos/mac.png", alt: "Macquarie (new)" },
              { src: "/logos/pepper.png", alt: "Pepper Money" },
            ].map((l) => (
              <img key={l.alt} src={l.src} alt={l.alt} className="h-12 mx-auto opacity-100" />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- REVIEWS ---------- */}
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
              style={{ backgroundColor: COLORS.gold }}
            >
              Leave a Google Review
            </a>
          </div>
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section id="contact" className="relative py-16 text-white" style={{ background: `linear-gradient(135deg, ${COLORS.navy}, ${COLORS.navyDark})` }}>
        <div className="mx-auto max-w-5xl px-4 text-center">
          <Kicker>Get in Touch</Kicker>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Speak with Us</h2>
          <p className="mt-3 text-white/90">
            Whether you’re buying, refinancing or investing — let’s map your next step with confidence.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-lg">
            <a href={`tel:${BRAND.phone}`} className="rounded-lg px-6 py-3 font-semibold text-slate-900 bg-white/90 hover:bg-white">
              Call {BRAND.phone}
            </a>
            <a
              href={`mailto:${BRAND.email}?subject=${encodeURIComponent(
                "New consult request - website"
              )}&body=${encodeURIComponent(
                `Hi Trimboli Finance,%0A%0AName:%20%0APhone:%20%0ANature%20of%20enquiry:%20%0ABest%20time%20to%20contact:%20%0A%0AThanks!`
              )}`}
              className="rounded-lg px-6 py-3 font-semibold border border-white/70"
            >
              Email {BRAND.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
