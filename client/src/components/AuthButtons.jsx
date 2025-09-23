import React from 'react';
import { Link } from 'react-router-dom';

const AuthButtons = ({ isLoggedIn, onLogout }) => (
  <div className="d-flex justify-content-center gap-1 ms-2">
    {isLoggedIn ? (
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={onLogout}
      >
        Logout
      </button>
    ) : (
      <>
        <Link to="/l" className="btn btn-outline-primary">
          Login
        </Link>
        <Link to="/r" className="btn btn-outline-success">
          Register
        </Link>
      </>
    )}
  </div>
);

export default AuthButtons;