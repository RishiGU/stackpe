import React from 'react'
import logo from '../img/StockPe.png';
import button from '../img/button.png';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';
import linkedin from '../img/linkedin.png';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-sm-5  p-3">
                <div className="container-fluid px-sm-5">
                    <div className="logo pt-4 pt-sm-0">
                        <img src={logo} className="footer_logo" alt="footer_logo" />
                    </div>
                    <div className="row">
                        <div className="col-lg-3 pt-4">
                            <strong>About</strong>
                            <br />
                            <p className="para">We are simplifying stocks to create a new era of financially educated students
                                in India.</p>
                        </div>
                        <div className="col-lg-3 px-sm-5 pt-4 ">
                            <strong>Get in touch</strong>
                            <p className="para">Questions or feedbacks?
                                We would love to hear from you</p>
                            <strong>Email us at</strong>
                            <br />

                            <a href="mailto:Hello@stockpe.tech" className="email" target="_blank">Hello@stockpe.tech</a>
                        </div>
                        <div className="col-lg-3 px-sm-5 pt-4  btn_area">
                            <strong>Get our app</strong>
                            <br />
                            <a href="#carouselExampleIndicators"><img src={button} alt="playstore"
                                className="btn_svg" /></a>
                        </div>
                        <div className="col-lg-3 pt-4 px-sm-5 social">
                            <strong>Social Media</strong>
                            <br />

                            <div>
                                <a href="#" rel="noreferrer" target="_blank"><img src={facebook} alt="facebook"
                                    className="social_svg" /></a>
                                <a href="#" rel="noreferrer" target="_blank"><img src={instagram} alt="instagram"
                                    className="social_svg" /></a>
                                <a href="#" rel="noreferrer" target="_blank"><img src={linkedin} alt="linkedin"
                                    className="social_svg" /></a>
                            </div>
                        </div>
                        <div className="container-fluid pt-5">
                            <div className="row">
                                <div className="col-lg-3">
                                    <p className="p2">© 2021 StockPe | All Rights Reserved.</p>
                                </div>
                                <div className="col-lg-6">
                                    <p className="p1">Made with &#10084;&#65039; for Indians</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}


export default Footer
