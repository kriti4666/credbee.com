// const express = require("express");
import express from "express";
// const Users = require("./admin.model");
import User from "../Schemas/user.schema.js";

const usersData = express.Router();

usersData.get("/", async (req, res) => {
  const user = await User.find();
  res.send(user);
});

usersData.delete("/", async (req, res) => {
  try {
    const user = await User.findOneAndDelete({email:req.email})
    res.send(user);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

export default usersData


