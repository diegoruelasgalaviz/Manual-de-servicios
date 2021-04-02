import React from 'react';
import Link from 'next/link';

const HowItWorks = () => {
    return (
        <div className="process-area bg-color pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span>Soporte técnico</span>
					<h2>Pasos de atención en el soporte técnico</h2>
					<p>Si busca información y atención para solucionar algún problema relacionado a sus equipos emerymark.</p>
				</div>

				<div className="row">
					<div className="col-lg-4 col-sm-6">
						<div className="single-process">
							<img src="/img/process/process1.png" alt="Image" />
							<h3>Lee la documentación</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <Link href="#">
                                <a className="read-more">
                                    Get In Touch <i className="bx bx-plus"></i>
                                </a>
                            </Link>

							<span>01</span>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-process">
							<img src="/img/process/process2.png" alt="Image" />
							<h3>Contacta al soporte técnico</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

							<Link href="#">
                                <a className="read-more">
                                    Get In Touch <i className="bx bx-plus"></i>
                                </a>
                            </Link>

							<span>02</span>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
						<div className="single-process">
							<img src="/img/process/process3.png" alt="Image" />
							<h3>Visita de técnico especializado</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

							<Link href="#">
                                <a className="read-more">
                                    Get In Touch <i className="bx bx-plus"></i>
                                </a>
                            </Link>

							<span>03</span>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default HowItWorks;