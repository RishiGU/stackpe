import React, { useEffect, useState } from 'react'
import logo from '../img/StockPe.png';
import landing from '../img/Landing.png';
import { useHistory } from "react-router-dom"
import firebase from '../config/firebase';

import {updateAuth,getAuth} from '../redux/store';

import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

function Top() {
    const history = useHistory();
    const [stage2, setstage2] = useState(false)

    function configureRecapca() {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // console.log(response)
                authenticationOnStage1();
            }
        });
    }

    // update redirect by the auth enticaition of the user mobile 
    function authenticationOnStage1(e) {
        e.preventDefault()
        // take user mobile send opt
        const value = document.getElementById('inlineFormInputName2').value

        if (value) {
            
            // if value is in right format
            if (/^([0-9]{10})$/.test(value)) {
                configureRecapca()
                var phoneNumber
                if (!value.startsWith('+91')) {
                    phoneNumber = "+91" + value
                } else {
                    phoneNumber = value
                }
                console.log(phoneNumber)

                const appVerifier = window.recaptchaVerifier;
                firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
                    .then((confirmationResult) => {
                        window.confirmationResult = confirmationResult;
                        // console.log(confirmationResult)

                        // tostify the user that otp sent 
                        toast.success("OTP has been sent")

                        // update the stage
                        setstage2(true)

                    }).catch((error) => {
                        toast.error("SMS not sent")
                    });
            }else{
                // tosify to show the user error
                toast.error("wrong format of Numerber")
            }
        } else {
            toast.error("Number can not be empty")
        }
    }

    function authenticationOnStage2(e) {
        e.preventDefault()
        // request user otp and redirect to tologedin page

        const code = document.getElementById('inlineFormInputName2').value
        // console.log(code)

        window.confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            const user = result.user;
            
            // tostify the use success
            toast.success("Code verified 😄")
            
            // update the store and
            updateAuth(user) 

            console.log(getAuth())

            // redirect 
            history.push("/logedin");

        }).catch((error) => {
            toast.error('Wrong code!!');
        });
    }

    useEffect(() => {

    }, [])

    return (
        <section className="home">
            <div className="logo px-sm-5 px-2">
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                    <a className="navbar-brand" href="#" rel="noreferrer">
                        <img src={logo} alt="Stockpe"
                            className="stockpe_logo mx-sm-5 mx-2" />
                    </a>

                    <button id="nav-toggle-button" className="navbar-toggler collapsed styleReact"
                        type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mr-auto menu">
                            <li className="nav-item active">
                                <a className="nav-link" href="index.html">Home</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/TEAM/team.html">Our Team</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="Faq.html">FAQs</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="mailto:Hello@stockpe.tech">Contact</a>
                            </li>
                        </ul>
                        <div className="form-inline px-5">
                            <button className="btn btn-primary px-4" onClick={() => {
                                document.getElementById("carouselExampleIndicators").scrollIntoView()
                            }} >Get Started</button>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="section mt-sm-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="section1 col-lg-6">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active">
                                        <h2>Open a Stock<span>Pe</span> Learning Account</h2>
                                        <p>Instantly buy or sell stock token with just a click of a button.</p>
                                    </div>
                                    <div className="carousel-item">
                                        <h2>Learn Stock Trading and <span>Invest</span> like a Pro</h2>
                                        <p>Learn Stock Trading and invest simultaneously by practically learning </p>
                                    </div>
                                    <div className="carousel-item">
                                        <h2>Learn and Compete with your<span> Peers</span></h2>
                                        <p>Learn together with your peers, compete and get exciting returns</p>
                                    </div>
                                </div>
                            </div>
                            <div className="form_area" id="myDIV">
                                <form className="d-flex" id="contactForm">
                                    <div id="recaptcha-container">
                                    </div>
                                    {
                                        !stage2 &&
                                        <input
                                            type="number"
                                            className="form-control number "
                                            id="inlineFormInputName2"
                                            placeholder="Phone number"
                                            pattern="[6789][0-9]{9}"
                                            required
                                        />
                                    }
                                    {
                                        stage2 &&
                                        <input
                                            type="number"
                                            className="form-control number "
                                            id="inlineFormInputName2"
                                            placeholder="Your OTP"
                                            pattern="[0-9]{6}"
                                            required
                                        />
                                    }
                                    <button
                                        type="submit"
                                        className="btn btn-primary nav_btn"
                                        onClick={stage2 ? authenticationOnStage2 : authenticationOnStage1}>
                                        {stage2 ? "Veryfy" : "Get invite"}
                                    </button>
                                </form>
                            </div>
                            <div className="form_area styledIn" id="my2">
                                <div className="d-flex">
                                    <p>Thank You 😁. We will notify you once your invite is ready and served hot and
                                        fresh to your sms inbox.</p>
                                </div>
                            </div>
                        </div>

                        <div className="svg-container col-lg-6">
                            <img src={landing} alt="landing" className="landing_svg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Top
