
import express from "express";
import dontenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./Database/db.js";
import router from "./Routes/route.js";
import usersData from "./Routes/admin.route.js"
import singleUser from "./Routes/user.route.js"

const app = express();
app.use(express.json());

//to make the body in json format
app.use(bodyParser.json({ extended: true }))
//url parse to remove bluder spaces
app.use(bodyParser.urlencoded({ extended: true }))
const PORT = 8080;
app.use(cors());

//dot env file configuration
dontenv.config();

//router based on api call
app.use("/admin",usersData)
app.use("/", router)
app.use("/user",singleUser)

//extraction of environment variables for DB connectivity from .env file
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const DBNAME = process.env.DB_NAME;

//it will call the connection function inside db.js to connect with mongo DB
Connection(USERNAME, PASSWORD, DBNAME);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

