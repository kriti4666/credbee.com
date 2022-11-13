// const express = require("express");
import express from "express";
// const Users = require("./admin.model");
import User from "../Schemas/user.schema.js";

const usersData = express.Router();

usersData.get("/", async (req, res) => {
  const user = await User.find();
  console.log(user)
  res.send(user);
});

usersData.delete("/", async (req, res) => {
  // console.log(req.body,res)
  try {
    const user = await User.findOneAndDelete({
      email: req.body.email,
    });
    console.log(1,user,req.body.email)
    res.send(user);
  } catch (e) {
    console.log(e)
    res.status(404).send(e.message);
  }
});

export default usersData


