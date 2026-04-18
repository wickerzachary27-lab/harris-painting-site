"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Services", id: "services" },
  { label: "Our Work", id: "gallery" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (id: string) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), 80);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-forest/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? "h-16" : "h-20"
            }`}
          >
            <button
              onClick={() => scrollToId("top")}
              className="font-serif text-2xl md:text-3xl text-cream tracking-tight hover:opacity-90 transition-opacity"
              aria-label="Harris Painting home"
            >
              Harris Painting
            </button>

            <nav className="hidden md:flex items-center gap-10">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToId(link.id)}
                  className="text-sm font-medium text-cream/90 hover:text-terra transition-colors tracking-wide"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToId("contact")}
                className="ml-2 inline-flex items-center gap-2 rounded-full bg-terra px-6 py-3 text-sm font-bold text-cream hover:bg-terra-dark transition-colors shadow-md hover:shadow-lg"
              >
                Get a Free Quote
              </button>
            </nav>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-cream p-2 -mr-2"
              aria-label="Open menu"
            >
              <Menu size={28} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`md:hidden fixed inset-0 z-[60] bg-forest transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-20 px-6">
          <span className="font-serif text-2xl text-cream">Harris Painting</span>
          <button
            onClick={() => setOpen(false)}
            className="text-cream p-2 -mr-2"
            aria-label="Close menu"
          >
            <X size={28} strokeWidth={1.8} />
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center gap-8 pt-16">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="font-serif text-4xl text-cream hover:text-terra transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("contact")}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-terra px-10 py-4 text-base font-bold text-cream hover:bg-terra-dark transition-colors shadow-lg"
          >
            Get a Free Quote
          </button>
          <a
            href="tel:+15415567478"
            className="mt-4 inline-flex items-center gap-2 text-cream/80 hover:text-cream text-lg"
          >
            <Phone size={18} strokeWidth={1.8} />
            (541) 556-7478
          </a>
        </nav>
      </div>
    </>
  );
}
