import styled from "styled-components";
import { down } from "styled-breakpoints";

export const DemoHeroSection = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;500;700&display=swap");
    width: 100vw;
    font-size: 62.5%;
    // position: absolute;

    .DemoHeroWrapper{
        width: 100vw;
        margin:auto;
        position: relative;
        overflow:hidden;
    }

    .DemoHeroContainer{
        width: 75vw;
        height: auto;
        margin:auto;
        
    }

    .BGshape{
        background-image: linear-gradient(106.71deg, #4300A3 11.13%, #6100BB 65.15%, #A700F1 96.91%);
        position: absolute;
        z-index: -1;
        width: 105vw;
        overflow: hidden;
        height: 150vh;
        max-width: none;
        top:0;
        right: -100;
        left: 0;
        bottom:0;
        border-radius: 0 0 0 100px;
        transform: rotate(-12deg);
        transform-origin: left;
    }
    .header{
        text-align: right;
    }
    .mainHeroSection{
        width: 100%;
        display: flex;
        margin:auto;
        justify-content: space-around;
    }
    .leftSection{
        display: flex;
        flex-direction: column;
        padding: 50px;
        padding-top: 100px;
        text-align:left;
    }
    .HeroHeader{
        font-size: 4em;
        color: white;
        margin-block-start: 0.5em;
        margin-block-end: 0.5em;
        line-height: 1.2em;
    }
    .HeroSubHeader{
        font-size: 2em;
        color: white;
        line-height: 1.2em;
    }
    .rightSection{
        margin-bottom: 30px;
    }
    ${down("lg")}{
        .mainHeroSection{
            flex-direction: column;
        }
        .DemoHeroContainer{
            width:75vw;
        }
        .BGshape{
            transform: rotate(0);
            top: 0px;
            height: 200vh;
            border-radius: 0 0 0 0;
        }
        .leftSection{
            padding-top: 10px;
        }
    }
`

export const DemoBottomSection = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;500;700&display=swap");
    width: 100vw;
    font-size: 62.5%;

    .DemoBottomContainer{
        width: 75vw;
        margin:auto;
    }
    .companyLogos{
        display: flex;
        flex-direction:row;
        flex-wrap: wrap;
        margin-bottom: 120px;
    }
    .companyLogos> img{
        filter: gray;
        -webkit-filter: grayscale(1);
        filter: grayscale(1);
        opacity: 0.7;
    }
    .leftSection{
        width: 70%;
    }
    
    .customerReview{
        border-bottom: 1px solid;
        display: flex;
        gap:20px;
        width: 100%;
        margin: auto;
        margin-bottom: 0px;
        padding-bottom: 0px;
        justify-content: space-around;
    }
    
    .belowReviewContent{
        display: flex;
        justify-content: space-between;
    }

    .NameDesignation{
        text-align: left;
    }

    .NameDesignation>h1{
        font-size: 2.4em;
        color: #333333;
        line-height: 1em;
    }
    .NameDesignation>p{
        font-size: 2em;
        line-height: 1em;
        font-weight: 200;
    }

    .ReviewContent{
        width: 60%;
        text-align: left;
        font-size:2.8em;
        font-weight: 200;
        margin-bottom: 30px;
    }

    .rightSection{
        width: 25%
    }
    .CustomerImage{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
    }
    .CustomerImage>img{
        width: 100%
        // bottom: 0px;
    }

    .badges{
        display:flex;
        justify-content: flex-start;
        gap:20px;
        margin-top:20px;
    }
    .badges>img{
        display: block;
        max-width: 100%;
    }
    .customerAvatar{
        display:none;
    }

    ${down("lg")}{
        .leftSection{
            width: 50%;
        }
        .ReviewContent{
            width:95%;
        }
        .rightSection{
            width: 45%;
        }
        .badges{
            justify-content: center;
        }
    }
    ${down("md")}{
        .leftSection{
            width: 80%;
        }
        .rightSection{
            display:none;
        }
        .belowReviewContent>img{
            display:none;
        }
        .customerAvatar{
            width: 80px;
            border-radius: 50%;
            border: 2px solid #ccc;
            overflow: hidden;
            display: block;
        }
        .customerAvatar>img{
            width: 100%;
            position: relative;
            top: 15px;
        }
    }
`