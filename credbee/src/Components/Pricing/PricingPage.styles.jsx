import styled from "styled-components";

export const HeroWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;500;700&display=swap");

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
    width: 60vw;
    margin: auto;
    padding-top: 100px;
    padding-bottom: 20px;
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
    gap:60px;
    flex-direction: row;
  }
  .planSummaryContainer{
    display: flex;
    gap:10px;
  }
  .planSummaryCard{
    padding: 10px;
    color:white;
}

.planSumName{
    font-size: 3.5em;
  }
  .planSumDesc{
    font-size: 1.4em;
    font-weight: 400;

  }
`;
