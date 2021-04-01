import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FaqContent from '../components/FAQ/FaqContent';
import Faqemp from '../components/FAQ/Faqemp';
import TroubleshootingEmp from '../components/FAQ/TroubleshootingEmp';
import FaqContactForm from '../components/FAQ/FaqContactForm';
import Footer from '../components/_App/Footer';
import PreventCheck from '../components/FAQ/PreventCheck';

const Faq = () => {
    return (
        <React.Fragment>
            <Navbar />
    
            <Faqemp />

            <TroubleshootingEmp />
            <PreventCheck/>
            <FaqContactForm />
            
            <Footer />
        </React.Fragment>
    );
}

export default Faq;