import React from 'react';

import FooterLogo from '../assets/images/logo-banner.png';
import { Link as ScrollLink } from 'react-scroll';

const getCurrentYear = () => {
    return new Date().getFullYear();
};

const Footer = () => {
    return (
        <div>
            <section className="mailchimp-one">
                <div className="container wow fadeInUp">
                    <div className="inner-container">
                        <div className="mailchimp-one__icon">
                            <i className="apton-icon-mail" />
                        </div>
                        <form
                            action="https://mailto:mealmatchio@gmail.com"
                            className="mailchimp-one__form"
                        >
                            <input
                                type="text"
                                placeholder="Signup for the latest news and updates"
                                name="email"
                            />
                            <button
                                className="thm-btn mailchimp-one__btn"
                                type="submit"
                            >
                                <span>Subscribe</span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <footer className="site-footer">
                <div className="site-footer__upper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="footer-widget footer-widget__about">
                                    <a href="index.html">
                                        <img
                                            src={FooterLogo}
                                            width="129"
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="footer-widget__links-wrap">
                                    <div className="footer-widget">
                                        <h3 className="footer-widget__title">
                                            About
                                        </h3>
                                        <ul className="list-unstyled footer-widget__links-list">
                                            <li>
                                                <a href="#">Contact</a>
                                            </li>
                                            <li>
                                                <a href="#">Services</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer-widget">
                                        <h3 className="footer-widget__title">
                                            Explore
                                        </h3>
                                        <ul className="list-unstyled footer-widget__links-list">
                                            <li>
                                                <a href={'#'}>Home</a>
                                            </li>
                                            <li>
                                                <a href="#">Download</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer-widget">
                                        <h3 className="footer-widget__title">
                                            Legal
                                        </h3>
                                        <ul className="list-unstyled footer-widget__links-list">
                                            {/* <li> */}
                                            {/*    <a href="#">Help</a> */}
                                            {/* </li> */}
                                            <li>
                                                <a href="#">Privacy Policy</a>
                                            </li>
                                            <li>
                                                <a href="#">Terms of Use</a>
                                            </li>
                                            {/* <li> */}
                                            {/*    <a href="#">Services</a> */}
                                            {/* </li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-3 d-flex align-items-center justify-content-xl-end justify-content-lg-end justify-content-md-center justify-content-sm-center"> */}
                            {/*    <div className="footer-widget"> */}
                            {/*        <div className="footer-widget__social"> */}
                            {/*            <a href="#"> */}
                            {/*                <i className="fab fa-facebook-square"></i> */}
                            {/*            </a> */}
                            {/*            <a href="#"> */}
                            {/*                <i className="fab fa-twitter"></i> */}
                            {/*            </a> */}
                            {/*            <a href="#"> */}
                            {/*                <i className="fab fa-instagram"></i> */}
                            {/*            </a> */}
                            {/*            <a href="#"> */}
                            {/*                <i className="fab fa-pinterest-p"></i> */}
                            {/*            </a> */}
                            {/*        </div> */}
                            {/*    </div> */}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                <div className="site-footer__bottom">
                    <div className="container text-center">
                        <p>© Copyright {getCurrentYear()} Gary Chiu</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
