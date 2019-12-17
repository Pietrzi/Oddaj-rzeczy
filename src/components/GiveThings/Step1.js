import React, { Component } from 'react'

export default class Step1 extends Component {
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
                <h3>Krok 1/4</h3>
                <form>
                    <p>Zaznacz co chcesz oddać:</p>
                    <div>
                        <input type="checkbox" id="ubraniaDobre" name="ubraniaDobre"></input>
                        <label for="ubraniaDobre">ubrania, które nadają się do ponownego użycia</label>
                    </div>
                    <div>
                        <input type="checkbox" id="ubraniaZle" name="ubraniaZle"></input>
                        <label for="ubraniaZle">ubrania, do wyrzucenia</label>
                    </div>
                    <div>
                        <input type="checkbox" id="zabawki" name="zabawki"></input>
                        <label for="zabawki">zabawki</label>
                    </div>
                    <div>
                        <input type="checkbox" id="ksiazki" name="ksiazki"></input>
                        <label for="ksiazki">książki</label>
                    </div>
                    <div>
                        <input type="checkbox" id="inne" name="inne"></input>
                        <label for="inne">inne</label>
                    </div>
                    <button onClick={this.continue}>Dalej</button>
                </form> 
            </div>
        )
    }
}
