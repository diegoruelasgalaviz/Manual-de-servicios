import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
    return (
        <div className="about-area-two pb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="about-content-two">
							<span>Nosotors </span>
							<h2>Manten tus equipos en estado optimo</h2>
							<p>contactenos o revise la documentación de dud equipos desde la plataforma de manuales de servicio.</p>
							
							<p>Si no puede encontrar la información que busca utilce los formularios de contacto o llame a la linea de atención al cliente</p>

							<ul>
								<li>
									<i className="flaticon-checked-1"></i>
									Linea de atención
								</li>
								<li>
									Manuales
								</li>
								<li>
									<i className="flaticon-checked-1"></i>
									documentación
								</li>
								<li>
									<i className="flaticon-checked-1"></i>
									Traducciones

								</li>
							</ul>

                            <Link href="/manual-de-servicio-emp">
                                <a className="default-btn">Manual de servicio emp</a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="about-img-two">
							<img src="/img/about-img-two.png" alt="Image" />
							<p className="block-p">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita, illum debitis ex sed culpa perferendis.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default AboutUs;