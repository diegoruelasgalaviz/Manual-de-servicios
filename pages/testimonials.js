import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const Testimonials = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Testimonials" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Testimonials" 
                imgClass="bg-3" 
            /> 

            <div className="client-area client-page ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>What Our Client’s Say</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta, temporibus.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="single-client">
                                <img src="/img/client/client1.jpg" alt="img" />

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing and Quis suspendisse typesetting</p>

                                <ul>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                </ul>	

                                <h3>Steven Jony</h3>
                                <span>CEO of Company</span>

                                <div className="quate">
                                    <i className="flaticon-right-quotes-symbol"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="single-client">
                                <img src="/img/client/client2.jpg" alt="img" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing and Quis suspendisse typesetting</p>

                                <ul>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                </ul>

                                <h3>Omit Jacson</h3>
                                <span>Company Founder</span>

                                <div className="quate">
                                    <i className="flaticon-right-quotes-symbol"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="single-client">
                                <img src="/img/client/client3.jpg" alt="img" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing and Quis suspendisse typesetting</p>

                                <ul>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                </ul>	

                                <h3>Kilva Dew</h3>
                                <span>Marketing Manager</span>

                                <div className="quate">
                                    <i className="flaticon-right-quotes-symbol"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="single-client">
                                <img src="/img/client/client4.jpg" alt="img" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing and Quis suspendisse typesetting</p>

                                <ul>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                </ul>	

                                <h3>Juhon Kilva</h3>
                                <span>Company CEO</span>

                                <div className="quate">
                                    <i className="flaticon-right-quotes-symbol"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="single-client">
                                <img src="/img/client/client5.jpg" alt="img" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing and Quis suspendisse typesetting</p>

                                <ul>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                </ul>	

                                <h3>Anna Keatch</h3>
                                <span>Medical Founder</span>

                                <div className="quate">
                                    <i className="flaticon-right-quotes-symbol"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="single-client">
                                <img src="/img/client/client6.jpg" alt="img" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing and Quis suspendisse typesetting</p>

                                <ul>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                </ul>	

                                <h3>Lezkit Smith</h3>
                                <span>Medical Manager</span>

                                <div className="quate">
                                    <i className="flaticon-right-quotes-symbol"></i>
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="col-lg-12">
                            <div className="page-navigation-area text-center">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <Link href="#">
                                            <a className="page-link page-links">
                                                <i className='bx bx-chevrons-left'></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="page-item active">
                                        <Link href="#">
                                            <a className="page-link">1</a>
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link href="#">
                                            <a className="page-link">2</a>
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link href="#">
                                            <a className="page-link">3</a>
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link href="#">
                                            <a className="page-link">
                                                <i className='bx bx-chevrons-right'></i>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  
            <Footer />
        </React.Fragment>
    );
}

export default Testimonials;