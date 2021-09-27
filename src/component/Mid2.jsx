import React from 'react'

import Low from "../img/Low.png";
import tenx from "../img/10x.png";
import implement from "../img/implement.png";


export default function Mid2() {
    return (
        <section className="mid_section p-5">
            <div className="container-fluid">
                <h2 className="text-center mb-4 heading">How we help you learn and invest</h2>
                <div className="row text-center p-sm-5">
                    <div className="col-lg-4">
                        <img src={Low} className="img-fluid svg" alt="Responsive image"/>
                        <h3>Low investment</h3>
                        <p>As students invest the minimum amount and get the maximum returns</p>
                    </div>
                    <div className="col-lg-4">
                        <img src={tenx} className="img-fluid svg" alt="Responsive image"/>
                        <h3>10x rewards</h3>
                        <p>Just with tiny bit of investment leading to maximum rewards</p>
                    </div>
                    <div className="col-lg-4">
                        <img src={implement} className="img-fluid svg" alt="Responsive image"/>
                        <h3>Learn & implement in real time</h3>
                        <p>Simplied market tips in a capsule form for you to learn & implement in real time</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
