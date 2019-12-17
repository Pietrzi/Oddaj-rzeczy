import React, { Component } from 'react'

export default class Step3 extends Component {
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
                <h3>Krok 3/4</h3>
                <form>
                    <p>Lokalizacja:</p>
                    <div>
                        <select id="pet-select">
                            <option value="">-wybierz-</option>
                            <option value="1">Poznań</option>
                            <option value="2">Warszawa</option>
                            <option value="3">Kraków</option>
                            <option value="4">Wrocław</option>
                            <option value="5">Katowice</option>
                        </select>
                    </div>
                    <p>Komu chcesz pomóc</p>
                    <span>dzieciom</span>
                    <span>samotnym matkom</span>
                    <span>bezdomnym</span>
                    <span>niepełnosprawnym</span>
                    <span>osobom starszym</span>
                    <p>Wpisz nazwę konkretnej organizacji(opcjonalnie)</p>
                    <div>
                        <input type="text"></input>
                    </div>
                    <button onClick={this.back}>Poprzednia</button>
                    <button onClick={this.continue}>Dalej</button>
                </form>
            </div>
        )
    }
}
