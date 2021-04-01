import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    margin: 30,
    nav:false,
    mouseDrag: true,
    touchDrag: false,
    dots: false,
    autoplay: true,
    smartSpeed:1500,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
    }
};

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="client-area ptb-100">
			<div className="container">
				<div className="section-title">
					<span className="top-title">Testimonials</span>
					<h2>What Our Client’s Say</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta, temporibus.</p>
				</div>

                {display ? <OwlCarousel 
                    className="client-wrap owl-carousel owl-theme"
                    {...options}
                >
					<div className="single-client">
						<img src="/img/client/client1.jpg" alt="img" />

						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing and Quis suspendisse typesetting</p>

						<ul>
							<li>
								<i className="bx bxs-star"></i>
							</li>
							<li>
								<i className="bx bxs-star"></i>
							</li>
							<li>
								<i className="bx bxs-star"></i>
							</li>
							<li>
								<i className="bx bxs-star"></i>
							</li>
							<li>
								<i className="bx bxs-star"></i>
							</li>
						</ul>	

						<h3>Steven Jony</h3>
						<span>CEO of Company</span>

						<div className="quate">
							<i className="flaticon-right-quotes-symbol"></i>
						</div>
					</div>
					
					<div className="single-client">
						<img src="/img/client/client2.jpg" alt="img" />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing and Quis suspendisse typesetting</p>

						<ul>
							<li>
								<i className="bx bxs-star"></i>
							</li>
							<li>
								<i className="bx bxs-star"></i>
							</li>
							<li>
								<i className="bx bxs-star"></i>
							</li>
							<li>
								<i className="bx bxs-star"></i>
							</li>
							<li>
								<i className="bx bxs-star"></i>
							</li>
						</ul>	

						<h3>Omit Jacson</h3>
						<span>Company Founder</span>

						<div className="quate">
							<i className="flaticon-right-quotes-symbol"></i>
						</div>
					</div>
                </OwlCarousel> : ''}
			</div>
		</div>
    )
}

export default Testimonials;