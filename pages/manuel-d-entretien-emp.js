import React from 'react';
import Navbar from '../components/_App/Navbar';
import Footer from '../components/_App/Footer';
import Faqfremp from '../components/FAQ/Faqfremp';
import TroubloFrenShot from '../components/FAQ/TroubloFrenShot';
import PrevFrenCheck from '../components/FAQ/PrevFrenCheck';
import FaqFrenContact from '../components/FAQ/FaqFrenContact';


const Faq = () => {
    return (
        <React.Fragment>
            <Navbar />
    
            <Faqfremp/>

            <TroubloFrenShot/>
            <PrevFrenCheck/>
            <FaqFrenContact />
            
            <Footer />
        </React.Fragment>
    );
}

export default Faq;