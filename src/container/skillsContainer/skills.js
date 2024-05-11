// import skillsData from "../../skills.json";
import SkillCard from "../../components/skill-card/skillCard";
import "./skills.css";

export default function Skills() {
    return (
        <div className="skills-main">
            <div className="skills-heading">
                <h1>SKILLS</h1>
            </div>
            <div className="skills-info">
                <SkillCard
                    logos={["fab fa-html5", "fab fa-css3-alt"]}
                    title="HTML, CSS"
                    description="The basics of web development. Familiar with latest semantic elements of HTML and pretty used to building responsive stylings in CSS."
                />
                <SkillCard
                    logos={["fab fa-node-js"]}
                    title="Node JS"
                    description="Node JS is the first backend that I used with Express engine and Restful Routing. Implemented middleware for user authentication. Established connection with MongoDB using Mongoose."
                />
                <SkillCard
                    logos={["fab fa-react"]}
                    title="React JS"
                    description="Built projects using React. Extensively use functions with React Hooks in React rather than classes. Even this website is built using React."
                />
                <SkillCard
                    logos={["fas fa-database"]}
                    title="MySQL, MongoDB, Firebase"
                    description="Implemented MySQL connectivity for offline projects(aaplications). Querying various fields through the language used to the database. Used MongoDB and Firebase with web applications and pretty familiar with their structure and working."
                />
                <SkillCard
                    logos={["fab fa-python"]}
                    title="Python"
                    description="Python is a very intriguing and easy to code programming language. Have used python for small competitions and challenges. Accustomed to the libraries related to data science."
                />
                <SkillCard
                    logos={["fas fa-sitemap"]}
                    title="Machine Learning"
                    description="I have implemented machine learning techniques extensively in Python. Have done mini-courses in data manipulation and visualization using Pandas and Matplotlib/Seaborn. Currently enrolled in a course on Neural Network on Coursera."
                />
            </div>
        </div>
    );
}
