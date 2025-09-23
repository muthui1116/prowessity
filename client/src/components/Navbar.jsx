import React from "react";
import ThemeToggle from "./ThemeToggle";
import AuthButtons from "./AuthButtons";
import logo from "../assets/prowessity.png"; // Adjust path as needed
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div>
                    <ThemeToggle />
                   
                </div>
 <a className="navbar-brand d-flex align-items-center" href="/">
                        <img className="prowessity-logo" src={logo} alt="Logo" />
                    </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">


                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Courses
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item " href="/l">
                                        Web Development
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/l">
                                        Data analysis
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        {/* <input
                            class="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button class="btn btn-outline-success" type="submit">
                            Search
                        </button> */}
                        <AuthButtons />
                    </form>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
