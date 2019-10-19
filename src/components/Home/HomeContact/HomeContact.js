import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

export default function HomeContact() {
    return (
        <div className="contact__wrapper" id="contact">
            <div className="contact__layer">
                <div className="form__wrapper">
                    <p className="form__title">Skontaktuj się z nami</p>
                    <div className="form__svg"></div>
                    <form>
                        <div className="form__el">
                            <p>Wpisz swoje imię</p>
                            <input type="text" name="name" placeholder="Krzysztof"/>
                        </div>
                        <div className="form__el">
                            <p>Wpisz swój email</p>
                            <input type="text" name="email" placeholder="abc@def.pl"/>
                        </div >
                        <div className="form__textarea">
                            <p>Wpisz swoją wiadomość</p>
                            <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
                        </div>
                        <input className="form__button" type="submit" value="Wyślij"/>
                    </form>
                </div>
                <div className="bottom__contact">
                    <p>Copyright by Coders Lab</p>
                    <div className="bottom__icons">
                        <i className="fa fa-facebook-square"></i>
                        <i className="fa fa-instagram"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
