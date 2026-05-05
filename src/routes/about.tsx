import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BadgeCheck, Clock, ShieldCheck, Star } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Texas Discount Air — Honest, Local HVAC Pros" },
      { name: "description", content: "Locally owned by Todd, EPA & IAQ certified, fully licensed & insured. Flat-rate honest pricing across Tarrant County." },
      { property: "og:title", content: "About Texas Discount Air" },
      { property: "og:description", content: "Locally owned. Honest pricing. Trusted technicians." },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { k: "$29", v: "Service call (free with repair)" },
  { k: "1 hr", v: "Arrival window guaranteed" },
  { k: "24/7", v: "Emergency availability" },
  { k: "4.9★", v: "Average customer rating" },
];

function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-soft">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">About</p>
            <h1 className="mt-3 font-display text-5xl font-bold sm:text-6xl text-balance">A neighbor you can trust with your AC.</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Texas Discount Air is locally owned and operated. Our technicians arrive on time, diagnose honestly, and quote flat-rate prices before any work begins. No upsells. No surprises. Just comfortable homes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg"><Link to="/contact">Book a service call</Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/services">Explore services</Link></Button>
            </div>
          </div>
          <Card className="border-border bg-card p-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.k}>
                  <div className="font-display text-4xl font-bold text-primary">{s.k}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-3 border-t border-border pt-6 text-sm">
              <div className="flex items-center gap-3"><BadgeCheck className="h-5 w-5 text-primary" /> EPA Certified Technicians</div>
              <div className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-primary" /> Licensed #TACLB00076800E & Insured</div>
              <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-primary" /> One-hour arrival or service call is free</div>
              <div className="flex items-center gap-3"><Star className="h-5 w-5 fill-accent text-accent" /> 19+ five-star reviews</div>
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl font-bold">Our promise</h2>
        <div className="mt-6 space-y-4 text-lg text-muted-foreground">
          <p>An HVAC system does more than regulate temperature. A good system runs efficiently, saves you money on your power bill, improves indoor air quality, and works consistently — even when Texas summers are at their worst.</p>
          <p>We match your needs as a homeowner to the solutions that fit your life and budget. We tell you the price up front and stick to it. We arrive within the one-hour window we book — or the service call is free.</p>
          <p>That's how a local HVAC company should work. That's how we work.</p>
        </div>
      </section>
    </div>
  );
}
