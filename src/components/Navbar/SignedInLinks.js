import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class SignedIntLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            who: "abc@op.pl"
        }
    }
    render() {
        return (   
            <ul className="small__nav">
                <li>Cześć { this.state.who }</li>
                <li><NavLink to='/rejestracja' className="small__nav__link">Oddaj rzeczy</NavLink></li>
                <li>Wylogój</li>
            </ul>
        )
    }
}
