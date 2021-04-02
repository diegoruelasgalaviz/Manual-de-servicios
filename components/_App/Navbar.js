import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Link from '../../utils/ActiveLink';
import TopHeader from './TopHeader';

const Navbar = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.addedItems)
    const collapsed = useSelector((state) => state.collapsedState)
    
    const toggleNavbar = () => {
        dispatch({
            type: 'COLLAPSED_STATE',
        })
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })
 
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <header className="header-area fixed-top">
                {/* TopHeader */}
                
                
                <div id="navbar" className="navbar-area">
                    <div className="main-nav">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container">
                                <Link href="/">
                                    <a onClick={toggleNavbar} className="navbar-brand">
                                        <img className="logo-size" src="/img/logo.png" alt="logo" />
                                    </a>
                                </Link>

                                <button 
                                    onClick={toggleNavbar} 
                                    className={classTwo}
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation"
                                >
                                    <span className="icon-bar top-bar"></span>
                                    <span className="icon-bar middle-bar"></span>
                                    <span className="icon-bar bottom-bar"></span>
                                </button>

                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav m-auto">
                                        <li className="nav-item">
                                            <Link href="#" activeClassName="active">
                                                <a onClick={e => e.preventDefault()} className="nav-link">
                                                    Manuales de Servicio <i className='bx bx-chevron-down'></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/manual-de-servicio-emp" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Manual de Equipos EMP</a>
                                                    </Link>
                                                </li>

                                              
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="#" activeClassName="active">
                                                <a onClick={e => e.preventDefault()} className="nav-link">
                                                    Manuals of service <i className='bx bx-chevron-down'></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/emp-service-manual" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">manual of EMP Equipment</a>
                                                    </Link>
                                                </li>

                                              
                                            </ul>
                                        </li>

                                       
                                    </ul>
                                
                                    
                                </div>

                                {/* For Mobile Device */}
                                
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}

export default Navbar;
