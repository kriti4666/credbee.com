import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { HeroWrapper } from "./Hero.styles";
import { Tab, Tabs } from "./Tabs/Tabs";
import { PlanPricingData } from "./PlanPricingData";
import { PricingDetailsWrapper } from "./PricingDetails.style";
import { FormSectionWrapper } from "./FormSectionWrapper";
import DemoForm from "./DemoForm/DemoForm";
import { Navbar } from "../homepage/Navbar";

let data = PlanPricingData;

const Pricing = () => {
  return (
    <div>
      <Navbar/>
      <HeroWrapper>
        <div className="heroContainer">
          <div className="heroSection">
            <h1 className="header">Find a plan that's right for you</h1>
            <div className="subHeader">
              <div>
                Or simply leverage the expertise of our consultation team.
              </div>
              <div className="btnTalk">
                <p>TALK TO US</p>
                <BsArrowRight style={{ width: "12px" }} />
              </div>
            </div>
            <div className="priceOptionBtns">
              <Tabs className="periodBtns">
                <Tab active={true}>Annual</Tab>
                <Tab active={false}>Monthly</Tab>
              </Tabs>
              <Tabs className="currencyBtns">
                <Tab active={true}>USD</Tab>
                <Tab active={false}>EUR</Tab>
                <Tab active={false}>GBP</Tab>
                <Tab active={false}>AUD</Tab>
                <Tab active={false}>CAD</Tab>
                <Tab active={false}>INR</Tab>
              </Tabs>
            </div>
            <div className="planSummaryContainer">
              {data.map((e, i) => (
                <div key={i} className="planSummaryCard">
                  <h1 className="planSumName">{e.name}</h1>
                  <h3 className="planSumDesc">{e.description}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </HeroWrapper>
      <PricingDetailsWrapper>
        <div className="pricingContainer">
          <div className="pricingSection">
            {data.map((e, i) => (
              <div key={i} className="pricingDetailsCard">
                <h1 className="planTitle">{e.name}</h1>
                <p className="planDesc">{e.description}</p>
                <div className="planMoney">
                  <div className="planCurrency">{e.currency}</div>
                  <div className="planCost">
                    {i !== 3 ? `${e.amount}/mo` : e.amount}
                  </div>
                </div>
                <div className="billingPeriod">{e.billingPeriod}</div>
                <div className="planBenefits">{e.benefits}</div>
                <div className="CTABtn">
                  <span>{e.btnTitle}</span>
                  <BsArrowRight className="pricingCTAArrow" />
                </div>
                <div className="featureTitle">{e.featuresTitle}</div>
                <ul className="featuresList">
                  {e.featureDetails.map((f, j) => (
                    <li key={j} className="listItem">
                      <img src="https://webstatic.chargebee.com/assets/web/536/images/pricings/check-gradient.svg" />
                      <span>{f.featureName}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="comparePlanWrapper">
            <div className="comparePlans">
              <p>See how our plans compare</p>
              <BsArrowRight className="CPArrow" />
            </div>
          </div>
        </div>
      </PricingDetailsWrapper>
      <FormSectionWrapper>
        <div className="formSectionContainer">
          <div className="leftFormSection">
            <h1>We've helped thousands of subscription businesses streamline their billing workflow</h1>
            <img src="https://webstatic.chargebee.com/assets/web/536/images/pricings/arrow.svg"></img>
            <p>Switching to Credbee has been a big upgrade for us. They are solving the problems we'd have a year from now.</p>
            <div className="customerDetails">
              <img src="https://webstatic.chargebee.com/assets/web/536/images/case-study/makespace/cto.png" />
              <div className="customerName">
                <h4>Matthew Busel</h4>
                <p>Product Manager, MakeSpace</p>
              </div>
            </div>
            <div className="companyLogos">
            <img width={"115px"} height={"26px" }src="https://webstatic.chargebee.com/assets/web/536/images/case-study/getaccept/ga-logo-black.png" />
            <img  width={"115px"} height={"26px" } src="https://webstatic.chargebee.com/assets/web/536/images/customers/logos/sharetribe.svg" />
            <img  width={"115px"} height={"26px" }src="https://webstatic.chargebee.com/assets/web/536/images/case-study/userlane/userlane.png" />
            </div>
          </div>
          <DemoForm></DemoForm>
        </div>
      </FormSectionWrapper>
    </div>
  );
};

export default Pricing;
