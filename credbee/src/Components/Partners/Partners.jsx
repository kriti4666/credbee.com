import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "../Partners/Partners.Module.css";
import "../Partners/PartnersData";
import { array } from "../Partners/PartnersData";

console.log(array);

const Partners = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  return (
    <div className="partners">
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
          <Text>
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
              <Text fontSize="xs">
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
        <Text fontSize="xl">Payment Service Provider (PSPs)</Text>
        <Text fontSize="md">
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

      {/***************************************       Grid Box           **********************/}
      <SimpleGrid
        w="80%"
        margin="auto"
        mt="-100px"
        spacing={3}
        columns={[3, null, 3]}
        direction={{ md: "column", base: "grid" }}
      >
        {array?.map((a) => {
          return (
            <div className="p-grid">
              <div className="kritiDiv_1">
                <img src={a.logo} alt="" />
              </div>
              <div className="kritiDiv_2">
                <img src={a.arrow} alt="" />
              </div>
            </div>
          );
        })}
      </SimpleGrid>

      <div className="p-title">
      <span>See all Payment Gateways</span>
      </div>

      {/********************       Partners Agencies        ***************/}

      
    </div>
  );
};

export default Partners;
