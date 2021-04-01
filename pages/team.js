import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const Team = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Team" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Team" 
                imgClass="bg-4" 
            /> 

            <div className="team-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Meet Our Team</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta, temporibus.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-team">
                                <div className="team-img">
                                    <img src="/img/team/team1.jpg" alt="Image" />

                                    <div className="team-content">
                                        <h3>Merris Jelly</h3>
                                        <span>CEO & Founder</span>

                                        <ul className="team-link">
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
                                                    <i className="bx bxl-pinterest-alt"></i>
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
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-team">
                                <div className="team-img">
                                    <img src="/img/team/team2.jpg" alt="Image" />

                                    <div className="team-content">
                                        <h3>Jelin Alis</h3>
                                        <span>Marketing Manager</span>

                                        <ul className="team-link">
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
                                                    <i className="bx bxl-pinterest-alt"></i>
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
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-team">
                                <div className="team-img">
                                    <img src="/img/team/team3.jpg" alt="Image" />

                                    <div className="team-content">
                                        <h3>James Bond</h3>
                                        <span>Medicine Specialist</span>

                                        <ul className="team-link">
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
                                                    <i className="bx bxl-pinterest-alt"></i>
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
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-team">
                                <div className="team-img">
                                    <img src="/img/team/team4.jpg" alt="Image" />

                                    <div className="team-content">
                                        <h3>Zeck Kilchar</h3>
                                        <span>Office Manager</span>

                                        <ul className="team-link">
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
                                                    <i className="bx bxl-pinterest-alt"></i>
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
                        </div>
                        
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-team">
                                <div className="team-img">
                                    <img src="/img/team/team5.jpg" alt="Image" />

                                    <div className="team-content">
                                        <h3>Jzck Kith</h3>
                                        <span>Team Leader</span>

                                        <ul className="team-link">
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
                                                    <i className="bx bxl-pinterest-alt"></i>
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
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-team">
                                <div className="team-img">
                                    <img src="/img/team/team6.jpg" alt="Image" />

                                    <div className="team-content">
                                        <h3>Kilva Dew</h3>
                                        <span>Medical Assistance</span>

                                        <ul className="team-link">
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
                                                    <i className="bx bxl-pinterest-alt"></i>
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

export default Team;