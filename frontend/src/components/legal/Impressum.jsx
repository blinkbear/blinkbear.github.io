import LegalLayout, { Section } from "./LegalLayout";

const EMAIL = "blinkbear.app@gmail.com";

export default function Impressum() {
  return (
    <LegalLayout
      title="Impressum"
      subtitle="Legal notice / Angaben gemäß § 5 TMG (Digitale-Dienste-Gesetz)."
    >
      <div className="mb-8 rounded-2xl border-4 border-[#18181B] bg-[#FDE047] p-5 shadow-[4px_4px_0_0_#18181B]">
        <p className="font-fredoka font-bold">⚠️ Action needed</p>
        <p className="mt-1 font-dm-sans text-sm text-[#18181B]/85">
          German law (§ 5 TMG) requires a responsible person's full name and postal address. The old
          site did not publish these, so the fields below are placeholders — please replace{" "}
          <code className="rounded bg-white px-1.5 py-0.5">[Your Name]</code> and the address with your
          real details.
        </p>
      </div>

      <Section title="Angaben gemäß § 5 TMG">
        <p>
          <strong>[Your Name]</strong>
          <br />
          [Street and House Number]
          <br />
          [Postal Code and City]
          <br />
          Germany
        </p>
      </Section>

      <Section title="Kontakt / Contact">
        <p>
          E-Mail:{" "}
          <a href={`mailto:${EMAIL}`} data-testid="impressum-contact-email" className="font-bold underline decoration-[#FFB5A7] decoration-2 underline-offset-2">
            {EMAIL}
          </a>
        </p>
      </Section>

      <Section title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
        <p>
          <strong>[Your Name]</strong>
          <br />
          [Street and House Number], [Postal Code and City], Germany
        </p>
      </Section>

      <Section title="Haftung für Inhalte / Liability for Content">
        <p>
          As a service provider we are responsible for our own content on these pages in accordance
          with general laws (§ 7 Abs. 1 TMG). However, we are not obligated to monitor transmitted or
          stored third-party information or to investigate circumstances that indicate illegal activity.
          Obligations to remove or block the use of information under general laws remain unaffected.
        </p>
      </Section>

      <Section title="Haftung für Links / Liability for Links">
        <p>
          Our offer may contain links to external websites of third parties, over whose content we
          have no influence. Therefore, we cannot assume any liability for this external content. The
          respective provider or operator of the linked pages is always responsible for their content.
        </p>
      </Section>

      <Section title="Urheberrecht / Copyright">
        <p>
          The content and works created by the site operators on these pages are subject to copyright
          law. Duplication, processing, distribution, and any kind of exploitation outside the limits
          of copyright require the written consent of the respective author or creator.
        </p>
      </Section>

      <Section title="EU-Streitschlichtung / EU Dispute Resolution">
        <p>
          The European Commission provides a platform for online dispute resolution (ODR):{" "}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="font-bold underline decoration-[#FFB5A7] decoration-2 underline-offset-2">
            https://ec.europa.eu/consumers/odr/
          </a>
          . We are neither obligated nor willing to participate in dispute resolution proceedings
          before a consumer arbitration board.
        </p>
      </Section>
    </LegalLayout>
  );
}
