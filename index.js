const PORT = 5000;
const express = require("express");
const path = require("path");
const app = express();
const connectDatabase = require("./db/db.js");

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to DB
connectDatabase();

// Render HTML
app.use(express.static(path.join(__dirname, "public")));

// Router
app.use("/openai", require("./routes/image.router.js"));

app.listen(PORT, () => {
  console.log(`server connected to http://localhost:${PORT}/`);
});