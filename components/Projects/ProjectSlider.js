import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    nav:true,
    autoplay:true,
    autoplayHoverPause: true,
    mouseDrag: true,
    touchDrag: false,
    margin: 30,
    center: true,
    dots: false,
    smartSpeed:1500,
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>",
    ],
    responsive:{
        0:{
            items:1,
        },
        576:{
            items:2,
        },
        768:{
            items:2,
        },
        992:{
            items:3,
        },
        1200:{
            items:3,
        },
        1700:{
            items:4,
        }
    }
};

const ProjectSlider = () => {

    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <section className="project-area pt-100 pb-70">
			<div className="container-fluid p-0">
				<div className="section-title">
					<span>Projects</span>
					<h2>Our Recent Projects</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos tenetur vero deserunt! Magni, laborum. Molestias, quidem mollitia, quae minus vero vel reprehenderit, aliquid alias delectus autem.</p>
				</div>

                {display ? <OwlCarousel 
                    className="project-wrap owl-carousel owl-theme"
                    {...options}
                > 
					<div className="single-project">
						<img src="/img/projects/project1.jpg" alt="Image" />
						<div className="project-content">
							<h3>
                                <Link href="/project-details">
								    <a>Window Cleaning</a>
                                </Link>
							</h3>
							<span>Office</span>

                            <Link href="/project-details">
							    <a><i className='bx bx-chevron-right'></i></a>
                            </Link>
						</div>
					</div>
				
					<div className="single-project">
                        <img src="/img/projects/project2.jpg" alt="Image" />
						<div className="project-content">
                            <h3>
                                <Link href="/project-details">
								    <a>Kitchen Cleaning</a>
                                </Link>
							</h3>

							<span>Home</span>
							
                            <Link href="/project-details">
							    <a><i className='bx bx-chevron-right'></i></a>
                            </Link>
						</div>
					</div>
				
					<div className="single-project">
                        <img src="/img/projects/project3.jpg" alt="Image" />
						<div className="project-content">
                            <h3>
                                <Link href="/project-details">
								    <a>Commercial cleaning</a>
                                </Link>
							</h3>

							<span>Office Space</span>
							
                            <Link href="/project-details">
							    <a><i className='bx bx-chevron-right'></i></a>
                            </Link>
						</div>
					</div>
				
					<div className="single-project">
                        <img src="/img/projects/project4.jpg" alt="Image" />
						<div className="project-content">
                            <h3>
                                <Link href="/project-details">
								    <a>Hand Sanitizer</a>
                                </Link>
							</h3>

							<span>Self Protect</span>
							
                            <Link href="/project-details">
							    <a><i className='bx bx-chevron-right'></i></a>
                            </Link>
						</div>
					</div>
				
					<div className="single-project">
                        <img src="/img/projects/project5.jpg" alt="Image" />
						<div className="project-content">
                            <h3>
                                <Link href="/project-details">
								    <a>Floor Cleaning</a>
                                </Link>
							</h3>

							<span>Hospital</span>
							
                            <Link href="/project-details">
							    <a><i className='bx bx-chevron-right'></i></a>
                            </Link>
						</div>
					</div>
                </OwlCarousel> : ''}
			</div>
		</section>
    )
}

export default ProjectSlider;