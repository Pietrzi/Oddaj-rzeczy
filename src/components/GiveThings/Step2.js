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
        const { values, handleInputChange } = this.props;
        return (
            <div>
                <h3>Krok 2/4</h3>
                <form className="give__form">
                <p className="form__steps">Podaj liczbę 60l worków w którą spakowałeś/aś rzeczy:</p>
                    <div>
                        <label className="label2">Liczba 60l worków:</label>
                        <select name="liczbaWorkow" id="pet-select" value={values.liczbaWorkow} onChange={handleInputChange}>
                            <option value="">-wybierz-</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <input className="form__input left__input" type="submit" onClick={this.back} value="Poprzednia" />
                    <input className="form__input right__input" type="submit" onClick={this.continue} value="Dalej" />
                </form>
            </div>
        )
    }
}
