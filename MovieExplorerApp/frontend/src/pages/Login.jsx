import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logo from '../assets/logo.png';
const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Typing karte waqt error clear karo
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await login(formData.email, formData.password);

    if (result.success) {
      navigate("/"); // Home page par redirect karo
    } else {
      setError(result.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-gray-800 rounded-2xl p-8 w-full max-w-md shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-2">
            <img src={Logo} className="w-7 bg-gray-200 rounded p-0.5" /> 
            <h1 className="text-3xl font-bold text-yellow-400">
              Movie Explorer
            </h1>
          </div>
          <p className="text-gray-400 mt-2">Account Login</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg mb-6 text-sm">
            ❌ {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-gray-300 text-sm font-medium block mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ex. sunilbagdi460@gmail.com"
              required
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-3
                         focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400
                         placeholder-gray-500 transition-colors duration-200"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-300 text-sm font-medium block mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-3
                         focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400
                         placeholder-gray-500 transition-colors duration-200"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 text-gray-900 font-bold py-3 rounded-lg
                       hover:bg-yellow-500 transition-colors duration-200
                       disabled:opacity-50 disabled:cursor-not-allowed
                       text-lg mt-2"
          >
            {loading ? "Login..." : "Login Now"}
          </button>
        </form>

        {/* Register Link */}
        <p className="text-gray-400 text-center mt-6">
          create a new account?{" "}
          <Link
            to="/register"
            className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
          >
            Register 
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
