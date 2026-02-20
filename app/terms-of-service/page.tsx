import { SectionTitle } from "@/components/ui";

export default function TermsPage() {
  return (
    <section className="section-container prose max-w-4xl prose-headings:font-serif prose-headings:text-navy">
      <SectionTitle eyebrow="Legal" title="Terms of Service" description="Terms governing the use of this promotional website." />
      <p>This website is a showcase platform for books, affiliate products, and professional services.</p>
      <p>No purchases, cart, or checkout are processed on this site. Users are redirected to third-party platforms for transactions.</p>
      <p>All content is provided for informational and promotional use. We reserve the right to modify pages and offers at any time.</p>
    </section>
  );
}
