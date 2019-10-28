import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

class HomeContact extends React.Component {
    constructor() {
        super();
        this.state = {
           verification: false,
           name: "",
           email: "",
           text: "",
           nameError: "",
           emailError: "",
           textError: "",
           succesText1: "",
           succesText2: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        });
        e.target.value = ""
    }

    handleChangeText = e => {
        this.setState({
            text: e.target.value
        })
    }

    validate = () => {

    //     const patterns = {
    //         username: /^[a-z\d]{3,12}$/i,
    //         email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    //         text: /^.{120,}$/
    // };

    //     let nameError = "";
    //     let emailError = "";
    //     let textError = ""

    //     const { name, email, text } = this.state;

    //     if (!name.test(patterns.username) === false) {
    //         nameError = "Podane imię jest nieprawidłowe!";
    //         this.setState({ nameError })
    //         return false;
    //     }

    //     if (!email.test(patterns.email)) {
    //         emailError = "Podany email jest nieprawidłowy!";
    //         this.setState({ emailError })
    //         return false;
    //     }

    //     if (!text.test(patterns.text)) {
    //         textError = "Wiadomość musi mieć conajmniej 120 znaków!";
    //         this.setState({ textError })
    //         return false;
    //     }

        return true;
    }

    handleSubmit = e => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.setState({
                succesText1: "Wiadomość została wysłana!",
                succesText2: "Wkrótce się skontaktujemy.",
                verification: true
            })
        }
        if (this.state.verification) {
            console.log(this.state);
        }
    }

    render() {
        return (
            <div className="contact__wrapper" id="contact">
                <div className="contact__layer">
                    <div className="form__wrapper">
                        <p className="form__title">Skontaktuj się z nami</p>
                        <div className="form__svg"></div>
                        <div className="succes">
                            <p>{this.state.succesText1}</p>
                            <p>{this.state.succesText2}</p>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form__el">
                                <p className="labels">Wpisz swoje imię</p>
                                <input onChange={this.handleChange} type="text" name="name" placeholder="Krzysztof" value={this.state.name}/>
                                <p className="error">{this.state.nameError}</p>
                            </div>
                            <div className="form__el">
                                <p className="labels">Wpisz swój email</p>
                                <input onChange={this.handleChange} type="text" name="email" placeholder="abc@def.pl" value={this.state.email}/>
                                <p className="error">{this.state.emailError}</p>
                            </div >
                            <div className="form__textarea">
                                <p className="labels">Wpisz swoją wiadomość</p>
                                <textarea onChange={this.handleChangeText} value={this.state.text} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
                                <p className="error">{this.state.textError}</p>
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
    
}


export default HomeContact;

        //    nameError: "Podane imię jest nieprawidłowe!",
        //    emailError: "Podany email jest nieprawidłowy!",
        //    textError: "Wiadomość musi mieć conajmniej 120 znaków!",
        //    succesText1: "Wiadomość została wysłana!",
        //    succesText2: "Wkrótce się skontaktujemy."    