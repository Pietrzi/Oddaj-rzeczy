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
                <p>Podaj liczbę 60l worków w którą spakowałeś/aś rzeczy:</p>
                    <div>
                        <label>Liczba 60l worków:</label>
                        <select id="pet-select">
                            <option value="">-wybierz-</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <button onClick={this.back}>Poprzednia</button>
                    <button onClick={this.continue}>Dalej</button>
                </form>
            </div>
        )
    }
}
