import React from 'react';
import Link from 'next/link';

const Services = () => {
    return (
        <div className="services-area-two bg-color pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span className="top-title">Manuales de servicio</span>
					<h2>Catalogo de Manuales de servicio</h2>
					<p>Una lista de los diferentes manuales de servicio para cada equipo.</p>
				</div>

				<div className="row">
					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<div className="services-content">
								<span className="flaticon-couch"></span>
								<h3>Manual de Servicio para Equipos Emp</h3>
								<p>Manual de servicio e información de mantenimientoy uso preventivo.</p>

                                <Link href="/service-details">
                                    <a className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </a>
                                </Link>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<div className="services-content">
								<span className="flaticon-windows"></span>
								<h3>Emp Equipment manual of service</h3>
								<p>Service manual and information for maintenance and preventive use</p>
								<Link href="/service-details">
                                    <a className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </a>
                                </Link>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<div className="services-content">
								<span className="flaticon-house"></span>
								<h3>Manuel de service de l'équipement Emp</h3>
								<p>Manuel d'entretien et informations pour la maintenance et l'utilisation préventive</p>

								<Link href="/service-details">
                                    <a className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </a>
                                </Link>
							</div>
						</div>
					</div>

					
				
				</div>
			</div>
		</div>	
    )
}

export default Services;