import React, {Component} from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";
import ContactThree from "../elements/contact/ContactThree";
import ServiceList from "../elements/service/ServiceList";
import Portfolio from "../component/HomeLayout/homeOne/Portfolio";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import BlogList from "../elements/blog/BlogList";

class PortfolioLanding extends Component {

  render() {
      const title = 'Qui suis-je ?';
      const description = "Expert développement web et applicatif avec plus de <strong>8 ans d'expérience</strong>.<br/>" +
          "J'ai forgé mon expérience dans des environnements variés (agence web, firme de consulting, etc) et sur des projets d'envergure.<br/>" +
          "J'apporte mon soutien à des projets open source en contribuant dès que le temps me le permet.<br/>";

      const SlideList = [
        {
          textPosition: 'text-left',
          category: '',
          description: '',
          buttonText: '',
          buttonLink: ''
        }
      ]

      return (
          <div className="active-dark">
            <Helmet pageTitle="Accueil"
                    pageDescr="Quentin Fahrner est un développeur web freelance proposant ses services en développement logiciel, hébergement, audits techniques, gestion de projet et formation."/>

            <HeaderThree homeLink="/" color="color-black"/>

            <div id="home" className="fix">
              <div className="slider-wrapper">
                {SlideList.map((value, index) => (
                    <div
                        className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25"
                        key={index}>
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className={`inner ${value.textPosition}`}>
                              {value.category ?
                                  <span>{value.category}</span> : ''}
                              <h1 className="title">Confiez-moi <br/>
                                <TextLoop>
                                  <span> La conception de votre app.</span>
                                  <span> Un audit de votre code.</span>
                                  <span> L'hébergement de votre site.</span>
                                  <span> L'analyse de vos besoins.</span>
                                  <span> La gestion de votre projet.</span>
                                  <span> L'envoi de vos newsletters.</span>
                                  <span> La traduction de vos textes.</span>
                                  <span> L'optimisation de votre référencement.</span>
                                </TextLoop>{" "}
                              </h1>
                              <h2>Quentin Fahrner, développeur web freelance
                                basé à Strasbourg (France).</h2>
                              {value.description ?
                                  <p className="description">{value.description}</p> : ''}
                              {value.buttonText ? <div className="slide-btn"><a
                                  className="rn-button-style--2 btn-primary-color"
                                  href={`${value.buttonLink}`}>{value.buttonText}</a>
                              </div> : ''}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>

            <div id="about" className="fix">
              <div className="about-area ptb--120  bg_color--1">
                <div className="about-wrapper">
                  <div className="container">
                    <div className="row row--35 align-items-center">
                      <div className="col-lg-5">
                        <div className="thumbnail">
                          <img className="w-100"
                               src="/assets/images/about/about-custom.jpg"
                               alt="Portrait de Quentin Fahrner"/>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="about-inner inner">
                          <div className="section-title">
                            <h2 className="title">{title}</h2>
                            <p className="description"
                               dangerouslySetInnerHTML={{__html: description}}></p>
                          </div>
                          <div className="row mt--30">
                            <TabTwo tabStyle="tab-style--1"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rn-counterup-area pt--25 pb--110 bg_color--1">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title text-center">
                      <h3 className="fontWeight500">Quelques chiffres</h3>
                    </div>
                  </div>
                </div>
                <CounterOne/>
              </div>
            </div>

            <div id="service" className="fix">
              <div className="service-area creative-service-wrapper ptb--120 bg_color--5">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                        <h2 className="title">Comment puis-je vous aider ?</h2>
                        <p>Consultez ci-dessous les différents services et
                          expertises proposés. La qualité et la satisfaction client est
                          ma principale préoccupation.</p>
                      </div>
                    </div>
                  </div>

                  <div className="row creative-service">
                    <div className="col-lg-12">
                      <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-footer text-center service-style--2 mt--50 mb_sm--0">
                        <p><strong>Vous recherchez quelque chose de plus
                          exotique ?</strong><br/>N'hésitez pas à me contacter,
                          nous en discuterons autour d'un petit café ! Je
                          pourrais faire appel à mon réseau de partenaires de
                          confiance pour des prestations annexes d'optimisation
                          SEO, de montage vidéo, de création graphiques, d'envoi
                          de newsletter, de rédaction web, de traduction...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="portfolio" className="fix">
              <div className="portfolio-area ptb--120 bg_color--1">
                <div className="portfolio-sacousel-inner mb--55">
                  <Portfolio/>
                </div>
              </div>
            </div>

            <div className="rn-testimonial-area bg_color--1 pb--120">
              <div className="container">
                <Testimonial/>
              </div>
            </div>

            <div id="blog" className="fix">
              <div className="rn-blog-area ptb--120 bg_color--5 mb-dec--30">
                <div className="container">
                  <div className="row align-items-end">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="section-title text-center">
                        <h2>Derniers articles</h2>
                        <p>
                          J'aime écrire sur divers sujets, comme les voyages,
                          les randonnées, la nature ou bien même des articles
                          techniques.<br/>
                          Consultez mon profil <a href="https://medium.com/@quentinfahrner">Medium</a> si
                          vous souhaitez en savoir plus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <BlogList/>
                </div>
              </div>
            </div>

            <div id="contact" className="fix">
              <div className="rn-contact-area ptb--120 bg_color--1">
                <ContactThree
                    contactImages="/assets/images/about/about-contact.jpg"
                    contactTitle="Contactez moi"/>
              </div>
            </div>

            <FooterTwo/>

            <div className="backto-top">
              <ScrollToTop showUnder={160}>
                <FiChevronUp/>
              </ScrollToTop>
            </div>

          </div>
      )
    }
}

export default PortfolioLanding;
