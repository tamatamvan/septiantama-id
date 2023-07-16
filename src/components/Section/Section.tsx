import type { ComponentProps, ElementType } from 'react';

type SectionProps = {
  as?: 'section' | 'div' | 'footer';
} & ComponentProps<'section'>;

export function Section({
  as = 'section',
  id,
  children,
  ...rest
}: SectionProps) {
  const Component = as as ElementType;
  return (
    <Component id={id} {...rest}>
      <div className="container mx-auto px-4 py-24 text-white">{children}</div>
    </Component>
  );
}
