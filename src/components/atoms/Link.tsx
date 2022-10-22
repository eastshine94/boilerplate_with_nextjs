/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

interface LinkProps extends NextLinkProps {
  children: React.ReactNode;
  className?: string;
}

export default function Link({
  children,
  className,
  href,
  ...args
}: LinkProps) {
  return (
    <NextLink href={href} {...args}>
      <a className={className}>{children}</a>
    </NextLink>
  );
}
