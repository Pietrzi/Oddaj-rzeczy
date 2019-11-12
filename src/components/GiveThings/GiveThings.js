import React from 'react';
import HomeContact from '../Home/HomeContact/HomeContact';
import GiveForm from './GiveForm';

export default function GiveThings() {
    return (
        <div className="givethings__wrapper">
        <div className="head__wrapper" id="header">
            <div className="head__picture"></div>
            <div className="head__content">
                <div className="head__titles">
                    <h2 className="first">Oddaj rzeczy, których już nie chcesz</h2>
                    <h2 className="second">potrzebującym</h2>
                </div>
                <div className="svg"></div>
                <h2 className="third">Wystarczą 4 proste kroki:</h2>
                <div className="steps__wrapper">
                    <div className="steps">
                        <p className="step__number">1</p>
                        <p className="step__text">Wybierz rzeczy</p>
                        <div className="border"></div>
                    </div>
                    <div className="steps">
                        <p className="step__number">2</p>
                        <p className="step__text">Spakuj je w worki</p>
                        <div className="border"></div>
                    </div>
                    <div className="steps">
                        <p className="step__number">3</p>
                        <p className="step__text">Wybierz fundację</p>
                        <div className="border"></div>
                    </div>
                    <div className="steps">
                        <p className="step__number">4</p>
                        <p className="step__text">Zamów kuriera</p>
                        <div className="border"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="yellow__box">
            <p className="p1">Ważne!</p>
            <p className="p2">Uzupełjnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać</p>
        </div>
        <GiveForm />
        <HomeContact />
        </div>
    )
}
