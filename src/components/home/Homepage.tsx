import React from 'react';
import Advantage from './Advantage';
import Banner from './Banner';
import Buildcv from './Buildcv';
import Checkoutuser from './Checkoutuser';
import Cvtemplate from './Cvtemplate';
import Stats from './Stats';

const Homepage = () => {
    return (
        <div>
            <Banner/>
            <Buildcv/>
            <Cvtemplate/>
            <Advantage/>
            <Stats/>
            <Checkoutuser/>
        </div>
    );
};

export default Homepage;