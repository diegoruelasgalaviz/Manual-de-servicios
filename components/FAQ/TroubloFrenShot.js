import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const TroubloFrenShot = () => {
    return (
        <div className="faq-area bg-2 ptb-100">
			<div className="container">
				<div className="section-title">
					<span className="top-title">EMP</span>
					<h2>Dépannage</h2>
					<p>Manuel de service Web en trois langues pour l'équipement de paleteros de la ligne Emerymark EMP, si vous avez une situation ou une question qui n'est pas décrite ou qui n'a pas de réponse dans le manuel, vous pouvez laisser vos données dans le formulaire ci-dessous et un technicien vous contactera à bref délai</p>
				</div>

				<div className="row align-items-center">
					
					
					<div className="col-lg-12">
						<div className="faq-accordion">
							<Accordion allowZeroExpanded preExpanded={['a']}>
								<AccordionItem uuid="a">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        Manque de refroidissement:
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
                                        il est possible qu'il y ait une obstruction ou une carence dans la
circulation dans le système de refroidissement de l'équipement de la palette, vérifiez le filtre
de la pompe s'il y a des résidus piégés à l'intérieur, vérifiez l'état de la pompe et du
compresseur, prenez des mesures comme observé

										</p>
									</AccordionItemPanel>
								</AccordionItem>

								<AccordionItem uuid="b">
									<AccordionItemHeading>
										<AccordionItemButton>
										Long temps de refroidissement:
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
                                        cela peut se produire en raison d'une mauvaise circulation
dans le système de refroidissement, ne laissant pas une distance adéquate aux côtés de la
machine qui permet un flux d'air correct, en raison d'une température très élevée dans
l'environnement de la machine, en raison de une fuite de glycol ou par l'utilisation d'un glycol
avec une gradation incorrecte, rappelez-vous que la gradation correcte du glycol est de 50%
- 50% de glycol, une gradation différente de glycol peut être utilisée, mais elle doit toujours
être supérieure à 50% jamais moins



										</p>
									</AccordionItemPanel>
								</AccordionItem>

								<AccordionItem uuid="c">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        Équipement monophasé Endommagement du condensateur de démarrage
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
                                        Problème de circulation du glycol dans la baignoire
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
                                        Ne met pas en marche la pompe de la machine Paletera:


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
                                        Fuite de glycol dans la palette:

										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
                                        si lors de l'utilisation de votre équipement vous constatez que
la machine fuit ou que le glycol s'épuise trop rapidement, il est fort probable que nous ayons
affaire à une fuite de glycol, il y a plusieurs causes par lesquelles une fuite de glycol, pour
exemple, un joint cassé, un tuyau desserré ou même un problème directement dans la
pompe, pour cela nous devons vérifier la source des fuites avec le système exposé, une fois
que nous l'avons identifié, nous pouvons procéder à la résolution du problème

										</p>
									</AccordionItemPanel>
								</AccordionItem>
                                <AccordionItem uuid="g">
									<AccordionItemHeading>
										<AccordionItemButton>
                                        Obstruction du filtre de la pompe ou circulation de la même palette 
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

export default TroubloFrenShot;