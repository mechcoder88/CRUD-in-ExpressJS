import express from "express";

const app = express();

const port = process.env.PORT || "5000";

import connectDB from './db/connectdb.js'

// Database Connection
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/schoolDataBase"
connectDB(DATABASE_URL);

import { join } from 'path'

import web from "./routes/web.js";

// Using 'urlencoded' built-in middleware function to parse(&send) data from (Frontend) 'index.ejs' to (Backend) 'studentController.js' 
app.use(express.urlencoded({ extended: false }));

// Serving Static Files
app.use('/student', express.static(join(process.cwd(), "public")));
app.use('/student/edit', express.static(join(process.cwd(), "public")));

// Setting Template Engine
app.set("view engine", "ejs");

// Creating Route
app.use("/student", web);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}/student`);
});