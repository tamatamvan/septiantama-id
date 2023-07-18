import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
} from '@radix-ui/react-icons';

import { Heading } from '~/components/Heading/Heading';
import { Paragraph } from '~/components/Paragraph';
import { Section } from '~/components/Section';

export function ContactMe() {
  return (
    <Section id="contact">
      <div className="flex">
        <div>
          <Heading as="h2" className="mb-8 text-3xl underline">
            Are you thinking what I'm thinking?
          </Heading>
          <Paragraph className="max-w-prose">
            Since you've come this far, I assume there's something about me that
            pique your interest?
          </Paragraph>
          <Paragraph className="max-w-prose">
            Need help with anything? Cool project? Exciting collaboration?{' '}
            <br />
          </Paragraph>
          <Paragraph>
            <span className="font-bold">Hit me up!</span> Let's grab some coffee
            and discuss about it! ☕
          </Paragraph>
          <Heading as="h3" className="my-8 text-xl font-bold">
            Feel free to reach me out through:
          </Heading>
          <ul>
            <li className="mb-2 flex items-center">
              <a href="mailto:me@septiantama.id">
                <EnvelopeClosedIcon className="mr-2 inline-block h-6 w-6" />{' '}
                me@septiantama.id
              </a>
            </li>
            <li className="mb-2 flex items-center">
              <a href="https://github.com/tamatamvan">
                <GitHubLogoIcon className="mr-2 inline-block h-6 w-6" />{' '}
                @tamatamvan
              </a>
            </li>
            <li className="mb-2 flex items-center">
              <a href="https://linkedin.com/in/septian-tama">
                <LinkedInLogoIcon className="mr-2 inline-block h-6 w-6" />{' '}
                Septian Tama
              </a>
            </li>
            <li className="mb-2 flex items-center">
              <a href="https://twitter.com/s_ai_tama">
                <TwitterLogoIcon className="mr-2 inline-block h-6 w-6" />{' '}
                @s_ai_tama
              </a>
            </li>
            <li className="mb-2 flex items-center">
              <a href="https://instagram.com/s_ai_tama">
                <InstagramLogoIcon className="mr-2 inline-block h-6 w-6" />{' '}
                @s_ai_tama
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
