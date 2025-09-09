import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

import { Routes, Route } from "react-router-dom";
import {Toaster} from "react-hot-toast"

import ThemeToggle from "./components/ThemeToggle";
import useThemeStore from "./store/useThemeStore";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";


function App() {
  const { theme } = useThemeStore();
  return (
    <>
      <div className={`bg-${theme}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/web-dev" element={<WebDevelopmentPage />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;

