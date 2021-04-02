import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const TroubleShootEngs = () => {
    return (
        <div className="faq-area bg-2 ptb-100">
			<div className="container">
				<div className="section-title">
					<span className="top-title">EMP</span>
					<h2>Trouble Shooting</h2>
					<p>Web Service Manual in three languages ​​for the Emerymark EMP line paleteros equipment, if you have any situation or question that is not described or answered in the manual, you can leave your data in the form below and a technician will contact you at brevity</p>
				</div>

				<div className="row align-items-center">
					
					
					<div className="col-lg-12">
						<div className="faq-accordion">
							<Accordion allowZeroExpanded preExpanded={['a']}>
								<AccordionItem uuid="a">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        Lack of Cooling:
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
                                        : It is possible that there is an obstruction or a
deficiency in the circulation in the cooling system of the Palette
Equipment, Check the Pump Filter if there is any residue
trapped inside, check the condition of the pump and
compressor, Take actions as observed

										</p>
									</AccordionItemPanel>
								</AccordionItem>

								<AccordionItem uuid="b">
									<AccordionItemHeading>
										<AccordionItemButton>
										Long Cooling Time
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
										This can occur due to poor circulation in
the cooling system, not leaving an adequate distance to the
sides of the machine that allows the correct flow of air, due to a
very high temperature in the environment of the machine, due
to a Glycol leak or by the Use of a Glycol with an incorrect
gradation, remember that the correct gradation of the glycol is
50% - 50% Glycol, a different gradation of Glycol can be used,
but it should always be greater than 50% never less


										</p>
									</AccordionItemPanel>
								</AccordionItem>

								<AccordionItem uuid="c">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        Single-phase equipment Damage to the starting capacitor

										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
										</p>
									</AccordionItemPanel>
								</AccordionItem>

								<AccordionItem uuid="d">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        Glycol Circulation Problem in Tub

										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
										</p>
									</AccordionItemPanel>
								</AccordionItem>

								<AccordionItem uuid="e">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        the machines pump does not start


										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
										</p>
									</AccordionItemPanel>
								</AccordionItem>
                                <AccordionItem uuid="f">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        Glycol leak in palette

										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
                                        If when using your equipment you notice
that the machine leaks or that the Glycol runs out too quickly, it
is most likely that we are dealing with a Glycol leak, There are
several causes by which a leak of Glycol, for example, a broken
gasket, a loose hose or even a problem directly in the pump, for
this we must check the source of the leaks with the exposed
system, once we have identified it we can proceed to solve the
problem
										</p>
									</AccordionItemPanel>
								</AccordionItem>
                                <AccordionItem uuid="g">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        Obstruction of the pump filter or circulation of the same paddle  
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
										</p>
									</AccordionItemPanel>
								</AccordionItem>
                                
							</Accordion>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default TroubleShootEngs;