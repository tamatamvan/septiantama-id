import { Syne } from 'next/font/google';
import { ComponentProps } from 'react';

const syne = Syne({
  weight: '600',
  subsets: ['latin'],
});

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export function Heading({
  as = 'h1',
  children,
  className = '',
}: ComponentProps<'h1'> & HeadingProps) {
  const As = as;
  return <As className={`${syne.className} ${className}`}>{children}</As>;
}
