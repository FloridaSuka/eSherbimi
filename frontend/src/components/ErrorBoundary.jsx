import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <main className="app-shell auth-shell">
          <section className="auth-panel">
            <h1>Frontend error</h1>
            <p className="error">{this.state.error.message}</p>
            <button type="button" onClick={() => window.localStorage.clear()}>Clear saved session</button>
          </section>
        </main>
      );
    }

    return this.props.children;
  }
}
