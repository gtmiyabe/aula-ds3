const express = require("express");

const app = express();

app.get("/api/customers", (req, res) => {
  const customers = [{ id: 1, firstName: "Aula", lastName: "DS3" }];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
