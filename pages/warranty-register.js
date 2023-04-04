import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactForm from '../components/WarrantyRegister/ContactForm';
import Footer from '../components/_App/Footer';

const Contact = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Contact" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Contact" 
                imgClass="bg-19" 
            /> 
            <ContactForm />
            <Footer />
        </React.Fragment>
    );
}

export default Contact;