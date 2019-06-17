module.exports = app => {
  const contract = require("../controllers/contractController.js");

  // Create a new contract
  app.post("/contract", contract.create);

  // Retrieve all contracts
  app.get("/contract", contract.findAll);

  // Update a contract with contractId
  app.put("/contract/:contractId", contract.update);

  // Delete a contract with contractId
  app.delete("/contract/:contractId", contract.delete);
};
