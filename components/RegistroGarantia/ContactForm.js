import React from 'react';
import Link from 'next/link';

const ContactForm = () => {
    return (
        <div className="contact-area ptb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="contact-wrap">
							<div className="contact-form">
								<div className="section-title">
									<h2>Preparing your machine for the Start up. Preparado su maquina para la Puesta En Marcha </h2>
								</div>
								<div>
								The following steps will help you prepare for the Warranty Start up. A warranty Start up must be done before the first use of your machine to activate the warranty. Failure to complete these steps or complete the startup will cause a void in your warranty.** NOTE THIS IS NOT THE WARRANTY START UP**

								Los siguientes pasos son para ayudarl@ a prepararse para la puesta en marcha.Es importante siguer estos pasos para iniciar su garanita .La puesta en marcha se debe de hacer antes del primer uso de su maquina. Falta de completar estos pasos o completar la Puesta En Marcha causara la anulacion de la garantia. 
								**Tenga en cuenta que este no es la Puesta En Marcha**
								</div>
								<form id="contactForm">
									<div className="row">
										<div className="col-lg-6 col-sm-6">
											<div className="form-group">
												<input type="text" name="name" id="name" className="form-control" required placeholder="Your Name" />
											</div>
										</div>
			
										<div className="col-lg-6 col-sm-6">
											<div className="form-group">
												<input type="email" name="email" id="email" className="form-control" required placeholder="Your Email" />
											</div>
										</div>
			
										<div className="col-lg-6 col-sm-6">
											<div className="form-group">
												<input type="text" name="phone_number" id="phone_number" required className="form-control" placeholder="Your Phone" />
											</div>
										</div>
			
										<div className="col-lg-6 col-sm-6">
											<div className="form-group">
												<input type="text" name="msg_subject" id="msg_subject" className="form-control" required placeholder="Your Subject" />
											</div>
										</div>
			
										<div className="col-lg-12 col-md-12">
											<div className="form-group">
												<textarea name="message" className="form-control" id="message" cols="30" rows="5" required placeholder="Your Message"></textarea>
											</div>
										</div>
			
										<div className="col-lg-12 col-md-12">
											<button type="submit" className="default-btn page-btn">
												Send Message
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

export default ContactForm;