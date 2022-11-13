import express from "express";
import User from "../Schemas/user.schema.js";

const singleUser = express.Router();

singleUser.get("/", async (req, res) => {
  const user = await User.findOne({email:req.body.email});
  res.send(user);
});



export default singleUser;
