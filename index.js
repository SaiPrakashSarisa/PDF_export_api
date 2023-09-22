const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const router = express.Router();
app.use(cors());

const fs = require("fs");
const pupp = require("puppeteer");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("./src/router")(app, router);

app.listen(8001, () => {
  console.log("sever is running on port 8001........");
});
