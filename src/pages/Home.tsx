// Alex Olson | alexko22222@gmail.com
// src/pages/Home.tsx

// imports
// import React from "react";
import Masonry from "react-masonry-css";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import "../styles/Home.css";
import type {CardProps} from "../components/Card";


// splash cards
const cards : CardProps[] = [
    // College Card
    {
        type: "stat",
        description: (
            <>
                Graduated with my Bachelor's degree in CS from Boston University in Fall 2025, where I also served as a course grader for a Full-Stack Development course. Coursework included Software Engineering, Artificial Intelligence, Algorithms, Data Structures, Probability, Data Science, and more.
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
            { value: 1, label: "Course Staff Experience", color: "#f59e0b" },
            ],
        imageUrl: "/bu_logo.png",
    },
    // ExoCollect Card
    {
        type: "default",
        title: "ExoCollect - Co-Founder & Developer",
        description: "Co-founded ExoCollect, a Django-based web platform providing a gamified way for users (virtual astronomers) to learn about the composition of the universe via discovering uniquely generated virtual planets (inspired by real astronomical frequencies). The platform is currently in between live testing phases!",
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
        description: "Developed AI chatbots and automated workflows during an internship for Bausch + Lomb, including scheduling, email actions, and approval flows utilizing Power Automate and the Microsoft Power Platform. Created interactive training resources to help employees adopt AI tools effectively.",
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
                Not all of my past projects are open source, but you can see some of my work, such as the repo for this portfolio, on my GitHub!
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
        description: (
            <>
                Official HoYoCREATORS content creator with over 5K subscribers on YouTube and 350k likes on TikTok. Gained a basic understanding of SEO practices, video editing, and graphic design. See a fun graphic I created with LinkedIn profiles for video game (Genshin Impact) characters{" "}
                <a href="/nodkrai_linkedin.pdf" target="_blank" rel="noopener noreferrer">
                    here!
                </a>
            </>
        ),
        stat: [
            { value: "5.5K", label: "Subscribers", color: "#5d7ffd" },
            { value: "2.1K", label: "Followers", color: "#5d7ffd" },
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
    // Volunteer Card
    {
        type: "default",
        title: "JerseySTEM - AI Specialist",
        description: "Currently doing pro bono work as an AI Specialist at JerseySTEM. Supporting the adoption of AI tools within the organization, creating training resources, and assisting in the planning and development of new AI tools/agents.",
        imageUrl: "/js.png",
    },
    // Languages / Technologies Card
    {
        type: "stat",
        description: "I have project and/or work experience with Python, JavaScript, TypeScript, Java, OCaml, and SQL. The technologies I'm most familiar with includes React, Next.js, Git/GitHub, Django, MongoDB, PostgreSQL, MySQL, Vercel, and the Microsoft Power Platform!",
        stat: [
            { value: "7+", label: "Languages", color: "#336d9d" },
            { value: "Many!", label: "Technologies", color: "#336d9d" },
        ],
        imageUrl: "/python_logo.png"
    },
    {
        type: "default",
        title: "YouRise AI - Developer",
        description: (
            <>
                Created YouRise AI, an online platform where you can generated AI-powered SEO suggestions from a single YouTube video link. The tech stack includes React, Django, and Next.js. The free Render hosted backend takes a minute to wake up but you can test it{""}
                <a
                    href="https://youtube-ai-analyzer-theta.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                >
                    here!
                </a>
            </>
        ),
        imageUrl: "/yr.png",
    },
    // Certification Card
    {
        type: "stat",
        imageUrl: "/google_cloud_logo.png",
        stat: { value: "8", label: "Certifications", color: "#fd3d00" },
        description: (
            <>
                Always seeking to learn more, I have sought out and completed various certifications related to Software Development, AI, and SQL from reputable companies like Microsoft, Meta, and Wells Fargo. You can see all the certifications I've completed on my LinkedIn{""}
                <a
                    href="https://www.linkedin.com/in/alex-olson-403aab27a/details/certifications/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                >
                    here!
                </a>
            </>
        ),
    },

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


