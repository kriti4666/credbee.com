import React from "react";
import "../Customers/Customers.Module.css";
import { Navbar } from "../homepage/Navbar";
import "../homepage/navbar.css";
import { data } from "./CustomersData";
import { Button, Image, Text } from "@chakra-ui/react";
import Footerfun from "../homepage/Footer";

const Customers = () => {
  console.log(data);
  return (
    <div className="customer">
      {/**********************             Top section            **********************/}

      <Navbar />
      <div className="c-head">

        <Text className="head" fontSize="5xl" as="b">
          Chargebee powers
          <br />
          subscriptions for
          <br />
          businesses of all sizes.
        </Text>

        <div className="signup">
          <Text fontSize="xl">Sign Up for free</Text>
          <Text fontSize="xl" as="b">Talk to us!</Text>
        </div>
      </div>
      <div className="c-headBox">
        <div>
          <div className="leftBox">
            <img
          
              src="https://webstatic.chargebee.com/assets/web/535/images/home/testimonial/cb-study.png"
              alt=""
            />
            <Text fontSize="xl">
              ... Integration was easy and the{" "}
              <strong>
                customer <br /> support provided was excellent
              </strong>
              . This is huge <br /> considering how deficient many players in
              the space are when ...
            </Text>
            <div>
              <img
                src="https://webstatic.chargebee.com/assets/web/535/images/case-study/voitek.jpeg"
                alt=""
              />
              <span>
                Voitek Sobieszczanski, Director of Finance & Operations
              </span>
            </div>
          </div>
        </div>
        <div className="imgp">
          <img width="500px" src="https://webstatic.chargebee.com/assets/web/536/images/case-study/whiteboard/whiteboard-banner.jpg" alt="" />
        <div className="rightBox">
          <img
            width="200px"
            src="https://webstatic.chargebee.com/assets/web/535/images/case-study/whiteboard/whiteboard-logo-white.png"
            alt="img"
          />
          <Text fontSize="xl">
            How Whiteboard reduced Churn by 100% using Chargebee and increased
            their MRR by 35% with improved billing operations
          </Text>

          <span>READ THE STORY → </span>
        </div>
        </div>
      </div>

      {/***********************       row box          *****************/}

      <div className="c-row">
        <img
          src="https://webstatic.chargebee.com/assets/web/535/images/customers/logos/freshworks-light-bg.png"
          alt=""
        />
        <img
          src="https://www.chargebee.com/static/resources/customers/calendly.png"
          alt=""
        />
        <img
          src="https://webstatic.chargebee.com/assets/web/535/images/customers/logos/linuxacademy-logo.png"
          alt=""
        />
        <img
          src="https://webstatic.chargebee.com/assets/web/535/images/customers/logos/fujitsu.png"
          alt=""
        />
      </div>

      <div className="c-headBox">
       <div className="imgb2">
        <img width="300px" src="https://webstatic.chargebee.com/assets/web/536/images/case-study/freshdesk/fd-wall.jpg" alt="" />
       <div className="rightBox">
          <img
            width="100px"
            src="https://webstatic.chargebee.com/assets/web/535/images/customers/logos/transparent/freshdesk.png"
            alt="img"
          />
          <Text fontSize="xl">
            From 500 to 80,000 Customers:
            <br />
            How Freshdesk Unlocked Massive Scale
          </Text>

          <span>READ THE STORY → </span>
        </div>
       </div>
        <div className="leftBox">
          <img
            width="200px"
            src="https://www.chargebee.com/static/resources/customers/freedom-logo.png"
            alt=""
          />
          <Text fontSize="xl">
            We didn't have another choice, we never had to choose between
            Chargebee and another provider. Chargebee was the clear winner.
          </Text>
          <div>
            <img
              src="https://webstatic.chargebee.com/assets/web/535/images/case-study/freedom-fred.png"
              alt=""
            />
            <span>Fred Stutzman, CEO, Freedom</span>
          </div>
        </div>
      </div>

      {/***********************       row box          *****************/}

      <div className="c-row">
        <img
          src="https://www.chargebee.com/static/resources/customers/percona.png"
          alt=""
        />
        <img
          src="https://www.chargebee.com/static/resources/customers/cosmos.png"
          alt=""
        />
        <img
          src="https://www.chargebee.com/static/resources/customers/freedom-logo.png"
          alt=""
        />
        <img
          src="https://www.chargebee.com/static/resources/customers/crew.svg"
          alt=""
        />
        <img
          src="https://www.chargebee.com/static/resources/customers/gigwell.png"
          alt=""
        />
      </div>

      {/*******************           Youtube div         **********************/}
      <div className="c-youtube">
        <iframe
          width="750"
          height="447"
          src="https://www.youtube.com/embed/R9XgyoLQ9qw"
          title="How Businesses scale globally with Chargebee"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      {/*********************************               user Table               ***************************/}

      <div className="bgcolor">
        <div className="c-data">
          {
            data?.map((el) => {
              return <div className="details">
              <div>
              <img width="200px" src={el.url} alt="logo"  />
              <Text fontSize="xl">{el.description}</Text>
              </div>
                <div>
                <a href={el.link}><strong>→</strong></a>
                </div>

              </div>
            })
          }
        </div>
      </div>
      <Footerfun></Footerfun>
    </div>
  );
};

export default Customers;
