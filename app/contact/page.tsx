import {
  BriefcaseBusiness,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Send
} from "lucide-react";
import { SectionTitle } from "@/components/ui";
import { company } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <section className="section-container">
      <SectionTitle
        eyebrow="Contact Us"
        title="Let’s Connect Professionally"
        description="Reach Scelta Infinity for publishing, affiliate collaboration, and service inquiries."
      />
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-gold/20 bg-[#0A2540] p-8 text-cream shadow-luxury">
          <div className="space-y-5">
            <p className="flex items-center gap-3"><BriefcaseBusiness className="h-4 w-4 shrink-0 text-gold" /> <span>Legal name: Gediyon Adamu Yeshitila</span></p>
            <p className="flex items-center gap-3"><BriefcaseBusiness className="h-4 w-4 shrink-0 text-gold" /> <span>Brand: Scelta Infinity</span></p>
            <p className="flex items-center gap-3"><Mail className="h-4 w-4 shrink-0 text-gold" /> <a className="hover:text-gold" href={`mailto:${company.email}`}>Email</a></p>
            <p className="flex items-center gap-3"><BriefcaseBusiness className="h-4 w-4 shrink-0 text-gold" /> <a className="hover:text-gold" href={company.fiverr} target="_blank" rel="noreferrer">Fiverr</a></p>
            <p className="flex items-center gap-3"><BriefcaseBusiness className="h-4 w-4 shrink-0 text-gold" /> <a className="hover:text-gold" href={company.upwork} target="_blank" rel="noreferrer">Upwork</a></p>
            <p className="flex items-center gap-3"><Send className="h-4 w-4 shrink-0 text-gold" /> <a className="hover:text-gold" href={company.telegram} target="_blank" rel="noreferrer">Telegram</a></p>
            <p className="flex items-center gap-3"><Instagram className="h-4 w-4 shrink-0 text-gold" /> <a className="hover:text-gold" href={company.instagram} target="_blank" rel="noreferrer">Instagram</a></p>
            <p className="flex items-center gap-3"><Linkedin className="h-4 w-4 shrink-0 text-gold" /> <a className="hover:text-gold" href={company.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p>
            <p className="flex items-center gap-3"><Facebook className="h-4 w-4 shrink-0 text-gold" /> <a className="hover:text-gold" href={company.facebook} target="_blank" rel="noreferrer">Facebook</a></p>
          </div>
        </div>
        <form action="https://formspree.io/f/maqddkdo" method="POST" className="space-y-4 rounded-3xl border border-navy/10 bg-white p-8 shadow-luxury">
          <input name="name" required placeholder="Your Name" className="w-full rounded-xl border border-navy/20 p-3" />
          <input name="email" required type="email" placeholder="Your Email" className="w-full rounded-xl border border-navy/20 p-3" />
          <input name="subject" required placeholder="Subject" className="w-full rounded-xl border border-navy/20 p-3" />
          <textarea name="message" required placeholder="Your Message" rows={5} className="w-full rounded-xl border border-navy/20 p-3" />
          <button className="rounded-full bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white">Send Message</button>
          <p className="text-xs text-navy/70">Replace the Formspree endpoint with your live ID before launch.</p>
        </form>
      </div>
    </section>
  );
}
