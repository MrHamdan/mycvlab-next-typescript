import React from 'react';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';
import Advantage from './Advantage';
import Banner from './Banner';
import Buildcv from './Buildcv';
import Checkoutuser from './Checkoutuser';
import Coverletter from './Coverletter';
import Cvtemplate from './Cvtemplate';
import Resume from './Resume';
import Stats from './Stats';

const Homepage = () => {
    return (
      <div>
        <Navbar />
        <Banner />
        <Buildcv />
        <Cvtemplate />
        <Advantage />
        <Stats />
        <Checkoutuser />
        <Coverletter />
        <Resume />
        <Footer/>
      </div>
    );
};

export default Homepage;