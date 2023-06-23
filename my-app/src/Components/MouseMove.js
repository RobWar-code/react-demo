import React, { Component } from 'react'
// import LifeCyclesCWUTracker from './LifeCyclesCWUTracker'

export class MouseMove extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mouseX: 0,
            mouseY: 0
        }
    }

    trackMouse = (e) => {
        console.log("Mouse Moved");
        this.setState({
            mouseX: e.clientX,
            mouseY: e.clientY
        })
    }

    componentDidMount() {
        window.addEventListener("mousemove", this.trackMouse);
    }


    render() {
        return (
            <div>
                <h1>Tracking Mouse</h1>
                <p>X: {this.state.mouseX} Y: {this.state.mouseY}</p>
            </div>
        )
    }
}

export default MouseMove