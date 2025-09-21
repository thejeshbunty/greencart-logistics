import React, { useState } from "react";
import { login } from "../services/api"; // make sure api.js is correct
import "../styles/global.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const res = await login(username, password); // API call
      const { token } = res.data;

      if (token) {
        localStorage.setItem("token", token); // store JWT
        window.location.href = "/dashboard"; // redirect to dashboard
      } else {
        setErrorMsg("Login failed. No token received.");
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setErrorMsg(err.response.data.message);
      } else {
        setErrorMsg("Login failed. Check console for details.");
      }
      console.error("Login error:", err);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        {errorMsg && <p className="error-msg">{errorMsg}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;