import SkillCard from "../../components/skill-card/skillCard";
import "./skills.css";
import skillsData from "../../assets/data/skillsData.json";

export default function Skills() {
    return (
        <div className="skills-main">
            <div className="skills-heading">
                <h1>SKILLS</h1>
            </div>
            <div className="skills-info">
                {Object.keys(skillsData).map((d) => {
                    return (
                        <div className="skills-category">
                            <h2>{d}</h2>
                            <div className="skills-category-info">
                                {skillsData[d].map((skill) => {
                                    return (
                                        <SkillCard
                                            skill={skill.skill}
                                            logo={require(
                                                "../../assets/skills/" +
                                                    skill.logo,
                                            )}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
