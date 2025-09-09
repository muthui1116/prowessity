import React, { useState } from "react";

const curriculum = [
  {
    phase: "Orientation & Onboarding",
    topics: [
      "Development environment setup",
      "Introduction to version control (Git)",
      "Agile methodology basics",
    ],
  },
  {
    phase: "Phase 1 - Frontend Foundations",
    topics: [
      "HTML5 semantic markup",
      "CSS3 styling and animations",
      "Responsive design principles",
      "Accessibility standards",
    ],
  },
  {
    phase: "Phase 2 - JavaScript Mastery",
    topics: [
      "ES6+ syntax and features",
      "DOM manipulation",
      "Asynchronous programming",
      "API consumption",
    ],
  },
  {
    phase: "Phase 3 - React Framework",
    topics: [
      "Component architecture",
      "State management",
      "React hooks",
      "Routing",
    ],
  },
  {
    phase: "Phase 4 - Backend Development",
    topics: [
      "Node.js runtime",
      "Express framework",
      "REST API design",
      "Postgresql database",
    ],
  },
  {
    phase: "Phase 5 - Final Projects",
    topics: [
      "E-commerce platform",
      "Social media dashboard",
      "Portfolio website",
    ],
  },
];

const opportunities = [
  "Frontend Developer",
  "Backend Developer",
  "Full-Stack Engineer",
  "UI/UX Developer",
  "Technical Consultant",
];

const WebDevelopmentBootcamp = () => {
  const [opened, setOpened] = useState(null);

  return (
    <div className="container course-description">
      <h1>Web Development Bootcamp</h1>
      <p style={{ fontWeight: "bold", fontSize: "1.2em" }}>
        Become a Full-Stack Developer Master in 6 Weeks
      </p>
      <p>
        Our intensive Web Development Bootcamp is designed for aspiring developers who want to master both frontend and backend technologies. You'll learn to build responsive, interactive web applications using modern frameworks like React and Node.js while working with real-world projects that simulate industry environments. This program is ideal for those looking to launch a tech career or upgrade their development skills to professional standards.
      </p>

      <div style={{ background: "#f2f3f5", padding: 20, borderRadius: 8, margin: "1.5em 0" }}>
        <strong>2025 Intakes in Progress</strong>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2em", marginTop: 12 }}>
          <div>
            <h4>Full-time Remote</h4>
            <ul>
              <li>Course Duration: 6 Weeks</li>
              <li>100% Online | Mon - Fri 8 am - 5 pm E.A.T</li>
              <li>Tuition Fee: Ksh 30,000</li>
              <li><a href="#">Brochure: Download Here</a></li>
              <li><a href="#">Fees Installment Plans: Download Here</a></li>
              <li><a href="/payments">Enroll: Click Here</a></li>
            </ul>
          </div>
          <div>
            <h4>Part-time Remote</h4>
            <ul>
              <li>Course Duration: 8 Weeks</li>
              <li>100% Online | Mon - Fri 6 pm - 9 pm E.A.T, Sat 9 am - 1 pm</li>
              <li>Tuition Fee: Ksh 30,000</li>
              <li><a href="#">Brochure: Download Here</a></li>
              <li><a href="#">Fees Installment Plans: Download Here</a></li>
              <li><a href="/payments">Enroll: Click Here</a></li>
            </ul>
          </div>
        </div>
      </div>

      <section>
        <h2>Transform your career with cutting-edge web development skills</h2>
        <p>
          If you aspire to become a Frontend Developer, Backend Engineer, or Full-Stack Specialist, this program provides the perfect launchpad. Ideal candidates include career changers, recent graduates, and tech enthusiasts ready to immerse themselves in a rigorous, project-based learning environment.
        </p>
        <p>
          Our comprehensive curriculum takes you from absolute beginner to job-ready developer, covering everything from basic HTML/CSS to advanced JavaScript frameworks and server-side programming. You'll build a professional portfolio with 5+ real-world projects and receive personalized mentorship from senior developers working at top tech companies.
        </p>
        <p>By the end, you'll have mastered:</p>
        <ul>
          <li>Modern frontend development with React</li>
          <li>Backend programming with Node.js and Express</li>
          <li>Database management with Postgres</li>
          <li>Deployment and DevOps basics</li>
          <li>Agile development methodologies</li>
        </ul>
      </section>

      <section>
        <h2>Course Details</h2>
        <h4>What is Web Development?</h4>
        <p>
          Web development involves creating, building, and maintaining websites and web applications that run online. It encompasses everything from simple static web pages to complex web applications, electronic businesses, and social network services.
        </p>

        <h4>Who is this course for?</h4>
        <ul>
          <li>Career changers seeking entry into the tech industry</li>
          <li>University graduates looking to enhance employability</li>
          <li>Entrepreneurs who want to build their own web applications</li>
          <li>Professionals aiming to upgrade their technical skills</li>
        </ul>

        <h4>What are the course prerequisites?</h4>
        <ul>
          <li>Basic computer literacy</li>
          <li>No prior coding experience required</li>
          <li>Dedication to complete intensive coursework</li>
        </ul>

        <h4>Why learn Web Development?</h4>
        <ul>
          <li>Ranked among the top 5 most in-demand tech skills globally</li>
          <li>Graduates secure competitive salaries in Kenya's thriving tech industry</li>
          <li>Flexible remote work opportunities worldwide</li>
          <li>Strong foundation for specializing in other tech domains</li>
        </ul>

        <h4>Why Study At Prowessity?</h4>
        <ul>
          <li>Industry-designed curriculum updated quarterly</li>
          <li>Project-based learning with real client briefs</li>
          <li>1-on-1 mentorship from senior developers</li>
          <li>Career support including interview preparation</li>
          <li>Active alumni network of 1000+ developers</li>
        </ul>
      </section>

      <section>
        <h2>Curriculum Overview</h2>
        <div style={{ borderRadius: 8, overflow: "hidden", marginBottom: 24 }}>
          {curriculum.map((module, index) => (
            <div key={module.phase} style={{ borderBottom: "1px solid #e2e2e2" }}>
              <button
                onClick={() => setOpened(opened === index ? null : index)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "1em",
                  background: "#fff",
                  border: "none",
                  outline: "none",
                  fontWeight: "bold",
                  fontSize: "1.05em",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
                aria-expanded={opened === index}
              >
                <span
                  style={{
                    display: "inline-block",
                    transform: opened === index ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                >
                  ▶
                </span>
                {module.phase}
              </button>
              {opened === index && (
                <ul style={{ margin: 0, padding: "0 2em 1em 2.5em", background: "#fcfcfc" }}>
                  {module.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Career Opportunities</h2>
        <ul>
          {opportunities.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
        <div style={{ background: "#f9f9f9", padding: "1em", borderRadius: 6, marginTop: 12 }}>
          <h4>Web Developer</h4>
          <p>
            Design, build, and maintain websites and web applications using programming languages and frameworks to create seamless user experiences across devices.
          </p>
        </div>

        <h2 className="mb-3">Ready to launch your tech career?</h2>
        <a href="/web">
          <button type="button" className="btn btn-outline-primary">Get Started Today</button>
        </a>
      </section>
    </div>
  );
};

export default WebDevelopmentBootcamp;
