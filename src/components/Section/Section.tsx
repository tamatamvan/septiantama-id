import { ComponentProps } from 'react';

export function Section({ id, children, ...rest }: ComponentProps<'section'>) {
  return (
    <section id={id} {...rest}>
      <div className="container mx-auto px-4 py-24 text-white">{children}</div>
    </section>
  );
}
