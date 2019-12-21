import React, { Component } from 'react'

export default class Step3 extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         active: false,
    //     };
    // }
    // toggleClass(e) {
    //     e.target.classList.add('clicked__box');
    //     // this.setState({ active: !this.state.active });
    //     console.log(e.target)
    // };
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };
    render() {
        const { values, handleInputChange, handleOptionChange } = this.props;
        // let classDzieci = values.dzieci ? "clicked__box" : null;
        // let dzieci = values.dzieci ? true : false;
        return (
            <div>
                <h3>Krok 3/4</h3>
                <form className="give__form">
                    <p className="form__steps">Lokalizacja:</p>
                    <div className="select__box">
                        <select name="lokalizacja" id="pet-select" value={values.lokalizacja} onChange={handleInputChange}>
                            <option value="">-wybierz-</option>
                            <option value="Poznań">Poznań</option>
                            <option value="Warszawa">Warszawa</option>
                            <option value="Kraków">Kraków</option>
                            <option value="Wrocław">Wrocław</option>
                            <option value="Katowice">Katowice</option>
                        </select>
                    </div>
                    {/* style={{padding: "10px", margin: "10px", border: "1px solid black"}} */}
                    <p className="whom__paragraph">Komu chcesz pomóc</p>
                    <div className="span__div">
                        <span id="dzieci" onClick={handleOptionChange}>dzieciom</span>
                        <span id="samotneMatki" onClick={handleOptionChange}>samotnym matkom</span>
                        <span id="bezdomni" onClick={handleOptionChange}>bezdomnym</span>
                    </div>
                    <div className="span__div">
                        <span id="niepelnosprawni" onClick={handleOptionChange}>niepełnosprawnym</span>
                        <span id="starsi" onClick={handleOptionChange}>osobom starszym</span>
                    </div>
                    <p className="which__org__paragraph">Wpisz nazwę konkretnej organizacji(opcjonalnie)</p>
                    <div className="org__input__box">
                        <input className="org__input" type="text" name="organizacja" value={values.organizacja} onChange={handleInputChange}></input>
                    </div>
                    <input className="form__input left__input" type="submit" onClick={this.back} value="Poprzednia" />
                    <input className="form__input right__input" type="submit" onClick={this.continue} value="Dalej" />
                </form>
            </div>
        )
    }
}
