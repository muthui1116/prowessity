import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

// Base URL will be dynamic depending on the environment
const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000"
    : "";

export const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  error: null,

  register: async ({ name, email, password, confirmPassword }) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(`${BASE_URL}/api/courses/register`, {
        name,
        email,
        password,
        confirmPassword,
      });
      set({ loading: false, error: null });
      // Optionally show a toast or set user if your backend returns it
      toast.success("Registration successful!");
      // set({ user: res.data.user }) if your backend returns a user object
      return true;
    } catch (err) {
      set({ loading: false, error: err.response?.data?.error || err.message });
      toast.error(err.response?.data?.error || "Registration failed");
      return false;
    }
  },

  login: async ({ email, password }) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(`${BASE_URL}/api/courses/login`, {
        email,
        password,
      });
      set({ user: res.data.user, loading: false, error: null });
      toast.success("Login successful!");
      return true;
    } catch (err) {
      set({ loading: false, error: err.response?.data?.error || err.message });
      toast.error(err.response?.data?.error || "Login failed");
      return false;
    }
  },

  logout: () => set({ user: null }),
}));