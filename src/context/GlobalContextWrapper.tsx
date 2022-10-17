import React from 'react';
import GlobalErrorBoundary from './GlobalErrorBoundary';
import ReactQueryProvider from './ReactQueryProvider';

interface GlobalContextWrapperProps {
  children: React.ReactNode;
}

export default function GlobalContextWrapper({
  children,
}: GlobalContextWrapperProps) {
  return (
    <GlobalErrorBoundary>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </GlobalErrorBoundary>
  );
}
