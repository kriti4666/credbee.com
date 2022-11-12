import { Heading } from "@chakra-ui/react";
import "./Hover_Nav.css"
export default function Pricing() {
    return (
        <div className="product">
            <div className="each-row">
                <Heading size='sm' mb="5">By Role</Heading>
                <p className="Blue-P">Finance</p>
                <p className="Blue-P">Sales</p>
                <p className="Blue-P">RevOps</p>
            </div>
            <div className="each-row">
                <Heading size='sm' mb="5">By Industry</Heading>
                <p className="Blue-P">B2B SaaS</p>
                <p className="Blue-P">eCommerce</p>
                <p className="Blue-P">E-lerning</p>
                <p className="Blue-P">Publishing</p>
                <p className="Blue-P">Video & OTT</p>
            </div>
            <div className="each-row">
                <Heading size='sm' mb="5">By Strategy</Heading>
                <p className="Blue-P">Role Out new Pricing</p>
                <p className="Blue-P">Expand Globally</p>
                <p className="Blue-P">Move Upmarket</p>
                <p className="Blue-P">Shift to Subscription</p>
            </div>
            <div className="each-row">
                <Heading size='sm' mb="5">By Business</Heading>
                <p className="Blue-P">Startup</p>
                <p className="Blue-P">ScaleUp</p>
                <p className="Blue-P">Enterprise</p>
            </div>
            <div className="each-row">
                <Heading size='sm' mb="5">By Business Model</Heading>
                <p className="Blue-P">Self-serve</p>
                <p className="Blue-P">Sales-driven</p>
            </div>
            <div className="each-row">
                <Heading size='sm' mb="5">By Geography</Heading>
                <p className="Blue-P">Europe</p>
                <p className="Blue-P">Australia</p>
                <p className="Blue-P">India</p>
            </div>
        </div>
    )
}