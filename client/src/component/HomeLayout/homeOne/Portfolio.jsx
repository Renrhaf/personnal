import React, { Component } from "react";
import Slider from "react-slick";

const portfolioSlickSettings = {
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  responsive: [{
    breakpoint: 800,
    settings: {
      slidesToShow: 3,
    }
  },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

const PortfolioList = [
    {
        image: 'image-1',
        category: 'Développement',
        title: 'Amélioration du site internet d\'un guide de pêche.'
    },
    {
        image: 'image-2',
        category: 'Réseaux sociaux',
        title: 'Gestion des pages instagram d\'un couple d\'artisans locaux.'
    }
]

class Portfolio extends Component{
    render(){
        let title = 'Références',
        description = 'Découvrez mes réalisations passées, et peut être la vôtre ira-t\'elle bientôt rejoindre cette belle collection ?';
        return(
            <React.Fragment>
                <div className="portfolio-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-slick-activation mt--70 mt_sm--40">
                        <Slider {...portfolioSlickSettings}>
                            {PortfolioList.map((value , index) => (
                                <div className="portfolio" key={index}>
                                    <div className="thumbnail-inner">
                                        <div className={`thumbnail ${value.image}`}></div>
                                        <div className={`bg-blr-image ${value.image}`}></div>
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <p>{value.category}</p>
                                            <h4><a href="/portfolio-details">{value.title}</a></h4>
                                            <div className="portfolio-button">
                                                <a className="rn-btn" href="/portfolio-details">En savoir plus</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Portfolio;
