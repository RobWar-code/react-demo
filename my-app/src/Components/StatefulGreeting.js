import React from 'react';

class StatefulGreeting extends React.Component{
    constructor (props) {
        super(props);
        state = {
            introduction: "Hello!",
            buttonText: "Exit"
        };
    }

    render () {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.message}</h1>
                <button>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StatefulGreeting;