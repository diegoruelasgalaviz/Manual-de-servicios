import React from 'react';
import Link from 'next/link';

const ContactForm = () => {
    return (
        <div className="contact-area ptb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="contact-wrap">
							<div className="contact-form">
								<div className="section-title">
									<h2>Drop Us A Message For Any Query</h2>
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

					<div className="col-lg-4">
						<div className="quick-contact">
							<h3>Quick Contact </h3>

							<ul>
								<li>
									<i className="bx bx-location-plus"></i>
									Location:
									<span>123, Western Road, Melbourne Australia</span>
								</li>

								<li>
									<i className="bx bx-phone-call"></i>
									Call Us:
									<a href="tel:+61-821-456">+61-821-456</a>
									<a href="tel:+61-987-786">+61-987-786</a>
								</li>

								<li>
									<i className="bx bx-envelope"></i>
									Email Us:
									<a href="mailto:hello@ston.com">
										hello@ston.com
									</a>
                                    <a href="mailto:info@ston.com">
										info@ston.com
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default ContactForm;