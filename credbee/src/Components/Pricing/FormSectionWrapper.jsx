import styled from "styled-components";
import { down } from "styled-breakpoints";

export const FormSectionWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;500;700&display=swap");
  width: 100%;
  font-size: 62.5%;
  background-color: #f8f8f8;

  .formSectionContainer {
    width: 70%;
    margin: auto;
    display: flex;
    // gap: 0px;
    justify-content: space-around;
    font-family: "IBM Plex Sans";
    padding-top: 30px;
  }

  .leftFormSection {
    // border:1px solid;
    text-align: left;
    padding: 0px 40px;
    width: 45%;
    margin-bottom: 20px;
  }
  .demoFormWrapper {
    padding: 40px 40px;
    width: 45%;
  }
  .leftFormSection > h1 {
    font-size: 3.6em;
    color: #242438;
  }
  .leftFormSection > p {
    font-size: 2em;
    font-weight: 400;
    color: #242438;
  }
  .customerDetails {
    display: flex;
    gap: 20px;
    align-items: center;
    margin: 50px 0px;
  }
  .customerDetails > img {
    width: 8em;
    height: 8em;
    border-radius: 50%;
  }
  .customerName {
    display: flex;
    flex-direction: column;
  }
  .customerName > h4 {
    font-size: 1.6em;
    line-height: 0.2em;
    padding: 0px;
    margin: 15px 0;
  }
  .customerName > p {
    font-size: 1.6em;
    font-weight: 200;
    margin: 0px;
  }
  .companyLogos {
    display: flex;
    gap: 60px;
    flex-wrap: wrap;
  }
  ${down("lg")} {
    .formSectionContainer {
      flex-direction: column;
      margin: auto;
      gap: 50px;
    }
    .leftFormSection {
      width: 80%;
      margin: auto;
    }
  }
`;
