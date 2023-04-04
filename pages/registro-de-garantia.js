import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactForm from '../components/RegistroGarantia/ContactForm';
import Footer from '../components/_App/Footer';

const Contact = () => {
    return (
        <React.Fragment>
            <Navbar />
           
            <ContactForm />
            <Footer />
        </React.Fragment>
    );
}

export default Contact;