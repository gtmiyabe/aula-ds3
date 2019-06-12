const mongoose = require("mongoose");

const StockSchema = mongoose.Schema(
  {
    prodCode: String,
    unit: Number,
    total: Number,
    date: Date
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Stock", StockSchema);
