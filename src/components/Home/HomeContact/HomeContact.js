import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

class HomeContact extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         option: 'fundacje',
    //         fundacje: [
    //             {name: 'Fundacja "Dbam o Zdrowie"', target: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej', what: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'},
    //             {name: 'Fundacja "Dla dzieci"', target: 'Cel i misja: Pomoc dzieciom z ubogich rodzin', what: 'ubrania, meble, zabawki'},
    //             {name: 'Fundacja "Bez domu"', target: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania', what: 'ubrania, jedzenie, ciepłe koce'},
    //             {name: 'Fundacja "Dbam o Zdrowie"', target: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej', what: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'},
    //             {name: 'Fundacja "Dla dzieci"', target: 'Cel i misja: Pomoc dzieciom z ubogich rodzin', what: 'ubrania, meble, zabawki'},
    //             {name: 'Fundacja "Dbam o Zdrowie"', target: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej', what: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'},
    //             {name: 'Fundacja "Dbam o Zdrowie"', target: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej', what: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'},
    //             {name: 'Fundacja "Bez domu"', target: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania', what: 'ubrania, jedzenie, ciepłe koce'},
    //             {name: 'Fundacja "Dbam o Zdrowie"', target: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej', what: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'}
    //         ],
    //         organizacje: [
    //             {name: 'Organizacja Lorem 1', target: 'jasf sdfsiufh  sdkfs skdfj skj', what: 'lijsf, lskfofff, iasi, oiwef'},
    //             {name: 'Organizacja Lorem 2', target: 'jasf sdfsiufh  sdkfs skdfj skj', what: 'lijsf, lskfofff, iasi, oiwef'},
    //             {name: 'Organizacja Lorem 3', target: 'jasf sdfsiufh  sdkfs skdfj skj', what: 'lijsf, lskfofff, iasi, oiwef'},
    //             {name: 'Organizacja Lorem 4', target: 'jasf sdfsiufh  sdkfs skdfj skj', what: 'lijsf, lskfofff, iasi, oiwef'},
    //             {name: 'Organizacja Lorem 5', target: 'jasf sdfsiufh  sdkfs skdfj skj', what: 'lijsf, lskfofff, iasi, oiwef'},
    //             {name: 'Organizacja Lorem 6', target: 'jasf sdfsiufh  sdkfs skdfj skj', what: 'lijsf, lskfofff, iasi, oiwef'}
    //         ],
    //         lokalne: [
    //             {name: 'Zbiórka Lorem 1', target: 'jasf sdfsiufh  sdkfs skdfj skj', what: 'lijsf, lskfofff, iasi, oiwef'},
    //             {name: 'Zbiórka Lorem 2', target: 'jasf sdfsiufh  sdkfs skdfj skj', what: 'lijsf, lskfofff, iasi, oiwef'},
    //             {name: 'Zbiórka Lorem 3', target: 'jasf sdfsiufh  sdkfs skdfj skj', what: 'lijsf, lskfofff, iasi, oiwef'}
    //         ]
    //     }
    // }

    render() {
        return (
            <div className="contact__wrapper" id="contact">
                <div className="contact__layer">
                    <div className="form__wrapper">
                        <p className="form__title">Skontaktuj się z nami</p>
                        <div className="form__svg"></div>
                        <form>
                            <div className="form__el">
                                <p>Wpisz swoje imię</p>
                                <input type="text" name="name" placeholder="Krzysztof"/>
                            </div>
                            <div className="form__el">
                                <p>Wpisz swój email</p>
                                <input type="text" name="email" placeholder="abc@def.pl"/>
                            </div >
                            <div className="form__textarea">
                                <p>Wpisz swoją wiadomość</p>
                                <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
                            </div>
                            <input className="form__button" type="submit" value="Wyślij"/>
                        </form>
                    </div>
                    <div className="bottom__contact">
                        <p>Copyright by Coders Lab</p>
                        <div className="bottom__icons">
                            <i className="fa fa-facebook-square"></i>
                            <i className="fa fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}


export default HomeContact;