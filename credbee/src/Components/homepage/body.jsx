import React from "react";
import "./body.css"
import c1 from "./images/c1.png"
import c2 from "./images/c2.png"
import c3 from "./images/c3.png"
import c4 from "./images/c4.png"
import c5 from "./images/c5.png"
import c6 from "./images/c6.png"
import d2 from "./images/d2.png"
import d3 from "./images/d3.png"
import d4 from "./images/d4.png"
import d1 from "./images/d1.png"

export function Body() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (

        <div>
            <div className="slider">
                <div className="content">
                    <h1>The billing platform that gives Superfoods the freedom to test, iterate, and roll-back..</h1>
                    <p>Chargebee is the subscription billing and revenue <br /> management platform that lets you solve for your today,<br /> and scale for your tomorrow.</p>
                    <div className="sliderButton">
                        <button className="sliderBTN_1">Get a demo</button>
                        <button className="sliderBTN_2">Sign up for free</button>
                    </div>
                </div>
                <div className="imageDiv">
                    <img src="https://webstatic.chargebee.com/assets/web/534/images/home/coc/customers/paul-kapsner.png" alt="person" />
                </div>
            </div>
            <div className="sliderxx_2">
                <marquee className="imgSlide" behavior="scroll" direction="left" scrollamount="5">
                    <div className="arnab">
                        <img src={c1} width="72" height="79" alt="Flying Bee" />
                        <img src={c2} width="72" height="79" alt="Flying Bee" />
                        <img src={c3} width="72" height="79" alt="Flying Bee" />
                        <img src={c4} width="72" height="79" alt="Flying Bee" />
                        <img src={c5} width="72" height="79" alt="Flying Bee" />
                        <img src={c6} width="72" height="79" alt="Flying Bee" />
                    </div>

                </marquee>
            </div>
            <br />
            <div className="body-content">
                <div className="left_side">
                    <div className="artical">
                        <h2>Designed to go Beyond Billing.</h2>
                        <p>Get the freedom to experiment, launch, and scale strategies as fast as you can think of them.
                        </p>
                    </div>
                    <div class="za-bg hidden-xs hidden-sm">
                        <div class="za-bg__container">
                            <div class="za-bg__white"></div>
                            <div class="za-bg__purple"></div>
                        </div>
                    </div>
                </div>
                <div className="right_side">
                    <div className="fourDiv">
                        <img src={d1} alt="FourDiv_Data" />
                        <p className="p1">Rethink Pricing</p>
                        <p className="p2">Pricing models. Grandfathering. One-click roll-back. Doesn't get easier!</p>
                        <p className="p3">learn more</p>
                    </div>
                    <div className="fourDiv">
                        <img src={d2} alt="FourDiv_Data" />
                        <p className="p1">Rethink Pricing</p>
                        <p className="p2">Pricing models. Grandfathering. One-click roll-back. Doesn't get easier!</p>
                        <p className="p3">learn more</p>
                    </div>
                    <div className="fourDiv">
                        <img src={d3} alt="FourDiv_Data" />
                        <p className="p1">Rethink Pricing</p>
                        <p className="p2">Pricing models. Grandfathering. One-click roll-back. Doesn't get easier!</p>
                        <p className="p3">learn more</p>
                    </div>
                    <div className="fourDiv">
                        <img src={d4} alt="FourDiv_Data" />
                        <p className="p1">Rethink Pricing</p>
                        <p className="p2">Pricing models. Grandfathering. One-click roll-back. Doesn't get easier!</p>
                        <p className="p3">learn more</p>
                    </div>
                </div>
            </div>
            <div className="body_2">
                <h1>Streamline Revenue Operations</h1>
                <p>Chargebee automates the lead-to-ledger workflow across your revenue stack, so you can dream, deploy, and enjoy the breeze.
                    While the MRR just keeps rolling.</p>
            </div>
        </div>
    )
}



