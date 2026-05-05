import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Phone, Snowflake, Flame, Wrench, Clock, ShieldCheck, BadgeCheck, Star,
  Sparkles, ThermometerSun, MapPin, ArrowRight, CheckCircle2,
} from "lucide-react";
import heroImg from "@/assets/hero-tech.jpg";
import comfortImg from "@/assets/comfort-home.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Texas Discount Air — $29 AC & Heating Repair · Fort Worth, Keller, NRH" },
      { name: "description", content: "Trusted HVAC repair in Tarrant County. $29 service call (free with repair), flat-rate pricing, one-hour arrival guarantee. Call (817) 000-0000." },
    ],
  }),
  component: Home,
});

const trustBadges = [
  { icon: BadgeCheck, label: "EPA Certified" },
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Sparkles, label: "IAQ Certified" },
  { icon: Clock, label: "24/7 Emergency" },
];

const services = [
  { icon: Snowflake, title: "AC Repair", desc: "Same-day cooling repairs with flat-rate pricing.", to: "/services" },
  { icon: Flame, title: "Heating Repair", desc: "Furnace, heat pump and air handler diagnostics.", to: "/services" },
  { icon: Wrench, title: "New Installation", desc: "High-efficiency systems from leading brands.", to: "/services" },
  { icon: ThermometerSun, title: "Maintenance", desc: "Annual tune-ups that lower your power bill.", to: "/services" },
];

const reasons = [
  "$29 service call — FREE with any repair",
  "Flat-rate pricing given upfront, no surprises",
  "One-hour arrival window or service call is free",
  "EPA & IAQ certified technicians",
  "Free estimates with all repairs",
  "Honest diagnosis, every time",
];

const cities = ["Keller","Fort Worth","Colleyville","Euless","Hurst","Bedford","Southlake","Roanoke","Saginaw","Watauga","Haltom City","NRH","Grapevine","Westlake"];

const reviews = [
  { name: "Tanisha W.", text: "Todd came over the same day. He was honest, fair, and reasonable. Had my unit running within a couple of hours.", city: "Fort Worth" },
  { name: "Tiffany H.", text: "Todd is very knowledgeable and fair. He was honest and didn't try to sell me a service I did not need.", city: "Fort Worth" },
  { name: "Brian R.",   text: "Extremely knowledgeable! Todd was a blessing for my wife and I. Got our A/C problem solved in a matter of seconds.", city: "Keller" },
];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-soft">
        <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-28 lg:px-8">
          <div className="flex flex-col justify-center">
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-success" />
              Tarrant County's trusted HVAC team since day one
            </span>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Cool home.<br />
              <span>Honest pricing.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              $29 service call — free with any repair. Flat-rate pricing told to you before we lift a wrench. Same-day service across Fort Worth, Keller, NRH and surrounding areas.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Book a $29 Service Call <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href="tel:0000000000"><Phone className="h-4 w-4" /> (817) 000-0000</a>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {trustBadges.map((b) => (
                <div key={b.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <b.icon className="h-5 w-5 text-primary" />
                  {b.label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -rotate-3 rounded-3xl bg-gradient-warm opacity-20 blur-2xl" />
            <img
              src={heroImg}
              alt="HVAC technician servicing an outdoor air conditioning condenser"
              width={1600}
              height={1024}
              className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-elegant"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-5 shadow-card sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display text-lg font-bold">1 Hour</p>
                  <p className="text-xs text-muted-foreground">Arrival guarantee — or it's free</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER STRIP */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            { k: "$29", v: "Service Call (free with any repair)" },
            { k: "FREE", v: "Repair Estimates with all repairs" },
            { k: "24/7", v: "Emergency AC & Heating Service" },
          ].map((s) => (
            <div key={s.k} className="flex items-center gap-4">
              <div className="font-display text-4xl font-bold text-primary">{s.k}</div>
              <div className="text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">What we do</p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Repairs & installs done right the first time.</h2>
          <p className="mt-4 text-lg text-muted-foreground">From a midnight AC outage to a brand-new high-efficiency system — we handle every detail.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link key={s.title} to={s.to} className="group">
              <Card className="h-full border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-card">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-gradient-hero group-hover:text-primary-foreground transition-colors">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <p className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative order-2 lg:order-1">
            <img
              src={comfortImg}
              alt="Comfortable, well-conditioned modern living room"
              width={1024}
              height={768}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-elegant"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Why homeowners choose us</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl text-balance">No surprise costs. Just comfortable homes.</h2>
            <p className="mt-4 text-lg text-muted-foreground">An HVAC system should regulate temperature, lower your power bill, and keep your air clean. We match the right solution to your home — at the right price.</p>
            <ul className="mt-8 grid gap-3">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-success" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg"><Link to="/services">View all services</Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/about">About Texas Discount Air</Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Real reviews</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Neighbors that trust Todd.</h2>
          </div>
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-accent text-accent" />
            ))}
            <span className="ml-1 text-sm font-semibold">4.9 average · 19+ reviews</span>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <Card key={r.name} className="flex h-full flex-col gap-4 border-border bg-card p-6">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="flex-1 text-foreground">"{r.text}"</p>
              <div className="border-t border-border pt-4 text-sm">
                <p className="font-semibold">{r.name}</p>
                <p className="text-muted-foreground">{r.city}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Service area</p>
              <h2 className="mt-3 font-display text-4xl font-bold">Across Tarrant County.</h2>
            </div>
            <Button asChild variant="outline"><Link to="/locations">All locations <ArrowRight className="h-4 w-4" /></Link></Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {cities.map((c) => (
              <Link key={c} to="/locations" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary">
                <MapPin className="h-3.5 w-3.5" />{c}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 sm:p-16 shadow-elegant">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary-glow/40 blur-3xl" />
          <div className="relative grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div className="text-primary-foreground">
              <h2 className="font-display text-4xl font-bold sm:text-5xl text-balance">Hot house? Cold house? We'll be there in an hour.</h2>
              <p className="mt-4 text-lg text-primary-foreground/90">Book online or text us — flat rate, no surprises, free with repair.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild variant="cta" size="xl" className="shadow-glow"><Link to="/contact">Book Service Call</Link></Button>
              <Button asChild size="xl" variant="outline" className="bg-card/10 text-primary-foreground border-primary-foreground/30 hover:bg-card/20">
                <a href="tel:0000000000"><Phone className="h-5 w-5" /> (817) 000-0000</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
