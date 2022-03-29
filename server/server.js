//mongodb command installs MongoDB database driver that allows -
//Node.js application to connect to the database and work with data.

//express installs the web framework for Node.js application

//cors installs a Node.js package that allows cross origin resource sharing.

//dotenv installs the module that loads environment variable 
//from a .env file into process.env file
//This lets you separate configuration files from the code.

import express from "express";
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/restaurants", restaurants)
app.use("*", (req, res=>res.statusCode(404).json({error: "not found"})))

export default app