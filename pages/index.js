import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/_App/Navbar';

import HeroSlider from '../components/DefaultHome/HeroSlider';
import FastResponse from '../components/HomeTwo/FastResponse';
import AboutUs from '../components/HomeTwo/AboutUs';
import Services from '../components/HomeTwo/Services';
import PreventVirus from '../components/HomeTwo/PreventVirus';
import HowItWorks from '../components/Common/HowItWorks';
import ProductCard from '../components/Common/ProductCard';
import VirtualDisinfectionServices from '../components/Common/VirtualDisinfectionServices';

import MakeAnAppointment from '../components/Common/MakeAnAppointment';
import LatestNews from '../components/Common/LatestNews';
import Footer from '../components/_App/Footer';

const Index2 = () => {
    const products = useSelector((state) => state.products)
    return (
        <React.Fragment>
            <Navbar />
            <HeroSlider />
            <FastResponse />
            <AboutUs />
            <Services />
            <PreventVirus />
            <HowItWorks />
          
            <VirtualDisinfectionServices />
            

            <Footer />
        </React.Fragment>
    );
}

export default Index2;