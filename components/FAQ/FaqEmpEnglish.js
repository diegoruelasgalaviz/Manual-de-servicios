import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const FaqEmpEnglish = () => {
    return (
        <div className="faq-area bg-2 ptb-100">
			<div className="container">
				<div className="section-title">
					<span className="top-title">EMP</span>
					<h2>Service Manual</h2>
					<p>Web Service Manual in three languages ​​for the Emerymark EMP line paleteros equipment, if you have any situation or question that is not described or answered in the manual, you can leave your data in the form below and a technician will contact you at brevity</p>
				</div>

				<div className="row align-items-center">
					
					
					<div className="col-lg-12">
						<div className="faq-accordion">
							<Accordion allowZeroExpanded preExpanded={['a']}>
								<AccordionItem uuid="a">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        Recommended high and low pressure freon ranges for all EMP models
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<table className="table">
                                            <tr>
                                                <td>High Preassure</td>
                                                <td>Low . Preassure</td>
                                            </tr>
                                            <tr>
                                                <td>220 - 300 psi</td>
                                                <td>45 psi at the beginning of the cycle and 9 psi <br/> when at low temperature (-23 degrees celcius approximately)</td>
                                            </tr>
                                        </table>
									</AccordionItemPanel>
								</AccordionItem>

								<AccordionItem uuid="b">
									<AccordionItemHeading>
										<AccordionItemButton>
										Recommended amperage reading range not under load and under load for testing
of the pump motor (EMP) for each model.

										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
                                    <table className="table">
                                            <tr>
                                                <td>Model</td>
                                                <td>amperage range</td>
                                            </tr>
                                            <tr>
                                                <td>EMP-200 </td>
                                                <td>2 - 5 A</td>
                                            </tr>
                                            <tr>
                                                <td>EMP-500 </td>
                                                <td>3 - 8 A</td>
                                            </tr>
                                            <tr>
                                                <td>EMP-1500 </td>
                                                <td>3 - 11 A</td>
                                            </tr>
                                        </table>
									</AccordionItemPanel>
								</AccordionItem>

								<AccordionItem uuid="c">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        Adequate volts for each contactor in the electrical box (which legs should be 220v and which should be 115v). If we have a stinger leg, what should it be?
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
                                        Measure the voltage between the cables of the following colors with a multimeter.
										</p>
                                        <table className="table">
                                            <thead className="thead-dark">
                                            <tr >
                                                <th scope="col">Color A</th>
                                                <th scope="col">Color B</th>
                                                <th scope="col">Voltage</th>
                                            </tr>
                                            </thead>
                                            
                                            <tr scope="row">
                                                <td>Black</td>
                                                <td>White</td>
                                                <td>220v</td>
                                            </tr>
                                            <tr scope="row">
                                                 <td>Black</td>
                                                <td>red</td>
                                                <td>220v</td>
                                            </tr>
                                            <tr scope="row">
                                                <td>White</td>
                                                <td>red</td>
                                                <td>220v</td>
                                            </tr>
                                            <tr scope="row">
                                                <td>Green</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </table>
                                        <h6>Note: The voltage should not drop below 205 or rise above 230 for the following tests except green</h6>
                                        <p>Stinger's leg is Red</p>
                                    </AccordionItemPanel>
								</AccordionItem>

								<AccordionItem uuid="d">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        What are the high and low freon shield pressures at which the sensor of each machine and under what conditions can they be changed?


										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
                                        The pressure setting is High when condensed in air for all
machines must be 350 psi, when the machine is condensed by water the protection
occurs at high pressure at 310 psi, machines are protected by low pressure at 2 pounds
No range is movable, if the place lacks ventilation, If the room where it operates is
too hot, a way to cool them must be found, there is a risk of
compressor damage if protected above 350 psi, compressor damage would release
oil in the system hampering proper operation

                                        </p>
									</AccordionItemPanel>
								</AccordionItem>

								<AccordionItem uuid="e">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        - The setting of the water valve in which all the machines are programmed. Is the gray valve
handle always programmed to the same setting?


										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
                                        This valve must always be programmed at number 3, which is exactly where the water
circulation is cut off, once it releases, that pressure must be between 260-280 psi, it can be
adjusted at the same time.
number 2 this will allow you to access the water at a lower pressure, that is, it will release at
240-250 psi, it is recommended that you always drive to number 3 just as it leaves the
factory
                                    
                                    	</p>
									</AccordionItemPanel>
								</AccordionItem>
                                <AccordionItem uuid="f">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        Possible problems with the settings of the water valves and
the connections for the cooling towers and some adjustments that can be made by a
technician

										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<ul>
                                            <li>
                                            In the wrong way, the tower outlet was connected to the water inlet, that is, it was connected
in reverse
                                            </li>
                                            <li>
											Obstruction of the tower inlet valve by garbage or objects foreign to the water circulation system


                                            </li>
                                            <li>
                                            The fan pushes the air into the tower instead of pulling it out
                                            </li>
                                            <li>
                                            Air bubbles inside the pump
                                            </li>
                                        </ul>
									</AccordionItemPanel>
								</AccordionItem>
                                <AccordionItem uuid="g">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        -   A table with the HP of the compressor of each model, the suction pressure of the cylinder,
the head pressure, the refrigerant charge, and the water consumption working at 80% of its
capacity.

										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
										</p>
									</AccordionItemPanel>
								</AccordionItem>
                                <AccordionItem uuid="h">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        Wiring diagram for each model; to also include in the manual and in the
electrical box of each machine.


										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
										</p>
									</AccordionItemPanel>
								</AccordionItem>
                                <AccordionItem uuid="i">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        Description of how energy flows through the machine

										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
										</p>
									</AccordionItemPanel>
								</AccordionItem>
								<AccordionItem uuid="j">
									<AccordionItemHeading>
										<AccordionItemButton>
										Filter cleaning.

										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<ul>
										<li> The machine must be out of operation </li>
										<li> Locate the pump suction line </li>
										<li> Close the orange suction handle </li>
										<li> Then locate the pump discharge line, close the orange pump discharge handle </li>
										<li> Locate filter "Y" which is a hexagonal bronze plug </li>
										<li> Loosen the cap and remove the internal sieve, clean any residue, put it back in position, replace the bronze cap </li>
										<li> Open the two orange handles </li>
										</ul>
										<br/>
										<h6> Note: It is not necessary to remove the glycol from the tub, because for that the two handles are closed, repeat this every time a low glycol recirculation is noticed </h6>
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

export default FaqEmpEnglish;