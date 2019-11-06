import React from 'react';
import { Link } from 'react-router-dom';

export default function LogOut() {
    return (
        <div className="logout__content">
            <p>Wylogowanie nastąpiło pomyślnie!</p>
            <div className="svg"></div>
            <Link to="/" className="logout__button">Strona główna</Link>
        </div>
    )
}
