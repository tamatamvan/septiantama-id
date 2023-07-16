import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function Paragraph({
  children,
  className,
  ...rest
}: ComponentProps<'p'>) {
  return (
    <p className={twMerge('mb-6 md:text-lg', className)} {...rest}>
      {children}
    </p>
  );
}
