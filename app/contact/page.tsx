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
        <div className="space-y-3 rounded-3xl border border-navy/10 bg-white p-8 shadow-luxury">
          <p><strong>Legal name:</strong> {company.legalName}</p>
          <p><strong>Brand:</strong> {company.brandName}</p>
          <p><strong>Email:</strong> {company.email}</p>
          <p><strong>Fiverr:</strong> <a className="text-gold underline" href={company.fiverr} target="_blank" rel="noreferrer">{company.fiverr}</a></p>
          <p><strong>Upwork:</strong> <a className="text-gold underline" href={company.upwork} target="_blank" rel="noreferrer">{company.upwork}</a></p>
          <p><strong>Telegram:</strong> <a className="text-gold underline" href={company.telegram} target="_blank" rel="noreferrer">{company.telegramHandle}</a></p>
          <p><strong>Instagram:</strong> <a className="text-gold underline" href={company.instagram} target="_blank" rel="noreferrer">{company.instagram}</a></p>
          <p><strong>LinkedIn:</strong> <a className="text-gold underline" href={company.linkedin} target="_blank" rel="noreferrer">{company.linkedinDisplay}</a></p>
          <p><strong>Facebook:</strong> <a className="text-gold underline" href={company.facebook} target="_blank" rel="noreferrer">{company.facebook}</a></p>
        </div>
        <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-4 rounded-3xl border border-navy/10 bg-white p-8 shadow-luxury">
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
