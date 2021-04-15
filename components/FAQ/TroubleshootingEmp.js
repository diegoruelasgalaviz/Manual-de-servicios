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
					<h2>Solución de problemas</h2>
					<p>Manual de Servicio web en tres idiomas para los equipos paleteros de la linea EMP de Emerymark, si tiene alguna situación o pregunta que no sea descrita o respondida en el manual puede dejar sus datos en el formulario de abajo y un técnico se contactará con usted a la brevedad</p>
				</div>

				<div className="row align-items-center">
					
					
					<div className="col-lg-12">
						<div className="faq-accordion">
							<Accordion allowZeroExpanded preExpanded={['a']}>
								<AccordionItem uuid="a">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        Falta de Enfriamiento
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
                                        Es posible que exista una obstrucción o una deficiencia en la
circulación en el sistema de enfriamiento del Equipo paletero, Checar Filtro de Bomba por
sí exista algún residuo atrapado en su interior, checar el estado mismo de la bomba y
compresor, Tomar acciones según lo observado, verificar porcentaje de agua en Glycol, recomendación 50% glycol - 50% agua

										</p>
									</AccordionItemPanel>
								</AccordionItem>

								<AccordionItem uuid="b">
									<AccordionItemHeading>
										<AccordionItemButton>
										Tiempo de Refrigeración largo:
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
										Esto puede ocurrir por una circulación deficiente en el
sistema de enfriamiento, por no dejar una distancia adecuada a los costados de la máquina
que permita el correcto flujo del aire, por un temperatura muy elevada en el entorno de la
máquina, por una fuga de refrigerante o por el Uso de un Glicol de gradualidad incorrecta,
recordemos que la gradualidad correcta del glicol es de 50% - 50% Glicol, se puede usar
una gradualidad distinta de Glicol, pero está siempre deberá ser mayor al 50% nunca menor

										</p>
									</AccordionItemPanel>
								</AccordionItem>

								<AccordionItem uuid="c">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        Equipos Monofásicos Daños en el capacitor de arranque
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
										Instalación de cableado muy delgado para el equipo o suministro de voltaje muy bajo
										
										</p>
									</AccordionItemPanel>
								</AccordionItem>

								<AccordionItem uuid="d">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        Problema de Circulación de Glicol en Tina

										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
										Por bajo nivel de Glicol, recordando que el nivel de Glicol debe superar el indicado que se encuentra pasando las ranuras de absorción  para que no succione aire la bomba, filtros sucios u obstruídos, presencia de basura o residuos en la circulación del sistema de enfriamiento
										
										</p>
									</AccordionItemPanel>
								</AccordionItem>

								<AccordionItem uuid="e">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        No enciende la bomba en maquina Paletera:

										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<ul>
											<li>
												Polaridad del equipo se encuentra invertida (esto en equipos trifásicos, equipos monofásicos no deben tener este problema)
											</li>
											<li>
												Protector térmico de bomba activado
											</li>
											
										</ul>
									</AccordionItemPanel>
								</AccordionItem>
                                <AccordionItem uuid="f">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        Fuga de Glicol en paletera:

										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
                                        Si al usar su equipo usted nota que la máquina gotea o que el
Glicol se acaba demasiado rápido lo más probable es que estemos lidiando con una fuga de
Glicol, Existen varias causas por las cuales se puede originar una fuga de Glicol, por ejmplo,
un empaque roto, una tubería floja o incluso un problema directamente en la bomba,
para ello hay que checar con el sistema expuesto el origen de las fugas, una vez
identificandolo podemos pasar a solucionar el problema.
<br/> <br/>
Otro motivo sería el uso de la bomba sin Glicol esto puede generar que el sello mecánico de la misma se dañe por falta de lubricación
									
										</p>
									</AccordionItemPanel>
								</AccordionItem>
                                <AccordionItem uuid="g">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        Obstrucción del Filtro de Bomba
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											Por residuos presentes al interior del sistema de enfriamiento, es recomendable un cuidado constante y conciente del equipo para evitar la caída de residuos al interior del mismo
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