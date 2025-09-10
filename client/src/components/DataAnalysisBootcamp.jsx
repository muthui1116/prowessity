import React, { useState } from "react";

const curriculum = [
  {
    phase: "Orientation & Onboarding",
    topics: [
      "Introduction to data analysis concepts",
      "Setting up your analytics environment",
      "Overview of tools: Excel, SQL, Python",
    ],
  },
  {
    phase: "Phase 1 - Excel for Business Analytics",
    topics: [
      "Advanced formulas and functions",
      "Pivot tables and data summarization",
      "Data cleaning and transformation",
      "Business case: Sales performance analysis",
    ],
  },
  {
    phase: "Phase 2 - SQL for Data Management",
    topics: [
      "Database fundamentals",
      "SQL queries (SELECT, JOIN, GROUP BY)",
      "Data aggregation techniques",
      "Business case: Customer database analysis",
    ],
  },
  {
    phase: "Phase 3 - Python for Data Analysis",
    topics: [
      "Python programming basics",
      "Pandas for data manipulation",
      "Data visualization with Matplotlib",
      "Business case: Market trend analysis",
    ],
  },
  {
    phase: "Phase 4 - Data Visualization & Reporting",
    topics: [
      "Creating dashboards in Tableau",
      "Power BI for business reporting",
      "Data storytelling techniques",
      "Final Project: Comprehensive business analysis",
    ],
  },
];

const opportunities = [
  "Business Analyst",
  "Data Analyst",
  "Marketing Analyst",
  "Financial Analyst",
  "Operations Analyst",
  "Insights Manager",
];

const DataAnalysisBootcamp = () => {
  const [opened, setOpened] = useState(null);

  return (
    <div className="container my-5">
      <h1>Data Analysis Bootcamp</h1>
      <p className="fw-bold fs-5">Master Data-Driven Decision Making in 4 Weeks</p>
      <p>
        Our comprehensive Data Analysis Bootcamp is designed for professionals and graduates who want to transform raw data into actionable business insights. You'll master Excel, SQL, and Python for data analysis while learning advanced visualization techniques with Tableau and Power BI. Through hands-on projects with real Kenyan business datasets, you'll develop the skills to solve practical business challenges across industries like finance, healthcare, and e-commerce. A basic understanding of mathematics and computer literacy is recommended for optimal learning outcomes.
      </p>

      <div className="bg-light p-4 rounded my-4">
        <strong>2025 Intakes in Progress</strong>
        <div className="row mt-3">
          <div className="col-md-6">
            <h4>Full-time Remote</h4>
            <ul>
              <li>Course Duration: 4 Weeks</li>
              <li>Mode of Learning: 100% Online Classes | Mon - Fri 8 am - 5 pm E.A.T</li>
              <li>Tuition Fee: Ksh 20,000</li>
              <li><a href="#">Brochure: Download Here</a></li>
              <li><a href="#">Fees Installment Plans: Download Here</a></li>
              <li><a href="/payments">Apply Now: Click Here</a></li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4>Part-time Remote</h4>
            <ul>
              <li>Course Duration: 6 Weeks</li>
              <li>Mode of Learning: 100% Online Classes | Mon - Fri 6 pm - 9 pm E.A.T, Saturday 9 am - 1 pm</li>
              <li>Tuition Fee: Ksh 20,000</li>
              <li><a href="#">Brochure: Download Here</a></li>
              <li><a href="#">Fees Installment Plans: Download Here</a></li>
              <li><a href="/payments">Apply Now: Click Here</a></li>
            </ul>
          </div>
        </div>
      </div>

      <p>
        Acquire the data fluency that Kenyan employers value. If you aspire to be a Business Analyst, Data Analyst, or Insights Manager, this program provides the perfect foundation. Ideal candidates include business professionals, marketing executives, finance officers, and recent graduates who want to add data skills to their professional toolkit.
      </p>
      <p>
        Our intensive curriculum takes you from spreadsheet basics to advanced analytics, covering:
      </p>
      <ul>
        <li>Advanced Excel techniques for business analysis</li>
        <li>SQL for database management and querying</li>
        <li>Python programming for data manipulation</li>
        <li>Data visualization and dashboard creation</li>
        <li>Statistical analysis for business decision-making</li>
      </ul>
      <p>
        You'll complete 3+ real-world projects analyzing actual business data, receiving personalized feedback from our team of analytics professionals working at leading Kenyan companies.
      </p>

      <h3>Welcome to Prowessity!</h3>

      <section className="mt-4">
        <h2>Course Details</h2>
        <h5>What is Data Analysis?</h5>
        <p>
          Data analysis is the process of systematically applying statistical and logical techniques to describe, summarize, and compare data. It enables organizations to make informed decisions by transforming raw numbers into meaningful insights about performance, trends, and opportunities.
        </p>

        <h5>Who is this course for?</h5>
        <ul>
          <li>Business professionals seeking data skills for career advancement</li>
          <li>Marketing and sales teams wanting to measure campaign performance</li>
          <li>Finance and operations staff needing analytical capabilities</li>
          <li>Recent graduates looking to enhance employability</li>
          <li>Entrepreneurs who want data-driven business insights</li>
        </ul>

        <h5>What are the course prerequisites?</h5>
        <ul>
          <li>Basic computer literacy (Microsoft Office familiarity)</li>
          <li>Comfort with high school mathematics</li>
          <li>No prior programming experience required</li>
          <li>Dedication to complete intensive coursework</li>
        </ul>

        <h5>Why learn Data Analysis?</h5>
        <ul>
          <li>Ranked among top 3 most in-demand business skills globally</li>
          <li>Professionals in this field enjoy strong earning potential across multiple sectors</li>
          <li>Applicable across all industries and business functions</li>
          <li>Foundation for advancing to data science roles</li>
          <li>Enables evidence-based decision making</li>
        </ul>

        <h5>Why Study At Prowessity?</h5>
        <ul>
          <li>Curriculum designed by Kenyan analytics professionals</li>
          <li>Practical projects using real Kenyan business datasets</li>
          <li>1-on-1 mentorship from working analysts</li>
          <li>Career support including interview preparation</li>
          <li>Affordable pricing with flexible payment plans</li>
        </ul>
      </section>

      <section className="mt-5">
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
        <div className="bg-light p-3 rounded mt-3">
          <h4>Business Analyst</h4>
          <p>
            Interpret complex business data to identify trends, create reports, and provide actionable recommendations that drive organizational strategy and operational improvements.
          </p>
        </div>

        <h2 className="mb-3">Ready to become data-driven?</h2>
        <a href="/web">
          <button type="button" className="btn btn-outline-primary">Get Started Today</button>
        </a>
      </section>
    </div>
  );
};

export default DataAnalysisBootcamp;
