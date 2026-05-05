import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations We Service — Tarrant County | Texas Discount Air" },
      { name: "description", content: "AC and heating repair across Keller, Fort Worth, Colleyville, Euless, Hurst, Bedford, Southlake, NRH and more." },
      { property: "og:title", content: "Service Areas | Texas Discount Air" },
      { property: "og:description", content: "Honest, flat-rate HVAC repair across Tarrant County." },
    ],
  }),
  component: LocationsPage,
});

const cities = [
  { name: "Fort Worth", desc: "Including 76244, 76137 and 76131." },
  { name: "Keller", desc: "Same-day AC and furnace service." },
  { name: "Colleyville", desc: "AC repair and replacement." },
  { name: "Euless", desc: "AC repair and heater repair." },
  { name: "Hurst", desc: "Residential HVAC service." },
  { name: "Bedford", desc: "Maintenance & emergency repairs." },
  { name: "Southlake", desc: "Premium HVAC service." },
  { name: "Roanoke", desc: "Heating & cooling specialists." },
  { name: "Saginaw", desc: "AC and heat service." },
  { name: "Watauga", desc: "Affordable AC & heat repair." },
  { name: "Haltom City", desc: "Local HVAC technicians." },
  { name: "North Richland Hills", desc: "AC & furnace experts." },
  { name: "Grapevine", desc: "Comfort solutions for your home." },
  { name: "Westlake", desc: "Discreet, professional service." },
  { name: "Haslet", desc: "Residential AC & heat." },
  { name: "Richland Hills", desc: "Honest, flat-rate pricing." },
];

function LocationsPage() {
  return (
    <div>
      <section className="bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Service Area</p>
          <h1 className="mt-3 font-display text-5xl font-bold sm:text-6xl text-balance">Cities we serve in Tarrant County.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            We provide residential air conditioner repair customers depend on for all their local home comfort needs — and we're always nearby.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((c) => (
            <Card key={c.name} className="flex items-start gap-4 border-border bg-card p-5">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl border border-border bg-card p-10 text-center">
          <h2 className="font-display text-3xl font-bold">…and the surrounding areas.</h2>
          <p className="max-w-2xl text-muted-foreground">Don't see your city? Give us a call — chances are we cover it.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg"><a href="tel:0000000000"><Phone className="h-4 w-4" />(817) 000-0000</a></Button>
            <Button asChild variant="outline" size="lg"><Link to="/contact">Book a service call</Link></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
