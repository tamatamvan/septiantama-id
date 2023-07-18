import Image from 'next/image';
import Link from 'next/link';
import { Heading } from '~/components/Heading/Heading';
import { Paragraph } from '~/components/Paragraph';

export default function BlogPage() {
  return (
    <div className="flex h-[100svh] w-full flex-col items-center justify-center bg-black px-8 text-white">
      <Heading as="h1" className="text-4xl">
        Coming soon...
      </Heading>
      <Image
        src="/kurokocchi_playing_yarn.svg"
        alt="Kurokocchi plays"
        width={320}
        height={320}
        objectFit="contain"
      />
      <Paragraph className="my-8 max-w-prose text-center">
        Thank you for your interest, the blog is still under construction.
        <br /> Until then, how about we play with Kurokocchi?
      </Paragraph>
      <Link
        href="/"
        className="block border-b-0 font-bold text-white transition-all ease-linear hover:-translate-y-1 hover:scale-110 hover:border-b-2 hover:border-b-white"
      >
        Back to homepage
      </Link>
    </div>
  );
}
