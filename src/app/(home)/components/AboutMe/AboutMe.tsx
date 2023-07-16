import { Heading } from '~/components/Heading/Heading';
import { Section } from '~/components/Section';

function StyledParagrah({ children }: { children: React.ReactNode }) {
  return <p className="mb-6">{children}</p>;
}

export function AboutMe() {
  return (
    <Section id="about-me">
      <Heading as="h2" className="mb-8 text-3xl underline">
        A lil bit about me
      </Heading>
      <StyledParagrah>
        I'm an experienced fullstack software engineer with main expertise in
        front-end web development. <br /> A lifelong learner that loves
        experimenting with new things, sharing knowledge with others, and help
        to empower people in reaching their goals and potential.
      </StyledParagrah>
      <StyledParagrah>
        I enjoy coding 💻, cooking 🍳, poetry✍🏼, and playing with my cat 🐈‍⬛.
      </StyledParagrah>
      <StyledParagrah>
        Sometimes I play FIFA & Football Manager ⚽️🎮 I also watch NBA 🏀
        <br />I love the tactical and analytical side of the sports. 📊
      </StyledParagrah>
    </Section>
  );
}
