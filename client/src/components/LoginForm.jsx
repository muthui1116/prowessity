import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export function LoginForm() {
  const { login, loading, error, user } = useAuthStore();
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const redirect = params.get("redirect") || "/";

  useEffect(() => {
    if (user) {
      navigate(redirect, { replace: true });
    }
  }, [user, navigate, redirect]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(form);
    // don't check for success, let useEffect handle redirect
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <form
        onSubmit={handleSubmit}
        className="p-4 border rounded shadow bg-white"
        style={{ minWidth: 320, maxWidth: 400, width: "100%" }}
      >
        <h2 className="text-center mb-4">Login</h2>
        <div className="mb-3">
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Email"
            required
            autoFocus
          />
        </div>
        <div className="mb-3">
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            className="form-control"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <div className="alert alert-danger mt-3">{error}</div>}
        
        <p className="text-center mt-3 mb-0">
          Not registered?{" "}
          <Link to="/register">
            <span className="text-primary">Sign up</span>
          </Link>
        </p>
      </form>
    </div>
  );
}