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

const utilityItems = [
  { label: "24/7 Emergency Service", icon: "☎" },
  { label: "Locally Trusted Team", icon: "★" },
  { label: "Licensed & Insured", icon: "🛡" },
];

const services = [
  {
    icon: "💧",
    title: "Leak Repair",
    description: "Stop hidden or visible leaks before they become bigger problems.",
  },
  {
    icon: "🌀",
    title: "Drain Cleaning",
    description: "Clear slow or blocked drains quickly with professional tools.",
  },
  {
    icon: "♨",
    title: "Water Heater Repair",
    description: "Restore hot water fast for gas and electric systems.",
  },
  {
    icon: "🚨",
    title: "Emergency Plumbing",
    description: "Immediate help for urgent plumbing issues day or night.",
  },
  {
    icon: "🔧",
    title: "Pipe Installation",
    description: "Durable pipe installs and replacements done the right way.",
  },
  {
    icon: "✅",
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
    name: "just me",
    text: "DRS changed three leaky bathroom faucets for me. Very dependable, on time, professional, polite, and no mess left behind.",
  },
  {
    name: "Larry Meloro",
    text: "Danny got the exact 80-gallon water heater I wanted at a better price than other quotes. His team was on time and did a great job.",
  },
  {
    name: "Lilian Cruz",
    text: "Excellent service. The plumber was prompt, professional, and fixed a leak and stubborn clog efficiently with fair pricing.",
  },
  {
    name: "Garrett Tomlinson",
    text: "I rarely leave reviews, but this company is wonderful. Prompt turnaround, consistent quality, and very reliable service.",
  },
  {
    name: "Brandi",
    text: "Called at 8 with a water heater leak, and by 10:30 a new one was installed. Upfront pricing and very reasonable.",
  },
  {
    name: "John Brouwer",
    text: "Quality, service, and integrity. They stand behind their work, which is hard to find these days.",
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
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-4 text-base font-bold uppercase tracking-[0.04em] text-white transition hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-200 ${className}`}
    >
      <span aria-hidden>☎</span>
      <span className="whitespace-nowrap">{label}</span>
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
    <main id="home" className="bg-white pb-20 text-[#0c2344] md:pb-0">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      <div className="bg-[#031b3d] text-white">
        <div className="mx-auto grid max-w-[1280px] gap-2 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.08em] sm:grid-cols-3 sm:text-sm">
          {utilityItems.map((item) => (
            <p key={item.label} className="inline-flex items-center justify-center gap-2">
              <span
                aria-hidden
                className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/40 text-[11px]"
              >
                {item.icon}
              </span>
              <span>{item.label}</span>
            </p>
          ))}
        </div>
      </div>

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:py-4">
          <a href="#home" className="inline-flex min-w-0 items-center gap-2 sm:gap-3" aria-label="DRS Plumbing Service home">
            <Image
              src="/drsplumbing.webp"
              alt="DRS Plumbing Service logo"
              width={96}
              height={96}
              sizes="96px"
              className="h-14 w-14 object-contain sm:h-20 sm:w-20"
            />
            <div>
              <p className="text-xl font-extrabold uppercase leading-none text-[#062451] sm:text-3xl">DRS</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-600 sm:text-sm">Plumbing Service</p>
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

          <a href={business.phoneHref} className="ml-auto shrink-0 rounded-xl border border-slate-300 bg-slate-50 px-2 py-2 shadow-sm sm:px-4 sm:py-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#062451] text-base text-white sm:h-10 sm:w-10 sm:text-lg" aria-hidden>
                ☎
              </span>
              <div className="text-right">
                <p className="whitespace-nowrap text-base font-extrabold leading-none text-[#062451] sm:text-3xl">{business.phoneDisplay}</p>
                <p className="mt-1 hidden text-xs font-semibold uppercase tracking-[0.08em] text-red-600 sm:block sm:text-sm">24/7 Emergency Service</p>
              </div>
            </div>
          </a>
        </div>

        <nav className="border-t border-slate-200 xl:hidden" aria-label="Primary mobile">
          <div className="mx-auto flex max-w-[1280px] items-center gap-5 overflow-x-auto px-4 py-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.08em] text-[#0b2b58] transition hover:text-sky-600 sm:text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section id="main-content" className="relative overflow-hidden bg-slate-100">
        <div className="mx-auto grid max-w-[1280px] items-stretch lg:grid-cols-2">
          <div className="px-4 pb-8 pt-10 sm:px-8 lg:py-14">
            <p className="text-3xl font-extrabold uppercase leading-none text-red-600 sm:text-4xl lg:text-5xl">Need Plumbing Help?</p>
            <h1 className="mt-3 text-5xl font-extrabold uppercase leading-[0.9] text-[#062451] sm:text-6xl lg:text-7xl">
              We Fix It
              <br />
              Fast.
            </h1>

            <p className="mt-6 max-w-xl text-xl text-[#1c355f] sm:text-2xl">
              24/7 emergency plumbing in Winder, GA with fast response and reliable service.
            </p>

            <ul className="mt-6 space-y-2 text-lg text-[#0d2850] sm:text-xl">
              <li className="flex items-start gap-3"><span className="text-sky-600">✔</span> Available 24/7 for urgent issues</li>
              <li className="flex items-start gap-3"><span className="text-sky-600">✔</span> Quick local response times</li>
              <li className="flex items-start gap-3"><span className="text-sky-600">✔</span> Upfront pricing and clear communication</li>
              <li className="flex items-start gap-3"><span className="text-sky-600">✔</span> Licensed, insured, and experienced team</li>
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryCall label={`Call ${business.phoneDisplay}`} className="w-full sm:w-auto" />
            </div>
          </div>

          <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[640px]">
            <Image
              src="/Heroimage.webp"
              alt="Professional plumber repairing kitchen drain line"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-100 to-transparent" aria-hidden />
            <div className="absolute bottom-4 right-4 rounded-2xl border border-sky-400/70 bg-[#072a57] p-3 text-white shadow-lg sm:bottom-5 sm:right-5 sm:p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-sky-300">Rapid Response</p>
              <p className="mt-1 inline-flex items-center gap-2 text-lg font-extrabold uppercase leading-tight sm:text-2xl">
                <span aria-hidden>🕒</span>
                We Arrive Fast
              </p>
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
                <p className="text-3xl" aria-hidden>{service.icon}</p>
                <h3 className="text-xl font-extrabold uppercase leading-tight text-[#0f2f5f]">{service.title}</h3>
                <p className="mt-3 text-base text-slate-600">{service.description}</p>
                <a
                  href={business.phoneHref}
                  className="mt-4 inline-flex items-center justify-center text-sm font-semibold uppercase tracking-[0.08em] text-sky-700 hover:text-sky-800"
                >
                  <span aria-hidden className="mr-1">☎</span>
                  Call Now
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#031b3d] py-12 text-white sm:py-14">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-4 lg:grid-cols-2">
          <div className="relative min-h-[380px] overflow-hidden rounded-2xl border border-white/20">
            <Image
              src="/whychooseus.webp"
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
            <h2 className="mt-2 text-4xl font-extrabold uppercase leading-[0.95] sm:text-5xl">
              Your Plumbing.
              <br />
              <span className="text-sky-400">Our Promise.</span>
            </h2>
            <p className="mt-4 text-lg text-slate-200 sm:text-xl">
              We are your local team focused on fast service, quality repairs, and long-term solutions.
            </p>

            <ul className="mt-6 space-y-2 text-base sm:text-lg">
              {reasons.map((reason) => (
                <li key={reason} className="flex gap-3">
                  <span className="text-sky-300">✔</span>
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
            <p className="mt-1 text-3xl font-extrabold uppercase leading-none sm:text-4xl">We&apos;re Ready to Help</p>
            <p className="mt-2 text-lg text-sky-100 sm:text-xl">Call now for immediate assistance.</p>
          </div>
          <PrimaryCall className="w-full bg-red-600 sm:w-auto" label={`Call ${business.phoneDisplay}`} />
        </div>
      </section>

      <section id="service-area" className="bg-[#031b3d] py-12 text-white">
        <div className="mx-auto max-w-[1280px] px-4">
          <div className="grid gap-8 border-b border-white/15 pb-10 md:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h3 className="text-3xl font-extrabold uppercase">DRS Plumbing Service</h3>
              <p className="mt-3 max-w-md text-slate-300">
                Providing reliable plumbing services in Winder, GA and nearby communities.
              </p>
              <div className="mt-4 overflow-hidden rounded-lg border border-white/20">
                <iframe
                  title="DRS Plumbing Service area map"
                  src="https://www.google.com/maps?q=Winder,GA&output=embed"
                  className="h-44 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-4 flex items-center gap-3 text-sky-300">
                <a
                  href={business.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-sky-300/70 font-bold"
                  aria-label="Visit our Facebook page"
                >
                  f
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold uppercase text-sky-300">Quick Links</h3>
              <ul className="mt-4 space-y-2 text-slate-200">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-white">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold uppercase text-sky-300">Services</h3>
              <ul className="mt-4 space-y-2 text-slate-200">
                {services.slice(0, 5).map((service) => (
                  <li key={service.title}>{service.title}</li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-xl font-bold uppercase text-sky-300">Contact</h3>
              <div className="mt-4 rounded-xl border border-white/15 bg-white/5 p-4">
                <ul className="space-y-2 text-slate-200">
                  <li>
                    <a href={business.phoneHref} className="hover:text-white">
                      {business.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${business.email}`} className="inline-flex items-center gap-2 hover:text-white">
                      <span aria-hidden>✉</span>
                      {business.email}
                    </a>
                  </li>
                  <li>{business.location}</li>
                  <li>Serving Winder, GA &amp; nearby areas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#02142e] py-4 text-sm text-slate-300">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-3 px-4 md:flex-row">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#contact" className="hover:text-white">Privacy Policy</a>
            <a href="#contact" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>

      <a
        href={business.phoneHref}
        aria-label={`Call now at ${business.phoneDisplay}`}
        className="fixed bottom-6 right-6 z-50 hidden items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-bold uppercase tracking-[0.06em] text-white shadow-[0_12px_24px_rgba(220,38,38,0.4)] transition hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300 lg:inline-flex"
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
