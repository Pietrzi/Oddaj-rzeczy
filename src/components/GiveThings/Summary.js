import React, { Component } from 'react'

export default class Summary extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };
    render() {
        return (
            <div>
                <h1>Summary</h1>
                <button onClick={this.back}>Poprzednia</button>
                <button onClick={this.continue}>Dalej</button>
            </div>
        )
    }
}
