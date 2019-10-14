import React from 'react';
import HomeHeader from './HomeHeader/HomeHeader';
import HomeThreeColumns from './HomeThreeColumns/HomeThreeColumns';
import HomeFourSteps from './HomeFourSteps/HomeFourSteps';
import HomeHelp from './HomeHelp/HomeHelp';
import HomeAbout from './HomeAbout/HomeAbout';
import HomeContact from './HomeContact/HomeContact';

export default function home() {
    return (
        <div>
            <HomeHeader />
            <HomeThreeColumns />
            <HomeFourSteps />
            <HomeAbout />
            <HomeHelp />
            <HomeContact />
        </div>
    )
}
