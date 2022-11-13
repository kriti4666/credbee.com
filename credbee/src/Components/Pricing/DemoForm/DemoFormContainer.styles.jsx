import styled from "styled-components";
import { down, up } from "styled-breakpoints";

export const DemoFormContainer = styled.div`
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;500;700&display=swap");
width: 95%;
font-family: "IBM Plex Sans"
font-size: 62.5%;
margin: 50px 0px;

.formBody{
    // border:1px solid;
    padding: 50px;
    display: flex;
    width:100%;
    flex-direction: column;
    gap:20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color:white;
    text-align: left;
}

.formBody input{
    border: none;
    border-bottom: 1px solid #ceccee;
    // margin-bottom: 20px;
}

.formBody select{
    border: none;
    width: 100%;
    color: #242438;
    font-family: "IBM Plex Sans";
    border-bottom: 1px solid #ceccee;
}
input[type=radio]{
    margin-bottom:20px;
}
.inputName{
    background-color: white;
    background-image: url(https://webstatic.chargebee.com/assets/web/536/images/schedule-a-demo/icons/user.svg);
    background-position: 0px 4px;
    padding: 8px;
    padding-left: 30px;
    background-repeat: no-repeat;
    letter-spacing: 2px;
}
.inputEmail{
    background-color: white;
    background-image: url(https://webstatic.chargebee.com/assets/web/536/images/schedule-a-demo/icons/email.svg);
    background-position: 0px 8px;
    padding: 8px;
    padding-left: 30px;
    background-repeat: no-repeat;
    letter-spacing: 2px;
}
.website{
    background-color: white;
    background-image: url(https://webstatic.chargebee.com/assets/web/536/images/schedule-a-demo/icons/globe.svg);
    background-position: 0px 4px;
    padding: 8px;
    padding-left: 30px;
    background-repeat: no-repeat;
    letter-spacing: 2px;
}
.phoneNumber{
    display:flex;
    gap:20px;
}
.select-list{
    width:30%;
}
.number{
    width:65%;
    letter-spacing: 2px;
}
.labelHq, .labelHq~label{
    font-size: 1.6em;
}
.labelHq~div{
    display: flex;
    align-items: center;
}
.labelHq~div>label{
    padding-bottom: 18px;
    margin-right: 20px;
    margin-left:5px;
    font-size:1.6em;
}
textarea{
    height:80px;
    border: 1px solid #ceccee;
    border-radius:5px;
}
.DemoCTABtn{
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
    cursor:pointer;
    width:40%;
}
form>p{
    color:red;
    margin-bottom:20px;
}
.DemoCTABtn > span {
    color: white;
    font-size: 1.6em;
    font-weight: bold;
  }

  .demoCTAArrow {
    width: 16px;
    height: 16px;
    color: white;
    margin-top:3px;
  }

  .DemoCTABtn~p{
    color: #747478
  }
  ${down("lg")}{
    width: 90%;
    margin: auto;
  }
  ${down("md")}{
    .formBody{
        width: 95%;
        margin:auto;
        padding:30px 20px;
    }
    .DemoCTABtn{
        width: 220px;
    }
    .labelHq~div{
        flex-wrap: wrap;
    }
  }
  ${up("lg")}{
    .DemoCTABtn{
        width: auto;
    }
  }
`