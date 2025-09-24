import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast"

//PAGES
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import HomePageRoute from "./pages/HomePageRoute";

//STATE MANAGEMENT
import ThemeToggle from "./components/ThemeToggle";
import useThemeStore from "./store/useThemeStore";

//LINKS
import MobileAppDevelopmentBootcamp from './components/StudentDashboardWithSidebar'
import DataAnalysisBootcamp from "./components/DataAnalysisBootcamp";
import StudentDashboardWithSidebar from "./components/StudentDashboardWithSidebar";
import InstructorDashboardWithSidebar from "./components/InstructorDashboardWithSidebar";
import {RegisterForm} from "./components/RegisterForm";
import {LoginForm} from "./components/LoginForm";
import { CourseDetails } from "./components/CourseDetails"




function App() {
  const { theme } = useThemeStore();
  return (
    <>
      <div className={`bg-${theme}`}>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/web-dev" element={<StudentDashboardWithSidebar />} />
          <Route path="/web-de" element={<InstructorDashboardWithSidebar />} />
         
          <Route path="/" element={<HomePage />} />
          <Route path="/r" element={<RegisterForm />} />
          <Route path="/l" element={<LoginForm />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;

