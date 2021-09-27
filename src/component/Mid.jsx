import React from 'react';

import Tournament from "../img/Tournament.png";
import implement from "../img/implement.png";
import Rewards from "../img/Rewards.png";
import withimg from "../img/with.png";


export default function Mid() {
    return (
        <section className="mid_section p-5">
            <div className="container-fluid">
                <h2 className="text-center mb-4 heading">How does StockPe work?</h2>
                <div className="row text-center p-sm-5 ">
                    <div className="col-lg-3 check">
                        <img src={Tournament} className="img-fluid svg" alt="Responsive image"/>
                        <h3>Enter into tournament</h3>
                        <p>Tournament will help you learn the basics of stock market</p>
                    </div>
                    <div className="col-lg-3">
                        <img src={implement} className="img-fluid svg" alt="Responsive image"/>
                        <h3>Learn and implement</h3>
                        <p>Get simplified market insights and test out your hypothesis in real time</p>
                    </div>
                    <div className="col-lg-3">
                        <img src={Rewards} className="img-fluid svg" alt="Responsive image"/>
                        <h3>Unbelievable returns</h3>
                        <p>win 10x or 20x prize and ace the leaderboard</p>
                    </div>
                    <div className="col-lg-3">
                        <img src={withimg} className="img-fluid svg" alt="Responsive image"/>
                        <h3>Easy withdraw</h3>
                        <p>You can withdraw anytime or stay and learn more</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
