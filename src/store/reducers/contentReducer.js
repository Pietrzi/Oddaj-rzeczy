const initState = {
    content: {
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
};

const contentReducer = (state = initState, action) => {
    return state;
}

export default contentReducer;