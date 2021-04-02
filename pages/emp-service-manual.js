import React from 'react';
import Navbar from '../components/_App/Navbar';
import FaqContactForm from '../components/FAQ/FaqContactForm';
import Footer from '../components/_App/Footer';
import TroubleShootEngs from '../components/FAQ/TroubleShootEng';
import FaqEmpEnglish from '../components/FAQ/FaqEmpEnglish';
import PreventEng from '../components/FAQ/PreventEng';

const Faq = () => {
    return (
        <React.Fragment>
            <Navbar />
    
            <FaqEmpEnglish />

            <TroubleShootEngs />
            <PreventEng/>
            <FaqContactForm />
            
            <Footer />
        </React.Fragment>
    );
}

export default Faq;