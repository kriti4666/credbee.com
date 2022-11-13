import {
  FormControl,
  FormLabel,
  Input,
  Select, 
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "../Partners/Partners.Module.css";
import "../Partners/PartnersData";
import { TiChevronRight } from "react-icons/ti";
import { array } from "../Partners/PartnersData";
import { logo2 } from "../Partners/PartnersData";
import { logo3 } from "../Partners/PartnersData";
import { logo4 } from "../Partners/PartnersData";
import { sp } from "../Partners/PartnersData";
import partners from "../Partners/p_img/partners.png";
import { Navbar } from "../homepage/Navbar";

// console.log(array);

const Partners = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  return (
    <div className="partners">
      <Navbar/>
      <Stack
        className="p-head"
        Show
        above="md"
        direction={{ md: "row", base: "row" }}
      >
        <Text fontSize="xl">Become a Partner</Text>
        <Text fontSize="xl">Partner FAQs</Text>
        <Text fontSize="xl">Marketplace</Text>
      </Stack>

      {/*************************             form box       ********************/}

      <Stack className="p-box" direction={{ md: "row", base: "column" }}>
        <div className="p-left">
          <button>Chargebee Partner Programs</button>
          <p>Let's Work Together</p>
          <br />
          <Text fontSize="xl">
            Becoming a Chargebee partner enables access to the world of
            subscriptions, bringing increased value to merchants, merchant
            aggregators and marketplaces around the world. Join our Partner
            Ecosystem today.
          </Text>
        </div>
        <div className="p-right">
          <div>
            <Text fontSize="s">
              Enter your details to connect with our Partnership Team
            </Text>
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input />
              <FormLabel>Last name</FormLabel>
              <Input />
              <FormLabel>Business email</FormLabel>
              <Input />
              <FormLabel>Job title</FormLabel>
              <Input />
              <FormLabel>Company name</FormLabel>
              <Input />
              <FormLabel>Country/Region</FormLabel>
              <Input />
              <FormLabel>Phone number</FormLabel>
              <Input />
              <FormLabel>Number of employees</FormLabel>
              <Input />
              <FormLabel>Have you worked with Chargebee in the past?</FormLabel>
              <Select placeholder="Please Select">
                <option value="option1">Yes</option>
                <option value="option2">No</option>
              </Select>
              <FormLabel>How do you envision working with Chargebee?</FormLabel>
              <Input />
              <FormLabel>
                What type of organizations do you work with?
              </FormLabel>
              <Input />
              <FormLabel>
                How many clients/merchants do you have? Where are they located?
              </FormLabel>
              <Input />
              <FormLabel>What other technologies do you work with?</FormLabel>
              <Input />
              <FormLabel>
                Do you have mutual customers with Chargebee? If so, who?
              </FormLabel>
              <Input />
              <FormLabel>
                What does a successful partnership with Chargebee look like for
                you?
              </FormLabel>
              <Input />
              <button className="p-btn">Become a Partner</button>
              <Text fontSize="s">
                Once you fill out this information, our Partnership team will
                get back to you shortly.
              </Text>
            </FormControl>
          </div>
        </div>
      </Stack>

      {/*************************** fprm box end   **********************/}
      <div className="p-cont1">
        <button className="p-allbtn">Technology Alliance Partners</button>
        <Text fontSize="2xl" as="b">
          Payment Service Provider (PSPs)
        </Text>
        <br />
        <Text fontSize="xl">
          Payment service providers (PSP) help manage the entire payment
          transaction from the moment
          <br /> your customer pays to the moment you receive the payment in
          your business bank account.
          <br />
          <br />
          We believe a diverse payments ecosystem helps businesses of all types
          and sizes. This means <br /> fostering an environment that offers
          connectivity between Chargebee's payment service partners <br />
          and our global network of merchants and platform customers.
        </Text>
      </div>

      {/***************************************       Grid Box 1          **********************/}

      <div className="logo-box">
        {array?.map((a) => {
          return (
            <div className="p-grid">
              <div className="p-grid1">
                <img src={a.logo} alt="" />
              </div>
              <div className="p-grid2">
                <img src={a.arrow} alt="" />
              </div>
            </div>
          );
        })}
      </div>

      <h3>See all Payment Gateways →</h3>

      {/********************       Partners Agencies        ***************/}
      <div className="p-cont1" style={{ marginBottom: "-150px" }}>
        <button className="p-allbtn">Technology Alliance Partners</button>
        <Text fontSize="2xl" as="b">
          Independent Software Vendor (ISVs)
        </Text>
        <br />
        <Text fontSize="xl">
          Through customized solutions and personalized integration support,
          Chargebee's <br />
          Independent Software Vendors deliver unique solutions that provide
          additional functionality <br />
          that helps grow the global network of merchants in the ever-expanding
          world of subscriptions.
        </Text>
      </div>

      {/**********************           Grid Box 2          **************/}

      <div className="logo-box">
        {logo2?.map((a) => {
          return (
            <div className="p-grid">
              <div className="p-grid1">
                <img src={a.logo} alt="" />
              </div>
              <div className="p-grid2">
                <img src={a.arrow} alt="" />
              </div>
            </div>
          );
        })}
      </div>

      <h3>See all integrations →</h3>

      {/**********************           Grid Box 3          **************/}

      <div className="p-cont1" style={{ marginBottom: "-150px" }}>
        <Text fontSize="2xl" as="b">
          Solution Partners Agencies
        </Text>
        <br />
        <Text fontSize="xl">
          Chargebee's Solutions Partners are a network of certified agencies and
          consultancies who provide <br />
          strategic and operational support to the growing economy of
          Subscription businesses. If you work <br />
          with businesses employing a business subscription model, apply to join
          our Solution Partners network today.
        </Text>
      </div>

      <div className="logo-box">
        {logo3?.map((a) => {
          return (
            <div className="p-grid">
              <div className="p-grid1">
                <img src={a.logo} alt="" />
              </div>
              <div className="p-grid2">
                <img src={a.arrow} alt="" />
              </div>
            </div>
          );
        })}
      </div>

      {/**********************           Grid Box 4          **************/}

      <div className="p-cont1" style={{ marginBottom: "-150px" }}>
        <Text fontSize="2xl" as="b">
          Channel Resell Partners
        </Text>
        <br />
        <Text fontSize="xl">
          Chargebee works with a variety of Referral Partners who believe in our
          mission of creating a more <br />
          connected subscription world. We offer a competitive referral
          commission to qualified partners who <br />
          refer merchants to Chargebee.
        </Text>
      </div>

      <div className="logo-box">
        {logo4?.map((a) => {
          return (
            <div className="p-grid">
              <div className="p-grid1">
                <img src={a.logo} alt="" />
              </div>
              <div className="p-grid2">
                <img src={a.arrow} alt="" />
              </div>
            </div>
          );
        })}
      </div>

      {/********************            Sell as a Partner?         ***************/}
      <div className="p-sell">
        <div className="p-cont1" style={{ marginBottom: "-150px" }}>
          <Text fontSize="2xl" as="b">
            Why Sell as a Partner?
          </Text>
          <br />
          <Text fontSize="xl">
            As a Chargebee certified reseller, you have the opportunity to help
            your growing business <br />
            customers. Chargebee's easy-to-use flexible pricing and billing
            logic enables your clients <br />
            to scale and expand into new markets
          </Text>
        </div>
        <div className="sell-box">
          {sp?.map((a) => {
            return (
              <div className="p-sell1">
                <div>
                  <img src={a.logo} alt="" />
                </div>
                <div>
                  <Text fontSize="xl" as="b">
                    {a.title}
                  </Text>
                  <br />
                  <Text>{a.desc}</Text>
                </div>
              </div>
            );
          })}
        </div>

        <button style={{ width: "200px", margin: "auto" }} className="p-btn">
          Become a Partner
        </button>
      </div>
      {/*********************************            Youtube charegebee             ******************/}
      <div className="p-youtube">
        <Text fontSize="3xl" as="b">
          See how these partners achieved <br />
          more with Chargebee
        </Text>
        <div className="tube-box">
          <img
            width="501"
            height="317"
            src="https://embed-ssl.wistia.com/deliveries/2383eda3a87e175b85eef53844d2d185739aaf46.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=5092dae0"
            alt=""
          />
          <iframe
            width="501"
            height="317"
            src="https://www.youtube.com/embed/2vtGuSSMyjo?list=TLGG3k-87Ofh5nkxMjExMjAyMg"
            title="Agency Spotlight: Animalz"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <button style={{ width: "200px", margin: "auto" }} className="p-btn">
          Become a Partner
        </button>
      </div>

      <div className="p-img">
        <img src={partners} alt="" />
      </div>

      {/************************              share goal            ********************/}
      <div className="p-goal">
        <br/>
        <Text fontSize="5xl" as="b">
          Thousands of partners, <br /> one shared goal.
        </Text>
        <br />
        <Text className="hide" fontSize="xl">
          From global start-ups to enterprise organizations, Chargebee partners
          with unique, <br />
          future-focused companies that want to do one thing: add value to their
          customers. By <br />
          partnering with organizations that share our values, we can bring our
          customers the <br/> latest and greatest when it comes to subscription
          management.
        </Text>
        <button style={{ width: "200px", margin: "auto" }} className="p-btn">
          Become a Partner
        </button>
      </div>
    </div>
  );
};

export default Partners;
