import React from 'react';

function InstructorWebCardC() {
  return (
    <div className='course-cards'>
      <div className='row'>
        <div className='col-12 col-md-6 mb-4'>
          <div className="card gradient-background-card shadow">
            <div className="card-body">
              <h5 className="card-title fw-bold">Upcoming Classes</h5>
              <a href="#classes" className="card-link">View Schedule</a>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6 mb-4'>
          <div className="card gradient-background-card shadow">
            <div className="card-body">
              <h5 className="card-title fw-bold">Assignments to Grade</h5>
              <a href="#assignments" className="card-link">Grade Now</a>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6 mb-3'>
          <div className="card gradient-background-card shadow">
            <div className="card-body">
              <h5 className="card-title fw-bold">Materials Library</h5>
              <a href="#materials" className="card-link">Manage Materials</a>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6 mb-3'>
          <div className="card gradient-background-card shadow">
            <div className="card-body">
              <h5 className="card-title fw-bold">Student Progress</h5>
              <a href="#progress" className="card-link">Track Progress</a>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6 mb-3'>
          <div className="card gradient-background-card shadow">
            <div className="card-body">
              <h5 className="card-title fw-bold">Fee Reports</h5>
              <a href="#fees" className="card-link">View Reports</a>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6 mb-3'>
          <div className="card gradient-background-card shadow">
            <div className="card-body">
              <h5 className="card-title fw-bold">Certificates Issued</h5>
              <a href="#certificates" className="card-link">Check Certificates</a>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6 mb-3'>
          <div className="card gradient-background-card shadow">
            <div className="card-body">
              <h5 className="card-title fw-bold">Student List</h5>
              <a href="#students" className="card-link">Manage Students</a>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6 mb-3'>
          <div className="card gradient-background-card shadow">
            <div className="card-body">
              <h5 className="card-title fw-bold">Attendance</h5>
              <a href="#attendance" className="card-link">Take Attendance</a>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6 mb-3'>
          <div className="card gradient-background-card shadow">
            <div className="card-body">
              <h5 className="card-title fw-bold">Reports</h5>
              <a href="#reports" className="card-link">Generate Report</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructorWebCardC;