import React, {Component} from "react";

class ErrorBoundry extends Component {
    constructor(){
        super();
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error, info){
        this.setState({ hasError: true });
    }  // React runs this method when there is an error

    render() {
        if (this.state.hasError){
            return <h1>Ooops. That is not good</h1>;
        }
        return this.props.children;
        
    }
}

export default ErrorBoundry;