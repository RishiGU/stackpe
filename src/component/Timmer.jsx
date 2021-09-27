import React from 'react'

import design from '../img/Tournament design.png';

export default function Timmer() {
    // Set the date we're counting down to
    const countDownDate = new Date("August 1, 2021 00:00:00").getTime();

    // Update the count down every 1 second
    const x = setInterval(() => {

        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
            minutes + "m " + seconds + "s ";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
    return (
        <section className="timer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 png_area">
                        <img src={design} alt="design" className="design" />
                    </div>
                    <div className="col-lg-6 text_area align-middle">
                        <h1 className="align-middle">Can you predict the market?</h1>
                        <p>Join in our tournament and compete with your friendsto learn the market basics and win exciting
                            prizes</p>
                    </div>
                    <div className="col-lg-3 btn__area">
                        <p id="demo" className="timmer"></p>
                        <button
                            type="button"
                            className="btn btn-primary btn-lg timer_btn " onClick={() => {
                                document.getElementById("carouselExampleIndicators").scrollIntoView()
                            }}>Let’s
                            Go!
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
