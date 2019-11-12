import React, { Component } from 'react'

export default class Step1 extends Component {
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
                <h3>Krok 1/4</h3>
                <form>
                    <button onClick={this.continue}>Dalej</button>
                </form> 
            </div>
        )
    }
}
