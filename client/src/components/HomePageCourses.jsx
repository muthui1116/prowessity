import React from "react";

const courses = [
  {
    id: "1",
    title: "Data Analysis with Python",
    description: "Learn the basics of data analysis using Python, including Pandas and NumPy.",
    category: "Data Analysis",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "2",
    title: "Advanced Excel for Data Analysis",
    description: "Master advanced Excel functions for efficient data analysis and visualization.",
    category: "Data Analysis",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "3",
    title: "React for Beginners",
    description: "A practical introduction to modern web development using React.js.",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "4",
    title: "Fullstack Web Development",
    description: "Learn both frontend and backend web development with popular technologies.",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
];

export default function HomePageCourses() {
  // Change the Get Started link to point to /l?redirect=/courses/{course.id}
  // So user is first shown the login page, and after login, redirected to course details

  const getStartedLink = (courseId) => `/l?redirect=/courses/${courseId}`;

  return (
    <div className="productCard">
      <h2>Featured Courses</h2>

      <h3 className="mt-4">Data Analysis</h3>
      <div className="row">
        {courses.filter(c => c.category === "Data Analysis").map(course => (
          <div key={course.id} className="col-12 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <img src={course.image} className="card-img-top" alt={course.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <a 
                  href={getStartedLink(course.id)}
                  className="btn btn-primary mt-auto"
                  style={{ width: "100%" }}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mt-4">Web Development</h3>
      <div className="row">
        {courses.filter(c => c.category === "Web Development").map(course => (
          <div key={course.id} className="col-12 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <img src={course.image} className="card-img-top" alt={course.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <a 
                  href={getStartedLink(course.id)}
                  className="btn btn-primary mt-auto"
                  style={{ width: "100%" }}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}