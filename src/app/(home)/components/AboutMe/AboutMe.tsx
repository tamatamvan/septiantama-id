import Image from 'next/image';

import { Heading } from '~/components/Heading/Heading';
import { Section } from '~/components/Section';
import { Paragraph } from '~/components/Paragraph';

export function AboutMe() {
  return (
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
            learner that loves experimenting with new things, sharing knowledge
            with others, and help to empower people in reaching their goals and
            potential. 🚀
          </Paragraph>
          <Paragraph>
            I enjoy coding 💻, cooking 🍳, poetry✍🏼, and bonding with my cat 🐈‍⬛.
          </Paragraph>
          <Paragraph>
            Sometimes I play FIFA & Football Manager ⚽️🎮 I also watch NBA 🏀
            <br />I love the tactical and analytical side of the sports. 📊
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
  );
}
