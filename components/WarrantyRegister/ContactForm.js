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
									<h2>Preparing your machine for the Start up. </h2>
								</div>
								<div>
								The following steps will help you prepare for the Warranty Start up. A warranty Start up must be done before the first use of your machine to activate the warranty. Failure to complete these steps or complete the startup will cause a void in your warranty.** NOTE THIS IS NOT THE WARRANTY START UP**

								</div>
								<form id="contactForm">
									<div className="row">
									<div className="col-lg-12 col-sm-12">
											<div className="form-group">
												<input type="email" name="email" id="email" className="form-control" required placeholder="Your Email" />
											</div>
										</div>

										<div className="col-lg-12 col-sm-12">
													<p>How to check? 
												How to use a multimeter. Click below</p>
												<a>https://youtu.be/HDSCa3fR_wg</a>
											<div className="form-group">
												<input type="text" name="msg_subject" id="msg_subject" className="form-control" required placeholder="Are your volts between 208-220?" />
											</div>
										</div>
			
			
										<div className="col-lg-12 col-sm-12">
											<div className="form-group">
												<input type="file" name="photo_or_video" id="photo_or_video" required className="form-control" placeholder="Please upload a confirmation photo or video" />
											</div>
										</div>
			
										<div className="col-lg-12 col-sm-12">
											<div className="form-group">
												<input type="text" name="msg_subject" id="msg_subject" className="form-control" required placeholder="Do you have the correct NEMA CODE outlet or plug?" />
											</div>
										</div>

										<div className="col-lg-12 col-sm-12">
											<div className="form-group">
												<input type="file" name="photo_or_video" id="photo_or_video" required className="form-control" placeholder="Please upload a confirmation photo or video" />
											</div>
										</div>
			
										<div className="col-lg-12 col-md-12">
											<div className="form-group">
												<textarea name="message" className="form-control" id="message" cols="30" rows="5" required placeholder="Ensure you have 6ft of free space on each side of the machine for proper ventilation and air intake"></textarea>
											</div>
										</div>

										<div className="col-lg-12 col-sm-12">
											<div className="form-group">
												<input type="file" name="photo_or_video" id="photo_or_video" required className="form-control" placeholder="Please upload a confirmation photo or video" />
											</div>
										</div>

										<div className="col-lg-12 col-md-12">
											<div className="form-group">
												<textarea name="message" className="form-control" id="message" cols="30" rows="5" required placeholder="Ensure you have a dedicated water source for your machine. Confirm you have the correct size water lines (sizes provided in manual)"></textarea>
											</div>
										</div>

										<div className="col-lg-12 col-sm-12">
											<div className="form-group">
												<input type="file" name="photo_or_video" id="photo_or_video" required className="form-control" placeholder="Please upload a confirmation photo or video" />
											</div>
										</div>

										<div className="col-lg-12 col-md-12">
											<div className="form-group">
												<textarea name="message" className="form-control" id="message" cols="30" rows="5" required placeholder="Do you have your Propelyn Glycol ready?"></textarea>
											</div>
										</div>

										<div className="col-lg-12 col-sm-12">
											<div className="form-group">
												<input type="file" name="photo_or_video" id="photo_or_video" required className="form-control" placeholder="Please upload a confirmation photo or video" />
											</div>
										</div>

										<div className="col-lg-12 col-md-12">
											<div className="form-group">
												<textarea name="message" className="form-control" id="message" cols="30" rows="5" required placeholder="Do you have a Propelyn Glycol Refractometer?"></textarea>
											</div>
										</div>

										<div className="col-lg-12 col-sm-12">
											<div className="form-group">
												<input type="file" name="photo_or_video" id="photo_or_video" required className="form-control" placeholder="Please upload a confirmation photo or video" />
											</div>
										</div>

										<div className="col-lg-12 col-md-12">
											<div className="form-group">
												<textarea name="message" className="form-control" id="message" cols="30" rows="5" required placeholder="Please select a date you would like to do your Start up. Please allow 3-4 business days to confirm."></textarea>
											</div>
										</div>

										<div className="col-lg-12 col-sm-12">
											<div className="form-group">
												<input type="date" name="photo_or_video" id="photo_or_video" required className="form-control" placeholder="Please upload a confirmation photo or video" />
											</div>
										</div>

										
                    <div className="col-lg-12 col-md-12">
										<p>Batch freezer</p>
												<a>https://youtu.be/abu8Tb0pSNE</a>
											<div className="form-group">
												<input type="checkbox" name="watch_video" id="watch_video" required /> Watch the video Start up Video
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