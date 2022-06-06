import React, { Component, ReactNode } from "react";
import { StyledErrorBoundary } from "./style";


class ErrorBoundary extends Component{

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

   static getDerivedStateFromError() {
    return { hasError: true };
  }


   render() {
    if (this.state.hasError) {
      return (
        <StyledErrorBoundary>
          <h1>Ooops!.. Something went wrong 😮</h1>
        </StyledErrorBoundary>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
