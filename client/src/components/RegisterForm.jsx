import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

export function RegisterForm() {
  const { register, loading, error } = useAuthStore();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(form);
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-4">
      <form
        onSubmit={handleSubmit}
        className="p-4 border rounded shadow bg-white"
        style={{ minWidth: 320, maxWidth: 400, width: "100%" }}
      >
        <h2 className="text-center mb-4">Register</h2>
        <div className="mb-3">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Name"
            required
            autoFocus
          />
        </div>
        <div className="mb-3">
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Email"
            required
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
        <div className="mb-3">
          <input
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="form-control"
            placeholder="Confirm Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
        {error && <div className="alert alert-danger mt-3">{error}</div>}
        <p className="mt-3 text-center">
          Already registered?{" "}
          <a href="/l" className="btn btn-link p-0 align-baseline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}