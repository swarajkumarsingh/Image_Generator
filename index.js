const PORT = 5000;
const express = require("express");
const path = require("path");
const app = express();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Render HTML
app.use(express.static(path.join(__dirname, "public")));

// Router
app.use("/openai", require("./routes/openai.router.js"));

app.listen(PORT, () => {
  console.log(`server connected to http://localhost:${PORT}/`);
});
