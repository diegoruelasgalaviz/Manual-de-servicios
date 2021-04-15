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
										<table className="table">
                                            <tr>
                                                <td>Alta Presión</td>
                                                <td>Baja Presión</td>
                                            </tr>
                                            <tr>
                                                <td>220 - 300 psi</td>
                                                <td>45 psi al empezar el ciclo y<br/> 9 psi al estar a baja temperatura <br/>(-23 grados celcius aproximadamente) </td>
                                            </tr>
                                        </table>
									</AccordionItemPanel>
								</AccordionItem>

								<AccordionItem uuid="b">
									<AccordionItemHeading>
										<AccordionItemButton>
										Rango de lectura de amperaje recomendado no bajo carga y bajo carga para la prueba del motor de bomba (EMP) para cada modelo.
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
                                    <table className="table">
                                            <tr>
                                                <td>Modelo</td>
                                                <td>Rango de amperaje</td>
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
                                        Voltios adecuados para cada contactor de la caja eléctrica (qué patas deben ser de 220v y cuáles de 115v). Si tenemos una pata de aguijón, ¿cuál debe ser?
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											Medir con un voltimetro el voltaje entre los cables de los siguientes color.
										</p>
                                        <table className="table">
                                            <thead className="thead-dark">
                                            <tr >
                                                <th scope="col">Color A</th>
                                                <th scope="col">Color B</th>
                                                <th scope="col">Voltaje</th>
                                            </tr>
                                            </thead>
                                            
                                            <tr scope="row">
                                                <td>Negro</td>
                                                <td>Blanco</td>
                                                <td>220v</td>
                                            </tr>
                                            <tr scope="row">
                                                 <td>Negro</td>
                                                <td>rojo</td>
                                                <td>220v</td>
                                            </tr>
                                            <tr scope="row">
                                                <td>Blanco</td>
                                                <td>rojo</td>
                                                <td>220v</td>
                                            </tr>
                                            <tr scope="row">
                                                <td>verde</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </table>
                                        <h6>Nota: El voltaje no debe caer por debajo de 198 o elevarse por encima de 242 para las siguientes pruebas excepto verde</h6>
                                        <p>La pata de Aguijón es la Roja</p>
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
                                        El ajuste de las presiones es en Alta cuando son condensadas en aire para todas las
máquinas deben de ser 350 psi, cuando la máquina es condensada por agua la protección
ocurre en alta presión en 310 psi, las máquinas se protegen por baja presión a 2 libras
ningún rango es movible, si el lugar carece de ventilación, Si el recinto donde se opera es
demasiado caliente se debe buscar una manera de enfriarlas, ahí riesgo de
daño en el compresor si se protege arriba de 350 psi, el daño en el compresor liberaría
aceite en el sistema obstaculizando el funcionamiento apropiado
                                        </p>
									</AccordionItemPanel>
								</AccordionItem>

								<AccordionItem uuid="e">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        El ajuste de la válvula de agua en la que están programadas todas las máquinas. ¿La manija gris de la válvula está siempre programada en el mismo ajuste?

										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>


                                        Esta válvula debe estar siempre programada en el número 3 que es justo en donde corta la
circulación del agua, una vez que libera, esa presión debe ser entre 260- 280 psi, se puede
regular al
número 2 esto te va a permitir el acceso del agua a menor presión, es decir va a liberar a
240-250 psi, lo recomendable es que siempre se maneje al número 3 justo como sale de
fábrica
                                    
                                    	</p>
									</AccordionItemPanel>
								</AccordionItem>
                                <AccordionItem uuid="f">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        Posibles problemas con los ajustes de las válvulas de agua y las conexiones para las torres de enfriamiento y algunos ajustes que puede hacer un técnico

										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>Información correspondiente a los equipos enfriados por agua</p>
										<ul>
                                            <li>
                                            De manera equivocada se Conectó la salida de la torre a la entrada del agua, es decir que
se conectó a la inversa
                                            </li>
                                            <li>
                                            Obstrucción de la válvula de entrada de la torre por basura u objetos ajenos al sistema de circulación del agua

                                            </li>
                                            <li>
                                            El ventilador empuja el aire hacia adentro de la torre en vez de sacarlo
                                            </li>
                                            <li>
                                            Burbujas de aire dentro de la bomba

                                            </li>
                                        </ul>
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
										<h6>
											EMP 200 - EMP - 500
	
										</h6>

										<img src="/img/caja-electrica/cajaelectrica200-500.png"/>
										<h6>
											EMP 1500
	
										</h6>

										<img src="/img/caja-electrica/cajaelectrica1500.png"/>
										<h6>
											EMP 3000
	
										</h6>

										<img src="/img/caja-electrica/cajaelectrica3000.png"/>
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
								<AccordionItem uuid="j">
									<AccordionItemHeading>
										<AccordionItemButton>
                                       Limpieza del filtro.

										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<ul>
											<li>La máquina se debe encontrar fuera de funcionamiento</li>
											<li>Ubicar la línea de succión de la bomba</li>
											<li>Cerrar el maneral naranja de succión</li>
											<li>Posterior ubicar línea de descarga de la bomba, cerrar maneral naranja de desacarga de la bomba</li>
											<li>Ubicar filtro "Y" que es un tapón de bronce hexagonal </li>
											<li>Aflojar el tapón y sacar el cedazo interno, limpiar de residuos, volverlo a poner en su posición, volver a colocar el tapón de bronce </li>
											<li>Abrir los dos manerales naranjas</li>
										</ul>
										<br/>
										<h6>Nota: No es necesario sacar el glicol de la tina, pues para eso se cierran los dos manerales, repetir esto cada vez que se note un bajo recirculamiento del glicol</h6>
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