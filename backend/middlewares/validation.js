const Joi = require("@hapi/joi");
const fs = require("fs");

const authSchema = Joi.object({
  name: Joi.string()
    .regex(/^[A-Za-z\s]+$/)
    .min(3)
    .required(),
  password: Joi.string().regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
  ),

  email: Joi.string().email().required().messages({
    "string.email": "Please provide a valid email address.",
    "string.empty": "Email is required.",
  }),
  mobileNo: Joi.string()
    .pattern(/^[0-9]{10}$/) // Ensures it's exactly 10 digits
    .required()
    .messages({
      "string.pattern.base": "Mobile number must be a 10-digit number.",
      "string.empty": "Mobile number is required.",
    }),
  designation: Joi.string()
    .valid("HR", "Manager", "Sales")
    .required()
    .messages({
      "string.empty": "Designation is required.",
      "any.only": "Designation must be one of the following: HR,Manager,Sales.",
    }),
  gender: Joi.string().valid("Male", "Female", "Other").required().messages({
    "string.empty": "Gender is required.",
    "any.only": "Gender must be one of the following: Male, Female, Other.",
  }),
  course: Joi.string().valid("MCA", "BCA", "BSC").required().messages({
    "string.empty": "Course is required.",
    "any.only": "Course must be one of the following: MCA,BCA,BSC.",
  }),
});

module.exports = { authSchema };
