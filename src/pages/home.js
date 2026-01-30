import Typewriter from "typewriter-effect";
import Skills from "../container/skillsContainer/skills";
import Projects from "../container/projectsContainer/projects";
import Experience from "../container/experienceContainer/exp";
import "./home.css";
import bgImg from "../assets/laptopbg.jpg";
import resume from "../assets/Resume.pdf";

export default function Home() {
    return (
        <div className="home-main">
            <div className="home-bg-container">
                <div className="home-bg">
                    <img className="bg-image" src={bgImg} alt="" />
                    <div className="main-text">
                        <h2>Hi, I'm</h2>
                        <h1>
                            <span
                                className="text-first"
                                style={{ color: "#3aafa9" }}
                            >
                                Mihir Thakur.
                            </span>
                            <br></br>
                        </h1>
                        <Typewriter
                            id="text-second"
                            options={{
                                strings: [
                                    "I articulate data science solutions.",
                                    "I build AI Agents.",
                                    "I develop software applications.",
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                            }}
                        />
                        {/* <h2 className="text-second">
                            I'm a graduate student <br></br> interested in Data
                            Science.
                        </h2> */}
                    </div>
                </div>
            </div>
            <section id="about" className="home-container">
                <div className="info">
                    <div className="image-container">
                        <div className="image">
                            <div className="overlay"></div>
                        </div>
                    </div>
                    <div className="intro">
                        <h1>ABOUT ME</h1>
                        <p>
                            I'm highly motivated and enthusiastic student,
                            currently pursuing my Masters of Science in Computer
                            Science at Arizona State University. I have 1 year
                            of work experience as a Data Scientist where I
                            leveraged data driven insights to drive business
                            decisions and built end-to-end ML workflows. My
                            primary interests are in Data Science and GenAI,
                            building impactful solutions that aim to solve
                            real-world problems.
                            <br />
                            <br />
                            Apart from my professional experiences, I have also
                            developed various academic projects employing
                            state-of-the-art algorithms. I also like exploring
                            technologies to augment my knowledge. I am actively
                            seeking for opportunities to fail, learn and grow.
                        </p>
                        <a
                            href={resume}
                            rel="noreferrer"
                            target="_blank"
                            className="resumeButton"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </section>
            <section id="projects" className="projects-container">
                <Projects />
            </section>
            <section id="exp" className="experience-container">
                <Experience />
            </section>
            <section id="skills" className="skill-container">
                <Skills />
                <div className="skill-img-credits">
                    <p>
                        Photo by{" "}
                        <a href="https://unsplash.com/@florianolv?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Florian Olivo
                        </a>{" "}
                        on{" "}
                        <a href="https://unsplash.com/s/photos/coding?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Unsplash
                        </a>
                    </p>
                </div>
            </section>
        </div>
    );
}
