import React from 'react';
import {FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaMedium, FaGithub, FaDrupal, FaMapMarkedAlt, FaSoundcloud, FaCamera, FaPaypal, FaDigitalOcean} from "react-icons/fa";

const SocialShare = [
    {Social: <FaMedium /> , link: 'https://medium.com/@quentinfahrner'},
    {Social: <FaGithub /> , link: 'https://github.com/Renrhaf'},
    {Social: <FaDrupal /> , link: 'https://www.drupal.org/u/renrhaf'},
    {Social: <FaMapMarkedAlt /> , link: 'https://www.google.com/maps/contrib/102415339571858549164/reviews'},
    {Social: <FaSoundcloud /> , link: 'https://soundcloud.com/renrhaf'},
    {Social: <FaCamera /> , link: 'https://unsplash.com/@renrhaf'},
    {Social: <FaPaypal /> , link: 'https://paypal.me/renrhaf'},
    {Social: <FaDigitalOcean /> , link: 'https://m.do.co/c/d94fbe94ff7f'},
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/renrhaf'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/renrhaf'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/renrhaf'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/Renrhaf'},
]

const date = new Date();
const year = date.getFullYear();

const FooterTwo = () => {
    return (
        <div className="footer-style-2 ptb--30 bg_image bg_image--1" data-black-overlay="6">
            <div className="wrapper plr--50 plr_sm--20">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-12">
                        <div className="inner text-center">
                            <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="inner text-center mt--20">
                            <div className="text">
                                <p>Copyright © {year} Quentin Fahrner. Tous droits réservés.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterTwo;
