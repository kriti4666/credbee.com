import React from "react";
import logoCred from "./images/credLogo.png"
import "./navbar.css"

export function Navbar() {
    return (
        <div className="NavbarDiv">
            <div className="firstHalf">
                <div className="LogoDiv">
                    <img src={logoCred} alt="credLogo" />
                </div>
                <div className="Navcontent">
                    <div class="dropdown">
                        <span>Products</span>
                        <div class="dropdown-content">
                            <p>Hello World!</p>
                        </div>
                    </div>
                    <div class="dropdown">
                        <span>Pricing</span>
                        <div class="dropdown-content">
                            <p>Hello World!</p>
                        </div>
                    </div>
                    <div class="dropdown">
                        <span>Solution</span>
                        <div class="dropdown-content">
                            <p>Hello World!</p>
                        </div>
                    </div>
                    <div class="dropdown">
                        <span>Customers</span>
                        <div class="dropdown-content">
                            <p>Hello World!</p>
                        </div>
                    </div>
                    <div class="dropdown">
                        <span>Resources</span>
                        <div class="dropdown-content">
                            <p>Hello World!</p>
                        </div>
                    </div>
                    <div class="dropdown">
                        <span>Partners</span>
                        <div class="dropdown-content">
                            <p>Hello World!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="secondHalf" >
                <div>
                    <div class="dropdown">
                        <span>English</span>
                        <div class="dropdown-content">
                            <p>Hello World!</p>
                        </div>
                    </div>
                    <div class="dropdown">
                        <span>Login</span>
                    </div>
                    <div class="dropdown">
                        <button>Get a demo</button>
                    </div>
                </div>
            </div>


        </div>

    )
}