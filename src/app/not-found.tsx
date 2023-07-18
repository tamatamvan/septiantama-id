import Image from 'next/image';
import Link from 'next/link';
import { Heading } from '~/components/Heading/Heading';
import { Paragraph } from '~/components/Paragraph';

export default function BlogPage() {
  return (
    <div className="flex h-[100svh] w-full flex-col items-center justify-center bg-black px-8 text-white">
      <Heading as="h1" className="mb-4 text-4xl sm:text-5xl md:text-6xl">
        404
      </Heading>
      <Heading as="h2" className="text-center text-2xl sm:text-3xl md:text-4xl">
        {"Ummm... Seems that you're lost"}
      </Heading>
      <Image
        src="/404_getting_lost.png"
        alt="404 Not Found"
        width={320}
        height={480}
        objectFit="contain"
      />
      <Paragraph className="my-8 max-w-prose text-center">
        {
          "The page you're looking for doesn't exist. Maybe check the URL again? Or you can also..."
        }
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
