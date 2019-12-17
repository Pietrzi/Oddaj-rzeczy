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
        const { ubraniaDobre, ubraniaZle, zabawki, ksiazki, inne, liczbaWorkow, lokalizacja, komu, organizacja, ulica, miasto, kodPocztowy, nrTel, data, godz, uwagi } = this.props.values
        return (
            <div>
                <h1>Summary</h1>
                {ulica}
                <button onClick={this.back}>Poprzednia</button>
                <button onClick={this.continue}>Dalej</button>
            </div>
        )
    }
}
