module.exports = app => {
  const stock = require("../controllers/stockController.js");

  // Create a new stock
  app.post("/stock", stock.create);

  // Retrieve all stocks
  app.get("/stock", stock.findAll);

  // Retrieve a single stock with stockId
  app.get("/stock/:prodCode", stock.findFiltered);

  // Delete a stock with stockId
  app.delete("/stock/:stockId", stock.delete);
};
