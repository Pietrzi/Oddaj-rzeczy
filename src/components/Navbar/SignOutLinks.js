import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class SignOutLinks extends Component {
    render() {
        return (   
            <ul className="small__nav">
                <li><NavLink to='/logowanie' className="small__nav__link">Zalogój</NavLink></li>
                <li><NavLink to='/rejestracja' className="small__nav__link">Załóż konto</NavLink></li>
            </ul>
        )
    }
}
