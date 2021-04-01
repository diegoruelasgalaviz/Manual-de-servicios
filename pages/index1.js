import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/_App/Navbar';
import HeroSlider from '../components/DefaultHome/HeroSlider';
import Features from '../components/DefaultHome/Features';
import AboutUs from '../components/DefaultHome/AboutUs';
import Services from '../components/DefaultHome/Services';
import PreventVirus from '../components/DefaultHome/PreventVirus';
import HowItWorks from '../components/Common/HowItWorks';
import ProjectSlider from '../components/Projects/ProjectSlider';
import ProductCard from '../components/Common/ProductCard';
import MakeAnAppointment from '../components/Common/MakeAnAppointment';
import LatestNews from '../components/Common/LatestNews';
import Footer from '../components/_App/Footer';
 
const Index = () => {
    const products = useSelector((state) => state.products)
    return (
        <React.Fragment>
            <Navbar />
            <HeroSlider />
            <Features />
            <AboutUs />
            <Services />
            <PreventVirus />
            <HowItWorks />
            <ProjectSlider />
            <div className="pb-70">
                <ProductCard products={products.slice(0, 3)} />
            </div>
            <MakeAnAppointment />
            <LatestNews />
            <Footer />
        </React.Fragment>
    );
}

export default Index;