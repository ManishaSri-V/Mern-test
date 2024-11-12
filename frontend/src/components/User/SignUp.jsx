import React, { useState } from "react";
import axios from "axios";
import "./User.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleName = (e) => {
    setUserName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const userSignup = async (e) => {
    e.preventDefault();
    const signup = { username, password };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/register",
        signup
      );
      console.log(response.data.message);

      // Navigate to the Login page
      navigate("/login");
    } catch (error) {
      console.error("Error signing up", error);
    }
  };

  return (
    <div>
      <form className="signup-form" onSubmit={userSignup}>
        <div>
          <label>
            {" "}
            UserName: &nbsp;
            <input
              type="text"
              value={username}
              onChange={handleName}
              required
            />
          </label>
        </div>

        <div>
          <label>
            {" "}
            Password: &nbsp;
            <input
              type="password"
              value={password}
              onChange={handlePassword}
              required
            />
          </label>
        </div>

        <button className="btn-custom btn-primary" type="submit">
          {" "}
          Signup
        </button>
      </form>
    </div>
  );
}

export default SignUp;
