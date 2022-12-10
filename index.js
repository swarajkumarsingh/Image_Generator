// const express = require("express");
// const path = require("path");
// const connectDatabase = require("./db/db.js");

import express from "express"
import path from "path"
import connectDatabase from "./db/db.js"

const PORT = 5000;
const app = express();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to DB
connectDatabase();

// Render HTML
app.use(express.static(path.join(__dirname, "public")));

// Router
app.use("/api/v1", require("./routes/image.router.js"));

app.listen(PORT, () => {
  console.log(`server connected to http://localhost:${PORT}/`);
});
