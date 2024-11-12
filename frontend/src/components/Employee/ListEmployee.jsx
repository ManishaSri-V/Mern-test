import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Employee.css";

function ListEmployee() {
  const [currentEmployee, setCurrentEmployee] = useState({
    _id: "",
    name: "",
    email: "",
    mobileNo: "",
    designation: "",
    gender: "",
    course: [],
    imgUpload: "",
  });

  const [lists, setLists] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const updateEmployee = async () => {
    const response = await axios.put(
      `http://localhost:5000/api/employee/update/${currentEmployee._id}`,
      currentEmployee
    );

    console.log("Update happened successfully", response.data);
    if (response.data.success) {
      setLists(
        lists.map((item) =>
          item._id === currentEmployee._id ? currentEmployee : item
        )
      );
      setEditMode(false);
    }
  };

  const handleSubmit = () => {
    if (!editMode) {
      setEditMode(true);
    } else {
      updateEmployee();
    }
  };

  const deleteEmployee = async () => {
    const response = await axios.delete(
      `http://localhost:5000/api/employee/delete/${currentEmployee._id}`
    );

    if (response.data.success) {
      setLists(lists.filter((item) => item._id !== currentEmployee._id));
    }
  };

  const handleDelete = () => {
    deleteEmployee();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setCurrentEmployee({ ...currentEmployee, [e.target.name]: e.target.value });
  };

  const handleDesignationChange = (e) => {
    setCurrentEmployee({
      ...currentEmployee,
      designation: e.target.value,
    });
  };

  const handleGenderChange = (e) => {
    setCurrentEmployee({
      ...currentEmployee,
      gender: e.target.value,
    });
  };

  const handleCourseChange = (e) => {
    const { value, checked } = e.target;
    setCurrentEmployee((prev) => {
      const updatedCourses = checked
        ? [...prev.course, value]
        : prev.course.filter((course) => course !== value);
      return { ...prev, course: updatedCourses };
    });
  };

  const handleImageChange = (e) => {
    setCurrentEmployee({ ...currentEmployee, imgUpload: e.target.files[0] });
  };

  const fetchAllEmployees = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/employee/employees"
    );
    setLists(response.data.data);
  };

  console.log("employees list", lists);

  useEffect(() => {
    fetchAllEmployees();
  }, []);

  return (
    <div className="employee-item">
      {editMode ? (
        <>
          <div className="employee-item-key">
            Name: &nbsp;
            <input
              type="text"
              name="name"
              value={currentEmployee.name}
              onChange={handleChange}
            />
          </div>
          <div className="employee-item-key">
            Email: &nbsp;
            <input
              type="email"
              name="email"
              value={currentEmployee.email}
              onChange={handleChange}
            />
          </div>
          <div className="employee-item-key">
            Mobile No: &nbsp;
            <input
              type="number"
              name="mobileNo"
              value={currentEmployee.mobileNo}
              onChange={handleChange}
            />
          </div>
          <div className="employee-item-key">
            <label className="label">
              Designation:&nbsp;
              <select
                name="designation"
                value={currentEmployee.designation}
                onChange={handleDesignationChange}
                required
              >
                <option value="">Select a designation</option>
                <option value="HR">HR</option>
                <option value="Manager">Manager</option>
                <option value="Sales">Sales</option>
              </select>
            </label>
          </div>
          <div className="employee-item-key">
            <label className="label">
              Gender:&nbsp;
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={currentEmployee.gender === "male"}
                  onChange={handleGenderChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={currentEmployee.gender === "female"}
                  onChange={handleGenderChange}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={currentEmployee.gender === "other"}
                  onChange={handleGenderChange}
                />
                Other
              </label>
            </label>
          </div>

          <div className="employee-item-key">
            <label className="label">
              Course:&nbsp;
              <label>
                <input
                  type="checkbox"
                  name="course"
                  value="MCA"
                  checked={currentEmployee.course.includes("MCA")}
                  onChange={handleCourseChange}
                />
                MCA
              </label>
              <label>
                <input
                  type="checkbox"
                  name="course"
                  value="BCA"
                  checked={currentEmployee.course.includes("BCA")}
                  onChange={handleCourseChange}
                />
                BCA
              </label>
              <label>
                <input
                  type="checkbox"
                  name="course"
                  value="BSC"
                  checked={currentEmployee.course.includes("BSC")}
                  onChange={handleCourseChange}
                />
                BSC
              </label>
            </label>
          </div>
          <div className="employee-item-key">
            Image Upload: &nbsp;
            <input type="file" name="imgUpload" onChange={handleImageChange} />
          </div>
        </>
      ) : (
        <div>
          <table className="list">
            {lists.length > 0 && (
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile No</th>
                  <th>Designation</th>
                  <th>Gender</th>
                  <th>Course</th>
                  <th>Image</th>
                  <th>Edit & Delete</th>
                </tr>
              </thead>
            )}
            <tbody>
              {lists.map((list) => (
                <tr key={list._id}>
                  <td>{list._id}</td>
                  <td>{list.name}</td>
                  <td>{list.email}</td>
                  <td>{list.mobileNo}</td>
                  <td>{list.designation}</td>
                  <td>{list.gender}</td>
                  <td>{list.course}</td>
                  <td>{list.imgUpload}</td>
                  <td>
                    {" "}
                    <button
                      className="btn-custom btn-success"
                      onClick={handleSubmit}
                    >
                      {editMode ? "Submit" : "Edit"}
                    </button>
                    <span>
                      {" "}
                      <button
                        className="btn-custom btn-danger"
                        onClick={handleDelete}
                      >
                        Delete
                      </button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ListEmployee;
