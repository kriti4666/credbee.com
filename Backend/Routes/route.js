//routing for backend data post in mongodb

import express from "express";

import { UserSignup, userLogin } from "../Controller/userController.js";

const router = express.Router();

//post api with end point signup and callback fx UserSignup
router.post("/signup", UserSignup);
router.post("/login", userLogin);

export default router;