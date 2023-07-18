import type { ComponentProps } from 'react';

import Image from 'next/image';

import { twMerge } from 'tailwind-merge';

import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';

import { Heading } from '~/components/Heading/Heading';

function HeaderNavLink({ href, children, className }: ComponentProps<'a'>) {
  return (
    <a
      href={href}
      className={twMerge(
        'z-30 block border-b-0 font-bold text-white transition-all ease-linear hover:-translate-y-1 hover:scale-110 hover:border-b-2 hover:border-b-white',
        className,
      )}
    >
      {children}
    </a>
  );
}

export function HeaderNav() {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="/hero_bg.jpg"
        alt="Septian Tama"
        className="h-full w-full object-cover grayscale"
        fill={true}
      />
      <div className="z-10 bg-gradient-radial mix-blend-soft-light"></div>
      <div className="absolute z-20 flex h-full w-full items-center justify-center bg-neutral-950/50">
        <Heading
          as="h1"
          className="text-center text-3xl text-white animate-in zoom-in duration-700 sm:text-4xl md:text-5xl"
        >
          {"Hi, I'm Tama "}{' '}
          <span className="inline-block animate-waving-hand">👋🏻</span>
          <br />
          {'Nice to meet you!'}
        </Heading>
      </div>
      <div className="container mx-auto h-full px-8 py-16">
        <div className="relative h-full">
          <HeaderNavLink
            href={process.env.resumeUrl as string}
            className="absolute right-0 top-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            My career journey so far 🛣️
          </HeaderNavLink>
          <HeaderNavLink
            href="/blog"
            className="absolute bottom-0 left-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Peek into my mind 👀
          </HeaderNavLink>
          <HeaderNavLink
            href="#about-me"
            className="absolute bottom-0 right-0 hover:scale-100 hover:border-0"
          >
            <ArrowDownCircleIcon className="hover:border-b-none mr-2 inline-block h-8 w-8 animate-bounce" />
          </HeaderNavLink>
        </div>
      </div>
    </div>
  );
}
