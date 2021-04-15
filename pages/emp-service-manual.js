import React from 'react';
import Navbar from '../components/_App/Navbar';
import FaqContactForm from '../components/FAQ/FaqContactForm';
import Footer from '../components/_App/Footer';
import TroubleShootEngs from '../components/FAQ/TroubleShootEng';
import FaqEmpEnglish from '../components/FAQ/FaqEmpEnglish';
import PreventEng from '../components/FAQ/PreventEng';
import FaqEngContact from '../components/FAQ/FaqEngContact';

const Faq = () => {
    return (
        <React.Fragment>
            <Navbar />
    
            <FaqEmpEnglish />

            <TroubleShootEngs />
            <PreventEng/>
            <FaqEngContact/>
            
            <Footer />
        </React.Fragment>
    );
}

export default Faq;