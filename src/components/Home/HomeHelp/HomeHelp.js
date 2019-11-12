import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class HomeHelp extends React.Component {
    constructor() {
        super();
        this.state = {
            option: 'fundacje',
            // fundacje: [
            //     {name: 'Fundacja "Dbam o Zdrowie"', target: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej', what: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'},
            //     {name: 'Fundacja "Dla dzieci"', target: 'Cel i misja: Pomoc dzieciom z ubogich rodzin', what: 'ubrania, meble, zabawki'},
            //     {name: 'Fundacja "Bez domu"', target: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania', what: 'ubrania, jedzenie, ciepłe koce'},
            //     {name: 'Fundacja "Dbam o Zdrowie"', target: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej', what: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'},
            //     {name: 'Fundacja "Dla dzieci"', target: 'Cel i misja: Pomoc dzieciom z ubogich rodzin', what: 'ubrania, meble, zabawki'},
            //     {name: 'Fundacja "Dbam o Zdrowie"', target: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej', what: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'},
            //     {name: 'Fundacja "Dbam o Zdrowie"', target: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej', what: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'},
            //     {name: 'Fundacja "Bez domu"', target: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania', what: 'ubrania, jedzenie, ciepłe koce'},
            //     {name: 'Fundacja "Dbam o Zdrowie"', target: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej', what: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'}
            // ],
            // organizacje: [
            //     {name: 'Organizacja Lorem 1', target: 'jasf sdfsiufh  sdkfs skdfj skj', what: 'lijsf, lskfofff, iasi, oiwef'},
            //     {name: 'Organizacja Lorem 2', target: 'jasf sdfsiufh  sdkfs skdfj skj', what: 'lijsf, lskfofff, iasi, oiwef'},
            //     {name: 'Organizacja Lorem 3', target: 'jasf sdfsiufh  sdkfs skdfj skj', what: 'lijsf, lskfofff, iasi, oiwef'},
            //     {name: 'Organizacja Lorem 4', target: 'jasf sdfsiufh  sdkfs skdfj skj', what: 'lijsf, lskfofff, iasi, oiwef'},
            //     {name: 'Organizacja Lorem 5', target: 'jasf sdfsiufh  sdkfs skdfj skj', what: 'lijsf, lskfofff, iasi, oiwef'},
            //     {name: 'Organizacja Lorem 6', target: 'jasf sdfsiufh  sdkfs skdfj skj', what: 'lijsf, lskfofff, iasi, oiwef'}
            // ],
            // lokalne: [
            //     {name: 'Zbiórka Lorem 1', target: 'jasf sdfsiufh  sdkfs skdfj skj', what: 'lijsf, lskfofff, iasi, oiwef'},
            //     {name: 'Zbiórka Lorem 2', target: 'jasf sdfsiufh  sdkfs skdfj skj', what: 'lijsf, lskfofff, iasi, oiwef'},
            //     {name: 'Zbiórka Lorem 3', target: 'jasf sdfsiufh  sdkfs skdfj skj', what: 'lijsf, lskfofff, iasi, oiwef'}
            // ],
            currentPage: 1,
            itemsPerPage: 3
        }
    }

    handleClick = (event, i) => {
        this.setState({
            currentPage: i
        })
    }

    changeFun = () => {
        this.setState({
            option: 'fundacje'
        })
    }

    changeOrg = () => {
        this.setState({
            option: 'organizacje'
        })
    }

    changeLoc = () => {
        this.setState({
            option: 'lokalne'
        })
    }

    render() {

        const { content } = this.props;
        const { currentPage, itemsPerPage } = this.state;

        const indexOfLast = currentPage*itemsPerPage;
        const indexOfFirst = indexOfLast - itemsPerPage;
        let chosenOption;
        switch (this.state.option) {
            case 'fundacje':
                chosenOption = content.fundacje;
                break;
            case 'organizacje':
                chosenOption = content.organizacje;
                break;
            case 'lokalne':
                chosenOption = content.lokalne;
                break;
            default:
                return null;
        } 
        const currentItems = chosenOption.slice(indexOfFirst, indexOfLast);

        const items = currentItems.map((item, i) => {
            return (
                <div className="one__box" key={i}>
                    <div className="left__box">
                        <p className="box__title">{item.name}</p>
                        <p className="box__left__text">{item.target}</p>
                    </div>
                    <div className="right__box">
                    <p className="box__right__text">{item.what}</p>
                    </div>
                </div>
            )
        })

        const pageNumbers = [];

        for (let i = 1; i <= chosenOption.length/itemsPerPage; i++) {
            const el = <li key={i} onClick={e=>this.handleClick(e,i)}>{i}</li>
            pageNumbers.push(el);
        }
    
        return (
            <div className="homehelp__wrapper" id="help">
                <p className="help__title">Komu pomagamy?</p>
                <div className="help__svg"></div>
                <ul className="ul__titles">
                    <NavLink to="/" className="option" onClick={this.changeFun}>Fundacjom</NavLink>
                    <NavLink to="/" className="option" onClick={this.changeOrg}>Organizacjom<br></br>pozarządowym</NavLink>
                    <NavLink to="/" className="option" onClick={this.changeLoc}>Lokalnym<br></br>zbiórkom</NavLink>
                </ul>
                <p className="help__text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                
                
                <div className="help__box">
                    {items}
                </div>
                <ul className="ul__numbers">
                    {pageNumbers}
                </ul>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        content: state.content.content
    }
}


export default connect(mapStateToProps)(HomeHelp);