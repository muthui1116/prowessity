import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
    <div className="d-flex justify-content-center align-items-center mt-4">
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
      </form>
    </div>
  );
}