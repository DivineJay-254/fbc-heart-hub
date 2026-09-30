import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/fbc-logo.jpg.asset.json";

const links = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#who", label: "Who We Serve" },
  { href: "#voices", label: "Voices" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="Free Block Creatives logo"
            width={44}
            height={44}
            className="size-11 rounded-full object-cover"
          />
          <span className="leading-tight">
            <span className="block font-display text-sm font-extrabold uppercase tracking-wide">
              Free Block Creatives
            </span>
            <span className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Kakuma Refugee Camp
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Partner with us
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-border p-2 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-5 pb-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/50 py-3 text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
      <div className="h-1 spectrum-rule" />
    </header>
  );
}
