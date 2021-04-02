import React from 'react';
import Link from 'next/link';

const PreventVirus = () => {
    return (
        <div className="prevent-area-two pt-100 pb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="prevent-content-two">
							<span>Prevenga la propagación del COVID - 19</span>
							<h2>Protejase del Virus</h2>
							<p>Limpie sus equipos con regularidad y utilice medidas de seguridad al opera y manipular sus equipos</p>

							<p>Nuestro personal cuenta con todas las medidas de seguridad y emerymark pone a su disposición material y contactos digitales para evitar su exposición al virus.</p>

                            <Link href="#">
                                <a className="default-btn">Contacto de soporte técnico</a>
                            </Link>
						</div>
					</div>
                    
					<div className="col-lg-6">
						<div className="prevent-img-two">
							<img src="/img/prevent-img-two.jpg" alt="Image" />
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default PreventVirus;