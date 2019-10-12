import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul className="small__nav">
                <li><Link to='/logowanie' className="small__nav__link">Zalogój</Link></li>
                <li><Link to='/rejestracja' className="small__nav__link">Załóż konto</Link></li>
            </ul>
            <ul className="big__nav">
                <li><a href="#">Start</a></li>
                <li><a href="#">O co chodzi?</a></li>
                <li><a href="#">O nas</a></li>
                <li><a href="#">Fundacje i organizacje</a></li>
                <li><a href="#">Kontakt</a></li>
            </ul>
        </nav>
    )
}

export default withRouter(Navbar);