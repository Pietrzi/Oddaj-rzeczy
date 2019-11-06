import React from 'react'

class Register extends React.Component {

    render() {
        return (
            <div className="register__content">
                <p className="register__title">Założ konto</p>
                <div className="svg"></div>
                <form>
                    <div className="form__el">
                        <p className="labels">Email</p>
                        <input/>
                        {/* <p className="error">{this.state.nameError}</p> */}
                    </div>
                    <div className="form__el">
                        <p className="labels">Hasło</p>
                        <input/>
                        {/* <p className="error">{this.state.emailError}</p> */}
                    </div >
                    <div className="form__el">
                        <p className="labels">Powtórz hasło</p>
                        <input/>
                        {/* <p className="error">{this.state.emailError}</p> */}
                    </div >
                </form>
                <button className="login">Zaloguj się</button>
                <button className="signin">Załóż konto</button>
            </div>
        )
    }
    
}

export default Register;

// onChange={this.handleChange} type="text" name="name" placeholder="Krzysztof" value={this.state.name}
// onChange={this.handleChange} type="text" name="email" placeholder="abc@def.pl" value={this.state.email}
