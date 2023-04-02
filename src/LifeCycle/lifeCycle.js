import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor() {
        super();
        console.log("constructor");
        this.state = {
            count: 1
        }
    }
    componentDidMount() {
        console.log("componentDidMount");
        // setInterval(() => {
        //     this.setState({count: this.state.count +1}, () => {
        //         console.log("setState", this.state.count);
        //     });
        // }, 3000);
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
  render() {
    console.log("render");
    return (
      <div>LifeCycle{this.state.count}</div>
    )
  }
}
