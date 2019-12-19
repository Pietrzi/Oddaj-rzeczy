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
                    <div>
                        <p>Adres odbioru</p>
                        <div>
                            <label for="">Ulica</label>
                            <input type="text" id="ulica" name="ulica" value={values.ulica} onChange={handleInputChange}></input>
                        </div>
                        <div>
                            <label for="">Miasto</label>
                            <input type="text" id="miasto" name="miasto" value={values.miasto} onChange={handleInputChange}></input>
                        </div>
                        <div>
                            <label for="">Kod Pocztowy</label>
                            <input type="text" id="" name="kodPocztowy" value={values.kodPocztowy} onChange={handleInputChange}></input>
                        </div>
                        <div>
                            <label for="">Numer Telefonu</label>
                            <input type="text" id="nrTel" name="nrTel" value={values.nrTel} onChange={handleInputChange}></input>
                        </div>
                    </div>
                    <div>
                        <p>Termin odbioru</p>
                        <div>
                            <label for="">Data</label>
                            <input type="text" id="data" name="data" value={values.data} onChange={handleInputChange}></input>
                        </div>
                        <div>
                            <label for="">Godzina</label>
                            <input type="text" id="godz" name="godz" value={values.godz} onChange={handleInputChange}></input>
                        </div>
                        <div>
                            <label for="">Uwagi dla kuriera</label>
                            <textarea type="text" id="uwagi" name="uwagi" value={values.uwagi} onChange={handleInputChange}></textarea>
                        </div>
                    </div>
                    <input className="form__input left__input" type="submit" onClick={this.back} value="Poprzednia" />
                    <input className="form__input right__input" type="submit" onClick={this.continue} value="Dalej" />
                </form>
            </div>
        )
    }
}
