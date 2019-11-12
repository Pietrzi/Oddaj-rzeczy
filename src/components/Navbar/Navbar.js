import React from 'react';
import { Link } from "react-scroll";
import SignOutLinks from './SignOutLinks';
import SignedInLinks from './SignedInLinks';
import { connect } from 'react-redux';

const Navbar = () => {
    return (
        <nav>
            <SignOutLinks />
            {/* <SignedInLinks /> */}
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

const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}

export default connect(mapStateToProps)(Navbar);