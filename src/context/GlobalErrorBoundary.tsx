import React from 'react';

interface GlobalErrorBoundaryProps {
  children: React.ReactNode;
}

interface Props {
  children?: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}
class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  };
  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error: error };
  }
  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can use your own error logging service here
    console.error('Uncaught error:', error, errorInfo);
  }
  public render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h2>에러가 발생하였습니다 : {this.state.error?.message}</h2>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            다시 시도
          </button>
        </div>
      );
    }

    // Return children components in case of no error
    return this.props.children;
  }
}

export default function GlobalErrorBoundary({
  children,
}: GlobalErrorBoundaryProps) {
  return <ErrorBoundary>{children}</ErrorBoundary>;
}
