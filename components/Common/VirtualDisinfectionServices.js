import React from 'react';
import Link from 'next/link';

const VirtualDisinfectionServices = () => {
    return (
        <div className="important-area">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-6 ptb-100">
						<div className="important-content">
							<span>emerymark</span>
							<h2>Unidad de atención al cliente</h2>
							<p>Contamos con una linea de atención al cliente y una línea de soporte que se encargará de resolver todas sus dudas y problemas referentes al estado de sus equipos.</p>

							<p>Recuerde que el uso adecuado y el mantenieto preventido es parte crucial y fundamental para alargar la vida útil de nuestros equipos y mantener su calidad de producción</p>

                            <Link href="#">
                                <a className="default-btn">Get Quote</a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-6 pr-0">
						<div className="important-img">
							<div className="counter-wrap">
								<div className="row">
									<div className="col-lg-6 col-sm-6">
										<div className="single-counter">
											<h2>
												30
												<span className="target">+</span>
											</h2>
											<p>Años</p>
										</div>
									</div>
				
									<div className="col-lg-6 col-sm-6">
										<div className="single-counter">
											<h2>
												13584 
												<span className="target">+</span>
											</h2>
											<p>Maquinas vendidas</p>
										</div>
									</div>
				
									<div className="col-lg-6 col-sm-6">
										<div className="single-counter mb-0">
											<h2>
                                                258
												<span className="traget">+</span>
											</h2>
											<p>Modelos diseñados</p>
										</div>
									</div>
				
									<div className="col-lg-6 col-sm-6">
										<div className="single-counter mb-0">
											<h2>
                                                750
												<span className="traget">+</span>
											</h2>
											<p>Equipos reparados</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default VirtualDisinfectionServices;