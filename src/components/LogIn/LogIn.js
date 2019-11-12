import React from 'react';
import { connect } from  'react-redux';
import { signIn } from '../../store/actions/authActions';

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            wrongEmail: '',
            wrongPass: '',
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
                wrongPass: ''
            })
            this.props.signIn(this.state);
        }
    }

    validate = () => {

            const patterns = {
                email: /^([a-z\d\.-]+)@([a-z\d-]+).([a-z]{2,8})(\.[a-z]{2,8})?$/,
                password: /^.{6,}$/
        };

        let wrongEmail = "";
        let wrongPass = "";

        const { email, password } = this.state;

        if (!patterns.email.test(email)) {
            wrongEmail = "Podany email jest nieprawidłowy!";
            this.setState({ wrongEmail })
            return false;
        }

        if (!patterns.password.test(password)) {
            wrongPass = "Hasło musi mieć conajmniej 6 znaków!";
            this.setState({ wrongPass })
            return false;
        }

        return true;
    }

    render() {
        return (
            <div className="login__content">
                <p className="login__title">Zaloguj się</p>
                <div className="svg"></div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form__el">
                        <p className="labels">Email</p>
                        <input onChange={this.handleChange} type="text" name="email" value={this.state.email}/>
                        <p className="error">{this.state.wrongEmail}</p>
                    </div>
                    <div className="form__el">
                        <p className="labels">Hasło</p>
                        <input onChange={this.handleChange} type="password" name="password" value={this.state.password}/>
                        <p className="error">{this.state.wrongPass}</p>
                    </div >
                    <button className="button login ">Załóż konto</button>
                    <input type="submit" className="button signin" value="Zalogój się"/>
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

export default connect(null, mapDispatchToProps)(LogIn);
