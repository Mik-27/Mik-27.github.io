import "./projectCard.css";
// import netflixImg from "../../assets/projects/netflix.jpg";

export default function ProjectCard({ title, image, link }) {
    var desc =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    return (
        <div className="project-card">
            <div className="project-heading">
                <h1>{title}</h1>
                <div className="project-desc">
                    <p>{desc}</p>
                </div>
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
            </div>
            <div className="project-img">
                <img src={image} alt={title} />
            </div>
        </div>
    );
}
