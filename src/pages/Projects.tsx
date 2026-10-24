import Sidebar from "../components/Sidebar";
import "../styles/Home.css";
import "../styles/Projects.css";

interface Project {
    title: string;
    titleColor: string;
    description: string;
    technologies: string[];
    images?: [string?, string?, string?];
    projectUrl?: string;
    repositoryUrl?: string;
    accent: string;
}

// Replace these sample objects with real projects when the content is ready.
const projects: Project[] = [
    {
        title: "Project Name One",
        titleColor: "#087bb7",
        description:
            "A short, outcome-focused description can live here. Explain the problem, your contribution, and what makes the finished project worth exploring.",
        technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
        projectUrl: "#",
        repositoryUrl: "#",
        accent: "#009cff",
    },
    {
        title: "Project Name Two",
        titleColor: "#078a4f",
        description:
            "Use this space for a second case study. The layout supports longer summaries while keeping links and the technology stack easy to scan.",
        technologies: ["Python", "Django", "AI / ML", "Docker"],
        projectUrl: "#",
        repositoryUrl: "#",
        accent: "#08b95f",
    },
    {
        title: "Project Name Three",
        titleColor: "#6d4ed6",
        description:
            "Each row is rendered from the project data array, so adding, removing, or reordering future work only requires editing one compact object.",
        technologies: ["Next.js", "REST API", "Cloud", "Figma"],
        projectUrl: "#",
        repositoryUrl: "#",
        accent: "#7657e6",
    },
];

const Projects = () => {
    const handlePlaceholderClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (event.currentTarget.getAttribute("href") === "#") {
            event.preventDefault();
        }
    };

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
                                aria-label={`${project.title} image collage placeholder`}
                            >
                                <div
                                    className="collage-card collage-main"
                                    role="img"
                                    tabIndex={0}
                                    aria-label={`${project.title} primary image placeholder`}
                                >
                                    {project.images?.[0] ? (
                                        <img src={project.images[0]} alt="" />
                                    ) : (
                                        <>
                                            <span className="collage-number">{String(index + 1).padStart(2, "0")}</span>
                                            <div className="collage-orbit" aria-hidden="true" />
                                        </>
                                    )}
                                </div>
                                <div
                                    className="collage-card collage-top"
                                    role="img"
                                    tabIndex={0}
                                    aria-label={`${project.title} secondary image placeholder`}
                                >
                                    {project.images?.[1] ? (
                                        <img src={project.images[1]} alt="" />
                                    ) : (
                                        <div className="collage-lines" aria-hidden="true">
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                    )}
                                </div>
                                <div
                                    className="collage-card collage-bottom"
                                    role="img"
                                    tabIndex={0}
                                    aria-label={`${project.title} detail image placeholder`}
                                >
                                    {project.images?.[2] ? (
                                        <img src={project.images[2]} alt="" />
                                    ) : (
                                        <div className="collage-grid" aria-hidden="true">
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="project-details">
                                <h2 style={{ color: project.titleColor }}>{project.title}</h2>
                                <p className="project-description">{project.description}</p>

                                <ul className="technology-list" aria-label={`${project.title} technologies`}>
                                    {project.technologies.map((technology) => (
                                        <li key={technology}>{technology}</li>
                                    ))}
                                </ul>

                                <div className="project-links">
                                    {project.projectUrl && (
                                        <a href={project.projectUrl} onClick={handlePlaceholderClick} target="_blank" rel="noopener noreferrer">
                                            Project <span aria-hidden="true">↗</span>
                                        </a>
                                    )}
                                    {project.repositoryUrl && (
                                        <a href={project.repositoryUrl} onClick={handlePlaceholderClick} target="_blank" rel="noopener noreferrer">
                                            Repository <span aria-hidden="true">↗</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Projects;
