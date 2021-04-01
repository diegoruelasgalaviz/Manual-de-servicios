import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const FaqContent = () => {
    return (
        <div className="faq-area bg-2 ptb-100">
			<div className="container">
				<div className="section-title">
					<span className="top-title">EMP</span>
					<h2>Manual de Servicio</h2>
					<p>Manual de Servicio web en tres idiomas para los equipos paleteros de la linea EMP de Emerymark, si tiene alguna situación o pregunta que no sea descrita o respondida en el manual puede dejar sus datos en el formulario de abajo y un técnico se contactará con usted a la brevedad</p>
				</div>

				<div className="row align-items-center">
					
					
					<div className="col-lg-12">
						<div className="faq-accordion">
							<Accordion allowZeroExpanded preExpanded={['a']}>
								<AccordionItem uuid="a">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        Rangos recomendados de alta y baja presión de freón para todos los modelos EMP
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
										</p>
									</AccordionItemPanel>
								</AccordionItem>

								<AccordionItem uuid="b">
									<AccordionItemHeading>
										<AccordionItemButton>
										Rango de lectura de amperaje recomendado no bajo carga y bajo carga para la prueba del motor de bomba (EMP) para cada modelo.
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
										</p>
									</AccordionItemPanel>
								</AccordionItem>

								<AccordionItem uuid="c">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        Voltios adecuados para cada contactor de la caja eléctrica (qué patas deben ser de 220v y cuáles de 115v). Si tenemos una pata de aguijón, ¿cuál debe ser?
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
                                        ¿Cuáles son las presiones de protección de freón altas y bajas a las que se programa el sensor de cada máquina y bajo qué condiciones se pueden cambiar?

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
                                        - El ajuste de la válvula de agua en la que están programadas todas las máquinas. ¿La manija gris de la válvula está siempre programada en el mismo ajuste?

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
                                        -  Posibles problemas con los ajustes de las válvulas de agua y las conexiones para las torres de enfriamiento y algunos ajustes que puede hacer un técnico

										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
										</p>
									</AccordionItemPanel>
								</AccordionItem>
                                <AccordionItem uuid="g">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        -   Una tabla con los HP del compresor de cada modelo, la presión de succión del cilindro, la presión de la cabeza, la carga de refrigerante, y el consumo de agua trabajando al 80% de su capacidad.
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
                                        Diagrama de cableado para cada modelo; para incluir también en el manual y en la
caja eléctrica de cada máquina.


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
                                        -Descripción de cómo la energía fluye a través de la máquina.

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

export default FaqContent;