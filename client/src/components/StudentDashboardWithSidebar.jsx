import React, { useState, useEffect } from "react";
import { FaChalkboardTeacher, FaBookOpen, FaTasks, FaChartLine, FaMoneyCheckAlt, FaCertificate, FaHeadphonesAlt, FaWhatsapp, FaQuestion } from "react-icons/fa";
import WebCardC from './WebCardC'; // Ensure the path is correct

const sidebarLinksData = [
  { label: "Join Class", href: "#join-class", icon: <FaChalkboardTeacher /> },
  { label: "Home Work", href: "#homework", icon: <FaTasks /> },
  { label: "Learning Materials", href: "#materials", icon: <FaBookOpen /> },
  { label: "Course Progress", href: "#progress", icon: <FaChartLine /> },
  { label: "Fee Payment Status", href: "#fees", icon: <FaMoneyCheckAlt /> },
  { label: "Certificate Status", href: "#certificate", icon: <FaCertificate /> },
  { label: "Audio/Video", href: "#audio", icon: <FaHeadphonesAlt /> },
  { label: "WhatsApp", href: "#whatsapp", icon: <FaWhatsapp /> },
  { label: "Q & A", href: "#qa", icon: <FaQuestion /> },
];

const StudentDashboardWithSidebar = () => {
  // const getCurrentHash = () => window.location.hash || "#dashboard";
  // const [activeHash, setActiveHash] = useState(getCurrentHash());

  useEffect(() => {
    const handleHashChange = () => setActiveHash(getCurrentHash());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="container-fluid student-dashboard-bg py-4">
      <div className="row">
        {/* Sidebar */}
        <div className="col-12 col-md-3 px-0">
          <aside className="sdws-sidebar shadow-lg">
            <div className="sdws-sidebar-header text-center py-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Student"
                className="rounded-circle mb-2"
                style={{ width: "80px", height: "80px", objectFit: "cover", border: "3px solid #fff" }}
              />
              <h5 className="mb-0 fw-bold">John Doe</h5>
              <small className="text-muted">Web Development</small>
            </div>
            <div className="sdws-sidebar-links">
              {sidebarLinksData.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className={
                    "sdws-sidebar-link d-flex align-items-center px-4 py-2 mb-1" 
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
          <main className="sdws-main">
            <h2 className="sdws-main-header fw-bold mb-4">Student Dashboard</h2>
            <WebCardC />
          </main>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardWithSidebar;