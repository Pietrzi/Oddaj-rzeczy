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
        const { values, handleInputChange, handleOptionChange } = this.props;
        return (
            <div>
                <h3>Krok 3/4</h3>
                <form>
                    <p>Lokalizacja:</p>
                    <div className="select__box">
                        <select name="lokalizacja" id="pet-select" value={values.lokalizacja} onChange={handleInputChange}>
                            <option value="">-wybierz-</option>
                            <option value="Poznań">Poznań</option>
                            <option value="Warszawa">Warszawa</option>
                            <option value="Kraków">Kraków</option>
                            <option value="Wrocław">Wrocław</option>
                            <option value="Katowice">Katowice</option>
                        </select>
                    </div>
                    <p className="whom__paragraph">Komu chcesz pomóc</p>
                    <span className="optional__span" onClick={handleOptionChange}>dzieciom</span>
                    <span className="optional__span">samotnym matkom</span>
                    <span className="optional__span">bezdomnym</span>
                    <span className="optional__span">niepełnosprawnym</span>
                    <span className="optional__span">osobom starszym</span>
                    <p className="which__org__paragraph">Wpisz nazwę konkretnej organizacji(opcjonalnie)</p>
                    <div className="org__input__box">
                        <input type="text" name="organizacja" value={values.organizacja} onChange={handleInputChange}></input>
                    </div>
                    <button onClick={this.back}>Poprzednia</button>
                    <button onClick={this.continue}>Dalej</button>
                </form>
            </div>
        )
    }
}
