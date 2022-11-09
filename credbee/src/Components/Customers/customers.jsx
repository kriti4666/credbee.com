import React from "react";
import { useState } from "react";
import "../Customers/Customers.Module.css";

const Customers = () => {
  
  return (
    <div className="customer">
      {/**********************             Top section            **********************/}

      <div className="c-head">
        <h1>
          Chargebee powers
          <br />
          subscriptions for
          <br />
          businesses of all sizes.
        </h1>
        <div>
          <div>
            <p>Sign up for free</p>
          </div>
          <div>
            <p>Talk to us!</p>
          </div>
        </div>
      </div>
      <div className="c-headBox">
        <div>
          <div className="leftBox">
            <img
              width="100px"
              src="https://webstatic.chargebee.com/assets/web/535/images/home/testimonial/cb-study.png"
              alt=""
            />
            <p>
              ... Integration was easy and the{" "}
              <strong>
                customer <br /> support provided was excellent
              </strong>
              . This is huge <br /> considering how deficient many players in
              the space are when ...
            </p>
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
        <div className="rightBox">
          <img
            width="100px"
            src="https://webstatic.chargebee.com/assets/web/535/images/case-study/whiteboard/whiteboard-logo-white.png"
            alt="img"
          />
          <p>
            How Whiteboard reduced Churn by 100% using Chargebee and increased
            their MRR by 35% with improved billing operations
          </p>

          <span>READ THE STORY - </span>
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
        <div className="rightBox">
          <img
            width="100px"
            src="https://webstatic.chargebee.com/assets/web/535/images/customers/logos/transparent/freshdesk.png"
            alt="img"
          />
          <p>
            From 500 to 80,000 Customers:
            <br />
            How Freshdesk Unlocked Massive Scale
          </p>

          <span>READ THE STORY - </span>
        </div>
        <div className="leftBox">
          <img
            width="100px"
            src="https://www.chargebee.com/static/resources/customers/freedom-logo.png"
            alt=""
          />
          <p>
            We didn't have another choice, we never had to choose between
            Chargebee and another provider. Chargebee was the clear winner.
          </p>
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
        <img src="https://www.chargebee.com/static/resources/customers/gigwell.png" alt="" />
      </div>

      {/*******************           Youtube div         **********************/}
      <div className="c-youtube">
      <iframe width="750" height="446" src="https://www.youtube.com/embed/R9XgyoLQ9qw" title="How Businesses scale globally with Chargebee" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

    </div>
  );
};

export default Customers;
