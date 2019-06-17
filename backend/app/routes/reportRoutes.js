module.exports = app => {
  const report = require("../controllers/reportController.js");

  // Retrieve all reports
  app.get("/report", report.findAll);
};
