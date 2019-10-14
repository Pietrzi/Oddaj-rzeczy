import React from 'react'

export default function HomeFourSteps() {
    return (
        <div className="homefoursteps__wrapper">
            <p className="homefoursteps__title">Wystarczą 4 proste kroki</p>
            <div className="homefoursteps__svg"></div>
            <div className="homefoursteps__columns__wrapper">
                <div className="homefoursteps__column">
                    <div className="column__svg1"></div>
                    <p className="column__title">Wybierz rzeczy</p>
                    <hr></hr>
                    <div className="column__text">ubrania, zabawki, sprzęt i inne</div>
                </div>
                <div className="homefoursteps__column">
                    <div className="column__svg2"></div>
                    <p className="column__title">Spakuj je</p>
                    <hr></hr>
                    <div className="column__text">skorzystaj z worków na śmieci</div>
                </div>
                <div className="homefoursteps__column">
                    <div className="column__svg3"></div>
                    <p className="column__title">Zdecyduj komu<br></br>chcesz pomóc</p>
                    <hr></hr>
                    <div className="column__text">wybierz zaufane miejsce</div>
                </div>
                <div className="homefoursteps__column">
                    <div className="column__svg4"></div>
                    <p className="column__title">Zamów kuriera</p>
                    <hr></hr>
                    <div className="column__text">kurier przyjedzie w dogodnym momencie</div>
                </div>
            </div>
        </div>
    )
}
