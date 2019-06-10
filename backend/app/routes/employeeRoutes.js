module.exports = (app) => {
    const employee = require('../controllers/employeeController.js');

    // Create a new Employee
    app.post('/employee', employee.create);

    // Retrieve all Employees
    app.get('/employee', employee.findAll);

    // Retrieve a single Employee with employeeId
    app.get('/employee/:employeeId', employee.findOne);

    // Update a Employee with employeeId
    app.put('/employee/:employeeId', employee.update);

    // Delete a Employee with employeeId
    app.delete('/employee/:employeeId', employee.delete);
}