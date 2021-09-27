import React, { useEffect } from 'react'

import scores from '../img/Scores.png';
import Po from '../img/Po.png';
import Wit from '../img/Wit.png';


import Top from '../component/Top'
import Timmer from '../component/Timmer'
import Mid from '../component/Mid';
import Mid2 from '../component/Mid2';
import Mid3 from '../component/Mid3';


import Footer from '../component/Footer'

import '../css/homeStyle.css'



function Home() {
    useEffect(() => {
        document.title = "StockPe | Home"

    }, [])
    return (
        <div>
            <Top />
            <Timmer />
            <section className="home">
                <img src={scores} alt="img1" className="score" />
            </section>
            <Mid />
            <section className="home">
                <img src={Po} alt="img1" className="score" />
            </section>
            <Mid2 />
            <section class="home">
                <img src={Wit} alt="img1" class="score" />
            </section>
            <Mid3 />
            <Footer />
        </div>

    )
}

export default Home;
