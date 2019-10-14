import React from 'react'

export default function HomeHelp() {
    return (
        <div className="homehelp__wrapper" id="help">
            <p className="help__title">Komu pomagamy?</p>
            <div className="help__svg"></div>
            <ul className="ul__titles">
                <li>Fundacjom</li>
                <li>Organizacjom<br></br>pozarządowym</li>
                <li>Lokalnym<br></br>zbiórkom</li>
            </ul>
            <p className="help__text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            <div className="help__box">
                <div className="one__box">
                    <div className="left__box">
                        <p className="box__title">Fundacja "Dbam o Zdrowie"</p>
                        <p className="box__left__text">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej</p>
                    </div>
                    <div className="right__box">
                    <p className="box__right__text">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                    </div>
                </div>
                <div className="one__box">
                    <div className="left__box">
                        <p className="box__title">Fundacja "Dla dzieci"</p>
                        <p className="box__left__text">Cel i miasja: Pomoc dzieciom z ubogich rodzin</p>
                    </div>
                    <div className="right__box">
                    <p className="box__right__text">ubrania, meble, zabawki</p>
                    </div>
                </div>
                <div className="one__box">
                    <div className="left__box">
                        <p className="box__title">Fundacja "Bez domu"</p>
                        <p className="box__left__text">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania</p>
                    </div>
                    <div className="right__box">
                    <p className="box__right__text">ubrania, jedzenie, ciepłe koce</p>
                    </div>
                </div>
            </div>
            <ul className="ul__numbers">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}
