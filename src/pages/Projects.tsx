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
    accent: string;
}

const projects: Project[] = [
    {
        title: "ExoCollect",
        titleColor: "#6d4ed6",
        description:
            "Co-founded and revamped an educational exoplanet discovery and collection platform where users discover scientifically grounded planets, complete daily research missions, compare Earth similarity, and grow a personal archive. Modernized the Django application, responsive UI, security, test coverage, and Heroku deployment.",
        technologies: ["Python", "Django", "PostgreSQL", "Heroku", "Pytest"],
        images: [
            "/project-images/exo1.png",
            "/project-images/exo2.png",
            "/project-images/exo3.png",
        ],
        projectUrl: "https://exocollect.org",
        accent: "#7657e6",
    },
    {
        title: "Knomi",
        titleColor: "#d00fde",
        description:
            "Built a customizable personal homepage where users create and share profiles made from ranked lists, links, and content cards. Knomi combines responsive profile editing, drag-and-drop organization, themes, custom tabs, and shareable public pages across a React and TypeScript frontend with a Laravel and MySQL backend.",
        technologies: ["React", "TypeScript", "Laravel", "MySQL", "Vite"],
        images: [
            "/project-images/knomi2.png",
            "/project-images/knomi3.png",
            "/project-images/knomi1.png",
        ],
        projectUrl: "https://knomi.gg/alexko",
        accent: "#d00fde",
    },
    {
        title: "KS Fantasy",
        titleColor: "#078a4f",
        description:
            "Developing a fantasy football app for use with my friends. A replaceable Sleeper API adapter normalizes live stats and projections for custom scoring, while the mobile experience supports lineups, matchups, waivers, trades, standings, playoffs, and league chat.",
        technologies: ["React Native", "TypeScript", "Expo", "Fastify", "Sleeper API"],
        images: [
            "/project-images/fantasy1.png",
            "/project-images/fantasy2.png",
            "/project-images/fantasy4.png",
        ],
        accent: "#08b95f",
    },
];

const Projects = () => {
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
                                <div
                                    className="collage-card collage-main"
                                    role="img"
                                    tabIndex={0}
                                    aria-label={`${project.title} primary project screenshot`}
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
                                    aria-label={`${project.title} secondary project screenshot`}
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
                                    aria-label={`${project.title} detail project screenshot`}
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

                                <div className="project-meta-row">
                                    <ul className="technology-list" aria-label={`${project.title} technologies`}>
                                        {project.technologies.map((technology) => (
                                            <li key={technology}>{technology}</li>
                                        ))}
                                    </ul>
                                    {project.projectUrl && (
                                        <a
                                            className="project-link"
                                            href={project.projectUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ color: project.titleColor, borderColor: project.titleColor }}
                                        >
                                            View project <span aria-hidden="true">↗</span>
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
