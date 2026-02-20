import Image from "next/image";
import { Card, SectionTitle } from "@/components/ui";
import { company } from "@/lib/site-data";
import { MotionSection } from "@/components/motion-section";

export default function AboutPage() {
  return (
    <MotionSection className="section-container">
      <SectionTitle eyebrow="Brand Story" title="About Scelta Infinity" description="A modern publishing and affiliate showcase established by Gediyon Adamu Yeshitila." />
      <Card>
        <p className="text-lg text-navy/85">
          {company.brandName} was created as a professional destination where quality eBooks and premium affiliate recommendations are presented with clarity and integrity. Led by {company.legalName}, the brand emphasizes trust, transparent communication, and long-term client value.
        </p>
        <p className="mt-4 text-navy/85">Mission: {company.mission}</p>
        <p className="mt-3 text-navy/85">Vision: {company.vision}</p>
      </Card>

      <Card className="mt-8">
        <div className="grid items-center gap-8 md:grid-cols-[220px_1fr]">
          <div className="mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=900&q=80"
              alt="Gediyon Adamu Yeshitila"
              width={220}
              height={220}
              className="rounded-full border-4 border-[#D4AF37] object-cover ring-4 ring-[#D4AF37]/25"
            />
          </div>
          <div>
            <h3 className="font-serif text-3xl text-navy">Meet the Founder</h3>
            <p className="mt-4 text-lg font-semibold text-navy">Gediyon Adamu Yeshitila</p>
            <p className="mt-4 text-navy/85">
              <strong>Gediyon Adamu Yeshitila</strong> is the <strong>Founder</strong> of <strong>Scelta Infinity</strong>.
            </p>
            <p className="mt-2 text-navy/85">
              With a strong background in <strong>digital publishing</strong> and <strong>affiliate marketing</strong>, he is dedicated to delivering <strong>high-quality eBooks</strong> and <strong>trustworthy recommendations</strong> to clients worldwide.
            </p>
            <p className="mt-2 text-navy/85">
              His <strong>vision</strong> is to build one of the most <strong>respected international platforms</strong> for lasting value and <strong>ethical business growth</strong>.
            </p>
          </div>
        </div>
      </Card>
    </MotionSection>
  );
}
