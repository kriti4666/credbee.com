import { Heading } from "@chakra-ui/react";
import React from "react";
import "./body.css";

export default function SubThree() {
    return (
        <div className="subs">
            <div className="ul_li">
                <Heading size='md' mb={5}>Automate the Order-to-Revenue Lifecycle</Heading>
                <p>Collect recurring payments and automate your subscription billing logic - from checkout to reconciliation.</p>
                <br />
                <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Integer molestie lorem at massa</li>
                    <li>Facilisis in pretium nisl aliquet</li>
                </ul>
                <div>
                    <p className="learnText">learn more</p>
                </div>
            </div>
            <div className="imgFour">
                <img src="https://webstatic.chargebee.com/assets/web/536/images/home/coc/customers/security.webp" alt="sub" />
            </div>
        </div>

    )
}