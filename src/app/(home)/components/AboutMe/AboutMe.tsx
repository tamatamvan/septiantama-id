import { Heading } from '~/components/Heading/Heading';
import { Section } from '~/components/Section';
import { Paragraph } from '~/components/Paragraph';

export function AboutMe() {
  return (
    <Section id="about-me">
      <Heading as="h2" className="mb-8 text-3xl underline">
        A lil bit about me
      </Heading>
      <Paragraph className="max-w-prose">
        I'm an experienced fullstack software engineer with main expertise in
        front-end web development. <br /> A lifelong learner that loves
        experimenting with new things, sharing knowledge with others, and help
        to empower people in reaching their goals and potential.
      </Paragraph>
      <Paragraph>
        I enjoy coding 💻, cooking 🍳, poetry✍🏼, and bonding with my cat 🐈‍⬛.
      </Paragraph>
      <Paragraph>
        Sometimes I play FIFA & Football Manager ⚽️🎮 I also watch NBA 🏀
        <br />I love the tactical and analytical side of the sports. 📊
      </Paragraph>
    </Section>
  );
}
