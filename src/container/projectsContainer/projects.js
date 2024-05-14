import ProjectCard from "../../components/project-card/projectCard";
import "./projects.css";
import preojectData from "../../assets/data/projectData.json";

export default function Projects() {
    return (
        <div className="project-main">
            <div className="project-top">
                <h1>PROJECTS</h1>
            </div>
            <div className="project-container">
                {preojectData.projects.map((obj) => {
                    return (
                        <ProjectCard
                            image={require("../../assets/projects/" +
                                obj.image)}
                            title={obj.title}
                            link={obj.link}
                            onGithub={obj.onGithub}
                            desc={obj.desc}
                            key={obj.projectId}
                            projectId={obj.projectId}
                        />
                    );
                })}
            </div>
        </div>
    );
}
