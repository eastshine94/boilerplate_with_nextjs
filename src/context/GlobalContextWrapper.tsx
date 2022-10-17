import React from 'react';
import GlobalErrorBoundary from './GlobalErrorBoundary';

interface GlobalContextWrapperProps {
  children: React.ReactNode;
}

export default function GlobalContextWrapper({
  children,
}: GlobalContextWrapperProps) {
  return <GlobalErrorBoundary>{children}</GlobalErrorBoundary>;
}
