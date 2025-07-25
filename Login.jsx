import React, { useState } from "react"; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the backend API to validate credentials
      const response = await axios.post('http://localhost:9000/rrce/login', {
        email,
        password
      });

      if (response.data.success) {
        setError("");
        alert("Login successful");
        // Redirect to Parent Dashboard after successful login
        navigate('/Parentdashboard'); // Navigate to the ParentDashboard page
      } else {
        setError(response.data.message || "Invalid email or password. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <h1>Parent Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button">Login</button>
        <p className="login-footer">
          Don't have an account? <a href="/register" className="login-link">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
