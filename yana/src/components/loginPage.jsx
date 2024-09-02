// src/components/LoginPage.jsx
import React, { useState } from "react";

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();
      if (response.ok) {
        // Store tokens in localStorage
        localStorage.setItem("accessToken", result.data.accessToken);
        localStorage.setItem("refreshToken", result.data.refreshToken);
        console.log("Access Token and Refresh Token created and stored: Login Successfull.")
        // Notify parent component about successful login
        onLogin();
      } else {
        // Handle errors
        console.error("Login failed:", result.message);
        alert(result.message || "Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-WHITE w-screen">
      <div className="flex flex-col items-center bg-white p-8 rounded-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src="./src/assets/Main Logo.png" alt="YANA Logo" className="h-24" />
        </div>
        <form onSubmit={handleLogin} className="w-full">
          <div className="mb-4 relative">
            <label className="block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6Z"
                    stroke="#D61125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 14C8.68629 14 6 15.6863 6 17V19C6 20.3137 8.68629 22 12 22C15.3137 22 18 20.3137 18 19V17C18 15.6863 15.3137 14 12 14Z"
                    stroke="#D61125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-2 border border-red-600 rounded-sm placeholder-red-600 focus:ring focus:ring-red-200 focus:border-red-600"
                placeholder="USERNAME"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-4 relative">
            <label className="block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M23.75 13.75H6.25C4.86929 13.75 3.75 14.8693 3.75 16.25V25C3.75 26.3807 4.86929 27.5 6.25 27.5H23.75C25.1307 27.5 26.25 26.3807 26.25 25V16.25C26.25 14.8693 25.1307 13.75 23.75 13.75Z" stroke="#D61125" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.75 13.75V8.75C8.75 7.0924 9.40848 5.50269 10.5806 4.33058C11.7527 3.15848 13.3424 2.5 15 2.5C16.6576 2.5 18.2473 3.15848 19.4194 4.33058C20.5915 5.50269 21.25 7.0924 21.25 8.75V13.75" stroke="#D61125" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              </span>
              <input
                type="password"
                className="block w-full pl-10 pr-4 py-2 border border-red-600 rounded-sm placeholder-red-600 focus:ring focus:ring-red-200 focus:border-red-600"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="flex justify-end mb-6">
            <a href="/forgot-password" className="text-red-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-red-600 text-white rounded-sm hover:bg-red-700 transition-colors"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
