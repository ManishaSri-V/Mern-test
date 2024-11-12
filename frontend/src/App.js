import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import NavBar from "./components/Header/Navbar";
import Login from "./components/User/Login";
import Signup from "./components/User/SignUp";
import ListEmployee from "./components/Employee/ListEmployee";
import EmployeeForm from "./components/Employee/EmployeeForm";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<DashboardPage />}></Route>
          <Route path="/add" element={<EmployeeForm />}></Route>
          <Route path="/list" element={<ListEmployee />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
