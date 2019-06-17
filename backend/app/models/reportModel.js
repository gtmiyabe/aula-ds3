const mongoose = require("mongoose");

const ReportSchema = mongoose.Schema(
  {
    sector: String,
    registration: String,
    employeeName: String,
    absenseNumber: Number
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Report", ReportSchema);
