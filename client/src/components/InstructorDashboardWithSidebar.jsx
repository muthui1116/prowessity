import React, { useState, useEffect } from "react";
import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaTasks,
  FaChartLine,
  FaMoneyCheckAlt,
  FaCertificate,
  FaHeadphonesAlt,
  FaWhatsapp,
  FaQuestion,
  FaUsers,
  FaClipboardList,
  FaRegCalendarCheck,
} from "react-icons/fa";
import InstructorWebCardC from './InstructorWebCardC'; // Ensure the path is correct

const sidebarLinksData = [
  { label: "My Classes", href: "#classes", icon: <FaChalkboardTeacher /> },
  { label: "Assignments", href: "#assignments", icon: <FaTasks /> },
  { label: "Materials Library", href: "#materials", icon: <FaBookOpen /> },
  { label: "Student Progress", href: "#progress", icon: <FaChartLine /> },
  { label: "Fee Reports", href: "#fees", icon: <FaMoneyCheckAlt /> },
  { label: "Certificates Issued", href: "#certificates", icon: <FaCertificate /> },
  { label: "Audio/Video Resources", href: "#media", icon: <FaHeadphonesAlt /> },
  { label: "Class WhatsApp", href: "#whatsapp", icon: <FaWhatsapp /> },
  { label: "Q & A", href: "#qa", icon: <FaQuestion /> },
  { label: "Student List", href: "#students", icon: <FaUsers /> },
  { label: "Attendance", href: "#attendance", icon: <FaRegCalendarCheck /> },
  { label: "Reports", href: "#reports", icon: <FaClipboardList /> },
];

const InstructorDashboardWithSidebar = () => {
  // const getCurrentHash = () => window.location.hash || "#dashboard";
  // const [activeHash, setActiveHash] = useState(getCurrentHash());

  useEffect(() => {
    const handleHashChange = () => setActiveHash(getCurrentHash());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="container-fluid instructor-dashboard-bg py-4">
      <div className="row">
        {/* Sidebar */}
        <div className="col-12 col-md-3 px-0">
          <aside className="idws-sidebar shadow-lg">
            <div className="idws-sidebar-header text-center py-4">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Instructor"
                className="rounded-circle mb-2"
                style={{ width: "80px", height: "80px", objectFit: "cover", border: "3px solid #fff" }}
              />
              <h5 className="mb-0 fw-bold">Jane Smith</h5>
              <small className="text-muted">Lead Instructor</small>
            </div>
            <div className="idws-sidebar-links">
              {sidebarLinksData.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className={
                    "idws-sidebar-link d-flex align-items-center px-4 py-2 mb-1"
                  }
                  onClick={() => setActiveHash(link.href)}
                >
                  <span className="sidebar-link-icon me-3">{link.icon}</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </aside>
        </div>
        {/* Main Content */}
        <div className="col-12 col-md-9">
          <main className="idws-main">
            <h2 className="idws-main-header fw-bold mb-4">Instructor Dashboard</h2>
            <InstructorWebCardC />
          </main>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboardWithSidebar;