import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class Testimonial extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12">
                        <Tabs>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>J'ai été très satisfait de travailler avec Quentin, très compétent sur plusieurs technologies et par ailleurs très ouvert d'esprit. il a été d'une implication importante dans la qualité de ses réalisations.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Hatem Bellagi </span> - Directeur, Skazy.</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Quentin est un excellent développeur, soucieux des standards et bonnes pratiques, est toujours prêt à relever des challenges. Il a pu nous en faire la preuve dans le cadre de projets de grande ampleur sur le territoire Calédonien.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Olivier Grauer </span> - Responsable pôle web, Skazy.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Le travail de Quentin est irréprochable. Il sait partager son savoir-faire avec patience et sympathie. Ensemble, nous avons travaillé sur des projets complexes techniquement et son expertise a été une aide bienveillante.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Hugo Anthofer </span> - Développeur front, Skazy.</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Quentin est un développeur d'exception. C'est en tout cas l'idée que je me suis fait de lui pendant les quelques années où il a travaillé chez Actency. Je le recommande fortement a toute équipe souhaitant miser sur un collaborateur de confiance.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Mathieu Gros </span> - CEO @ Actency, Expert Drupal & Président de L'Alliance.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>En plus d'être un très bon développeur, Quentin est une personne de qualité et de confiance ! Je suis fier d'avoir été son manager et lui souhaite beaucoup de réussite dans sa nouvelle vie professionnelle.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Cyrille Imbernon </span> - Directeur de BA Talent Sourcing, Actency.</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Excellent développeur et tout aussi excellent collègue. Parfaite maîtrise de PHP et Symfony. Rigueur de travail, autonomie, implication, compréhension des problématiques et respect des engagements sont quelques une des qualités de Quentin.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Thiebaud Schmittlin </span> - DevOps, Architecte cloud, Actency.</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabList className="testimonial-thumb-wrapper">
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/hatem-bellagi.jpg" alt="Retour de Hatem Bellagi"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/olivier-grauer.jpg" alt="Retour de Olivier Grauer"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/hugo-anthofer.jpg" alt="Retour de Hugo Anthofer"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/mathieu-gros.jpg" alt="Retour de Mathieu Gros"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/cyrille-imbernon.jpg" alt="Retour de Cyrille Imbernon"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/thiebaud-schmittlin.jpg" alt="Retour de Thiebaud Schmittlin"/>
                                        </div>
                                    </div>
                                </Tab>
                            </TabList>
                        </Tabs>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Testimonial;
