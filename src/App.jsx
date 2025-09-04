import React, { useState } from "react";

// Brand variables (edit these any time)
const BRAND = {
  name: "Trimboli Finance",
  tagline: "Helping you secure the right loan, stress-free.",
  phone: "0432 068 076",
  email: "Rocky@trimbolifinance.com.au", // <- update if needed
  principal: "Rocky Trimboli",
};

// Navy palette
const NAVY = {
  base: "#0b3b5a",
  dark: "#07293f",
  light: "#f8f9fb",
};

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

const Nav = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#reviews", label: "Reviews" },
    { href: "#faq", label: "FAQ" },
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
        <nav className="hidden md:flex items-center gap-6" aria-label="Main">
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 6.75h16.5m-16.5 6.75h16.5" />
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
{/* Lenders Section */}
<section id="lenders" className="py-16 bg-[#f8f9fb]">
  <div className="mx-auto max-w-6xl px-4 text-center">
    <p className="uppercase tracking-widest text-sm font-semibold text-[#0b3b5a]">
      A Selection From Our Panel of Lenders
    </p>
    <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
      Access to Australia’s Leading Banks & Lenders
    </h2>

    <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Westpac_2019.svg" alt="Westpac" className="h-12 mx-auto" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Commonwealth_Bank_logo.svg" alt="Commonwealth Bank" className="h-12 mx-auto" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/ANZ_logo.svg" alt="ANZ" className="h-12 mx-auto" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/ING_Group_logo.svg" alt="ING" className="h-12 mx-auto" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Suncorp_logo.svg" alt="Suncorp" className="h-12 mx-auto" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Macquarie_Group_logo.svg" alt="Macquarie" className="h-12 mx-auto" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Bank_Australia_logo.svg" alt="Bank Australia" className="h-12 mx-auto" />
      <img src="https://www.afgonline.com.au/wp-content/uploads/2022/06/AFG_MasterBrand_Logo_RGB.png" alt="AFG" className="h-12 mx-auto" />
    </div>
  </div>
</section>

      {/* Services (simple navy/white cards) */}
      <section id="services" className="py-16" style={{ backgroundColor: NAVY.light }}>
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <p className="uppercase tracking-widest text-sm font-semibold" style={{ color: NAVY.base }}>
              What we do
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Mortgage solutions</h2>
            <p className="mt-3 text-slate-600">First home, refinance, investment, construction, and more.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      
      {/* Reviews */}
<section id="reviews" className="py-20 bg-white border-t border-slate-200">
  <div className="mx-auto max-w-6xl px-4">
    <div className="mx-auto max-w-3xl text-center mb-12">
      <p className="uppercase tracking-widest text-sm font-semibold text-[#0b3b5a]">Reviews</p>
      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">What our clients say</h2>
      <p className="mt-3 text-slate-600">Here’s what recent clients have said about working with {BRAND.principal}.</p>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      {[
        {
          name: "Sarah M.",
          text: "Rocky made refinancing so simple. He explained everything clearly and got me a much better rate.",
        },
        {
          name: "Daniel P.",
          text: "As a first-home buyer, I had so many questions. Rocky was patient, professional, and helped me feel confident.",
        },
        {
          name: "Melissa T.",
          text: "Trimboli Finance made the process stress-free. I recommend Rocky to all my friends.",
        },
      ].map((review, idx) => (
        <div key={idx} className="rounded-2xl bg-[#f8f9fb] p-6 shadow">
          <p className="text-slate-700 italic">“{review.text}”</p>
          <p className="mt-4 font-semibold text-[#0b3b5a]">— {review.name}</p>
        </div>
      ))}
    </div>

    {/* Leave review button */}
    <div className="mt-10 text-center">
      <a
        href="https://g.page/r/your-google-business-link/review" // replace with your Google review link
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-xl px-6 py-3 text-lg font-semibold text-white shadow hover:shadow-md"
        style={{ backgroundColor: "#0b3b5a" }}
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
    </div>
  );
}
