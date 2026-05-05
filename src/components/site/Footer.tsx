import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail, Snowflake } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-hero">
              <Snowflake className="h-5 w-5 text-primary-foreground" />
            </span>
            Texas Discount Air
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Honest, flat-rate AC & Heating repair across Tarrant County. Licensed, insured & EPA certified.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">License #: TACLB00076800E</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Air Conditioning Repair</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Heating & Furnace Repair</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Annual Maintenance</Link></li>
            <li><Link to="/services" className="hover:text-foreground">New System Installation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Locations</h4>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {["Keller","Fort Worth","Colleyville","Euless","Hurst","Bedford","Southlake","Roanoke","Saginaw","Watauga","Haltom City","NRH"].map((c) => (
              <li key={c}><Link to="/locations" className="hover:text-foreground">{c}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" /><a href="tel:0000000000">(817) 000-0000 — text or call</a></li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" /><a href="tel:0000000000">(682) 000-0000 — call</a></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" />Address --------------------</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" /><Link to="/contact">Book a $29 Service Call</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Texas Discount Air (TDA HVAC LLC). All rights reserved.</p>
          <p>24/7 Emergency Service · Flat-rate pricing · Licensed & Insured</p>
        </div>
      </div>
    </footer>
  );
}
