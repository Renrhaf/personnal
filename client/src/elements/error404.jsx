import React, { Component } from 'react';
import Header from "../component/header/HeaderFour";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Footer from "../component/footer/FooterTwo";

class error404 extends Component {

    render() {
        return (
            <>
                <Header headerPosition="header--transparent" color="color-white" />

                {/* Start Page Error  */}
                <div className="error-page-inner bg_color--4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner">
                                    <h1 className="title theme-gradient">404!</h1>
                                    <h3 className="sub-title">Page introuvable</h3>
                                    <span>La page recherchée n'existe pas.</span>
                                    <div className="error-button">
                                        <a className="rn-button-style--2 btn-solid" href="/">Retour à l'accueil</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Error  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                <Footer />
            </>
        )
    }
}

export default error404;
