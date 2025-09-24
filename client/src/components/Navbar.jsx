import React from "react";
import ThemeToggle from "./ThemeToggle";
import AuthButtons from "./AuthButtons"
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
                <div className="ms-auto d-flex align-items-center">
                    <AuthButtons />
                </div>
            </nav>
        </>
    );
}

export default Navbar;
