const { Employee } = require("../models/employeesModel");

exports.addEmployee = async (req, res) => {
  try {
    const { name, email, mobile, designation, gender, course, imgUpload } =
      req.body;

    const newEmployee = new Employee({
      name,
      email,
      mobile,
      designation,
      gender,
      course,
      imgUpload,
    });
    await newEmployee.save();

    res.status(201).json({
      success: true,
      message: "created a employee successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.status(200).json({
      success: true,
      data: employees,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.updateEmployeeById = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  try {
    const employee = await Product.findByIdAndUpdate(id, body);

    res.status(200).json({
      success: true,
      data: employee,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "error occured",
    });
  }
};

exports.getEmployeeById = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findById(id);

    if (!employee) {
      res.status(404).json({
        success: false,
        message: "employee not found",
      });
    }

    res.status(200).json({
      success: true,
      data: employee,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.deleteEmployeeById = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findById(id);

    employee.isDeleted = true;
    employee.save();

    res.status(200).json({
      success: true,
      data: employee,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
