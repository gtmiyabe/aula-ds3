const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    admissionDate: Date,
    branch: String,
    department: String,
    createdDate: Date,
    isActive: Boolean,
    isLoggedIn: String,
    role: String,
    cpf: String,
    employeeId: String,
    rg: String,
    pisNumber: String,
    firedDate: Date,
    bornDate: Date
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Employee", EmployeeSchema);
