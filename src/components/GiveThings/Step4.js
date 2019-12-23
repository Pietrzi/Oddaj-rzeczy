import React, { Component } from 'react'

export default class Step4 extends Component {
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
                <h3>Krok 4/4</h3>
                <form className="give__form">
                    <p className="form__steps">Podaj adres oraz termin odbioru rzeczy przez kuriera</p>
                    <div className="step4__form">
                    <div className="form4__left">
                        <p className="step4__text">Adres odbioru:</p>
                        <div className="input4__box">
                            <label className="label4" for="">Ulica</label>
                            <input type="text" id="ulica" name="ulica" value={values.ulica} onChange={handleInputChange}></input>
                        </div>
                        <div className="input4__box">
                            <label className="label4" for="">Miasto</label>
                            <input type="text" id="miasto" name="miasto" value={values.miasto} onChange={handleInputChange}></input>
                        </div>
                        <div className="input4__box">
                            <label className="label4" for="">Kod Pocztowy</label>
                            <input type="text" id="" name="kodPocztowy" value={values.kodPocztowy} onChange={handleInputChange}></input>
                        </div>
                        <div className="input4__box">
                            <label className="label4" for="">Numer Telefonu</label>
                            <input type="text" id="nrTel" name="nrTel" value={values.nrTel} onChange={handleInputChange}></input>
                        </div>
                    </div>
                    <div>
                        <p className="step4__text">Termin odbioru:</p>
                        <div className="input4__box">
                            <label className="label4" for="">Data</label>
                            <input type="text" id="data" name="data" value={values.data} onChange={handleInputChange}></input>
                        </div>
                        <div className="input4__box">
                            <label className="label4" for="">Godzina</label>
                            <input type="text" id="godz" name="godz" value={values.godz} onChange={handleInputChange}></input>
                        </div>
                        <div className="input4__box">
                            <label className="label4" for="">Uwagi dla kuriera</label>
                            <textarea type="text" id="uwagi" name="uwagi" value={values.uwagi} onChange={handleInputChange}></textarea>
                        </div>
                    </div>
                    </div>
                    <input className="form__input left__input" type="submit" onClick={this.back} value="Poprzednia" />
                    <input className="form__input right__input" type="submit" onClick={this.continue} value="Dalej" />
                </form>
            </div>
        )
    }
}
