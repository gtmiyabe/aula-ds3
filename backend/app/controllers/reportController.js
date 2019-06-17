const Report = require("../models/reportModel.js");

exports.findAll = (req, res) => {
  Report.find()
    .then(reports => {
      res.send(reports);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the report."
      });
    });
};
