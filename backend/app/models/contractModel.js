const mongoose = require("mongoose");

const ContractSchema = mongoose.Schema(
  {
    sponsorship: String,
    startDate: Date,
    endDate: Date,
    amount: Number,
    // file: File,
    contract: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Contract", ContractSchema);
