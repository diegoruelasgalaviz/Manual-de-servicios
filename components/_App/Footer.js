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

                                <p>Todas nuestras Máquinas pasan por un control de calidad exhaustivo; desde el EM-5 hasta la EMP-6000 han sido inspeccionadas al minucioso detalle, afinando las técnicas del desarrollo del helado y paletas, contribuyendo a la investigación al referente de los mismos. Al adquirir un equipo Emerymark apoyas a la mejora continua del Helado o como nos gusta llamarlo 'Kaizen del Helado'..</p>

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
                                <h3>Algunos Manuales</h3>

                                <ul>
                                    <li>
                                        <Link href="/emp-service-manual">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Service manual
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/manual-de-servicio">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Manual de Servicio
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/manuel-d-entretien">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Manuel D'entretien
                                            </a>
                                        </Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>

                        
                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget contact">
                                <h3>Contactese con nosotros</h3>

                                <ul>
                                    <li>
                                        <i className="bx bx-phone-call"></i>
                                        <span>Línea de oficina:</span> 
                                        Phone: <a href="tel:+52 33 36500803">+52 33 36500803</a>
                                    </li>
                                    
                                    <li>
                                        <i className="bx bx-envelope"></i>
                                        <span>Email:</span> 
                                        <a href="mailto:servicio@emerymark.com">
                                            servicio@emerymark.com
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <i className="bx bx-location-plus"></i>
                                        <span>dirección:</span> 
                                       451, Calle Rio Nilo, Guadalajara, Jalisco, México
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