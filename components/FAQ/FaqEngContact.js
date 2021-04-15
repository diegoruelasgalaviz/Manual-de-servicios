import React from 'react';

const  FaqEngContact = () => {
    return (
        <div className="faq-contact-area pb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="contact-wrap">
							<div className="contact-form">
								<div className="section-title">
									<h2>Didnt find what you were looking for?</h2>
									<p>Write your questions or technical problems in the form below and our service team will contact you back and if the information you are looking for is not found within the electronic manual, it will be included as a new section in it.</p>
								</div>
                                
								<form id="contactForm">
									<div className="row">
										<div className="col-lg-6 col-sm-6">
											<label>Name</label>
											<div className="form-group">
												<input type="text" name="name" id="name" className="form-control" required placeholder="Your name" />
											</div>
										</div>
			
										<div className="col-lg-6 col-sm-6">
											<label>Email</label>
											<div className="form-group">
												<input type="email" name="email" id="email" className="form-control" required placeholder="Your Email" />
											</div>
										</div>
			
										<div className="col-lg-6 col-sm-6">
											<label>Phone</label>
											<div className="form-group">
												<input type="text" name="phone_number" id="phone_number" required className="form-control" placeholder="Your Phone" />
											</div>
										</div>
			
										<div className="col-lg-6 col-sm-6">
											<label>Subject</label>
											<div className="form-group">
												<input type="text" name="msg_subject" id="msg_subject" className="form-control" required placeholder="subject" />
											</div>
										</div>
			
										<div className="col-lg-12 col-md-12">
											<label>Message</label>
											<div className="form-group">
												<textarea name="message" className="form-control" id="message" cols="30" rows="8" required placeholder="Message"></textarea>
											</div>
										</div>
			
										<div className="col-lg-12 col-md-12">
											<button type="submit" className="default-btn page-btn">
												Send
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

export default FaqEngContact;