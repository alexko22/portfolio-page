import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Home.css";
import "../styles/Projects.css";

interface Project {
    title: string;
    titleColor: string;
    description: string;
    technologies: string[];
    images?: {
        main?: string;
        topRight?: string;
        bottomRight?: string;
    };
    projectUrl?: string;
    accent: string;
}

const projects: Project[] = [
    {
        title: "ExoCollect",
        titleColor: "#6d4ed6",
        description:
            "Co-founded ExoCollect, an exoplanetary collection platform where users discover uniquely generated planets, complete daily research missions, compare findings, and grow a personal archive. Modernized the Django application with responsive UI, security, test coverage, and an active Heroku deployment.",
        technologies: ["Python", "Django", "PostgreSQL", "Heroku", "Pytest"],
        images: {
            main: "/project-images/exo1.png",
            topRight: "/project-images/exo2.png",
            bottomRight: "/project-images/exo3.png",
        },
        projectUrl: "https://exocollect.org",
        accent: "#7657e6",
    },
    {
        title: "Knomi",
        titleColor: "#d00fde",
        description:
            "Created a customizable personal page where users create and share profiles made from ranked lists, links, and content cards. Knomi combines responsive profile editing, drag-and-drop organization, themes, custom tabs, and shareable public pages across a React and TypeScript frontend with a Laravel and MySQL backend.",
        technologies: ["React", "TypeScript", "Laravel", "MySQL", "Vite"],
        images: {
            main: "/project-images/knomi2.png",
            topRight: "/project-images/knomi4.png",
            bottomRight: "/project-images/knomi3.png",
        },
        projectUrl: "https://knomi.gg/alexko",
        accent: "#d00fde",
    },
    {
        title: "KS Fantasy",
        titleColor: "#078a4f",
        description:
            "Actively developing a fantasy football mobile app for use with my friends! It runs on a replaceable Sleeper API, normalizes live stats/projections for custom scoring, and supports lineups, matchups, waivers, trades, standings, playoffs, and league chat.",
        technologies: ["React Native", "TypeScript", "Expo", "Fastify", "Sleeper API"],
        images: {
            main: "/project-images/fantasy1.png",
            topRight: "/project-images/fantasy2.png",
            bottomRight: "/project-images/fantasy4.png",
        },
        accent: "#08b95f",
    },
];

const Projects = () => {
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

    useEffect(() => {
        if (!selectedImage) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setSelectedImage(null);
        };
        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedImage]);

    return (
        <div className="home-container projects-page">
            <Sidebar />
            <main className="projects-content">
                <div className="project-list">
                    {projects.map((project, index) => (
                        <article
                            className="project-row"
                            key={project.title}
                            aria-label={`${project.title} project`}
                        >
                            <div
                                className="project-collage"
                                style={{ "--project-accent": project.accent } as React.CSSProperties}
                                aria-label={`${project.title} project image collage`}
                            >
                                <button
                                    type="button"
                                    className="collage-card collage-main"
                                    aria-label={`Enlarge ${project.title} primary project screenshot`}
                                    onClick={() => project.images?.main && setSelectedImage({
                                        src: project.images.main,
                                        alt: `${project.title} primary project screenshot`,
                                    })}
                                >
                                    {project.images?.main ? (
                                        <img src={project.images.main} alt="" />
                                    ) : (
                                        <>
                                            <span className="collage-number">{String(index + 1).padStart(2, "0")}</span>
                                            <div className="collage-orbit" aria-hidden="true" />
                                        </>
                                    )}
                                </button>
                                <button
                                    type="button"
                                    className="collage-card collage-top"
                                    aria-label={`Enlarge ${project.title} secondary project screenshot`}
                                    onClick={() => project.images?.topRight && setSelectedImage({
                                        src: project.images.topRight,
                                        alt: `${project.title} secondary project screenshot`,
                                    })}
                                >
                                    {project.images?.topRight ? (
                                        <img src={project.images.topRight} alt="" />
                                    ) : (
                                        <div className="collage-lines" aria-hidden="true">
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                    )}
                                </button>
                                <button
                                    type="button"
                                    className="collage-card collage-bottom"
                                    aria-label={`Enlarge ${project.title} detail project screenshot`}
                                    onClick={() => project.images?.bottomRight && setSelectedImage({
                                        src: project.images.bottomRight,
                                        alt: `${project.title} detail project screenshot`,
                                    })}
                                >
                                    {project.images?.bottomRight ? (
                                        <img src={project.images.bottomRight} alt="" />
                                    ) : (
                                        <div className="collage-grid" aria-hidden="true">
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                    )}
                                </button>
                            </div>

                            <div className="project-details">
                                <div className="project-title-row">
                                    <h2 style={{ color: project.titleColor }}>{project.title}</h2>
                                    {project.projectUrl && (
                                        <a
                                            className="project-link"
                                            href={project.projectUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ color: project.titleColor, borderColor: project.titleColor }}
                                        >
                                            <span>View project</span>
                                            <svg
                                                className="project-link-icon"
                                                viewBox="0 0 16 16"
                                                aria-hidden="true"
                                            >
                                                <path d="M5 11 11 5M6 5h5v5" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                                <p className="project-description">{project.description}</p>

                                <ul className="technology-list" aria-label={`${project.title} technologies`}>
                                    {project.technologies.map((technology) => (
                                        <li key={technology}>{technology}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </main>

            {selectedImage && (
                <div
                    className="image-lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label={selectedImage.alt}
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="image-lightbox-content" onClick={(event) => event.stopPropagation()}>
                        <button
                            type="button"
                            className="image-lightbox-close"
                            aria-label="Close enlarged image"
                            onClick={() => setSelectedImage(null)}
                            autoFocus
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="m6 6 12 12M18 6 6 18" />
                            </svg>
                        </button>
                        <img src={selectedImage.src} alt={selectedImage.alt} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
