import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export function CallBanner() {
  return (
    <div className="bg-gradient-hero">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-2.5 text-sm font-medium text-primary-foreground sm:flex-row sm:px-6 lg:px-8">
        <p className="flex items-center gap-2">
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-success" />
          24/7 Emergency Service · One-Hour Arrival Guarantee
        </p>
        <div className="flex items-center gap-3">
          <a href="tel:0000000000" className="inline-flex items-center gap-1.5 hover:underline">
            <Phone className="h-4 w-4" /> (817) 000-0000
          </a>
          <Button asChild variant="cta" size="sm">
            <Link to="/contact">Book $29 Service Call</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
