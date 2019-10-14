import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav>
            <ul className="small__nav">
                <li><NavLink to='/logowanie' className="small__nav__link">Zalogój</NavLink></li>
                <li><NavLink to='/rejestracja' className="small__nav__link">Załóż konto</NavLink></li>
            </ul>
            <ul className="big__nav">
            




<li><Link
    activeClass="active"
    to="header"
    spy={true}
    smooth={true}
    offset={0}
    duration= {500}
>Start</Link></li>
<li><Link
    activeClass="active"
    to="three"
    spy={true}
    smooth={true}
    offset={0}
    duration= {500}
>O co chodzi</Link></li>
<li><Link
    activeClass="active"
    to="about"
    spy={true}
    smooth={true}
    offset={0}
    duration= {500}
>O nas</Link></li>
<li><Link
    activeClass="active"
    to="help"
    spy={true}
    smooth={true}
    offset={0}
    duration= {500}
>Fundacja i organizacje</Link></li>
<li><Link
    activeClass="active"
    to="contact"
    spy={true}
    smooth={true}
    offset={0}
    duration= {500}
>Kontakt</Link></li>
            </ul>
        </nav>
    )
}

export default withRouter(Navbar);