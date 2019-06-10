const Employee = require("../models/employeeModel.js");

// Create and Save a new Employee
exports.create = (req, res) => {
  // Validate request
  //   if (!req.body.content) {
  //     return res.status(400).send({
  //       message: "Employee content can not be empty"
  //     });
  //   }

  // Create a Employee
  const employee = new Employee({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    admissionDate: req.body.admissionDate,
    branch: req.body.branch,
    department: req.body.department,
    createdDate: req.body.createdDate,
    isActive: req.body.isActive,
    isLoggedIn: req.body.isLoggedIn,
    role: req.body.role,
    cpf: req.body.cpf,
    employeeId: req.body.employeeId,
    rg: req.body.rg || null,
    pisNumber: req.body.pisNumber || null,
    firedDate: req.body.firedDate || null,
    bornDate: req.body.bornDate || null
  });

  // Save Employee in the database
  employee
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Employee."
      });
    });
};

// Retrieve and return all employees from the database.
exports.findAll = (req, res) => {
  Employee.find()
    .then(employees => {
      res.send(employees);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving employees."
      });
    });
};

// Find a single employee with a employeeId
exports.findOne = (req, res) => {
  Employee.findById(req.params.employeeId)
    .then(employee => {
      if (!employee) {
        return res.status(404).send({
          message: "Employee not found with id " + req.params.employeeId
        });
      }
      res.send(employee);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Employee not found with id " + req.params.employeeId
        });
      }
      return res.status(500).send({
        message: "Error retrieving employee with id " + req.params.employeeId
      });
    });
};

// Update a employee identified by the employeeId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Employee content can not be empty"
    });
  }

  // Find employee and update it with the request body
  Employee.findByIdAndUpdate(
    req.params.employeeId,
    {
      title: req.body.title || "Untitled employee",
      content: req.body.content
    },
    { new: true }
  )
    .then(employee => {
      if (!employee) {
        return res.status(404).send({
          message: "Employee not found with id " + req.params.employeeId
        });
      }
      res.send(employee);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Employee not found with id " + req.params.employeeId
        });
      }
      return res.status(500).send({
        message: "Error updating employee with id " + req.params.employeeId
      });
    });
};

// Delete a employee with the specified employeeId in the request
exports.delete = (req, res) => {
  Employee.findByIdAndRemove(req.params.employeeId)
    .then(employee => {
      if (!employee) {
        return res.status(404).send({
          message: "Employee not found with id " + req.params.employeeId
        });
      }
      res.send({ message: "Employee deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Employee not found with id " + req.params.employeeId
        });
      }
      return res.status(500).send({
        message: "Could not delete employee with id " + req.params.employeeId
      });
    });
};
