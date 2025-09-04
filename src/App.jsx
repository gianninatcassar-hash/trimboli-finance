import React, { useState } from "react";

// Brand variables (edit these any time)
const BRAND = {
  name: "Trimboli Finance",
  tagline: "Helping you secure the right loan, stress-free.",
  phone: "0433 068 076",
  email: "Rocky@trimbolifinance.com", // <- update if needed
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
            className="inline-flex items-center rounded
