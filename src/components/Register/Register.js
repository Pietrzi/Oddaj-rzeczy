import React from 'react';
import { connect } from  'react-redux';
import { signIn } from '../../store/actions/authActions';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password1: '',
            password2: '',
            wrongEmail: '',
            wrongPass1: '',
            wrongPass2: '',
            verification: false
        }
    }

    handleChange = e => {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        });
        e.target.value = ""
    }

    handleSubmit = e => {
        e.preventDefault();
 
        this.validate();
        const isValid = this.validate();
        if(isValid) {
            this.setState({
                wrongEmail: '',
                wrongPass1: '',
                wrongPass2: ''
            })
        }
    }

    validate = () => {

            const patterns = {
                email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
                password: /^.{6,}$/
        };

        let wrongEmail = "";
        let wrongPass1 = "";
        let wrongPass2 = ""

        const { email, password1, password2 } = this.state;

        if (!patterns.email.test(email)) {
            wrongEmail = "Podany email jest nieprawidłowy!";
            this.setState({ wrongEmail })
            return false;
        }

        if (!patterns.password.test(password1)) {
            wrongPass1 = "Hasło musi mieć conajmniej 6 znaków!";
            this.setState({ wrongPass1 })
            return false;
        }

        if (password2 !== password1) {
            wrongPass2 = "Hasła muszą być takie same";
            this.setState({ wrongPass2 })
            return false;
        }

        return true;
    }

    render() {
        return (
            <div className="register__content">
                <p className="register__title">Założ konto</p>
                <div className="svg"></div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form__el">
                        <p className="labels">Email</p>
                        <input onChange={this.handleChange} type="text" name="email" value={this.state.email}/>
                        <p className="error">{this.state.wrongEmail}</p>
                    </div>
                    <div className="form__el">
                        <p className="labels">Hasło</p>
                        <input onChange={this.handleChange} type="password" name="password1" value={this.state.password1}/>
                        <p className="error">{this.state.wrongPass1}</p>
                    </div >
                    <div className="form__el">
                        <p className="labels">Powtórz hasło</p>
                        <input onChange={this.handleChange} type="password" name="password2" value={this.state.password2}/>
                        <p className="error">{this.state.wrongPass2}</p>
                    </div >
                    <button className="button login">Zaloguj się</button>
                    <input type="submit" className="button signin" value="Załóż konto"/>
                </form>
            </div>
        )
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: creds => dispatch(signIn(creds))
    }
}

export default connect(null, mapDispatchToProps)(Register);

// onChange={this.handleChange} type="text" name="name" placeholder="Krzysztof" value={this.state.name}
// onChange={this.handleChange} type="text" name="email" placeholder="abc@def.pl" value={this.state.email}
