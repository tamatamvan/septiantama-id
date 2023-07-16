import { Section } from '~/components/Section';

export function Footer() {
  return (
    <Section as="footer" id="footer" className="text-center">
      © {new Date().getFullYear()} Septian Tama
    </Section>
  );
}
