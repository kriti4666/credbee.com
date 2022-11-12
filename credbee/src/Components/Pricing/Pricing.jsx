import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { HeroWrapper } from "./Hero.styles";
import { Tab, Tabs } from "./Tabs/Tabs";
import { PlanPricingData } from "./PlanPricingData";
import { PricingDetailsWrapper } from "./PricingDetails.style";
import { FormSectionWrapper } from "./FormSectionWrapper";
import DemoForm from "./DemoForm/DemoForm";

let data = PlanPricingData;

const Pricing = () => {
  const [bpActive, setBpActive] = useState(0);
  const [currencyActive, setCurrencyActive] = useState(5);
  const [ info, setInfo ] = useState(data); 

  const handleBpClick = (e) => {
    const index = Number(e.target.id);
    if(index !== bpActive ){
      setBpActive(index);
    }
  }

  const handleCurrencyClick = (e) => {
    const index = Number(e.target.id);
    if(index !== currencyActive ){
      setCurrencyActive(index);
    }
  }

  let currency = ["USD", "EUR", "GBP", "AUD", "CAD", "INR"];

  let mat = [[[0, 249, 549, "Custom"], [0, 299, 599, "Custom"]],
             [[0, 249, 549, "Custom"], [0, 299, 599, "Custom"]],
             [[0, 199, 379, "Custom"], [0, 249, 449, "Custom"]],
             [[0, 359, 729, "Custom"], [0, 419, 799, "Custom"]],
             [[0, 329, 599, "Custom"], [0, 399, 699, "Custom"]],
             [[0, "19,915", "43,915", "Custom"], [0, "23,890", "47,890", "Custom"]]]

  let newAmounts = mat[currencyActive][bpActive];

  for(let i=0; i<=3;i++){
    data[i].amount = newAmounts[i];
    data[i].currency = currency[currencyActive];
    data[i].billingPeriod = (bpActive === 0) ? "billed annually" : <></>;  
  }
  useEffect(()=>{
    setInfo(data);
  },[])
  // setInfo(data);


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
                <Tab active={bpActive === 0} id="0" onClick={handleBpClick}>Annual</Tab>
                <Tab active={bpActive === 1} id="1" onClick={handleBpClick}>Monthly</Tab>
              </Tabs>
              <Tabs className="currencyBtns">
                <Tab active={currencyActive === 0} id="0" onClick={handleCurrencyClick}>USD</Tab>
                <Tab active={currencyActive === 1} id="1" onClick={handleCurrencyClick}>EUR</Tab>
                <Tab active={currencyActive === 2} id="2" onClick={handleCurrencyClick}>GBP</Tab>
                <Tab active={currencyActive === 3} id="3" onClick={handleCurrencyClick}>AUD</Tab>
                <Tab active={currencyActive === 4} id="4" onClick={handleCurrencyClick}>CAD</Tab>
                <Tab active={currencyActive === 5} id="5" onClick={handleCurrencyClick}>INR</Tab>
              </Tabs>
            </div>
            <div className="planSummaryContainer">
              {info.map((e, i) => (
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
            {info.map((e, i) => (
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
            <h1>
              We've helped thousands of subscription businesses streamline their
              billing workflow
            </h1>
            <img src="https://webstatic.chargebee.com/assets/web/536/images/pricings/arrow.svg"></img>
            <p>
              Switching to Credbee has been a big upgrade for us. They are
              solving the problems we'd have a year from now.
            </p>
            <div className="customerDetails">
              <img src="https://webstatic.chargebee.com/assets/web/536/images/case-study/makespace/cto.png" />
              <div className="customerName">
                <h4>Matthew Busel</h4>
                <p>Product Manager, MakeSpace</p>
              </div>
            </div>
            <div className="companyLogos">
              <img
                width={"115px"}
                height={"26px"}
                src="https://webstatic.chargebee.com/assets/web/536/images/case-study/getaccept/ga-logo-black.png"
              />
              <img
                width={"115px"}
                height={"26px"}
                src="https://webstatic.chargebee.com/assets/web/536/images/customers/logos/sharetribe.svg"
              />
              <img
                width={"115px"}
                height={"26px"}
                src="https://webstatic.chargebee.com/assets/web/536/images/case-study/userlane/userlane.png"
              />
            </div>
          </div>
          <div className="DemoFormWrapper">
            <DemoForm></DemoForm>
          </div>
        </div>
      </FormSectionWrapper>
    </div>
  );
};

export default Pricing;
