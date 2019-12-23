import React, { Component } from 'react'
import { relative } from 'path';

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
            what.ubrDob = ", ubrania w dobrym stanie";
        }
        if(values.ubraniaZle) {
            what.ubrZle = ", ubrania do wyrzucenia";
        }
        if(values.zabawki) {
            what.zabawki = ", zabawki";
        }
        if(values.ksiazki) {
            what.ksiażki = ", książki";
        }
        if(values.inne) {
            what.inne = ", inne";
        }

        const whom = {
            dzieciom: "",
            samotnymMatkom: "",
            bezdomnym: "",
            niepelnosprawnym: "",
            osobomStarszym: ""
        }

        if(values.dzieci) {
            whom.dzieciom = ", dzieciom";
        }
        if(values.bezdomni) {
            whom.bezdomnym = ", bezdomnym";
        }
        if(values.samotneMatki) {
            whom.samotnymMatkom = ", samotnym matkom";
        }
        if(values.niepelnosprawni) {
            whom.niepelnosprawnym = ", niepełnosprawnym";
        }
        if(values.osobyStarsze) {
            whom.osobomStarszym = ", osobom starszym";
        }
        
        const arr1 = Object.values(what)
        const whatList = arr1.map(what => what ? <span>{what}</span> : null)

        const arr2 = Object.values(whom)
        const whomList = arr2.map(whom => whom ? <span>{whom}</span> : null)

        let organizacja = values.organizacja ? <span>{values.organizacja}</span> : null;

        console.log(whom)
        return (
            <div>
                <p  className="summary__title">Podsumowanie Twojej darowizny</p>
                <form  className="give__form">
                <p className="summary__text">Oddajesz:</p>
                <div className="sum__wrap">
                    <div className="tshirt__icon"></div>
                    <p className="summary__text">{ values.liczbaWorkow } worki{ whatList }{whomList}</p>
                </div>
                <div className="sum__wrap">
                    <div className="arrow__icon"></div>
                    <p className="summary__text">dla lokalizacji: {values.lokalizacja} {organizacja}</p>
                </div>
                <div className="summary__info__box">
                <div className="left__sum__box">
                    <p className="summary__text">Adres odbioru</p>
                    <div className="spans__box">
                        <span className="summary__span left__span">Ulica</span>
                        <span className="summary__span">{ values.ulica }</span>
                    </div>
                    <div className="spans__box">
                        <span className="summary__span left__span">Miasto</span>
                        <span className="summary__span">{ values.miasto }</span>
                    </div>
                    <div className="spans__box">
                        <span className="summary__span left__span">Kod Pocztowy</span>
                        <span className="summary__span">{ values.kodPocztowy }</span>
                    </div>
                    <div className="spans__box">
                        <span className="summary__span left__span">Numer telefonu</span>
                        <span className="summary__span">{ values.nrTel }</span>
                    </div>
                </div>
                <div>
                    <p className="summary__text">Adres odbioru</p>
                    <div className="spans__box">
                        <span className="summary__span left__span">Data</span>
                        <span className="summary__span">{ values.data }</span>
                    </div>
                    <div className="spans__box">
                        <span className="summary__span left__span">Godzina</span>
                        <span className="summary__span">{ values.godz }</span>
                    </div>
                    <div className="spans__box">
                        <span className="summary__span left__span">Uwagi dla kuriera</span>
                        <span className="summary__span">{ values.uwagi }</span>
                    </div>
                </div>
                </div>
                <input className="form__input left__input" type="submit" onClick={this.back} value="Poprzednia" />
                <input className="form__input right__input" type="submit" onClick={this.continue} value="Potwierdzam" />
                </form>
            </div>
        )
    }
}
