"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Plane, CalendarCheck2, FileCheck2, ShieldCheck, Sparkles, Mail, ArrowRight,
  Clock, Users, Laptop, MapPin, Check, Building2, FileText, Info
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Section = ({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </section>
);

const Feature = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <div className="flex gap-4 items-start">
    <div className="p-2 rounded-xl shadow-sm bg-white">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  </div>
);

const PriceRow = ({ text }: { text: string }) => (
  <li className="flex items-start gap-2">
    <Check className="w-4 h-4 mt-1" />
    <span>{text}</span>
  </li>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2B2B2B]">
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Inter:wght@400;500;600;700&display=swap');
:root { --font-display: 'Cormorant Garamond', serif; --font-body: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
.h-font { font-family: var(--font-display); }
.b-font { font-family: var(--font-body); }
`}</style>

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-[#FDFBF7]/80 border-b border-[#E8E0D1] b-font">
        <Section className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Plane className="w-6 h-6" />
            <span className="font-extrabold tracking-tight text-lg">Nomadissimi</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how" className="hover:opacity-75">How it works</a>
            <a href="#packages" className="hover:opacity-75">Packages</a>
            <a href="#compare" className="hover:opacity-75">Compare</a>
            <a href="#settling" className="hover:opacity-75">Settling in Italy</a>
            <a href="#faq" className="hover:opacity-75">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button asChild variant="outline" className="hidden sm:inline-flex border-[#4B5D44] text-[#4B5D44] hover:bg-[#F3ECDE]">
              <a href="#contact">Free Starter Guide</a>
            </Button>
            <Button asChild className="bg-[#4B5D44] hover:bg-[#3E4D39] text-[#FDFBF7]">
              <a href="#book">Book a Call</a>
            </Button>
          </div>
        </Section>
      </header>

      {/* Hero */}
      <Section className="pt-14 pb-10 b-font">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Badge className="rounded-full px-3 py-1 bg-[#C9A86A]/20 text-[#4B5D44] border border-[#C9A86A]/30">
              We take the stress. You take the plane.
            </Badge>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight h-font"
            >
              Ditch the grind. Live <span className="italic">La Dolce Vita</span>.
            </motion.h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-prose">
              We help remote workers and freelancers get Italy’s Digital Nomad Visa — without losing their minds to Italian bureaucracy.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
              <Feature icon={FileCheck2} title="Clear checklists" desc="English + Italian, explained in plain language." />
              <Feature icon={CalendarCheck2} title="Timeline plan" desc="Case snapshot with milestones to your consulate day." />
              <Feature icon={Laptop} title="Done-with-you tools" desc="Notion tracker, templates, and helpful automations." />
              <Feature icon={ShieldCheck} title="Realistic guidance" desc="Honest assessment. No false promises, ever." />
            </ul>
            <div className="mt-8 flex flex-wrap gap-3" id="starter">
              <Button size="lg" asChild className="bg-[#4B5D44] hover:bg-[#3E4D39] text-[#FDFBF7]">
                <a href="#contact" className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Get the Free Starter Guide <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-[#4B5D44] text-[#4B5D44] hover:bg-[#F3ECDE]">
                <a href="#book" className="flex items-center gap-2">
                  <CalendarCheck2 className="w-4 h-4" /> Book a Consultation
                </a>
              </Button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              We’re consultants, not a law firm or government office. Approval is always at the discretion of Italian authorities.
            </p>
          </div>

          <div className="lg:justify-self-end">
            <Card className="shadow-xl border border-[#E8E0D1] bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#4B5D44]">
                  <MapPin className="w-5 h-5" /> Visa Game Plan
                </CardTitle>
                <CardDescription>Know exactly what to do, when to do it, and how long it’ll take.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-1" />
                  <p>Personalized timeline based on your role, family, and consulate reality.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 mt-1" />
                  <p>Consular interview coaching: what to bring, what to say (and what not to).</p>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 mt-1" />
                  <p>Codice Fiscale guidance before you land — or rapid help once you’re here.</p>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-4 h-4 mt-1" />
                  <p>Simple service agreement for every package.</p>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="secondary" className="w-full">See a Sample Timeline</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader><DialogTitle>Sample Case Snapshot & Timeline</DialogTitle></DialogHeader>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 1–2:</strong> Employer letter, income proofs, insurance; start translations & apostilles.</p>
                      <p><strong>Week 3–4:</strong> Codice Fiscale request; finalize packet; book Prenotami (Italian midnight).</p>
                      <p><strong>Week 5–8:</strong> Consular appointment window; interview coaching & packet QA.</p>
                      <p><strong>After approval:</strong> Travel → apply for Permesso di Soggiorno within 8 days.</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </div>
        </div>
      </Section>

      {/* What we do */}
      <Section className="py-6 b-font" id="how">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight h-font">
              You’re moving to Italy — not to confusion.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Consulate rules shift and forums contradict themselves. We give you practical steps that work <em>today</em>.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <Feature icon={FileCheck2} title="Plain-language checklists" desc="English + Italian terms with quick explanations." />
              <Feature icon={Laptop} title="Smart Notion tracker" desc="Upload docs, track status, see feedback in one place." />
              <Feature icon={CalendarCheck2} title="Case snapshot" desc="We map your milestones so you never wonder what’s next." />
              <Feature icon={Mail} title="Support that replies" desc="Email support in Premium (30d) and Gold (60d)." />
            </div>
          </div>
          <Card className="border-dashed">
            <CardHeader>
              <CardTitle>Legal & Transparency</CardTitle>
              <CardDescription>Real talk, with receipts.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex gap-2"><Info className="w-4 h-4 mt-0.5" /><p>We’re consultants — not a law firm or the consulate. We can’t guarantee approval.</p></div>
              <div className="flex gap-2"><Info className="w-4 h-4 mt-0.5" /><p>Optional attorney consult add-on: 45-minute call with independent immigration counsel for complex cases.</p></div>
              <div className="flex gap-2"><Info className="w-4 h-4 mt-0.5" /><p>Every client signs a simple service agreement before we begin — clear scope, clear expectations.</p></div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Packages */}
      <Section className="py-14 b-font" id="packages">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight h-font">Visa Packages</h2>
          <p className="mt-2 text-muted-foreground">Start Lite and upgrade anytime. All plans include our sign-before-we-start service agreement.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <Card className="relative transition-all duration-200 hover:shadow-md">
            <CardHeader>
              <Badge className="bg-[#4B5D44] text-[#FDFBF7]">🌱 Lite</Badge>
              <CardTitle className="text-2xl">€197</CardTitle>
              <CardDescription>For the self-starter who needs the right tools.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <PriceRow text="Visa document checklist in English + Italian (explained)" />
                <PriceRow text="Custom Notion tracker for your entire process" />
                <PriceRow text="Company letter template (remote workers)" />
                <PriceRow text="Discount code for certified translations" />
                <PriceRow text="Bonus: Codice Fiscale application guidance" />
              </ul>
            </CardContent>
            <CardFooter><Button asChild className="w-full bg-[#4B5D44] hover:bg-[#3E4D39] text-[#FDFBF7]"><a href="#book">Choose Lite</a></Button></CardFooter>
          </Card>

          <Card className="relative border-2 border-[#C9A86A] transition-all duration-200 hover:shadow-md">
            <CardHeader>
              <Badge className="bg-[#C9A86A] text-[#2B2B2B]">✨ Premium</Badge>
              <CardTitle className="text-2xl">€497</CardTitle>
              <CardDescription>Structure, strategy, and guidance.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <PriceRow text="Everything in Lite" />
                <PriceRow text="45-minute 1:1 expert-led call (strategy tailored to your case)" />
                <PriceRow text="Personalized document review via upload form + shared result sheet" />
                <PriceRow text="Consulate appointment prep & interview coaching (Prenotami tips included)" />
                <PriceRow text="Email support for 30 days" />
              </ul>
            </CardContent>
            <CardFooter><Button asChild className="w-full bg-[#4B5D44] hover:bg-[#3E4D39] text-[#FDFBF7]"><a href="#book">Choose Premium</a></Button></CardFooter>
          </Card>

          <Card className="relative transition-all duration-200 hover:shadow-md">
            <CardHeader>
              <Badge className="bg-[#D97B4E] text-white">👑 Gold</Badge>
              <CardTitle className="text-2xl">€997</CardTitle>
              <CardDescription>Hands-on support, start to finish.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <PriceRow text="Everything in Premium" />
                <PriceRow text="Family reunification documentation support" />
                <PriceRow text="Extended email support (60 days)" />
                <PriceRow text="Codice Fiscale application assistance included" />
                <PriceRow text="Permesso di Soggiorno prep (Questura steps)" />
                <PriceRow text="Cultural Relocation Guidance PDF (healthcare, taxes, rentals, bills, driving, more)" />
              </ul>
            </CardContent>
            <CardFooter><Button asChild className="w-full bg-[#4B5D44] hover:bg-[#3E4D39] text-[#FDFBF7]"><a href="#book">Choose Gold</a></Button></CardFooter>
          </Card>
        </div>

        <div className="mt-6 text-xs text-muted-foreground max-w-3xl mx-auto text-center">
          Optional add-on: 45-minute attorney consult for complex legal considerations (independent counsel; separate fee).
        </div>
      </Section>

      {/* Why Nomadissimi */}
      <Section className="py-10 b-font" id="why-us">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight h-font mb-2">Why Nomadissimi?</h2>
        </div>
        <div className="max-w-4xl">
          <p className="text-muted-foreground mb-6">Built by digital nomads, for digital nomads. Boutique attention, transparent pricing, modern tools.</p>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="border-[#E8E0D1] transition-all duration-200 hover:shadow-md">
              <CardHeader className="pb-2"><CardTitle className="text-lg">Specialized, not generalized</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">We focus on the <strong>Italian Digital Nomad Visa</strong> every day. Depth over breadth.</CardContent>
            </Card>
            <Card className="border-[#E8E0D1] transition-all duration-200 hover:shadow-md">
              <CardHeader className="pb-2"><CardTitle className="text-lg">DIY → VIP</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">Start with Lite, add support when you need it, or go Gold — upgrade anytime.</CardContent>
            </Card>
            <Card className="border-[#E8E0D1] transition-all duration-200 hover:shadow-md">
              <CardHeader className="pb-2"><CardTitle className="text-lg">Modern workflow</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">Notion tracker + upload form + shared results sheet. Less email ping-pong.</CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Compare */}
      <Section className="py-10 b-font" id="compare">
        <div className="max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight h-font mb-4">How we compare</h2>
          <div className="overflow-hidden rounded-2xl border border-[#E8E0D1]">
            <table className="w-full text-sm">
              <thead className="bg-[#F3ECDE]">
                <tr>
                  <th className="text-left p-3">Feature</th>
                  <th className="text-left p-3">Nomadissimi</th>
                  <th className="text-left p-3">Big Agencies</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#E8E0D1]">
                  <td className="p-3">Focus</td>
                  <td className="p-3">Italian <em>Digital Nomad Visa</em>, updated playbooks</td>
                  <td className="p-3">Many visa types, slower refresh</td>
                </tr>
                <tr className="border-t border-[#E8E0D1]">
                  <td className="p-3">Pricing</td>
                  <td className="p-3">Transparent tiers, upgrade anytime</td>
                  <td className="p-3">High minimum retainers</td>
                </tr>
                <tr className="border-t border-[#E8E0D1]">
                  <td className="p-3">Tools</td>
                  <td className="p-3">Notion tracker + shared results sheet</td>
                  <td className="p-3">Opaque portals</td>
                </tr>
                <tr className="border-t border-[#E8E0D1]">
                  <td className="p-3">Interview coaching</td>
                  <td className="p-3">Included in Premium & Gold</td>
                  <td className="p-3">Often extra or generic</td>
                </tr>
                <tr className="border-t border-[#E8E0D1]">
                  <td className="p-3">After-arrival support</td>
                  <td className="p-3">Dedicated Phase-2 services (Permesso, Residenza, P.IVA, tax)</td>
                  <td className="p-3">Limited or ad-hoc</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Settling in Italy */}
      <Section className="py-14 b-font" id="settling">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight h-font">Settling in Italy Packages</h2>
          <p className="mt-2 text-muted-foreground">For when the visa is just the beginning — support for living, working, and thriving in Italy.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <Card className="border-[#E8E0D1]">
            <CardHeader>
              <Badge className="bg-[#4B5D44] text-[#FDFBF7]">Residenza & ID</Badge>
              <CardTitle className="text-xl">Comune & Questura Essentials</CardTitle>
              <CardDescription>Get officially settled.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <PriceRow text="Permesso di Soggiorno guidance (kit, appointments, fingerprints)" />
                <PriceRow text="Residenza anagrafica (registration with your Comune)" />
                <PriceRow text="Carta d’Identità process overview" />
              </ul>
            </CardContent>
            <CardFooter><Button asChild className="w-full bg-[#4B5D44] hover:bg-[#3E4D39] text-[#FDFBF7]"><a href="#book">Ask about Residenza</a></Button></CardFooter>
          </Card>

          <Card className="border-[#E8E0D1]">
            <CardHeader>
              <Badge className="bg-[#C9A86A] text-[#2B2B2B]">Freelance</Badge>
              <CardTitle className="text-xl">Partita IVA Setup</CardTitle>
              <CardDescription>Start working legally in Italy.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <PriceRow text="ATECO code selection guidance" />
                <PriceRow text="Open Partita IVA with a partner commercialista" />
                <PriceRow text="INPS registration overview" />
              </ul>
            </CardContent>
            <CardFooter><Button asChild className="w-full bg-[#4B5D44] hover:bg-[#3E4D39] text-[#FDFBF7]"><a href="#book">Ask about Partita IVA</a></Button></CardFooter>
          </Card>

          <Card className="border-[#E8E0D1]">
            <CardHeader>
              <Badge className="bg-[#D97B4E] text-white">Taxes</Badge>
              <CardTitle className="text-xl">Tax & Compliance Pathway</CardTitle>
              <CardDescription>Keep it clean from day one.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <PriceRow text="Intro call with vetted tax professionals (independent partners)" />
                <PriceRow text="Guidance on regime forfettario vs other regimes" />
                <PriceRow text="Quarterly reminders & checklist templates" />
              </ul>
            </CardContent>
            <CardFooter><Button asChild className="w-full bg-[#4B5D44] hover:bg-[#3E4D39] text-[#FDFBF7]"><a href="#book">Ask about Taxes</a></Button></CardFooter>
          </Card>
        </div>
        <div className="mt-6 text-xs text-muted-foreground max-w-3xl mx-auto text-center">
          All professional legal/tax work is provided by independent partners. We coordinate and keep you organized.
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-14 b-font" id="faq">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight mb-6 h-font">FAQ</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Do you guarantee a visa approval?</h3>
              <p className="text-sm text-muted-foreground">
                No. Approval is always up to Italian authorities. We optimize your case and give honest feedback to reduce surprises.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Can I upgrade from Lite later?</h3>
              <p className="text-sm text-muted-foreground">Yes — you can move to Premium or Gold anytime and we’ll credit part of your Lite fee.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you help after I land?</h3>
              <p className="text-sm text-muted-foreground">Yep! See our “Settling in Italy” services: Permesso, Residenza, Partita IVA, and tax guidance.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Book & Contact */}
      <Section className="py-14 b-font" id="book">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#4B5D44]">Book a Discovery Call</CardTitle>
              <CardDescription>15 minutes to see if we’re a fit. No pressure.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full rounded-xl bg-muted grid place-items-center text-muted-foreground">
                <span>Embed Calendly here</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-[#4B5D44] hover:bg-[#3E4D39] text-[#FDFBF7]">
                <a href="#" target="_blank" rel="noreferrer">Open Calendly</a>
              </Button>
            </CardFooter>
          </Card>

          <Card id="contact" className="border-[#E8E0D1]">
            <CardHeader>
              <CardTitle>Get the Free Starter Guide</CardTitle>
              <CardDescription>Drop your email and we’ll send the PDF + prenotami tips.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <Input placeholder="First name" />
                <Input placeholder="Email" type="email" />
              </div>
              <Textarea placeholder="Tell us about your situation (remote employee, freelancer, couple, kids?)" />
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <input type="checkbox" className="mt-1" />
                <span>I agree to the service terms and privacy policy. We’ll send occasional emails. Unsubscribe anytime.</span>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button className="w-full bg-[#D97B4E] hover:bg-[#b7643f] text-white">Send me the guide</Button>
            </CardFooter>
          </Card>
        </div>
      </Section>

      <footer className="border-t border-[#E8E0D1] py-10 mt-8 bg-white text-sm b-font">
        <Section className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Nomadissimi — All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:opacity-75" href="#">Terms</a>
            <a className="hover:opacity-75" href="#">Privacy</a>
            <a className="hover:opacity-75" href="#book">Contact</a>
          </div>
        </Section>
      </footer>
    </div>
  );
}
