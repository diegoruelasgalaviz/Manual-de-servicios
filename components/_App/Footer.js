import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
 
    return (
        <React.Fragment>
            <footer className="footer-top-area f-bg pt-100 pb-70 jarallax">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <div className="foot-logo">
                                    <Link href="/">
                                        <a><img src="/img/logo.png" alt="Image" /></a>
                                    </Link>
                                </div>

                                <p>Lorem ipsum dolor, sit amet earum consectetur adipisicing elit. Cupiditate rerum quidem fugiat sapiente! Iusto quae perspiciatis, repudiandae ipsam minus et ex, aliquid dolor molestias.</p>

                                <div className="social-area">
                                    <ul>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-youtube"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <h3>Our Services</h3>

                                <ul>
                                    <li>
                                        <Link href="/service-details">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Main Service
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Window Cleaning
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Domestic Cleaning
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Disinfection
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Office Cleaning
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                House Cleaning
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <h3>Quick Links</h3>

                                <ul>
                                    <li>
                                        <Link href="/about-us">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                About
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services-style-one">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Services
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pricing">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Prices
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/testimonials">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Testimonials 
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-grid">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Blog
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/projects">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Projects
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget contact">
                                <h3>Get In Touch</h3>

                                <ul>
                                    <li>
                                        <i className="bx bx-phone-call"></i>
                                        <span>Hotline:</span> 
                                        Phone: <a href="tel:+61-821-456">+61-821-456</a>
                                    </li>
                                    
                                    <li>
                                        <i className="bx bx-envelope"></i>
                                        <span>Email:</span> 
                                        <a href="mailto:hello@surety.com">
                                            hello@ston.com
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <i className="bx bx-location-plus"></i>
                                        <span>Address:</span> 
                                        123, Western Road, Melbourne Australia
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
	  
            
    
        </React.Fragment>
    );
}

export default Footer;