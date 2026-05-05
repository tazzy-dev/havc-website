import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — AC & Heating Questions | Texas Discount Air" },
      { name: "description", content: "Common questions about AC repair, furnace problems, maintenance, pricing, and licensing answered by Texas Discount Air." },
      { property: "og:title", content: "HVAC FAQ | Texas Discount Air" },
      { property: "og:description", content: "Answers to common AC and heating questions." },
    ],
  }),
  component: FAQPage,
});

const groups = [
  {
    title: "Pricing & Service",
    items: [
      { q: "How much is a service call?", a: "Just $29 — and it's completely free with any repair we perform." },
      { q: "Do you offer flat-rate pricing?", a: "Yes. We tell you the exact price for any repair before we start, so there are no surprise costs." },
      { q: "Are you licensed and insured?", a: "Yes — License #TACLB00076800E. Fully licensed and insured for your peace of mind." },
      { q: "Do you offer free estimates?", a: "We offer FREE estimates with all repairs. When we do the repair, the service call is waived." },
    ],
  },
  {
    title: "Air Conditioning",
    items: [
      { q: "How do I know if my AC needs repair?", a: "Common signs: weak airflow, warm air, ice on the coil, unusual noises, frequent cycling, or rising electric bills." },
      { q: "How often should I change my AC filter?", a: "Every 1–3 months depending on filter type and household. A clean filter saves energy and protects the system." },
      { q: "What are the most common AC repairs?", a: "Capacitor replacement, refrigerant leaks, contactor failure, condensate drain clogs, and blower motor issues." },
    ],
  },
  {
    title: "Heating & Furnaces",
    items: [
      { q: "Why won't my heater heat?", a: "Common causes include a faulty flame sensor, dirty ignitor, thermostat issue, or a tripped safety. Our techs can diagnose in one visit." },
      { q: "Should I tune up my furnace?", a: "Yes — an annual tune-up improves efficiency, catches gas-line problems early, and extends the life of the system." },
      { q: "I hear the heater running but no heat.", a: "It's likely a flame sensor, ignitor, or gas valve issue. Don't delay — call us for a same-day diagnosis." },
    ],
  },
];

function FAQPage() {
  return (
    <div>
      <section className="bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">FAQ</p>
          <h1 className="mt-3 font-display text-5xl font-bold sm:text-6xl text-balance">Answers, before you pick up the phone.</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        {groups.map((g) => (
          <div key={g.title} className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-bold">{g.title}</h2>
            <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-2">
              {g.items.map((it, i) => (
                <AccordionItem key={i} value={`${g.title}-${i}`} className="border-border">
                  <AccordionTrigger className="px-4 text-left font-semibold hover:no-underline">{it.q}</AccordionTrigger>
                  <AccordionContent className="px-4 text-muted-foreground">{it.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </section>
    </div>
  );
}
