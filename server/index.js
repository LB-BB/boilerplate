//starting point for server JS
const express = require("express");
const path = require("path");
const app = express();

const morgan = require("morgan");
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "..", "public")));

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", require("./api")); // include our routes!

app.get("/", (res) => {
  res.sendFile(path.join(__dirname, "index.html"));
}); // Send index.html for any other requests

// error handling middleware

app.use((err, res) => {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

module.exports = app;
