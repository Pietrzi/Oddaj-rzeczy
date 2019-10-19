import React from 'react';

class HomeHelp extends React.Component {
    constructor() {
        super();
        this.state = {
            option: 'fundacje',
            fundacje: [
                {name: 'Fundacja "Dbam o Zdrowie"', target: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej', what: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'},
                {name: 'Fundacja "Dla dzieci"', target: 'Cel i misja: Pomoc dzieciom z ubogich rodzin', what: 'ubrania, meble, zabawki'},
                {name: 'Fundacja "Bez domu"', target: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania', what: 'ubrania, jedzenie, ciepłe koce'},
                {name: 'Fundacja "Dbam o Zdrowie"', target: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej', what: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'},
                {name: 'Fundacja "Dla dzieci"', target: 'Cel i misja: Pomoc dzieciom z ubogich rodzin', what: 'ubrania, meble, zabawki'},
                {name: 'Fundacja "Dbam o Zdrowie"', target: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej', what: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'},
                {name: 'Fundacja "Dbam o Zdrowie"', target: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej', what: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'},
                {name: 'Fundacja "Bez domu"', target: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania', what: 'ubrania, jedzenie, ciepłe koce'},
                {name: 'Fundacja "Dbam o Zdrowie"', target: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej', what: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'}
            ],
            organizacje: [
                {name: 'Organizacja Lorem 1', target: 'jasf sdfsiufh  sdkfs skdfj skj', what: 'lijsf, lskfofff, iasi, oiwef'},
                {name: 'Organizacja Lorem 2', target: 'jasf sdfsiufh  sdkfs skdfj skj', what: 'lijsf, lskfofff, iasi, oiwef'},
                {name: 'Organizacja Lorem 3', target: 'jasf sdfsiufh  sdkfs skdfj skj', what: 'lijsf, lskfofff, iasi, oiwef'},
                {name: 'Organizacja Lorem 4', target: 'jasf sdfsiufh  sdkfs skdfj skj', what: 'lijsf, lskfofff, iasi, oiwef'},
                {name: 'Organizacja Lorem 5', target: 'jasf sdfsiufh  sdkfs skdfj skj', what: 'lijsf, lskfofff, iasi, oiwef'},
                {name: 'Organizacja Lorem 6', target: 'jasf sdfsiufh  sdkfs skdfj skj', what: 'lijsf, lskfofff, iasi, oiwef'}
            ],
            lokalne: [
                {name: 'Zbiórka Lorem 1', target: 'jasf sdfsiufh  sdkfs skdfj skj', what: 'lijsf, lskfofff, iasi, oiwef'},
                {name: 'Zbiórka Lorem 2', target: 'jasf sdfsiufh  sdkfs skdfj skj', what: 'lijsf, lskfofff, iasi, oiwef'},
                {name: 'Zbiórka Lorem 3', target: 'jasf sdfsiufh  sdkfs skdfj skj', what: 'lijsf, lskfofff, iasi, oiwef'}
            ]
        }
    }

    render() {
        
        // const option = this.state.option;
        // const body = () => {
        //     this.state.fundacje.map((el, i) => {
        //         return (
        //             <div className="one__box" key={ i }>
        //                 <div className="left__box">
        //                     <p className="box__title">{ el.name }</p>
        //                     <p className="box__left__text">{ el.target }</p>
        //                 </div>
        //                 <div className="right__box">
        //                 <p className="box__right__text">{ el.what }</p>
        //                 </div>
        //             </div>
        //         )
        //     })
        // }
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
                    {/* { body } */}
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
    
}


export default HomeHelp;