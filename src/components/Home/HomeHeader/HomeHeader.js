import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const HomeHeader = () => {
    return (
        <div className="homeheader__wrapper">
            <div className="header__picture"></div>
            <div className="header__content">
                <div className="header__titles">
                    <h2>Zacznij pomagać!</h2>
                    <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                </div>
                <div className="svg"></div>
                <div className="buttons__box">
                    <Link to='/oddaj-rzeczy' className='buttons'>oddaj rzeczy</Link>
                    <Link to='/oddaj-rzeczy' className='buttons'>zorganizuj zbiórkę</Link>
                </div>
            </div>
        </div>
    )
}

export default withRouter(HomeHeader);