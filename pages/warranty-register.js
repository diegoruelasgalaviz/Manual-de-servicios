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
                pageTitle="Warranty registration" 
                homePageUrl="/" 
                homePageText="Warranty Register" 
                activePageText="Request a Warranty Registration" 
                imgClass="bg-19" 
            /> 
            <ContactForm />
            <Footer />
        </React.Fragment>
    );
}

export default Contact;