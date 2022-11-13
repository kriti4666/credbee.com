import express from "express";
import User from "../Schemas/user.schema.js";

const singleUser = express.Router();

singleUser.get("/:email", async (req, res) => {
  const {email} =req.params;
  const user = await User.findOne({email:email});
  res.send(user);
});



export default singleUser;
