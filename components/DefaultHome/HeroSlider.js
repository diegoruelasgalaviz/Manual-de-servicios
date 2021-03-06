import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import ModalVideo from 'react-modal-video';

const options = {
    loop: true,
    margin: 0,
    nav: true,
    mouseDrag: true,
    touchDrag: false,
    items: 1,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        "<i class='bx bx-chevrons-left'></i>",
        "<i class='bx bx-chevrons-right'></i>",
    ],
};

const HeroSlider = () => {

    // Slider
	const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
	}, [])

	// Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <React.Fragment>
            <div className="hero-slider-area">

                {display ? <OwlCarousel 
                    className="hero-slider-wrap owl-carousel owl-theme"
                    {...options}
                > 
                    <div className="slider-item slider-item-bg-1">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-9">
                                            <div className="slider-text one">
                                                <h1>Soporte técnico a su disposición</h1>
                                                <p>Contamos con una plataforma de servicio técnico para que cuete con documentación clara y accesible de su equipo.</p>
            
                                                <div className="slider-btn">
                                                    <Link href="/contact">
                                                        <a className="default-btn">
                                                            Contact Us
                                                        </a>
                                                    </Link>

                                                    <Link href="/about-us">
                                                        <a className="default-btn active">
                                                            Learn More
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-3">
                                            <div className="video-btn-animat one">
                                                <Link href="#play-video">
                                                    <a
                                                        onClick={e => {e.preventDefault(); openModal()}}
                                                        className="video-btn popup-youtube"
                                                    > 
                                                        <i className="bx bx-play"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider-item slider-item-bg-2">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-9">
                                            <div className="slider-text two">
                                                <h1>Passion for Ice cream</h1>
                                                <p>Amantes por el Helado y su ingeniería desde hace más de 30 años</p>
                                                
                                                <div className="slider-btn">
                                                    <Link href="/contact">
                                                        <a className="default-btn">
                                                            Contact Us
                                                        </a>
                                                    </Link>

                                                    <Link href="/about-us">
                                                        <a className="default-btn active">
                                                            Learn More
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3">
                                            <div className="video-btn-animat two">
                                                <Link href="#play-video">
                                                    <a
                                                        onClick={e => {e.preventDefault(); openModal()}}
                                                        className="video-btn popup-youtube"
                                                    > 
                                                        <i className="bx bx-play"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}

                <div className="shape">
                    <img src="/img/home-slider/home-slider-shape1.png" alt="Image" />
                </div>
            </div>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='uLJ0VY2SCH0' 
                onClose={() => setIsOpen(!isOpen)} 
            />
        </React.Fragment>
    )
}

export default HeroSlider;
