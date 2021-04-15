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
                                       There may be an obstruction or deficiency in the
circulation in the cooling system of the Pallet Equipment, Check the Pump Filter for
if there is any residue trapped inside, check the condition of the pump itself and
compressor, Take actions as observed, check percentage of water in Glycol, recommendation 50% glycol - 50% water

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
										This can occur due to poor circulation in the
cooling system, by not leaving an adequate distance to the sides of the machine
that allows the correct flow of air, due to a very high temperature in the environment of the
machine, due to a coolant leak or due to the use of a glycol of incorrect graduation,
remember that the correct gradualness of glycol is 50% - 50% Glycol, it can be used
a gradualness different from Glycol, but it must always be greater than 50% never less


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
										Installation of very thin wiring for the equipment or very low voltage supply
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
										Due to a low level of Glycol, remembering that the level of Glycol must exceed the one indicated passing the absorption slots so that the pump does not suck air, dirty or clogged filters, presence of garbage or residues in the circulation of the cooling system
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
									<ul>
<li>
Equipment polarity is reversed (this in three-phase equipment, single-phase equipment should not have this problem)
</li>
<li>
Thermal pump protector activated
</li>

</ul>
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
                                        If while using your equipment you notice that the machine is leaking or that the
Glycol is running out too fast we are most likely dealing with a leak of
Glycol, There are several causes for which a Glycol leak can occur, for example,
a broken gasket, a loose pipe or even a problem directly in the pump,
For this, the source of the leaks must be checked with the exposed system, once
By identifying it, we can proceed to solve the problem.
<br/> <br/>
Another reason would be the use of the pump without Glycol, this can cause the mechanical seal of the same to be damaged due to lack of lubrication

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
Due to residues present inside the cooling system, constant and conscientious care of the equipment is recommended to avoid the fall of residues inside it.
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