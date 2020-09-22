import React, { Component } from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaDrupal } from "react-icons/fa";
import { FiX , FiMenu} from "react-icons/fi";
import Scrollspy from 'react-scrollspy'

const SocialShare = [
  {Social: <FaGithub /> , link: 'https://github.com/Renrhaf'},
  {Social: <FaDrupal /> , link: 'https://www.drupal.org/u/renrhaf'},
  {Social: <FaFacebookF /> , link: 'https://www.facebook.com/renrhaf'},
  {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/renrhaf'}
]

class HeaderThree extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);

       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded');
        })

    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }

    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }

    stickyHeader () {}

    render(){

        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 100) {
                document.querySelector('.header--fixed').classList.add('sticky')
            }else{
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
        });

        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const { logo, color='default-color' } = this.props;
        let logoUrl;
        if(logo === 'light'){
            logoUrl = <img src="/assets/images/logo/logo-light.png" alt="Fahrner Quentin, développeur web freelance" />;
        }else if(logo === 'dark'){
            logoUrl = <img src="/assets/images/logo/logo-dark.png" alt="Fahrner Quentin, développeur web freelance" />;
        }else if(logo === 'symbol-dark'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-light.svg" alt="Fahrner Quentin, développeur web freelance" />;
        }else if(logo === 'symbol-light'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-dark.svg" alt="Fahrner Quentin, développeur web freelance" />;
        }else{
            logoUrl = <img src="/assets/images/logo/logo.png" alt="Fahrner Quentin, développeur web freelance" />;
        }

        return(
            <header className={`header-area header-style-two header--fixed ${color}`}>
                <div className="header-wrapper">
                    <div className="header-left d-flex align-items-center">
                        <div className="logo">
                            <a href={this.props.homeLink}>
                                {logoUrl}
                            </a>
                        </div>
                        <nav className="mainmenunav d-lg-block ml--50">
                            <Scrollspy className="mainmenu" items={['home','about','service','portfolio','blog','contact']} currentClassName="is-current" offset={-200}>
                                <li><a href="#home">Accueil</a></li>
                                <li><a href="#about">A propos</a></li>
                                <li><a href="#service">Services</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </Scrollspy>
                        </nav>
                    </div>
                    <div className="header-right">
                        <div className="social-share-inner">
                            <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default HeaderThree;
