const Contract = require("../models/contractModel.js");

// Create and Save a new Contract
exports.create = (req, res) => {
  // Create a Contract
  const contract = new Contract({
    sponsorship: req.body.sponsorship,
    startDate: req.body.startDate,
    endDate: req.body.password,
    amount: req.body.amount,
    // file: req.body.file,
    contract: req.body.contract
  });

  // Save Contract in the database
  contract
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Contract."
      });
    });
};

// Retrieve and return all contracts from the database.
exports.findAll = (req, res) => {
  Contract.find()
    .then(contracts => {
      res.send(contracts);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving contracts."
      });
    });
};

// Find a single contract with a contractId
exports.findOne = (req, res) => {
  Contract.findById(req.params.contractId)
    .then(contract => {
      if (!contract) {
        return res.status(404).send({
          message: "Contract not found with id " + req.params.contractId
        });
      }
      res.send(contract);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Contract not found with id " + req.params.contractId
        });
      }
      return res.status(500).send({
        message: "Error retrieving contract with id " + req.params.contractId
      });
    });
};

// Update a contract identified by the contractId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.contractId) {
    return res.status(400).send({
      message: "Contract id can not be empty"
    });
  }

  // Find contract and update it with the request body
  Contract.findByIdAndUpdate(
    req.params.contractId,
    {
      sponsorship: req.body.sponsorship,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      amount: req.body.amount,
      //   file: req.body.file,
      contract: req.body.contract
    },
    { new: true }
  )
    .then(contract => {
      if (!contract) {
        return res.status(404).send({
          message: "Contract not found with id " + req.params.contractId
        });
      }
      res.send(contract);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Contract not found with id " + req.params.contractId
        });
      }
      return res.status(500).send({
        message: "Error updating contract with id " + req.params.contractId
      });
    });
};

// Delete a contract with the specified contractId in the request
exports.delete = (req, res) => {
  Contract.findByIdAndRemove(req.params.contractId)
    .then(contract => {
      if (!contract) {
        return res.status(404).send({
          message: "Contract not found with id " + req.params.contractId
        });
      }
      res.send({ message: "contract deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Contract not found with id " + req.params.contractId
        });
      }
      return res.status(500).send({
        message: "Could not delete contract with id " + req.params.contractId
      });
    });
};
