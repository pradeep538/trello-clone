import { Component } from "react";
import GenericError from "../GenericError/GenericError";
export type TProps = {
  children: any;
};
export type TState = {
  hasError: boolean;
};
class ErrorBoundry extends Component<TProps, TState> {
  constructor(props: TProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error: any) {
    console.log(error);
    return { hasError: true };
  }
  componentDidCatch(error: any, errorInfo: any) {
    console.log({ error, errorInfo });
    
  }

  render() {
    if (this.state.hasError) {
      return <GenericError />;
    }
    return this.props.children;
  }
}
export default ErrorBoundry;
