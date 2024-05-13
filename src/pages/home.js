// import { useState, useEffect } from "react";
import Skills from "../container/skillsContainer/skills";
import Projects from "../container/projectsContainer/projects";
import Experience from "../container/experienceContainer/exp";
import "./home.css";
import bgImg from "../assets/laptopbg.jpg";

export default function Home() {
    // const [slide, setSlide] = useState(false);

    // const slideIn = () => {
    // 	if (window.scrollY >= 450) {
    // 		setSlide(true);
    // 	}
    // };

    // useEffect(() => {
    // 	window.addEventListener("scroll", slideIn, { passive: true });
    // 	return () => {
    // 		window.removeEventListener("scroll", slideIn, { passive: true });
    // 	};
    // }, []);

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
                        <h2 className="text-second">
                            I'm a graduate student <br></br> interested in Data
                            Science.
                        </h2>
                    </div>
                </div>
            </div>
            <section id="about" className="home-container">
                <div className="info">
                    <div
                        // className={
                        // 	slide ? "image-container" : "image-container slide-right"
                        // }
                        className="image-container"
                    >
                        <div className="image">
                            {/* <img
                                src="../assets/selfpic.JPG"
                                alt="Profile Pic"
                            /> */}
                            <div className="overlay"></div>
                        </div>
                    </div>
                    <div
                        // className={slide ? "intro" : "slide-left intro"}
                        className="intro"
                    >
                        <h1>ABOUT ME</h1>
                        <p>
                            I'm highly motivated and enthusiastic student,
                            currently pursuing my Masters of Science in Computer
                            Science Arizona State Univeristy. I have 1 year of
                            work experience as a Data Scientist where I
                            leveraged data driven insights to drive business
                            decisions. My primary interests are in Artificial
                            Intelligence building efficient models as well as
                            development of robust cloud infrastructure.
                            <br />
                            <br />I have worked on finance related use cases as
                            a Data Scientist. Apart from my professional
                            experiences, I have also developed various academic
                            projects employing state-of-the-art algorithms. I
                            also like exploring technologies to augment my
                            knowledge and build innovative projects.
                        </p>
                    </div>
                </div>
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
            <section id="projects" className="projects-container">
                <Projects />
            </section>
            <section id="exp" className="experience-container">
                <Experience />
            </section>
        </div>
    );
}
