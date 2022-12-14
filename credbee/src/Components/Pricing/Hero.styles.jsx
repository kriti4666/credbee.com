import styled from "styled-components";
import { up, down } from "styled-breakpoints";

export const HeroWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;500;700&display=swap");
  font-size: 62.5%;

  .heroContainer {
    text-align: left;
    font-family: "IBM Plex Sans";
    background-image: linear-gradient(
      100.96deg,
      #4300a3 33.34%,
      #6100bb 71.36%,
      #a700f1 104.8%
    );
  }

  .heroSection {
    width: 65vw;
    margin: auto;
    padding-top: 150px;
    padding-bottom: 70px;
  }

  .header {
    color: white;
    font-size: 6.4em;
  }

  .subHeader {
    display: flex;
    gap: 0.5em;
    color: white;
    font-size: 2em;
  }

  .btnTalk {
    border-radius: 40px;
    background-color: transparent;
    color: white;
    border: 1px solid white;
    padding: 0 1em;
    cursor:pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  .btnTalk > p {
    margin: 0px;
    font-size: 0.5em;
    padding: 0 0.015em;
    padding-right: 5px;
    letter-spacing: 2px;
  }

  .priceOptionBtns {
    display: flex;
    margin: 60px 0;
    justify-content: center;
    flex-direction: row;
    gap: 30px;
    flex-wrap: wrap;
  }

  .planSummaryContainer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    // justify-content: space-around;
  }

  .planSummaryCard {
    padding: 10px;
    color: white;
  }

  .planSumName {
    font-size: 3.5em;
  }

  .planSumDesc {
    font-size: 1.4em;
    font-weight: 400;
    color:white;
  }

  ${down("xxl")} {
    .heroSection {
      width: 75vw;
    }
  }

  ${down("lg")} {
    .heroSection {
      width: 75vw;
    }
    .header {
      font-size: 4.8em;
    }
    .subHeader {
      font-size: 1.6em;
    }
    .btnTalk {
      display: none;
    }
    .planSummaryContainer {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  ${down("md")} {
    .heroSection {
      width: 75vw;
      text-align: center;
    }
    .header {
      font-size: 3.2em;
    }
    .subHeader {
      justify-content: center;
      font-size: 1.2em;
    }
    .planSummaryContainer{
      display:none;
    }
  }
  ${down("sm")}{
    .heroSection{
      width: 85vw;
      padding-top: 100px;
    }
  }
`;
