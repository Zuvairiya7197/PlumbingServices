import Image from "next/image";
import type { Metadata } from "next";

const business = {
  name: "DRS Plumbing Service",
  phoneDisplay: "(770) 307-7486",
  phoneHref: "tel:+17703077486",
  email: "leakfreehouses@yahoo.com",
  location: "Winder, GA, USA",
  facebook: "https://www.facebook.com/",
};

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Area", href: "#service-area" },
  { label: "Contact", href: "#contact" },
];

const utilityItems = ["24/7 Emergency Service", "Locally Trusted Team", "Licensed & Insured"];

const services = [
  {
    title: "Leak Repair",
    description: "Stop hidden or visible leaks before they become bigger problems.",
  },
  {
    title: "Drain Cleaning",
    description: "Clear slow or blocked drains quickly with professional tools.",
  },
  {
    title: "Water Heater Repair",
    description: "Restore hot water fast for gas and electric systems.",
  },
  {
    title: "Emergency Plumbing",
    description: "Immediate help for urgent plumbing issues day or night.",
  },
  {
    title: "Pipe Installation",
    description: "Durable pipe installs and replacements done the right way.",
  },
  {
    title: "Preventive Inspections",
    description: "Find risks early and reduce emergency plumbing surprises.",
  },
];

const trustStats = [
  { value: "4.8+", label: "Google Rating" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Emergency Availability" },
  { value: "100%", label: "Satisfaction Focus" },
];

const reasons = [
  "Fast response across Winder and nearby areas",
  "Upfront pricing before work begins",
  "Experienced technicians and clean workmanship",
  "Respectful, on-time, customer-first service",
];

const reviews = [
  {
    name: "Jessica M.",
    text: "Our leak was fixed the same day. Easy process, fair pricing, and very professional.",
  },
  {
    name: "Mike R.",
    text: "Quick response and clear communication. The technician explained everything clearly.",
  },
  {
    name: "Sarah T.",
    text: "Excellent emergency help late at night. Clean work and great follow-up.",
  },
];

export const metadata: Metadata = {
  title: "24/7 Emergency Plumbing in Winder, GA | DRS Plumbing Service",
  description:
    "Need a plumber now? DRS Plumbing Service provides emergency plumbing, leak repair, drain cleaning, and water heater repair in Winder, GA.",
  alternates: {
    canonical: "https://example.com",
  },
  openGraph: {
    title: "DRS Plumbing Service | Emergency Plumber in Winder, GA",
    description: "Fast local plumbing in Winder, GA. Call now for immediate service.",
    url: "https://example.com",
    siteName: "DRS Plumbing Service",
    locale: "en_US",
    type: "website",
  },
};

function PrimaryCall({ className = "", label = "Call Now" }: { className?: string; label?: string }) {
  return (
    <a
      href={business.phoneHref}
      aria-label={`Call ${business.name} at ${business.phoneDisplay}`}
      className={`inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-4 text-base font-bold uppercase tracking-[0.04em] text-white transition hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-200 ${className}`}
    >
      {label}
    </a>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <header className="text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">{eyebrow}</p>
      <h2 className="mt-2 text-4xl font-extrabold uppercase tracking-tight text-[#062451] sm:text-5xl">{title}</h2>
    </header>
  );
}

export default function Page() {
  return (
    <main id="home" className="bg-white text-[#0c2344]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      <div className="bg-[#031b3d] text-white">
        <div className="mx-auto grid max-w-[1280px] gap-2 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.08em] sm:grid-cols-3 sm:text-sm">
          {utilityItems.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-4 py-4">
          <a href="#home" className="inline-flex items-center gap-3" aria-label="DRS Plumbing Service home">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#062451] text-xl font-bold text-white">DR</div>
            <div>
              <p className="text-3xl font-extrabold uppercase leading-none text-[#062451]">DRS</p>
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-600">Plumbing Service</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 xl:flex" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold uppercase tracking-[0.08em] text-[#0b2b58] transition hover:text-sky-600"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={business.phoneHref}
            className="rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-right shadow-sm"
          >
            <p className="text-3xl font-extrabold leading-none text-[#062451]">{business.phoneDisplay}</p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.08em] text-red-600">24/7 Emergency Service</p>
          </a>
        </div>
      </header>

      <section id="main-content" className="relative overflow-hidden bg-slate-100">
        <div className="mx-auto grid max-w-[1280px] items-stretch lg:grid-cols-2">
          <div className="px-4 pb-8 pt-10 sm:px-8 lg:py-14">
            <p className="text-4xl font-extrabold uppercase leading-none text-red-600 sm:text-5xl">Need Plumbing Help?</p>
            <h1 className="mt-3 text-6xl font-extrabold uppercase leading-[0.9] text-[#062451] sm:text-7xl">
              We Fix It
              <br />
              Fast.
            </h1>

            <p className="mt-6 max-w-xl text-2xl text-[#1c355f]">
              24/7 emergency plumbing in Winder, GA with fast response and reliable service.
            </p>

            <ul className="mt-6 space-y-2 text-xl text-[#0d2850]">
              <li className="flex items-start gap-3"><span className="font-bold text-sky-600">●</span> Available 24/7 for urgent issues</li>
              <li className="flex items-start gap-3"><span className="font-bold text-sky-600">●</span> Quick local response times</li>
              <li className="flex items-start gap-3"><span className="font-bold text-sky-600">●</span> Upfront pricing and clear communication</li>
              <li className="flex items-start gap-3"><span className="font-bold text-sky-600">●</span> Licensed, insured, and experienced team</li>
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <PrimaryCall label={`Call ${business.phoneDisplay}`} className="min-w-[230px]" />
              <a
                href="#contact"
                className="inline-flex min-w-[230px] items-center justify-center rounded-xl border border-[#1d4b85] bg-white px-6 py-4 text-base font-semibold uppercase tracking-[0.05em] text-[#0f3d78] transition hover:bg-slate-50"
              >
                Get Free Estimate
              </a>
            </div>
          </div>

          <div className="relative min-h-[420px] lg:min-h-[640px]">
            <Image
              src="/plumber-hero.svg"
              alt="Professional plumber repairing kitchen drain line"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-100 to-transparent" aria-hidden />
            <div className="absolute bottom-5 right-5 rounded-2xl border border-sky-400/70 bg-[#072a57] p-4 text-white shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-sky-300">Rapid Response</p>
              <p className="mt-1 text-2xl font-extrabold uppercase leading-tight">We Arrive Fast</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-6">
        <div className="mx-auto grid max-w-[1280px] gap-3 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((item) => (
            <div key={item.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
              <p className="text-4xl font-extrabold leading-none text-[#0f4ea1]">{item.value}</p>
              <p className="mt-1 text-lg font-semibold uppercase tracking-[0.04em] text-[#0c2d5d]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="bg-slate-100 py-14">
        <div className="mx-auto max-w-[1280px] px-4">
          <SectionHeading eyebrow="Our Plumbing Services" title="Complete Plumbing Solutions" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {services.map((service) => (
              <article key={service.title} className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                <h3 className="text-xl font-extrabold uppercase leading-tight text-[#0f2f5f]">{service.title}</h3>
                <p className="mt-3 text-base text-slate-600">{service.description}</p>
                <a
                  href={business.phoneHref}
                  className="mt-4 inline-flex items-center justify-center text-sm font-semibold uppercase tracking-[0.08em] text-sky-700 hover:text-sky-800"
                >
                  Call Now
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#031b3d] py-14 text-white">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-4 lg:grid-cols-2">
          <div className="relative min-h-[380px] overflow-hidden rounded-2xl border border-white/20">
            <Image
              src="/plumber-hero.svg"
              alt="Plumber working on residential water heater connection"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 rounded-xl bg-[#0f4ea1] px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em]">
              Licensed &amp; Insured
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-300">Why Choose Us</p>
            <h2 className="mt-2 text-5xl font-extrabold uppercase leading-[0.9]">
              Your Plumbing.
              <br />
              <span className="text-sky-400">Our Promise.</span>
            </h2>
            <p className="mt-4 text-xl text-slate-200">
              We are your local team focused on fast service, quality repairs, and long-term solutions.
            </p>

            <ul className="mt-6 space-y-2 text-lg">
              {reasons.map((reason) => (
                <li key={reason} className="flex gap-3">
                  <span className="text-sky-300">●</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-white py-14">
        <div className="mx-auto max-w-[1280px] px-4">
          <SectionHeading eyebrow="What Our Customers Say" title="Real Reviews. Real Results." />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {reviews.map((review) => (
              <blockquote key={review.name} className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
                <p className="text-amber-500">★★★★★</p>
                <p className="mt-3 text-lg text-slate-700">"{review.text}"</p>
                <footer className="mt-4 text-lg font-bold text-[#0f3b75]">- {review.name}</footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center rounded-lg border border-sky-700 px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-sky-700 hover:bg-sky-50"
            >
              Speak With Our Team
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#0f4ea1] py-8 text-white">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-5 px-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-sky-100">Need a Plumber Now?</p>
            <p className="mt-1 text-4xl font-extrabold uppercase leading-none">We&apos;re Ready to Help</p>
            <p className="mt-2 text-xl text-sky-100">Call now for immediate assistance.</p>
          </div>
          <PrimaryCall className="min-w-[280px] bg-red-600" label={`Call ${business.phoneDisplay}`} />
        </div>
      </section>

      <section id="service-area" className="bg-[#031b3d] py-12 text-white">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-4 md:grid-cols-4">
          <div>
            <h3 className="text-3xl font-extrabold uppercase">DRS Plumbing Service</h3>
            <p className="mt-3 text-slate-300">
              Providing reliable plumbing services in Winder, GA and nearby communities.
            </p>
            <a href={business.facebook} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sky-300">
              Facebook
            </a>
          </div>

          <div>
            <h3 className="text-xl font-bold uppercase text-sky-300">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-slate-200">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold uppercase text-sky-300">Services</h3>
            <ul className="mt-3 space-y-2 text-slate-200">
              {services.slice(0, 5).map((service) => (
                <li key={service.title}>{service.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold uppercase text-sky-300">Contact</h3>
            <ul className="mt-3 space-y-2 text-slate-200">
              <li>
                <a href={business.phoneHref} className="hover:text-white">
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="hover:text-white">
                  {business.email}
                </a>
              </li>
              <li>{business.location}</li>
              <li>Serving Winder, GA &amp; nearby areas</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/15 bg-[#02142e] py-4 text-center text-sm text-slate-300">
        <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
      </footer>

      <a
        href={business.phoneHref}
        aria-label={`Call now at ${business.phoneDisplay}`}
        className="fixed bottom-6 right-6 z-50 hidden items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-bold uppercase tracking-[0.06em] text-white shadow-[0_12px_24px_rgba(220,38,38,0.4)] transition hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300 md:inline-flex"
      >
        <span aria-hidden>☎</span>
        Call Now
      </a>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/20 bg-[#02142e]/95 p-3 backdrop-blur md:hidden">
        <PrimaryCall className="w-full" label="Call Now" />
      </div>
    </main>
  );
}
