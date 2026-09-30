import { createFileRoute } from "@tanstack/react-router";
import {
  Palette,
  Film,
  Scissors,
  HeartHandshake,
  ShieldCheck,
  Users,
  Sprout,
  Megaphone,
  Sparkles,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Testimonials } from "@/components/site/Testimonials";
import { ContactForm } from "@/components/site/ContactForm";
import { NewsletterSignup } from "@/components/site/NewsletterSignup";
const images = {
  bracelets: "/assets/fbc-gallery/bracelets.jpg",
  display: "/assets/fbc-gallery/display.jpg",
  blueBeads: "/assets/fbc-gallery/blue-beads.jpg",
  colorful: "/assets/fbc-gallery/colorful.jpg",
  community: "/assets/fbc-gallery/community.jpg",
  love: "/assets/fbc-gallery/love.jpg",
  message: "/assets/fbc-gallery/message.jpg",
  name: "/assets/fbc-gallery/name.jpg",
  smile: "/assets/fbc-gallery/smile.jpg",
};
const hero = images.community;
const crafts = images.bracelets;
const film = images.display;

const SITE_URL = "https://fbc-heart-hub.lovable.app";
const TITLE = "Free Block Creatives | Refugee-Led Arts in Kakuma";
const DESCRIPTION =
  "Free Block Creatives is a refugee-led arts, livelihoods and community development collective in Kakuma Refugee Camp, Kenya, creating safe spaces for youth, LGBTQ+ people and gender minorities.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "Free Block Creatives" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          name: "Free Block Creatives",
          alternateName: "FBC",
          description: DESCRIPTION,
          url: SITE_URL,
          email: "freeblockcreatives@gmail.com",
          telephone: "+254117472014",
          foundingDate: "2025",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kakuma 2, Kakuma Refugee Camp",
            addressCountry: "KE",
          },
          knowsAbout: [
            "Arts education",
            "Film and media production",
            "Beadwork and textile design",
            "Refugee livelihoods",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const values = [
  { title: "Inclusion & Diversity", body: "Embracing all identities and backgrounds." },
  { title: "Safety & Dignity", body: "Prioritizing well-being and safeguarding." },
  { title: "Creativity & Expression", body: "Valuing artistic freedom and storytelling." },
  { title: "Community Leadership", body: "Refugee-led and community-driven." },
  { title: "Accountability", body: "Responsible, transparent use of resources." },
];

const objectives = [
  {
    icon: Palette,
    text: "Build artistic and creative skills among youth, students and community members.",
  },
  { icon: Film, text: "Support production of films, performances, written works and crafts." },
  { icon: Scissors, text: "Create livelihood opportunities through arts and crafts training." },
  { icon: Megaphone, text: "Amplify refugee and LGBTQ+ voices through storytelling and culture." },
  {
    icon: HeartHandshake,
    text: "Promote psychosocial wellbeing and confidence through creative practice.",
  },
];

const programs = [
  {
    tag: "A",
    title: "Arts Education & Training",
    image: film,
    items: [
      "Teen and student holiday programs",
      "Film, choreography, writing and performance training",
      "Creative learning workshops and mentorship",
      "Garden practice and farming",
    ],
  },
  {
    tag: "B",
    title: "Production & Creative Works",
    image: hero,
    items: [
      "Film and media production",
      "Music composition and choreography",
      "Scriptwriting, performance and showcases",
      "Community exhibitions and presentations",
    ],
  },
  {
    tag: "C",
    title: "Livelihoods & Skills",
    image: crafts,
    items: [
      "Beadwork and textile design",
      "Crochet and related crafts",
      "Product development, finishing and quality control",
      "Income-generating creative production and farming",
    ],
  },
];

const audiences = [
  "Refugee youth and students",
  "LGBTQ+ refugees",
  "Gender minorities",
  "Emerging artists and creatives",
  "Community members seeking livelihood skills",
  "Most at-risk persons",
];

const departments = [
  {
    icon: Users,
    title: "Leadership & Governance",
    body: "Founder / Executive Director sets strategic direction, represents the collective externally and approves major decisions, supported by an Advisory Committee.",
  },
  {
    icon: Sparkles,
    title: "Management & Administration",
    body: "Programs Manager / Artistic Director, Finance & Administration Officer, and Communications & Documentation Officer.",
  },
  {
    icon: Sprout,
    title: "Program Departments",
    body: "Arts Education & Training, Production & Creative Works, and Livelihoods & Crafts — each with a lead, trainers and production groups.",
  },
  {
    icon: ShieldCheck,
    title: "Safeguarding & Member Support",
    body: "A Wellbeing & Safeguarding Focal Person protects minors and vulnerable members and handles complaints confidentially.",
  },
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <img
            src={hero}
            alt="Young artists rehearsing a dance and drumming performance at golden hour"
            width={1600}
            height={1104}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/72" />
          <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-36">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sand/70">
              Kakuma 2 · Kakuma Refugee Camp · Kenya
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] text-sand sm:text-5xl md:text-6xl">
              Art that breaks the <span className="text-spectrum">blocks</span> around us.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-sand/85 sm:text-lg">
              Free Block Creatives is a refugee-led arts, livelihoods and community development
              collective. We create safe, inclusive spaces where youth, LGBTQ+ individuals and
              gender minorities learn, create and earn with dignity.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#programs"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                See our programs
              </a>
              <a
                href="#contact"
                className="rounded-full border border-sand/40 px-6 py-3 text-sm font-semibold text-sand transition-colors hover:bg-sand/10"
              >
                Support the work
              </a>
            </div>

            <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-6 border-t border-sand/20 pt-8 sm:grid-cols-4">
              {[
                ["2025", "Established"],
                ["15", "Core members"],
                ["3", "Program areas"],
                ["100%", "Refugee-led"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-display text-2xl font-extrabold text-sand">{n}</dt>
                  <dd className="text-xs uppercase tracking-wider text-sand/65">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Vision & Mission */}
        <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-2xl bg-card p-8 shadow-lift">
              <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                Our Vision
              </h2>
              <p className="mt-4 font-display text-xl leading-snug sm:text-2xl">
                A creative, inclusive and empowered community where refugees — especially LGBTQ+
                individuals, gender minorities and youth — use arts, culture and skills to express
                themselves, sustain livelihoods and live with dignity.
              </p>
            </div>
            <div className="rounded-2xl bg-card p-8 shadow-lift">
              <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                Our Mission
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                To provide safe, inclusive and transformative spaces for refugees to learn, create
                and produce artistic and livelihood-based work through arts education, creative
                production and skills training that foster expression, resilience and economic
                opportunity.
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                <strong className="text-foreground">Type:</strong> Refugee-led, community-based arts
                and livelihoods collective · <strong className="text-foreground">Status:</strong>{" "}
                Informal
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="font-display text-2xl font-extrabold sm:text-3xl">Core values</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-xl border border-border bg-secondary/50 p-5 transition-colors hover:border-primary/50"
                >
                  <div className="h-1 w-10 rounded-full spectrum-rule" />
                  <h4 className="mt-4 text-base font-bold">{v.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{v.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-2xl surface-ink p-8 md:p-10">
            <h3 className="font-display text-2xl font-extrabold sm:text-3xl">Our objectives</h3>
            <ul className="mt-7 grid gap-6 sm:grid-cols-2">
              {objectives.map((o) => (
                <li key={o.text} className="flex gap-4">
                  <o.icon className="mt-0.5 size-6 shrink-0 text-accent" />
                  <span className="text-sm leading-relaxed opacity-85">{o.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Programs */}
        <section id="programs" className="scroll-mt-24 bg-secondary/40 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
              Programs &amp; activities
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Three connected departments carry the work — from learning, to production, to income.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {programs.map((p) => (
                <article key={p.title} className="overflow-hidden rounded-2xl bg-card shadow-lift">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      Program {p.tag}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-extrabold">{p.title}</h3>
                    <ul className="mt-4 space-y-2">
                      {p.items.map((i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Who we serve + membership */}
        <section id="who" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Who we serve</h2>
              <ul className="mt-6 flex flex-wrap gap-2">
                {audiences.map((a) => (
                  <li
                    key={a}
                    className="rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-secondary-foreground"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-display text-2xl font-extrabold">Membership</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                15 core members today, with open capacity for additional members and participants.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {["Core Members", "Program Participants", "Volunteers & Facilitators"].map((m) => (
                  <li key={m} className="flex items-center gap-3 border-b border-border pb-3">
                    <span className="h-1 w-6 rounded-full spectrum-rule" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Structure */}
        <section id="structure" className="scroll-mt-24 bg-secondary/40 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
              How we are organised
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {departments.map((d) => (
                <div key={d.title} className="rounded-2xl bg-card p-7 shadow-lift">
                  <d.icon className="size-7 text-primary" />
                  <h3 className="mt-4 font-display text-lg font-extrabold">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border p-7">
                <h3 className="font-display text-lg font-extrabold">
                  Decision-making &amp; accountability
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Strategic decisions: Executive Director with core members.</li>
                  <li>Program decisions: Programs Manager with program leads.</li>
                  <li>Financial approvals: Finance Officer with ED authorization.</li>
                  <li>Programs documented, reviewed and updated annually.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-border p-7">
                <h3 className="font-display text-lg font-extrabold">Safeguarding &amp; ethics</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Safe participation for all members and beneficiaries.</li>
                  <li>Zero tolerance for discrimination, abuse or exploitation.</li>
                  <li>Confidential handling of complaints and referrals.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* Community gallery */}
        <section className="mx-auto max-w-6xl px-5 pb-20 md:pb-28" aria-labelledby="gallery-heading">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Made by us</p>
            <h2 id="gallery-heading" className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              Beads, stories and belonging
            </h2>
            <p className="mt-3 text-muted-foreground">
              A glimpse of the people, handmade work and joyful expression at the heart of FBC.
            </p>
          </div>
          <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-4 sm:auto-rows-[150px]">
            {[
              [images.blueBeads, "Blue beaded bracelets with playful patterns", "col-span-2 row-span-2"],
              [images.colorful, "Colorful handmade bracelets arranged for display", "row-span-2"],
              [images.bracelets, "A collection of colorful beaded bracelets", "row-span-2"],
              [images.message, "Black and red beaded message bracelet", "col-span-2"],
              [images.name, "White and red beaded name bracelet", ""],
              [images.smile, "Yellow smiley face beaded bracelet", ""],
              [images.love, "Two community members sharing a joyful moment", "col-span-2"],
            ].map(([src, alt, layout]) => (
              <img key={src} src={src} alt={alt} loading="lazy" className={`size-full rounded-2xl object-cover ${layout}`} />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 px-5 py-20 md:py-28">
          <div className="mx-auto max-w-4xl rounded-3xl surface-ink p-9 text-center md:p-14">
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
              Partner, fund or collaborate
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm opacity-80 sm:text-base">
              We welcome partners, facilitators, volunteers and funders who want to build creative
              livelihoods with refugee artists in Kakuma.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="mailto:freeblockcreatives@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Mail className="size-4" /> freeblockcreatives@gmail.com
              </a>
              <a
                href="tel:+254117472014"
                className="inline-flex items-center gap-2 rounded-full border border-sand/40 px-6 py-3 text-sm font-semibold transition-colors hover:bg-sand/10"
              >
                <Phone className="size-4" /> +254 117 472 014
              </a>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-sand/20 px-4 py-2 text-sm opacity-80">
              <MapPin className="size-4" />
              <span>Kakuma 2, Kakuma Refugee Camp, Kenya</span>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-4xl rounded-3xl border border-border bg-card p-8 shadow-lift md:p-12">
            <h3 className="font-display text-2xl font-extrabold sm:text-3xl">Stay in the loop</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Get FBC updates by email — no message needed, just your address.
            </p>
            <div className="mt-6">
              <NewsletterSignup />
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-4xl rounded-3xl border border-border bg-card p-8 shadow-lift md:p-12">
            <h3 className="font-display text-2xl font-extrabold sm:text-3xl">Send us a message</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in the form and it reaches the Free Block Creatives team directly.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
