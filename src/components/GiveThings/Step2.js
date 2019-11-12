import React, { Component } from 'react'

export default class Step2 extends Component {
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
                <h3>Krok 2/4</h3>
                <form>
                    <button onClick={this.back}>Poprzednia</button>
                    <button onClick={this.continue}>Dalej</button>
                </form>
            </div>
        )
    }
}
