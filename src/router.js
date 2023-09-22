const { element, puppeteer } = require("./controller");

module.exports = function (app, router) {
  console.log("hello");
  app.route("/api/pdf").post(element);
  app.route("/api/puppeteer-pdf").post(puppeteer);
};
