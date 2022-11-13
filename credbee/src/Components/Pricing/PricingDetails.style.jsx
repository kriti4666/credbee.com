import styled from "styled-components";
import { up, down } from "styled-breakpoints";

export const PricingDetailsWrapper = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;500;700&display=swap");
  width: 100vw;
  font-size: 62.5%;
  margin-bottom: 50px;

  .pricingContainer {
    width: 75vw;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pricingSection {
    display: flex;
    flex-wrap: nowrap;
    // overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
    width: 100%;
    gap: 10px;
    margin: auto;
    justify-content: center;
    text-align: left;
    margin-top: 50px;
  }
  .pricingDetailsCard {
    // border: 1px solid;
    width: 220px;
    // height: 500px;
    // flex: 0 0 auto;
    background-color: white;
    padding: 15px 10px;
    border-radius: 10px;
  }

  .planMoney {
    display: flex;
    flex-direction: column;
  }

  .planCurrency {
    color: #4401a3;
    font-weight: bold;
    font-size: 2em;
  }

  .planCost {
    margin-top: 20px;
    font-size: 3.6em;
    margin-bottom: 15px;
  }

  .billingPeriod {
    font-size: 2em;
    margin-bottom: 15px;
  }

  .planBenefits {
    font-size: 1.2em;
    margin-bottom: 40px;
  }

  .CTABtn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 10px 20px;
    border-radius: 5px;
    background-image: linear-gradient(
      100.96deg,
      #4300a3 33.34%,
      #6100bb 71.36%,
      #a700f1 104.8%
    );
    margin-bottom: 4em;
    cursor:pointer;
  }

  .CTABtn > span {
    color: white;
    font-size: 1.4em;
    font-weight: bold;
  }

  .pricingCTAArrow {
    width: 14px;
    height: 14px;
    color: white;
    margin-top:3px;
  }

  .featureTitle {
    font-size: 1.6em;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .featuresList {
    margin: 0px;
    padding: 0px;
  }

  .listItem {
    margin: 0px;
    padding: 0px;
    list-style: none;
    display: flex;
    gap: 5px;
    margin-bottom: 15px;
  }

  .listItem>span{
    font-size: 1em;
  }

  .comparePlans {
    width: 100%;
    text-align: center;
    margin: auto;
    display: flex;
    flex-direction: row;
    gap: 5px;
    justify-center: center;
    align-items: center;
    align-content: center;
    font-size: 2em;
    color: #4401a3;
    font-weight: bold;
    margin-top: 20px;
  }

  .CPArrow {
    width: 20px;
    height: 20px;
    margin-top: 6px;
  }

  ${up("xxl")} {
    .planTitle {
      display: none;
    }
    .planDesc {
      display: none;
    }
  }

  ${down("xxl")} {
    .planTitle {
      display: none;
    }
    .planDesc {
      display: none;
    }
    .CTABtn > span {
      font-size: 1.2em;
    }
  }
  ${down("lg")} {
    .pricingContainer {
      width: 95vw;
    }
    .pricingSection {
      flex-wrap: nowrap;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      &::-webkit-scrollbar {
        display: none;
      }
      position: relative;
      justify-content: flex-start;
      top: -90px;
      padding: 10px;
    }
    .pricingDetailsCard {
      flex: 0 0 auto;
      width: 300px;
      position: relative;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      margin-bottom: 20px;
      padding: 5px 25px;
    }
    .planTitle {
      display: flex;
      color: #4401a3;
      font-size: 3em;
    }
    .planDesc {
      display: flex;
      margin: 20px 0px;
      font-size: 1.6em;
    }
    .planBenefits {
      font-size: 1.4em;
    }

    .CTABtn {
      padding: 20px 40px;
      background-color: white;
      border: 1px solid #4401a3;
      background-image: none;
    }
    .CTABtn > span {
      color: #4401a3;
      font-size: 2em;
      font-weight: bold;
    }

    .pricingCTAArrow {
      width: 20px;
      height: 20px;
      margin-top: 5px;
      color: #4401a3;
    }
    .featureTitle {
      display: none;
    }
    .featuresList {
      display: none;
    }
    .comparePlans > p {
      font-size: 1.2em;
    }
    .CPArrow {
      width: 30px;
      height: 30px;
      margin-top: 6px;
    }
  }
`;
