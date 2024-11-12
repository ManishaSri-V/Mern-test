const express = require("express");
const { authSchema } = require("../middlewares/validation");
const { validate } = require("../middlewares/validate");

const {
  deleteEmployeeById,
  getEmployeeById,
  updateEmployeeById,
  getAllEmployees,
  addEmployee,
} = require("../controllers/employeeController");

const router = express.Router();

router.post("/add", validate(authSchema), addEmployee);
router.get("/employees", getAllEmployees);
router.get("/:id", getEmployeeById);
router.put("/update/:id", updateEmployeeById);
router.delete("/delete/:id", deleteEmployeeById);

module.exports = router;
