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
                            <option value="6">6</option>
                            <option value="6">7</option>
                            <option value="6">8</option>
                            <option value="6">9</option>
                            <option value="6">10</option>
                        </select>
                    </div>
                    <button onClick={this.continue}>Dalej</button>
                </form> 
            </div>
        )
    }
}
