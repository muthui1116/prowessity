import React from "react";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/prowessity.png"; // Adjust path as needed
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div>
                    <ThemeToggle />
                </div>
                <a className="navbar-brand me-auto" href="/">
                    <img className="prowessity-logo" src={logo} alt="Logo" />
                </a>
                <form className="d-flex ms-auto" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </form>
            </nav>
        </>
    );
}

export default Navbar;
