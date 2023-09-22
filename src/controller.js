const { createPDF, createPDF2 } = require("./utils/generatePDF");

const element = async (req, res) => {
  console.log(req.body?.htmlElemet);
  const result = await createPDF(req.body.htmlElemet);
};

const puppeteer = async (req, res) => {
  console.log(req.body.data);
  const result = await createPDF2(req.body.data);
};

module.exports = { element, puppeteer };
