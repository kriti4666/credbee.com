//routing for backend data post in mongodb

import express from "express";

import { UserSignup, userLogin, userDemoFrom } from "../Controller/userController.js";

const router = express.Router();

//post api with end point signup and callback fx UserSignup
router.post("/signup", UserSignup);
router.post("/login", userLogin);
router.post("/demo", userDemoFrom);
// router.get("/admin",getUsers)


export default router;