import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { HeroWrapper } from "./PricingPage.styles";
import { Tab, Tabs } from "./Tabs/Tabs";
import { PlanPricingData } from "./PlanPricingData";

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
              {data.map((e)=>(
                <div className="planSummaryCard">
                  <h1 className="planSumName">{e.name}</h1>
                  <h3 className="planSumDesc">{e.description}</h3>
                </div>
              ))}
              
            </div>
          </div>
        </div>
      </HeroWrapper>
    </div>
  );
};

export default PricingPage;
