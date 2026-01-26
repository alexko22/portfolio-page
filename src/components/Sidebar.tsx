// Alex Olson | alexko22222@gmail.com
// src/components/Sidebar.tsx

// imports
import React from "react";
import "../styles/Sidebar.css";

// main Sidebar component...
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="profile-pic">
                <img src="/profile.jpg" alt="Profile" />
            </div>
            <h2>Alex Olson</h2>
            <p className="description">
                Eager to learn and motivated Dec 2025 CS Graduate from Boston University.
                Interested in Software Development, AI Automation, and finding creative ways to use technology.
                Currently seeking a relevant entry-level role!
            </p>

            <div className="contact">
                <p> alexko22222@gmail.com </p>
                <p> (908)-323-0846 </p>
                <p> Warren, NJ, USA</p>
                <p> US Work Authorized (Citizen) </p>
            </div>

            <div className="resume">
                <a href="/Alex-Olson-Resume.pdf" target="_blank" rel="noopener noreferrer">
                    Download Resume
                </a>
            </div>


        </div>
    );
};

// default function
export default Sidebar;

