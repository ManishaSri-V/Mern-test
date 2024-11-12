import axios from "axios";
import React, { useState } from "react";

const EmployeeForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [designation, setDesignation] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [imgUpload, setImgUpload] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMobileNoChange = (e) => {
    setMobileNo(e.target.value);
  };
  const handleDesignationChange = (e) => {
    setDesignation(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };

  const handleImgUploadChange = (e) => {
    setImgUpload(e.target.value);
  };

  const createEmployee = async (e) => {
    e.preventDefault();
    const employee = {
      name: name,
      email: email,
      mobileNo: mobileNo,
      designation: designation,
      gender: gender,
      course: course,
      imgUpload: imgUpload,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/api/employee/add",
        employee
      );
      console.log(response);
    } catch (error) {
      console.error("Error adding employee", error);
    }
  };

  return (
    <div className="employee-form-container">
      <form onSubmit={createEmployee} className="employee-form">
        <label className="label">
          Name:&nbsp;
          <input
            type="text"
            name="name"
            placeholder="Employee Name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </label>
        <label className="label">
          Email:&nbsp;
          <input
            type="email"
            name="email"
            placeholder="Employee Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <label className="label">
          Mobile No:&nbsp;
          <input
            type="number"
            name="mobileNo"
            placeholder="Employee No"
            value={mobileNo}
            onChange={handleMobileNoChange}
          />
        </label>
        <label className="label">
          Designation:&nbsp;
          <select
            name="designation"
            placeholder="Employee Designation"
            value={designation}
            onChange={handleDesignationChange}
            required
          >
            <option value="">Select a designation</option>
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
          </select>
        </label>

        <div className="label-gender">
          Gender:&nbsp;
          <input
            type="radio"
            name="gender"
            placeholder="Employee Gender"
            value="male"
            checked={gender === "male"}
            onChange={handleGenderChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            placeholder="Employee Gender"
            value="female"
            checked={gender === "female"}
            onChange={handleGenderChange}
          />
          Female
          <input
            type="radio"
            name="gender"
            placeholder="Employee Gender"
            value="other"
            checked={gender === "other"}
            onChange={handleGenderChange}
          />
          Other
        </div>

        <div className="label-course">
          Course:&nbsp;
          <input
            type="checkbox"
            name="course"
            value="MCA"
            checked={course === "MCA"}
            placeholder="Course"
            onChange={handleCourseChange}
          />
          MCA
          <input
            className="checkbox"
            type="checkbox"
            name="course"
            value="BCA"
            checked={course === "BCA"}
            placeholder="Course"
            onChange={handleCourseChange}
          />
          BCA
          <input
            className="checkbox"
            type="checkbox"
            name="course"
            value="BSC"
            checked={course === "BSC"}
            placeholder="Course"
            onChange={handleCourseChange}
          />
          BSC
        </div>

        <label className="label">
          Image Upload:&nbsp;
          <input
            className="checkbox"
            type="file"
            name="imgUpload"
            value={imgUpload}
            onChange={handleImgUploadChange}
          />
        </label>

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
