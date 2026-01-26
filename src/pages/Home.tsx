// Alex Olson | alexko22222@gmail.com
// src/pages/Home.tsx

// imports
import React from "react";
import Masonry from "react-masonry-css";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import "../styles/Home.css";

// splash cards
const cards = [
    // College Card
    {
        type: "stat",
        description: (
            <>
                Completed my Bachelor's degree in Computer Science from Boston University in December 2025 (Jan 2026). Coursework included Software Engineering, Artificial Intelligence, Algorithms, Data Structures, Probability, Data Science, and more.
                <a
                    href="https://www.linkedin.com/in/alex-olson-403aab27a/details/courses/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                >
                    (See Courses)
                </a>
            </>
        ),
        stat: [
            { value: 17, label: "CS Courses", color: "#f59e0b" },
            { value: 3.26, label: "GPA", color: "#f59e0b" },
            ],
        imageUrl: "/bu_logo.png",
    },
    // ExoCollect Card
    {
        type: "default",
        title: "ExoCollect - Co-Founder & Developer",
        description: "Co-founded ExoCollect, a Django-based web platform that provides a gamified way for users (virtual astronomers) to learn about the composition of the universe by discovering uniquely generated virtual planets inspired by real astronomical frequencies. The platform is currently between live testing phases!",
        imageUrl: "/exo_collect.png",
    },
    {
        type: "stat",
        description: (
            <>
                Active on LinkedIn, using it to connect with other developers and keep up with the latest tools, ideas, and trends in tech.
                <a
                    href="https://www.linkedin.com/in/alex-olson-403aab27a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                >
                    (See Profile)
                </a>
            </>
        ),
        stat: { value: "500+", label: "Connections", color: "#215780" },
        imageUrl: "/linked_in_logo.png",
    },
    // Internship Card
    {
        type: "stat",
        description: "Developed AI chatbots and automated workflows for Bausch + Lomb, including scheduling, email actions, and approval flows using Power Automate and the Microsoft Power Platform. Created interactive training resources to help employees adopt AI tools effectively.",
        stat: [
            { value: 1, label: "Internship", color: "#00afbc" },
            { value: 2024, label: "Year", color: "#00afbc" },
        ],
        imageUrl: "/bnl.png"
    },
    {
        type: "default",
        title: "GitHub & Other Projects",
        description: (
            <>
                Some of my past projects are not open source, but you can see some of my work, such as the repo for this portfolio, on my GitHub.
                <a
                    href="https://github.com/alexko22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                >
                    (See Profile)
                </a>
            </>
        ),
        imageUrl: "/github_logo.png",
    },
    // Hobby Card
    {
        type: "stat",
        description: "HoYoverse recognized content creator with over 5,000 subscribers on YouTube and 250k likes on TikTok. Gained a general understanding of basic SEO practices, as well as common video editing and design platforms. Accepted to the official HoYoCREATORS program",
        stat: [
            { value: "5.3K", label: "Subscribers", color: "#5d7ffd" },
            { value: "1.7K", label: "Followers", color: "#5d7ffd" },
        ],
        imageUrl: "/hoyo_logo.webp"
    },
    // Externship Card
    {
        type: "stat",
        description: "Completed three self-paced, project-based externships with real companies, including Epic Games, Outamation, and Cognizant.",
        stat: [
            { value: 3, label: "Externships", color: "#000000" },
        ],
        imageUrl: "/extern_logo.jpg"
    },
    // Languages / Technologies Car
    {
        type: "stat",
        description: "I have project-based experience with Python, JavaScript, TypeScript, Java, OCaml, SQL, and HTML/CSS. Some resources I'm most familiar with include React, Next.js, Git/GitHub, Django, MongoDB, PostgreSQL, Heroku, and Vercel!",
        stat: [
            { value: "~7", label: "Languages", color: "#000000" },
            { value: "Many!", label: "Technologies", color: "#000000" },
        ],
        imageUrl: "/python_logo.png"
    },
    // Certification Card
    {
        type: "stat",
        imageUrl: "/google_cloud_logo.png",
        stat: { value: "5", label: "Certifications", color: "#f59e0b" },
        description: (
            <>
                Meta: HTML & CSS in Depth, Programming with JavaScript, Version Control, Intro to Front-End Development, Google Cloud: Intro to Generative AI Learning Path Specialization.
            </>
        ),
    }

];

// main Home function...
const Home = () => {
    const breakpointColumnsObj = {
        default: 3,
        1024: 2,
        600: 1
    };

    return (
        <div className="home-container">
            <Sidebar />
            <div className="main-content">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {cards.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </Masonry>
            </div>
        </div>
    );
};

// default export
export default Home;


