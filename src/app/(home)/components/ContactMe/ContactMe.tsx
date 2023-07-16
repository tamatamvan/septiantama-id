import { Heading } from '~/components/Heading/Heading';
import { Paragraph } from '~/components/Paragraph';
import { Section } from '~/components/Section';

export function ContactMe() {
  return (
    <Section id="contact">
      <>
        <Heading as="h2" className="mb-8 text-3xl underline">
          Are you thinking what I'm thinking?
        </Heading>
        <Paragraph className="max-w-prose">
          Since you've come this far, maybe there's something about me that
          pique your interest?
        </Paragraph>
        <Paragraph className="max-w-prose">
          Need help with anything? Cool project? Exciting collaboration? <br />
        </Paragraph>
        <Paragraph>
          <span className="font-bold">Hit me up!</span> Let's grab some coffee
          and discuss about it! ☕
        </Paragraph>
      </>
    </Section>
  );
}
