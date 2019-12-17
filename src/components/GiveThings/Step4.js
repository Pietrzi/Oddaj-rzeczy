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
        return (
            <div>
                <h3>Krok 4/4</h3>
                <form>
                    <div>
                        <p>Adres odbioru</p>
                        <div>
                            <label for="">Ulica</label>
                            <input type="text" id="ulica" name="ulica"></input>
                        </div>
                        <div>
                            <label for="">Miasto</label>
                            <input type="text" id="miasto" name="miasto"></input>
                        </div>
                        <div>
                            <label for="">Kod Pocztowy</label>
                            <input type="text" id="" name="kodPocztowy"></input>
                        </div>
                        <div>
                            <label for="">Numer Telefonu</label>
                            <input type="text" id="nrTel" name="nrTel"></input>
                        </div>
                    </div>
                    <div>
                        <p>Termin odbioru</p>
                        <div>
                            <label for="">Data</label>
                            <input type="text" id="data" name="data"></input>
                        </div>
                        <div>
                            <label for="">Godzina</label>
                            <input type="text" id="godz" name="godz"></input>
                        </div>
                        <div>
                            <label for="">Uwagi dla kuriera</label>
                            <textarea type="text" id="uwagi" name="uwagi"></textarea>
                        </div>
                    </div>
                    <button onClick={this.back}>Poprzednia</button>
                    <button onClick={this.continue}>Dalej</button>
                </form>
            </div>
        )
    }
}
