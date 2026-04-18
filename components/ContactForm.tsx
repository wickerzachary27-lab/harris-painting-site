"use client";

import { useState, type FormEvent } from "react";
import { Check, Send } from "lucide-react";

const services = [
  "Interior Painting",
  "Exterior Painting",
  "Cabinet Painting",
  "Deck & Floor Staining",
  "Pressure Washing",
  "Color Consultation",
  "Other",
];

const INPUT_CLASSES =
  "w-full rounded-md border border-ink/10 bg-cream px-4 py-3 text-ink placeholder:text-muted/70 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20 transition-colors";

const LABEL_CLASSES = "block text-xs font-bold tracking-wider text-forest mb-2";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const email = String(data.get("email") ?? "");
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Free Quote Request — ${service || "Harris Painting"}`;
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service: ${service}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const mailto = `mailto:clifton@harrispaintingllc.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
    form.reset();
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-cream p-10 md:p-12 shadow-xl border border-ink/5">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-forest text-cream">
            <Check size={32} strokeWidth={2.5} />
          </div>
          <h3 className="font-serif text-3xl text-forest mb-3">
            Thanks — we&apos;ll be in touch.
          </h3>
          <p className="text-muted max-w-md">
            Your email should be open now. If not, give us a call at{" "}
            <a
              href="tel:+15415567478"
              className="text-terra font-bold hover:underline"
            >
              (541) 556-7478
            </a>
            . We reply quickly — usually the same day.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 text-sm font-bold text-forest underline underline-offset-4 hover:text-terra"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-cream p-8 md:p-10 shadow-xl border border-ink/5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={LABEL_CLASSES}>
            NAME
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            className={INPUT_CLASSES}
          />
        </div>
        <div>
          <label htmlFor="phone" className={LABEL_CLASSES}>
            PHONE
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(541) 555-0199"
            className={INPUT_CLASSES}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="email" className={LABEL_CLASSES}>
          EMAIL
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={INPUT_CLASSES}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="service" className={LABEL_CLASSES}>
          SERVICE
        </label>
        <select
          id="service"
          name="service"
          defaultValue=""
          required
          className={INPUT_CLASSES}
        >
          <option value="" disabled>
            Select a service…
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={LABEL_CLASSES}>
          PROJECT DETAILS
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us a little about your project — rooms, square footage, timeline, or anything else helpful."
          className={INPUT_CLASSES}
        />
      </div>

      <button
        type="submit"
        className="mt-7 group inline-flex w-full items-center justify-center gap-2 rounded-full bg-terra px-8 py-4 text-base font-bold text-cream shadow-lg hover:bg-terra-dark hover:shadow-xl transition-all"
      >
        Send Request
        <Send
          size={16}
          strokeWidth={2.2}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>

      <p className="mt-4 text-xs text-muted text-center">
        We&apos;ll reply the same business day. No spam, ever.
      </p>
    </form>
  );
}
