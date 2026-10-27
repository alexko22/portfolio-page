// Alex Olson | alexko22222@gmail.com
// src/components/Sidebar.tsx

// imports
// import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Sidebar.css";

// main Sidebar component...
const Sidebar = () => {
    const { pathname } = useLocation();
    const isProjectsPage = pathname === "/projects";

    return (
        <div className="sidebar">
            <div className="profile-pic">
                <img src="/profile.jpg" alt="Profile" />
            </div>
            <h2>Alex Olson</h2>
            <p className="description">
                Creative and eager to upskill Fall 2025 CS Graduate from Boston University.
                Full-time Junior Full Stack Developer @ Giftogram.
                Feel free to connect!
            </p>

            <div className="contact">
                <p> alexko22222@gmail.com </p>
                <p> Warren, NJ, USA</p>
                <p> US Work Authorized (Citizen) </p>
                <p> Open to Relocation </p>
            </div>

            <div className="sidebar-actions">
                <a href="/AO_Resume_November.pdf" target="_blank" rel="noopener noreferrer">
                    Download Resume
                </a>
                <Link to={isProjectsPage ? "/" : "/projects"}>
                    {isProjectsPage ? "Overview" : "View Projects"}
                </Link>
            </div>


        </div>
    );
};

// default function
export default Sidebar;

