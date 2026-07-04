import LegalLayout, { Section } from "./LegalLayout";

const EMAIL = "blinkbear.app@gmail.com";

export default function Impressum() {
  return (
    <LegalLayout
      title="Impressum"
      subtitle="Legal notice / Angaben gemäß § 5 TMG."
    >
      <Section title="Angaben gemäß § 5 TMG">
        <p>
          Fabian Katzhammer
          <br />
          Am Kaiserfeld 4
          <br />
          93142 Maxhütte-Haidhof
          <br />
          Deutschland
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
        <p>Fabian Katzhammer</p>
      </Section>

      <Section title="EU-Streitschlichtung">
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="font-bold underline decoration-[#FFB5A7] decoration-2 underline-offset-2">
            https://ec.europa.eu/consumers/odr
          </a>
          . Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
      </Section>

      <Section title="Verbraucherstreitbeilegung / Universalschlichtungsstelle">
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </Section>
    </LegalLayout>
  );
}
