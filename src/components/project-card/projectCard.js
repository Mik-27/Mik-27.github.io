import "./projectCard.css";

export default function ProjectCard({
    title,
    image,
    link,
    onGithub,
    desc,
    projectId,
}) {
    return (
        <div
            className="project-card"
            style={
                projectId % 2
                    ? { flexDirection: "row" }
                    : { flexDirection: "row-reverse" }
            }
        >
            <div className="project-heading">
                <h1>{title}</h1>
                <div className="project-desc">
                    <p>{desc}</p>
                </div>
                {onGithub ? (
                    <div className="button-container">
                        <span>→</span>
                        <a
                            className="github-button"
                            href={link}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            View on Github
                        </a>
                    </div>
                ) : (
                    ""
                )}
            </div>
            <div className="project-img">
                <img src={image} alt={title} />
            </div>
        </div>
    );
}
