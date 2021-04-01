import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AboutUsContent from '../components/AboutUs/AboutUsContent';
import AboutContentTwo from '../components/AboutUs/AboutContentTwo';
import PreventVirus from '../components/AboutUs/PreventVirus';
import VirtualDisinfectionServices from '../components/Common/VirtualDisinfectionServices';
import Footer from '../components/_App/Footer';

const AboutUs = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="About" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="About" 
                imgClass="bg-1" 
            /> 
            <AboutUsContent />
            <AboutContentTwo />
            <PreventVirus />
            <VirtualDisinfectionServices />
            <Footer />
        </React.Fragment>
    );
}

export default AboutUs;