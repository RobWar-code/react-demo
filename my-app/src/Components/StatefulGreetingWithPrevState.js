import React from 'react';

class StatefulGreetingWithCallback extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log("prev state", prevState.introduction);
            console.log("prev state", prevState.buttonText);
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbye!": "Hello!",
                buttonText: prevState.buttonText === "Enter" ? "Exit": "Enter",
            };
        }, () => {
            // Callback
        })
    }

    increment() {
        this.setState((prevState, prevProps) => {
           return {count: prevState.count + 1};
        })
    }

    render () {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.message}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.increment()}>Increment</button><span> {this.state.count}</span>
            </div>
        )
    }
}

export default StatefulGreetingWithCallback;