import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const Faqfremp= () => {
    return (
        <div className="faq-area bg-2 ptb-100">
			<div className="container">
				<div className="section-title">
					<span className="top-title">EMP</span>
					<h2>Manuel d'entretien </h2>
					<p>Manuel de service Web en trois langues pour l'équipement de paleteros de la ligne Emerymark EMP, si vous avez une situation ou une question qui n'est pas décrite ou qui n'a pas de réponse dans le manuel, vous pouvez laisser vos données dans le formulaire ci-dessous et un technicien vous contactera à bref délai</p>
				</div>

				<div className="row align-items-center">
					
					
					<div className="col-lg-12">
						<div className="faq-accordion">
							<Accordion allowZeroExpanded preExpanded={['a']}>
								<AccordionItem uuid="a">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        Plages de fréon haute et basse pression recommandées pour tous les modèles EMP
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<table className="table">
                                            <tr>
                                                <td>Haute pression</td>
                                                <td>Basse pression</td>
                                            </tr>
                                            <tr>
                                                <td>220 - 300  livres/po2</td>
                                                <td>9 - 45  livres/po2</td>
                                            </tr>
                                        </table>
									</AccordionItemPanel>
								</AccordionItem>

								<AccordionItem uuid="b">
									<AccordionItemHeading>
										<AccordionItemButton>
										Plage de lecture d'ampérage recommandée non sous charge et sous charge pour les
                                        tests
                                        du moteur de pompe (EMP) pour chaque modèle.
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
                                    <table className="table">
                                            <tr>
                                                <td>Modèle</td>
                                                <td>Gamme d'ampérage</td>
                                            </tr>
                                            <tr>
                                                <td>EMP-200 o EMP-500</td>
                                                <td>2 - 5 A</td>
                                            </tr>
                                            <tr>
                                                <td>EMP-1500</td>
                                                <td>3 - 8 A</td>
                                            </tr>
                                            <tr>
                                                <td>EMP-3000 </td>
                                                <td>3 - 11 A</td>
                                            </tr>
                                        </table>
									</AccordionItemPanel>
								</AccordionItem>

								<AccordionItem uuid="c">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        Volts appropriés pour chaque contacteur dans la boîte électrique (quelles jambes
devraient être 220v
et lequel de 115v). Si nous avons une jambe de dard, que devrait-elle être?
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
										Mesurez la tension entre les câbles des couleurs suivantes avec un multimètre.
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
                                                <td>Noir </td>
                                                <td>blanc </td>
                                                <td>220v</td>
                                            </tr>
                                            <tr scope="row">
                                                 <td>Noir </td>
                                                <td>rouge </td>
                                                <td>220v</td>
                                            </tr>
                                            <tr scope="row">
                                                <td>blanc </td>
                                                <td>rouge </td>
                                                <td>220v</td>
                                            </tr>
                                            <tr scope="row">
                                                <td>vert</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </table>
                                        <h6>Remarque: la tension ne doit pas descendre en dessous de 205 ni dépasser 230 pour les
tests suivants sauf vert</h6>
                                        <p>La jambe de Stinger est rouge</p>
                                    </AccordionItemPanel>
								</AccordionItem>

								<AccordionItem uuid="d">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        Quelles sont les pressions de bouclier fréon hautes et basses auxquelles le
capteur de chaque machine et dans quelles conditions peuvent-ils être changés?


										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
                                        Le réglage de la pression est élevé lorsqu'ils sont condensés dans l'air pour toutes les
machines doit être de 350 psi lorsque la machine est condensée par l'air la protection se
produit en haute pression à 310 psi, les machines sont protégées par une basse pression à
2 livres
Aucune cuisinière n'est mobile, si l'endroit est trop mobile, si la pièce où elle opère est trop
chaude, il faut trouver un moyen de les refroidir, il y a risque de
Dommages au compresseur s'il est protégé au-dessus de 350 psi, les dommages au
compresseur libéreraient de l'huile dans le système et empêcheraient le bon fonctionnement

                                        </p>
									</AccordionItemPanel>
								</AccordionItem>

								<AccordionItem uuid="e">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        Le réglage de la vanne d'eau dans laquelle toutes les machines sont programmées. La
poignée de la vanne grise est-elle toujours programmée sur le même réglage?


										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
                                        Cette vanne doit toujours être programmée au numéro 3, qui est exactement là où la
circulation de l'eau est coupée, une fois qu'elle est libérée, cette pression doit être comprise
entre 260-280 psi, elle peut être ajustée en même temps.
numéro 2 cela vous permettra d'accéder à l'eau à une pression plus basse, c'est-à-dire qu'il
se libèrera à 240-250 psi, il est recommandé de toujours conduire jusqu'au numéro 3 au
moment où il quitte l'usine

                                    
                                    	</p>
									</AccordionItemPanel>
								</AccordionItem>
                                <AccordionItem uuid="f">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        Problèmes possibles avec les réglages des vannes d'eau et
les connexions pour les tours de refroidissement et certains réglages pouvant être effectués
par un technicien

										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<ul>
                                            <li>
                                            Dans le mauvais sens, la sortie de la tour était connectée à l'entrée d'eau, c'est-à-dire qu'elle
était connectée à l'envers
                                            </li>
                                            <li>
                                            Obstruction de la soupape d'entrée de la tour
                                            </li>
                                            <li>
                                            Le ventilateur pousse l'air dans la tour au lieu de le retirer
                                            </li>
                                            <li>
                                            Bulles d'air à l'intérieur de la pompe

                                            </li>
                                        </ul>
									</AccordionItemPanel>
								</AccordionItem>
                                <AccordionItem uuid="g">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        Un tableau avec les HP du compresseur de chaque modèle, la pression d'aspiration du
cylindre, la pression de tête, la charge de fluide frigorigène, et la consommation d'eau
fonctionnant à 80% de sa capacité.
                                        
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
                                        Schéma de câblage pour chaque modèle; à inclure également dans le manuel et dans
le
coffret électrique de chaque machine.


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
                                        Description de la manière dont l'énergie circule dans la machine.

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

export default Faqfremp;