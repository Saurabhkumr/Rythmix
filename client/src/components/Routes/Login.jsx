import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedPostRequest } from "../utils/serverHelper";
import { useCookies } from "react-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const loginReq = async (e) => {
    e.preventDefault();
    const data = { email, password };
    try {
      const response = await makeUnauthenticatedPostRequest(
        "/auth/login",
        data
      );
      if (response && response.token) {
        console.log("Login response:", response);
        const userName = response.userName || "User";
        const token = response.token;
        const date = new Date();
        date.setDate(date.getDate() + 30);

        setCookie("token", token, { path: "/", expires: date });
        setCookie("userName", userName, { path: "/", expires: date });

        alert("Login successful!");
        navigate("/home");
      } else {
        console.error("Invalid credentials");
        alert("Login failed. Invalid credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <form onSubmit={loginReq} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-500">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
