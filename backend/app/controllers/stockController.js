const Stock = require("../models/stockModel.js");

exports.create = (req, res) => {
  // Validate request
  //   if (!req.body.content) {
  //     return res.status(400).send({
  //       message: "Stock content can not be empty"
  //     });
  //   }

  const stock = new Stock({
    prodCode: req.body.prodCode,
    unit: req.body.unit,
    total: req.body.total,
    date: req.body.date
  });

  stock
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Stock."
      });
    });
};

exports.findAll = (req, res) => {
  Stock.find()
    .then(stocks => {
      res.send(stocks);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving stocks."
      });
    });
};

exports.findFiltered = (req, res) => {
  Stock.find()
    .then(stocks => {
      res.send(stocks.filter(el => el.prodCode === req.params.prodCode));
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving stocks."
      });
    });
};

exports.findOne = (req, res) => {
  Stock.findById(req.params.prodCode)
    .then(stock => {
      if (!stock) {
        return res.status(404).send({
          message: "stock not found with id " + req.params.prodCode
        });
      }
      res.send(stock);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "stock not found with id " + req.params.prodCode
        });
      }
      return res.status(500).send({
        message: "Error retrieving stock with id " + req.params.prodCode
      });
    });
};

exports.delete = (req, res) => {
  Stock.findByIdAndRemove(req.params.stockId)
    .then(stock => {
      if (!stock) {
        return res.status(404).send({
          message: "Stock not found with id " + req.params.stockId
        });
      }
      res.send({ message: "Stock deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Stock not found with id " + req.params.stockId
        });
      }
      return res.status(500).send({
        message: "Could not delete stock with id " + req.params.stockId
      });
    });
};
