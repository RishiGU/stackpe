import React from 'react'

import Need from "../img/Need.svg"
import Customer from "../img/Customer.svg"


export default function Mid3() {
    return (
        <section className="mid_section p-5">
            <div className="mid1">
                <div className="headings">
                    <h2 className="text-center mb-4 heading">We are available 24 X 7 </h2>
                </div>
                <div className="help_svg">
                    <img src={Need} alt="need_help" className="need_svg" />
                    <img src={Customer} alt="customer" className="customer_svg" />
                </div>
            </div>
        </section>
    )
}
