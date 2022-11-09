import React from "react";
import "./body.css"

export function Body() {
    return (
        <div className="slider">
            <div className="content">
                <h1>The subscription management platform that enabled Slidebean to slide into 30+ countries.</h1>
                <p>Chargebee is the subscription billing and revenue <br /> management platform that lets you solve for your today,<br /> and scale for your tomorrow.</p>
                <div className="sliderButton">
                    <button className="sliderBTN_1">Get a demo</button>
                    <button className="sliderBTN_2">Sign up for free</button>
                </div>
            </div>
            <div className="imageDiv">
                <img src="https://webstatic.chargebee.com/assets/web/534/images/home/coc/customers/paul-kapsner.png" alt="person"/>
            </div>
        </div>
    )
}

