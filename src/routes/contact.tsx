import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a $29 Service Call — Contact Texas Discount Air" },
      { name: "description", content: "Book a $29 AC or heating service call online. Text or call (817) 000-0000 — 24/7 emergency service across Tarrant County." },
      { property: "og:title", content: "Contact Texas Discount Air" },
      { property: "og:description", content: "Schedule HVAC service in minutes. $29 service call, free with any repair." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Request received — we'll text you within minutes!");
    }, 700);
  };

  return (
    <div>
      <section className="bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Contact</p>
          <h1 className="mt-3 font-display text-5xl font-bold sm:text-6xl text-balance">Book a $29 service call.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Text, call, or send us a quick form below. We respond fast — usually in minutes.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <div className="space-y-4">
          <Card className="border-border bg-card p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Phone className="h-5 w-5" /></span>
              <div>
                <p className="text-sm text-muted-foreground">Text or call</p>
                <a href="tel:0000000000" className="font-display text-2xl font-bold">(817) 000-0000</a>
              </div>
            </div>
          </Card>
          <Card className="border-border bg-card p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><MessageSquare className="h-5 w-5" /></span>
              <div>
                <p className="text-sm text-muted-foreground">Call only</p>
                <a href="tel:6822144822" className="font-display text-2xl font-bold">(682) 214-4822</a>
              </div>
            </div>
          </Card>
          <Card className="border-border bg-card p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><MapPin className="h-5 w-5" /></span>
              <div>
                <p className="text-sm text-muted-foreground">Office</p>
                <p className="font-semibold">5157 Senator Dr.<br />Fort Worth, TX 76244</p>
              </div>
            </div>
          </Card>
          <Card className="border-border bg-card p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Clock className="h-5 w-5" /></span>
              <div>
                <p className="text-sm text-muted-foreground">Hours</p>
                <p className="font-semibold">24/7 Emergency Service</p>
                <p className="text-sm text-muted-foreground">One-hour arrival or service call is free.</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="border-border bg-card p-8 shadow-card">
          <h2 className="font-display text-2xl font-bold">Request service</h2>
          <p className="mt-1 text-sm text-muted-foreground">$29 service call · free with any repair · flat-rate pricing.</p>
          <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" required placeholder="Jane Doe" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" required placeholder="(817) 555-0100" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" required placeholder="Keller, Fort Worth, NRH..." />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="issue">Service needed</Label>
              <Input id="issue" required placeholder="AC not cooling, heater not heating, tune-up..." />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Details</Label>
              <Textarea id="message" rows={4} placeholder="Tell us a bit more about what's going on." />
            </div>
            <Button type="submit" variant="hero" size="lg" disabled={submitting}>
              {submitting ? "Sending..." : "Book my $29 service call"}
            </Button>
            <p className="text-xs text-muted-foreground">By submitting, you agree to be contacted by phone or text about your service request.</p>
          </form>
        </Card>
      </section>
    </div>
  );
}
