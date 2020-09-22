import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let
        tab1 = "Compétences",
        tab2 = "Expériences",
        tab3 = "Technologies",
        tab4 = "Diplômes";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a href="/service">Développement logiciel</a>
                                                    Conception de sites, d'applications mobiles et d'API personnalisées.
                                                </li>

                                                <li>
                                                    <a href="/service">Gestion de projet</a>
                                                    Analyse du besoin, estimation des coûts, suivi du projet, rédaction de spécifications.
                                                </li>

                                                <li>
                                                    <a href="/service">Audit technique</a>
                                                    Réalisation d'audits de performance, de sécurité, d'accessibilité.
                                                </li>

                                                <li>
                                                    <a href="/service">Hébergement & système</a>
                                                    Mise en place et supervision d'environnements adaptés aux solutions logicielles.
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                  <strong>2019</strong> - Consultant spécialisé en développement web<br/>
                                                  Expertise reconnue par l'entreprise CGI, mandat auprès de la Ville de Montréal.
                                                </li>

                                                <li>
                                                  <strong>2017</strong> - Lead développeur web<br/>
                                                  Perfectionnement au sein de l'agence web Skazy, localisée à Nouméa.
                                                </li>

                                                <li>
                                                  <strong>2012</strong> - Développeur web<br/>
                                                  Première expérience professionnelle dans l'agence web Actency à Strasbourg.
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <strong>Frameworks</strong><br/>
                                                   Drupal / Symfony / Node.JS / React / jQuery
                                               </li>

                                               <li>
                                                   <strong>Langages</strong><br/>
                                                   PHP / SQL / Javascript / HTML / SASS
                                               </li>

                                               <li>
                                                   <strong>Bases de données</strong><br/>
                                                   MySQL / PostgreSQL / MongoDB / Redis
                                               </li>

                                               <li>
                                                   <strong>Systèmes</strong><br/>
                                                   Linux / OSX / Windows / Android / iOS
                                               </li>

                                               <li>
                                                   <strong>Autres outils</strong><br/>
                                                   ElasticSearch / SOLR / xDebug / Blackfire / Docker / Kubernetes
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                  <strong>Master Ingénierie du Logiciel et des Connaissances</strong><br/>Université de Strasbourg - 2014
                                               </li>

                                               <li>
                                                  <strong>Licence Informatique</strong><br/>Université de Strasbourg - 2012
                                               </li>

                                               <li>
                                                   <strong>DUT Informatique</strong><br/>IUT Robert Schuman, Strasbourg - 2011
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;
