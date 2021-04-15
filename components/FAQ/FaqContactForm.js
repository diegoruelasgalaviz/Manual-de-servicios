import React from 'react';

const FaqContactForm = () => {
    return (
        <div className="faq-contact-area pb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="contact-wrap">
							<div className="contact-form">
								<div className="section-title">
									<h2>No encuentras lo que buscas</h2>
									<p>Escribe tus preguntas o problemas técnicos en el formulario de abajo y nuestro equipo de servicio se pondrá en contacto con usted de regreso y de no encontrase la información que busca dentro del manual electrónico se incluirá como un nuevo apartado en el mismo</p>
								</div>
                                
								<form id="contactForm">
									<div className="row">
										<div className="col-lg-6 col-sm-6">
											<label>Nombre</label>
											<div className="form-group">
												<input type="text" name="name" id="name" className="form-control" required placeholder="Su nombre" />
											</div>
										</div>
			
										<div className="col-lg-6 col-sm-6">
											<label>Email</label>
											<div className="form-group">
												<input type="email" name="email" id="email" className="form-control" required placeholder="Su Email" />
											</div>
										</div>
			
										<div className="col-lg-6 col-sm-6">
											<label>Telefono</label>
											<div className="form-group">
												<input type="text" name="phone_number" id="phone_number" required className="form-control" placeholder="Su telefono" />
											</div>
										</div>
			
										<div className="col-lg-6 col-sm-6">
											<label>Asunto</label>
											<div className="form-group">
												<input type="text" name="msg_subject" id="msg_subject" className="form-control" required placeholder="Asunto" />
											</div>
										</div>
			
										<div className="col-lg-12 col-md-12">
											<label>Mensaje</label>
											<div className="form-group">
												<textarea name="message" className="form-control" id="message" cols="30" rows="8" required placeholder="Mensaje"></textarea>
											</div>
										</div>
			
										<div className="col-lg-12 col-md-12">
											<button type="submit" className="default-btn page-btn">
												Enviar
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default FaqContactForm;