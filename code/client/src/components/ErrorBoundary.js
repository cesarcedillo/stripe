import React, { Component } from "react";

//Capture error while loading components
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(`ErrorBoundary caught error: ${JSON.stringify(error, null, 2)}, ${JSON.stringify(errorInfo, null, 2)}`)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong ...</h1>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
