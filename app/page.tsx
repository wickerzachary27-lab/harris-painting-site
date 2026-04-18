import Image from "next/image";
import {
  Paintbrush,
  Home,
  Archive,
  Layers,
  Droplets,
  Palette,
  Phone,
  MapPin,
  Clock,
  Star,
  ShieldCheck,
  Quote,
  Heart,
  Sparkles,
} from "lucide-react";

import Nav from "@/components/Nav";
import HeroCTAs from "@/components/HeroCTAs";
import ContactForm from "@/components/ContactForm";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80";

const SERVICES = [
  {
    name: "Interior Painting",
    icon: Paintbrush,
    desc: "Walls, ceilings, and trim done with careful prep, clean lines, and finishes that look right in every light.",
  },
  {
    name: "Exterior Painting",
    icon: Home,
    desc: "Pacific Northwest-proof paint systems that hold up to rain, sun, and time — without peeling or fading.",
  },
  {
    name: "Cabinet Painting",
    icon: Archive,
    desc: "Factory-smooth cabinet refinishing in your kitchen — a fraction of the cost of a full remodel.",
  },
  {
    name: "Deck & Floor Staining",
    icon: Layers,
    desc: "Decks, fences, and floors cleaned, prepped, and finished with stains that protect the wood for years.",
  },
  {
    name: "Pressure Washing",
    icon: Droplets,
    desc: "Siding, driveways, patios, and decks brought back to life — often the first step before a fresh coat.",
  },
  {
    name: "Color Consultation",
    icon: Palette,
    desc: "A free, in-person session with our color specialist to choose palettes you’ll love for years.",
  },
];

const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
    alt: "Freshly painted modern living room with warm neutral walls",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    alt: "Bright white painted kitchen with refinished cabinets",
  },
  {
    src: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1400&q=80",
    alt: "Craftsman style home exterior after fresh paint",
  },
  {
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
    alt: "Painted interior hallway with natural light",
  },
  {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
    alt: "Color swatches and paint brushes on work surface",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80",
    alt: "Freshly painted bedroom with warm whites and natural wood",
  },
];

const WHY = [
  {
    icon: Palette,
    title: "Color Consultation Included",
    body: "Every quote comes with a free color consultation from our specialist. We help you find colors that work — before a drop of paint hits the wall.",
  },
  {
    icon: Clock,
    title: "On Time, Every Time",
    body: "We show up when we say we will, and we keep you in the loop throughout the project. No surprises, no ghost jobs.",
  },
  {
    icon: Sparkles,
    title: "Clean, Careful Work",
    body: "We protect your floors, furniture, and trim. Every job ends with a walkthrough so you’re completely satisfied before we leave.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "They sent a color specialist before starting — such a nice touch. The crew was on time every single day, which is rare. Our home looks incredible.",
    name: "Jennifer M.",
    city: "Eugene",
  },
  {
    quote:
      "Harris Painting was about half the price of other quotes and the quality was better. Clifton and his team were professional from start to finish.",
    name: "Tom R.",
    city: "Springfield",
  },
  {
    quote:
      "Can’t say enough good things. Danielle communicated constantly and the crew treated our 3-story home with total care. We’ll be using them again.",
    name: "Sarah K.",
    city: "Eugene",
  },
];

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="top" className="bg-cream text-ink">
        {/* HERO */}
        <section className="relative min-h-screen w-full overflow-hidden">
          <Image
            src={HERO_IMAGE}
            alt="A beautifully painted home exterior at golden hour"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/55 to-forest/80" />
          <div className="absolute inset-0 bg-ink/10" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 pt-32 md:pt-40 pb-24 min-h-screen flex flex-col justify-center">
            <div className="max-w-4xl animate-fade-up">
              <p className="text-terra font-sans font-bold text-xs md:text-sm tracking-[0.35em] uppercase mb-6">
                Eugene, Oregon
              </p>
              <h1 className="font-serif text-cream text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight">
                Turn a House Into a{" "}
                <span className="italic text-terra">Beautiful Home.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-cream/90 text-lg md:text-xl leading-relaxed">
                Interior and exterior painting done right. Free color
                consultations, fair pricing, and results Eugene homeowners
                love.
              </p>
              <div className="mt-10">
                <HeroCTAs />
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-cream/80">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck size={16} strokeWidth={1.8} />
                  Licensed · Bonded · Insured
                </span>
                <span className="inline-flex items-center gap-2">
                  <Star size={16} strokeWidth={1.8} className="fill-terra text-terra" />
                  Lead-Paint Certified
                </span>
                <span className="inline-flex items-center gap-2">
                  <Heart size={16} strokeWidth={1.8} />
                  CCB# 198322
                </span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block">
            <div className="h-14 w-px bg-cream/50 animate-pulse" />
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="bg-forest py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 text-center">
              {[
                { num: "40+", label: "Years of Combined Experience" },
                { num: "500+", label: "Homes Painted in Lane County" },
                { num: "100%", label: "Satisfaction Guaranteed" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <span className="font-serif text-terra text-6xl md:text-7xl font-bold leading-none">
                    {stat.num}
                  </span>
                  <span className="mt-4 text-cream/90 text-sm md:text-base tracking-wide uppercase font-bold">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-24 md:py-32 bg-cream">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="max-w-2xl mb-16 md:mb-20">
              <p className="text-terra font-bold text-xs tracking-[0.3em] uppercase mb-4">
                Our Services
              </p>
              <h2 className="font-serif text-forest text-4xl sm:text-5xl md:text-6xl leading-tight">
                What We Paint
              </h2>
              <p className="mt-6 text-muted text-lg leading-relaxed">
                From the smallest trim job to a full exterior repaint — every
                surface gets the same level of careful prep and finish.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {SERVICES.map((s) => {
                const Icon = s.icon;
                return (
                  <article
                    key={s.name}
                    className="group relative bg-white rounded-2xl p-8 md:p-9 border border-ink/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-terra scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-terra/10 text-terra group-hover:bg-terra group-hover:text-cream transition-colors">
                      <Icon size={28} strokeWidth={1.6} />
                    </div>
                    <h3 className="font-serif text-forest text-2xl md:text-3xl mb-3">
                      {s.name}
                    </h3>
                    <p className="text-muted leading-relaxed">{s.desc}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="bg-forest py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="max-w-2xl mb-16 md:mb-20">
              <p className="text-terra font-bold text-xs tracking-[0.3em] uppercase mb-4">
                Our Work
              </p>
              <h2 className="font-serif text-cream text-4xl sm:text-5xl md:text-6xl leading-tight">
                Real Results from Eugene Homes
              </h2>
              <p className="mt-6 text-cream/75 text-lg leading-relaxed">
                A small selection of recent work across Lane County — interiors,
                exteriors, cabinets, and everything in between.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {GALLERY.map((img) => (
                <figure
                  key={img.src}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-forest-dark shadow-xl"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* WHY HARRIS */}
        <section id="about" className="bg-forest py-24 md:py-32 border-t border-cream/10">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="max-w-3xl mb-16 md:mb-20">
              <p className="text-terra font-bold text-xs tracking-[0.3em] uppercase mb-4">
                Why Harris
              </p>
              <h2 className="font-serif text-cream text-4xl sm:text-5xl md:text-6xl leading-tight">
                Why Eugene Homeowners Choose Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              {WHY.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="relative">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-terra text-cream">
                      <Icon size={26} strokeWidth={1.6} />
                    </div>
                    <h3 className="font-serif text-cream text-2xl md:text-3xl mb-4">
                      {item.title}
                    </h3>
                    <p className="text-cream/80 leading-relaxed text-base md:text-lg">
                      {item.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-cream py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
              <p className="text-terra font-bold text-xs tracking-[0.3em] uppercase mb-4">
                What Clients Say
              </p>
              <h2 className="font-serif text-forest text-4xl sm:text-5xl md:text-6xl leading-tight">
                Words from Eugene Neighbors
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.name}
                  className="relative bg-white rounded-2xl p-8 md:p-10 shadow-md hover:shadow-xl transition-shadow border border-ink/5 flex flex-col"
                >
                  <Quote
                    className="absolute -top-3 left-8 text-terra bg-cream rounded-full p-1.5"
                    size={36}
                    strokeWidth={1.5}
                  />
                  <div className="flex gap-0.5 mb-4 mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-terra text-terra"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <blockquote className="text-ink leading-relaxed text-base md:text-lg flex-1">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 pt-6 border-t border-ink/10">
                    <p className="font-bold text-forest">{t.name}</p>
                    <p className="text-sm text-muted">{t.city}, Oregon</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-cream py-24 md:py-32 border-t border-ink/5">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-2">
                <p className="text-terra font-bold text-xs tracking-[0.3em] uppercase mb-4">
                  Contact Us
                </p>
                <h2 className="font-serif text-forest text-4xl sm:text-5xl md:text-6xl leading-tight">
                  Get Your Free Quote
                </h2>
                <p className="mt-6 text-muted text-lg leading-relaxed">
                  Tell us about your project. We’ll get back to you the same
                  day with next steps and a free color consultation.
                </p>

                <div className="mt-10 space-y-6">
                  <a
                    href="tel:+15415567478"
                    className="flex items-start gap-4 group"
                  >
                    <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full bg-terra/10 text-terra group-hover:bg-terra group-hover:text-cream transition-colors shrink-0">
                      <Phone size={18} strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted tracking-wider uppercase">
                        Call or Text
                      </p>
                      <p className="text-forest font-serif text-2xl group-hover:text-terra transition-colors">
                        (541) 556-7478
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full bg-terra/10 text-terra shrink-0">
                      <MapPin size={18} strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted tracking-wider uppercase">
                        Office
                      </p>
                      <p className="text-forest">
                        65 Division Ave Ste 1-130
                        <br />
                        Eugene, OR 97404
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full bg-terra/10 text-terra shrink-0">
                      <Clock size={18} strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted tracking-wider uppercase">
                        Hours
                      </p>
                      <p className="text-forest">Mon–Fri · 8am – 6pm</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 rounded-2xl bg-forest text-cream p-7">
                  <p className="font-serif text-2xl mb-2">
                    Free quotes &amp; free color consultations.
                  </p>
                  <p className="text-cream/80 text-sm leading-relaxed">
                    Licensed, bonded, and insured. Lead-based paint certified.
                    <br />
                    <span className="text-terra font-bold">
                      Senior &amp; military discounts available.
                    </span>
                    <br />
                    <span className="text-cream/60 text-xs mt-3 block">
                      CCB# 198322
                    </span>
                  </p>
                </div>
              </div>

              <div className="lg:col-span-3">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-forest text-cream py-14">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
              <div>
                <p className="font-serif text-2xl">Harris Painting LLC</p>
                <p className="text-cream/70 text-sm mt-2">
                  Eugene, OR &middot; CCB# 198322
                </p>
              </div>

              <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-cream/80">
                <a href="tel:+15415567478" className="hover:text-terra transition-colors">
                  (541) 556-7478
                </a>
                <a
                  href="mailto:clifton@harrispaintingllc.com"
                  className="hover:text-terra transition-colors"
                >
                  Email
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=65+Division+Ave+Ste+1-130+Eugene+OR+97404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-terra transition-colors"
                >
                  Directions
                </a>
              </nav>

              <p className="md:text-right text-cream/60 text-sm">
                © 2025 Harris Painting LLC
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
