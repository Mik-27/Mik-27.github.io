import "./projectCard.css";

export default function ProjectCard({
    title,
    image,
    link,
    onGithub,
    desc,
    tags,
    projectId,
}) {
    return (
        <div className="project-card reveal">
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
                {tags?.length ? (
                    <div
                        className="project-tags"
                        aria-label="Technologies used"
                    >
                        {tags.map((tag) => (
                            <span className="project-tag" key={tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                ) : null}
            </div>
            <div className="project-img">
                <img src={image} alt={title} />
            </div>
        </div>
    );
}
