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
        const { values, handleInputChange } = this.props;
        return (
            <div>
                <h3>Krok 1/4</h3>
                <form className="give__form">
                    <p className="form__steps">Zaznacz co chcesz oddać:</p>
                    <div className="check__box">
                        <input className="check__input" type="checkbox" id="ubraniaDobre" name="ubraniaDobre" checked={values.ubraniaDobre} onChange={handleInputChange}></input>
                        <span className="checkbox__custom"></span>
                        <label for="ubraniaDobre">ubrania, które nadają się do ponownego użycia</label>
                    </div>
                    <div className="check__box">
                        <input className="check__input" type="checkbox" id="ubraniaZle" name="ubraniaZle" checked={values.ubraniaZle} onChange={handleInputChange}></input>
                        <span className="checkbox__custom"></span>
                        <label for="ubraniaZle">ubrania, do wyrzucenia</label>
                    </div>
                    <div className="check__box">
                        <input className="check__input" type="checkbox" id="zabawki" name="zabawki" checked={values.zabawki} onChange={handleInputChange}></input>
                        <span className="checkbox__custom"></span>
                        <label for="zabawki">zabawki</label>
                    </div>
                    <div className="check__box">
                        <input className="check__input" type="checkbox" id="ksiazki" name="ksiazki" checked={values.ksiazki} onChange={handleInputChange}></input>
                        <span className="checkbox__custom"></span>
                        <label for="ksiazki">książki</label>
                    </div>
                    <div className="check__box">
                        <input className="check__input" type="checkbox" id="inne" name="inne" checked={values.inne} onChange={handleInputChange}></input>
                        <span className="checkbox__custom"></span>
                        <label for="inne">inne</label>
                    </div>
                    <input className="form__input left__input" type="submit" onClick={this.continue} value="Dalej" />
                </form> 
            </div>
        )
    }
}
