import React from 'react';

const FaqFrenContact = () => {
    return (
        <div className="faq-contact-area pb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="contact-wrap">
							<div className="contact-form">
								<div className="section-title">
									<h2>Vous ne trouvez pas ce que vous cherchez</h2>
									<p>Écrivez vos questions ou problèmes techniques dans le formulaire ci-dessous et notre équipe de service vous recontactera et si les informations que vous recherchez ne se trouvent pas dans le manuel électronique, elles seront incluses dans une nouvelle section.</p>
								</div>
                                
								<form id="contactForm">
									<div className="row">
										<div className="col-lg-6 col-sm-6">
											<label>Nom</label>
											<div className="form-group">
												<input type="text" name="name" id="name" className="form-control" required placeholder="Su Nom" />
											</div>
										</div>
			
										<div className="col-lg-6 col-sm-6">
											<label>Email</label>
											<div className="form-group">
												<input type="email" name="email" id="email" className="form-control" required placeholder="Su Email" />
											</div>
										</div>
			
										<div className="col-lg-6 col-sm-6">
											<label>Téléphoner</label>
											<div className="form-group">
												<input type="text" name="phone_number" id="phone_number" required className="form-control" placeholder="Téléphoner" />
											</div>
										</div>
			
										<div className="col-lg-6 col-sm-6">
											<label>Affaire</label>
											<div className="form-group">
												<input type="text" name="msg_subject" id="msg_subject" className="form-control" required placeholder="Affaire" />
											</div>
										</div>
			
										<div className="col-lg-12 col-md-12">
											<label>Message</label>
											<div className="form-group">
												<textarea name="message" className="form-control" id="message" cols="30" rows="8" required placeholder="message"></textarea>
											</div>
										</div>
			
										<div className="col-lg-12 col-md-12">
											<button type="submit" className="default-btn page-btn">
                                            Envoyer
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

export default FaqFrenContact;