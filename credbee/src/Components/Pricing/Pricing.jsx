import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { HeroWrapper } from "./Hero.styles";
import { Tab, Tabs } from "./Tabs/Tabs";
import { PlanPricingData } from "./PlanPricingData";
import { PricingDetailsWrapper } from "./PricingDetails.style";

let data = PlanPricingData;

const PricingPage = () => {
  return (
    <div>
      {/* Navbar */}
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
              {data.map((e,i) => (
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
            {data.map((e,i)=>(
              <div className="pricingDetailsCard">
                <h1 className= "planTitle">{e.name}</h1>
                <span className="planDesc">{e.description}</span>
                <div className="planMoney">
                  <div className="planCurrency">{e.currency}</div>
                  <div className="planCost">{i!==3? `${e.amount}/mo` : e.amount}</div>
                </div>
                <div className="billingPeriod">{e.billingPeriod}</div>
                <div className="planBenefits">{e.benefits}</div>
                <div className="CTABtn">
                  <span>{e.btnTitle}</span>
                  <BsArrowRight style={{ width: "12px" }}/>
                </div>
                <div className>{e.featuresTitle}</div>
                <ul className="featuresList">
                  {e.featureDetails.map((f,j)=>(
                    <li className="listItem">{f.featureName}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="comparePlans">
            <span>See how our plans compare</span>
            <BsArrowRight style={{ width: "12px" }}/>
          </div>
        </div>          
      </PricingDetailsWrapper>
    </div>
  );
};

export default PricingPage;


