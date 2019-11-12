import React, { Component } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Summary from './Summary';
import Thanks from './Thanks';

export default class GiveForm extends Component {
    state = {
        step: 1,
        ubraniaDobre: false,
        ubraniaZle: false,
        zabawki: false,
        ksiazki: false,
        inne: false,
        liczbaWorkow: 0,
        lokalizacja: '',
        komu: '',
        organizacja: '',
        ulica: '',
        miasto: '',
        kodPocztowy: '',
        nrTel: '',
        data: '',
        godz: '',
        uwagi: ''

    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
          step: step + 1
        });
      };

      prevStep = () => {
        const { step } = this.state;
        this.setState({
          step: step - 1
        });
      };

      handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      };

    render() {
        const { step } = this.state;
        const { ubraniaDobre, ubraniaZle, zabawki, ksiazki, inne, liczbaWorkow, lokalizacja, komu, organizacja, ulica, miasto, kodPocztowy, nrTel, data, godz, uwagi } = this.state;
        const values = { ubraniaDobre, ubraniaZle, zabawki, ksiazki, inne, liczbaWorkow, lokalizacja, komu, organizacja, ulica, miasto, kodPocztowy, nrTel, data, godz, uwagi }
        
        switch (step) {
            case 1:
                    return (
                        <div className="giveform__container">
                            <Step1 
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                            />
                        </div>
                    );
                    case 2:
                            return (
                                <div className="giveform__container">
                                    <Step2 
                                    nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    handleChange={this.handleChange}
                                    values={values}
                                    />
                                </div>
                            );
                            case 3:
                                    return (
                                        <div className="giveform__container">
                                            <Step3 
                                            nextStep={this.nextStep}
                                            prevStep={this.prevStep}
                                            handleChange={this.handleChange}
                                            values={values}
                                            />
                                        </div>
                                    );
                                    case 4:
                                            return (
                                                <div className="giveform__container">
                                                    <Step4 
                                                    nextStep={this.nextStep}
                                                    prevStep={this.prevStep}
                                                    handleChange={this.handleChange}
                                                    values={values}
                                                    />
                                                </div>
                                            );
                                            case 5:
                                                    return (
                                                        <div className="giveform__container">
                                                            <Summary 
                                                            nextStep={this.nextStep}
                                                            prevStep={this.prevStep}
                                                            values={values}
                                                            />
                                                        </div>
                                                    );
                                                    case 6:
                                                            return (
                                                                <div className="giveform__container">
                                                                    <Thanks />
                                                                </div>
                                                            );
                                                            default: return null;
        }
 
    }
}
