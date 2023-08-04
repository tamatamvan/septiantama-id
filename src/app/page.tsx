import React, { ComponentProps } from 'react';
import { Metadata } from 'next';

import Link from 'next/link';
import Image from 'next/image';

import { twMerge } from 'tailwind-merge';

import {
  EnvelopeClosedIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';

import { Heading } from '~/components/Heading/Heading';
import { Section } from '~/components/Section';
import { Paragraph } from '~/components/Paragraph';
import { Footer } from '~/components/Footer';

export const metadata: Metadata = {
  title: "Septian Tama's Personal Website",
  description:
    "Hi I'm Tama, an experienced fullstack software engineer with main expertise in front-end web development.",
};

function HeaderNavLink({
  href,
  children,
  className,
  external,
  ...rest
}: ComponentProps<typeof Link> & ComponentProps<'a'> & { external?: boolean }) {
  const Component = external ? 'a' : Link;
  return (
    <Component
      href={href}
      className={twMerge(
        'z-30 block border-b-0 text-lg uppercase text-white transition-all ease-linear hover:-translate-y-1 hover:scale-110 hover:border-b-2 hover:border-b-white',
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}

type SocialLinkProps = {
  children: React.ReactNode;
  href: string;
};

function SocialLink({ children, href }: SocialLinkProps) {
  return (
    <li className="mb-2 flex items-center">
      <a href={href} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    </li>
  );
}

export default function Home() {
  return (
    <div className="bg-black">
      <div className="relative h-[100svh] w-full">
        <Image
          src="/hero_bg_1.jpg"
          alt="Septian Tama"
          className="h-full w-full object-cover grayscale"
          fill={true}
        />
        <div className="z-10 bg-gradient-radial mix-blend-soft-light"></div>
        <div className="absolute z-20 flex h-full w-full items-center justify-center bg-neutral-950/50">
          <Heading
            as="h1"
            className="text-center text-3xl text-white sm:text-4xl md:text-5xl"
          >
            Hi, {"I'm"} Tama{' '}
            <span className="inline-block animate-waving-hand">👋🏻</span>
            <br />
            Nice to meet you!
          </Heading>
        </div>
        <div className="container mx-auto h-full px-8 py-16">
          <div className="relative h-full">
            <HeaderNavLink
              href="/resume"
              className="group absolute right-0 top-0 flex"
              target="_blank"
              rel="noopener noreferrer"
              external
            >
              🛣️ Resume{' '}
              <ExternalLinkIcon className="ml-1 inline-block h-4 w-4 self-start text-white" />
            </HeaderNavLink>
            <HeaderNavLink href="/blog" className="absolute bottom-0 left-0">
              ✍️ Blog
            </HeaderNavLink>
            <HeaderNavLink
              href="#about-me"
              className="absolute bottom-0 right-0 hover:scale-100 hover:border-0"
              external
            >
              <ArrowDownCircleIcon className="hover:border-b-none mr-2 inline-block h-10 w-10 animate-bounce" />
            </HeaderNavLink>
          </div>
        </div>
      </div>
      <Section id="about-me">
        <Heading as="h2" className="mb-8 text-3xl underline">
          A lil bit about me
        </Heading>
        <div className="flex flex-wrap">
          <div>
            <Paragraph className="max-w-prose">
              {"I'm"} an{' '}
              <a
                href={process.env.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline"
              >
                experienced fullstack software engineer
              </a>{' '}
              with main expertise in front-end web development. <br />A lifelong
              learner that loves experimenting with new things, sharing
              knowledge with others, and help to empower people in reaching
              their goals and potential. 🚀
            </Paragraph>
            <Paragraph>
              I enjoy coding 💻, cooking 🍳, poetry✍🏼, and bonding with my cat
              🐈‍⬛.
            </Paragraph>
            <Paragraph>
              Sometimes I play FIFA & Football Manager ⚽️🎮 I also watch NBA 🏀
              <br />I love the tactical and analytical aspects of the sports. 📊
            </Paragraph>
          </div>
          <Image
            src="/kurokocchi.png"
            className="mx-auto my-8"
            alt="Cat Illustration"
            width={150}
            height={218}
            objectFit="contain"
          />
        </div>
      </Section>
      <Section id="contact">
        <div className="flex">
          <div>
            <Heading as="h2" className="mb-8 text-3xl underline">
              Are you thinking what {"I'm"} thinking?
            </Heading>
            <Paragraph className="max-w-prose">
              Since {"you've"} come this far, I assume {"there's"} something
              about me that pique your interest?
            </Paragraph>
            <Paragraph className="max-w-prose">
              Need help with anything? Cool project? Exciting collaboration?{' '}
              <br />
            </Paragraph>
            <Paragraph>
              <span className="font-bold">Hit me up!</span>{' '}
              {"Let's grab some coffee and discuss about it! ☕"}
            </Paragraph>
            <Heading as="h3" className="my-8 text-xl font-bold">
              Feel free to reach me out through:
            </Heading>
            <ul>
              <SocialLink href="mailto:me@septiantama.id">
                <EnvelopeClosedIcon className="mr-2 inline-block h-6 w-6" />{' '}
                me@septiantama.id
              </SocialLink>
              <SocialLink href="https://github.com/tamatamvan">
                <GitHubLogoIcon className="mr-2 inline-block h-6 w-6" />{' '}
                @tamatamvan
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/septian-tama">
                <LinkedInLogoIcon className="mr-2 inline-block h-6 w-6" />{' '}
                Septian Tama
              </SocialLink>
              <SocialLink href="https://twitter.com/s_ai_tama">
                <TwitterLogoIcon className="mr-2 inline-block h-6 w-6" />{' '}
                @s_ai_tama
              </SocialLink>
              <SocialLink href="https://instagram.com/s_ai_tama">
                <InstagramLogoIcon className="mr-2 inline-block h-6 w-6" />{' '}
                @s_ai_tama
              </SocialLink>
            </ul>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
