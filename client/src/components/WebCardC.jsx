import React from 'react';

function WebCardC() {
    return (
        <div className='course-cards'>
            <div className='row'>
                <div className='col-12 col-md-6 mb-4'>
                    <div className="card gradient-background-card shadow">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Join Class</h5>
                            <a href="#join-class" className="card-link">Go to class</a>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 mb-4'>
                    <div className="card gradient-background-card shadow">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Learning Materials</h5>
                            <a href="#materials" className="card-link">Visit Online Library</a>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 mb-3'>
                    <div className="card gradient-background-card shadow">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Home Work</h5>
                            <a href="#homework" className="card-link">Incomplete Assignments</a>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 mb-3'>
                    <div className="card gradient-background-card shadow">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Course Progress</h5>
                            <a href="#progress" className="card-link">60%</a>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 mb-3'>
                    <div className="card gradient-background-card shadow">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Fee Status</h5>
                            <a href="#fees" className="card-link">60%</a>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 mb-3'>
                    <div className="card gradient-background-card shadow">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Certificate Status</h5>
                            <a href="#certificate" className="card-link">60%</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebCardC;