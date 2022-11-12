import { Heading } from "@chakra-ui/react";
import "./Hover_Nav.css"
export default function Product() {
    return (
        <div className="product">
            <div className="each-row">
                <Heading size='sm' mb="5">Subscription Management</Heading>
                <p className="Blue-P">Overview</p>
                <p className="Blue-P">Create & Manage</p>
                <p className="Blue-P">Entitlements</p>
                <p className="Blue-P">Pricing Management</p>
                <p className="Blue-P">Handle Trial Subscription</p>
                <p className="Blue-P">Custumer self-Service</p>
                <p className="Blue-P">Mobile Solution</p>
            </div>
            <div className="each-row">
                <Heading size='sm' mb="5">Biling Automation</Heading>
                <p className="Blue-P">Overview</p>
                <p className="Blue-P">Usage Based Biling</p>
                <p className="Blue-P">Invoicing Automation</p>
                <p className="Blue-P">Qoutes</p>
                <p className="Blue-P">Proration</p>
            </div>
            <div className="each-row">
                <Heading size='sm' mb="5">Recurring payments</Heading>
                <p className="Blue-P">Overview</p>
                <p className="Blue-P">Multiple payment Methods</p>
                <p className="Blue-P">Multiple payment Gateways</p>
                <p className="Blue-P">Smart Dunning</p>
                <p className="Blue-P">Chargeback Management</p>
                <p className="Blue-P">Checkout Experience</p>
                <p className="Blue-P">Receivables</p>
            </div>
            <div className="each-row">
                <Heading size='sm' mb="5">Accounting & Taxes</Heading>
                <p className="Blue-P">Overview</p>
                <p className="Blue-P">Revenue Recognition</p>
                <p className="Blue-P">Manae sales tax</p>
                <p className="Blue-P">One-Click Reconciliation</p>
                <br />
                <Heading size='sm' mb="5">Reporting & Analytics</Heading>
                <p className="Blue-P">Overview</p>
                <p className="Blue-P">Deferred Revenue Reporting</p>
            </div>
            <div className="each-row">
                <Heading size='sm' mb="5">Subscription Management</Heading>
                <p className="Blue-P">Tackle Churn</p>
                <p className="Blue-P">Retention Toolbox</p>
                <p className="Blue-P">Billing + Retention</p>
            </div>
        </div>
    )
}