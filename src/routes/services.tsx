import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Snowflake, Flame, Wrench, ThermometerSun, ShieldCheck, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "HVAC Services — AC & Heating Repair | Texas Discount Air" },
      { name: "description", content: "Air conditioning repair, furnace repair, new installs, and annual maintenance with flat-rate pricing in Fort Worth and surrounding areas." },
      { property: "og:title", content: "HVAC Services | Texas Discount Air" },
      { property: "og:description", content: "AC & heating repair, install, and maintenance with flat-rate pricing." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Snowflake,
    title: "Air Conditioning Repair",
    desc: "Same-day diagnostics for any make and model. We carry common parts and Freon on every truck so most repairs finish in a single visit.",
    points: ["Emergency AC repair", "Refrigerant top-offs", "Compressor & capacitor replacement", "Condenser cleaning"],
  },
  {
    icon: Flame,
    title: "Heating & Furnace Repair",
    desc: "Gas furnace, heat pump and air handler diagnostics. We troubleshoot ignition, gas valve and combustion issues safely.",
    points: ["Furnace won't heat", "Flame sensor & ignitor", "Gas valve & line problems", "Thermostat replacement"],
  },
  {
    icon: Wrench,
    title: "New System Installation",
    desc: "High-efficiency systems matched to your home with a load calculation — no oversold equipment.",
    points: ["Carrier · Goodman · Rheem", "Lennox · American Standard · Frigidaire", "Free in-home estimate", "Up-front flat pricing"],
  },
  {
    icon: ThermometerSun,
    title: "Annual Maintenance",
    desc: "Tune-up & safety package that protects your warranty and lowers your power bill year-round.",
    points: ["AC & furnace tune-ups", "Filter replacement", "System safety inspection", "Indoor air quality checks"],
  },
  {
    icon: Sparkles,
    title: "Indoor Air Quality",
    desc: "IAQ-certified technicians help you breathe cleaner air at home with media filters and UV solutions.",
    points: ["High-MERV filtration", "Duct cleaning referrals", "UV light installation", "Humidity control"],
  },
  {
    icon: ShieldCheck,
    title: "Tune-Up & Safety Packages",
    desc: "Bundled annual visits at discounted pricing. Catch problems before they become breakdowns.",
    points: ["Spring AC inspection", "Fall heating inspection", "Priority emergency service", "Discounted repair labor"],
  },
];

function ServicesPage() {
  return (
    <div>
      <section className="bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Services</p>
          <h1 className="mt-3 font-display text-5xl font-bold sm:text-6xl text-balance">Everything HVAC, under one roof.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Residential AC and heating service with flat-rate pricing, no overtime charges, and a $29 service call that's free with any repair.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg"><Link to="/contact">Book service <ArrowRight className="h-4 w-4" /></Link></Button>
            <Button asChild variant="outline" size="lg"><a href="tel:0000000000">Call (817) 000-0000</a></Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="h-full border-border bg-card p-7">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-hero text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h2 className="font-display text-xl font-bold">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-success" />{p}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold sm:text-5xl text-balance">Need an emergency repair right now?</h2>
          <p className="mt-4 text-lg text-muted-foreground">Text or call any time, day or night. We answer.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="xl"><a href="tel:0000000000">Call (817) 000-0000</a></Button>
            <Button asChild variant="cta" size="xl"><Link to="/contact">Book online</Link></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
