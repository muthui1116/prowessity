import React, { useState } from "react";

const curriculum = [
    {
        phase: "Orientation & Onboarding",
        topics: [
            "Mobile development landscape",
            "Flutter environment setup",
            "Introduction to Dart",
        ],
    },
    {
        phase: "Phase 1 - Flutter Fundamentals",
        topics: [
            "Widget tree and composition",
            "Layouts and navigation",
            "Basic state management",
            "Project: Personal portfolio app",
        ],
    },
    {
        phase: "Phase 2 - Intermediate Flutter",
        topics: [
            "Advanced UI components",
            "State management solutions",
            "Device API integration",
            "Project: Weather application",
        ],
    },
    {
        phase: "Phase 3 - Backend Integration",
        topics: [
            "REST API consumption",
            "Firebase authentication",
            "Cloud Firestore database",
            "Project: Social media app",
        ],
    },
    {
        phase: "Phase 4 - Advanced Concepts",
        topics: [
            "Animations and gestures",
            "Performance optimization",
            "Testing and debugging",
            "Project: E-commerce app",
        ],
    },
    {
        phase: "Phase 5 - Final Projects",
        topics: [
            "Capstone app development",
            "App store submission",
            "Portfolio presentation",
        ],
    },
];

const opportunities = [
    "Flutter Developer",
    "Mobile App Developer",
    "UI/UX Developer",
    "App Entrepreneur",
    "Technical Consultant",
    "Freelance Developer",
];

const MobileAppDevelopmentBootcamp = () => {
    const [opened, setOpened] = useState(null);

    return (
        <>
            <div className="container course-description">
                <h1>Mobile App Development Bootcamp</h1>
                <p style={{ fontWeight: "bold", fontSize: "1.2em" }}>
                    Build Cross-Platform Mobile Applications in 6 Weeks
                </p>
                <p>
                    Our intensive Mobile App Development Bootcamp is designed for developers who want to master Flutter framework to create beautiful, native-quality iOS and Android applications from a single codebase. Through hands-on projects, you'll develop expertise in Dart programming, state management, API integration, and app publishing while building a portfolio of production-ready mobile applications. A foundational understanding of programming concepts is recommended for success in this comprehensive program.
                </p>

                <div style={{ background: "#f2f3f5", padding: 20, borderRadius: 8, margin: "1.5em 0" }}>
                    <strong>2025 Intakes in Progress</strong>
                    <div className="row mt-3">
                        <div className="col-12 col-md-6">
                            <h4>Full-time Remote</h4>
                            <ul>
                                <li>Course Duration: 6 Weeks</li>
                                <li>Mode of Learning: 100% Online Classes | Mon - Fri 8 am - 5 pm E.A.T</li>
                                <li>Tuition Fee: Ksh 36,000</li>
                                <li><a href="#">Brochure: Download Here</a></li>
                                <li><a href="#">Fees Installment Plans: Download Here</a></li>
                                <li><a href="/payments">Apply Now: Click Here</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6">
                            <h4>Part-time Remote</h4>
                            <ul>
                                <li>Course Duration: 8 Weeks</li>
                                <li>Mode of Learning: 100% Online Classes | Mon - Fri 6 pm - 9 pm E.A.T, Saturday 9 am - 1 pm</li>
                                <li>Tuition Fee: Ksh 36,000</li>
                                <li><a href="#">Brochure: Download Here</a></li>
                                <li><a href="#">Fees Installment Plans: Download Here</a></li>
                                <li><a href="/payments">Apply Now: Click Here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <section style={{ marginBottom: 24 }}>
                    <h2>Master the future of mobile development</h2>
                    <p>
                        If you aspire to become a Mobile Developer, Flutter Specialist, or App Entrepreneur, this program provides the complete toolkit for success. Ideal candidates include web developers expanding to mobile, computer science students, and tech professionals looking to build cross-platform applications efficiently.
                    </p>
                </section>

                <section style={{ marginBottom: 24 }}>
                    <h2>Our comprehensive curriculum covers:</h2>
                    <ul>
                        <li>Dart programming language fundamentals</li>
                        <li>Flutter widget ecosystem</li>
                        <li>State management solutions</li>
                        <li>REST API integration</li>
                        <li>Firebase backend services</li>
                        <li>App store deployment</li>
                    </ul>
                    <p>
                        You'll build multiple complete applications, including a social media app and e-commerce platform, while receiving personalized code reviews from our team of senior Flutter developers working with leading African tech startups.
                    </p>
                </section>

                <section style={{ marginBottom: 24 }}>
                    <h2>Welcome to Prowessity!</h2>
                </section>

                <section style={{ marginBottom: 24 }}>
                    <h2>Course Details</h2>
                    <h4>What is Mobile App Development?</h4>
                    <p>
                        Mobile app development is the process of creating software applications that run on mobile devices, combining UI/UX design principles with programming to build intuitive, performant experiences for iOS and Android platforms using frameworks like Flutter.
                    </p>
                    <h4>Who is this course for?</h4>
                    <ul>
                        <li>Web developers expanding to mobile</li>
                        <li>Entrepreneurs building app startups</li>
                        <li>Computer science students</li>
                        <li>UI designers adding development skills</li>
                        <li>Tech professionals transitioning to mobile</li>
                    </ul>
                    <h4>What are the course prerequisites?</h4>
                    <ul>
                        <li>Basic programming knowledge</li>
                        <li>Understanding of REST APIs</li>
                        <li>No prior mobile experience required</li>
                        <li>Access to a development computer</li>
                        <li>Android/iOS device for testing</li>
                    </ul>
                </section>

                <section style={{ marginBottom: 24 }}>
                    <h2>Why learn Mobile App Development?</h2>
                    <ul>
                        <li>Kenya's mobile-first economy demands app solutions</li>
                        <li>Flutter specialists are in high demand with strong compensation.</li>
                        <li>Build for both iOS and Android simultaneously</li>
                        <li>Growing demand for African-made mobile solutions</li>
                        <li>Potential to create profitable app products</li>
                    </ul>
                </section>

                <section style={{ marginBottom: 24 }}>
                    <h2>Why Study At Prowessity?</h2>
                    <ul>
                        <li>Curriculum designed by senior Flutter developers</li>
                        <li>Project-based learning with real-world complexity</li>
                        <li>1-on-1 mentorship and code reviews</li>
                        <li>App store deployment guidance</li>
                        <li>Connections to our tech startup partners</li>
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
                                    <span style={{
                                        display: "inline-block",
                                        transform: opened === index ? "rotate(90deg)" : "rotate(0deg)",
                                        transition: "transform 0.2s"
                                    }}>▶</span>
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

                <section style={{ marginBottom: 24 }}>
                    <h2>Career Opportunities</h2>
                    <ul>
                        {opportunities.map((role) => (
                            <li key={role}>{role}</li>
                        ))}
                    </ul>
                    <div style={{ background: "#f9f9f9", padding: "1em", borderRadius: 6, marginTop: 12 }}>
                        <h4>Flutter Developer</h4>
                        <p>
                            Design and build beautiful, native-quality mobile applications for both iOS and Android platforms using Flutter framework, implementing responsive UIs, efficient state management, and seamless backend integration to create performant, user-friendly experiences.
                        </p>
                    </div>

                    <h2 className="mb-3">Ready to build the next great African mobile app?</h2>
                    <a href="/web">
                        <button type="button" className="btn btn-outline-primary">Get Started Today</button>
                    </a>
                </section>
            </div>
        </>
    );
};

export default MobileAppDevelopmentBootcamp;
