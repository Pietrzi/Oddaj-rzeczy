import React from 'react'

class LogIn extends React.Component {

    render() {
        return (
            <div className="login__content">
                <p className="login__title">Założ konto</p>
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
                </form>
                <button className="login">Załóż konto</button>
                <button className="signin">Zaloguj się</button>
            </div>
        )
    }
    
}

export default LogIn;