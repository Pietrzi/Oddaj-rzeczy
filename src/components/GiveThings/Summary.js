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
        const { values } = this.props
        const what = {
            ubrDob: "",
            ubrZle: "",
            zabawki: "",
            ksiazki: "",
            inne: ""
        }
        if(values.ubraniaDobre) {
            what.ubrDob = "ubrania w dobrym stanie";
        }
        if(values.ubraniaZle) {
            what.ubrDob = "ubrania do wyrzucenia";
        }
        if(values.zabawki) {
            what.ubrDob = "zabawki";
        }
        if(values.ksiazki) {
            what.ubrDob = "książki";
        }
        if(values.inne) {
            what.ubrDob = "inne";
        }
        
        const arr = Object.values(what)
        const whatList = arr.map(what => what ? <p>{what}</p> : null)
        return (
            <div>
                <h1>Summary</h1>
                <p>Oddajesz:</p>
                <p>{ values.liczbaWorkow } worki, { whatList }</p>
                <div>
                    <p>Adres odbioru</p>
                    <div>
                        <span>Ulica</span>
                        <span>{ values.ulica }</span>
                    </div>
                    <div>
                        <span>Miasto</span>
                        <span>{ values.miasto }</span>
                    </div>
                    <div>
                        <span>Kod Pocztowy</span>
                        <span>{ values.kodPocztowy }</span>
                    </div>
                    <div>
                        <span>Numer telefonu</span>
                        <span>{ values.nrTel }</span>
                    </div>
                </div>
                <div>
                    <p>Adres odbioru</p>
                    <div>
                        <span>Data</span>
                        <span>{ values.data }</span>
                    </div>
                    <div>
                        <span>Godzina</span>
                        <span>{ values.godz }</span>
                    </div>
                    <div>
                        <span>Uwagi dla kuriera</span>
                        <span>{ values.uwagi }</span>
                    </div>
                </div>
                <input type="submit" onClick={this.back} value="Poprzednia" />
                <input type="submit" onClick={this.continue} value="Potwierdzam" />
            </div>
        )
    }
}
