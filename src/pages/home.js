import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import Skills from "../container/skillsContainer/skills";
import Projects from "../container/projectsContainer/projects";
import Experience from "../container/experienceContainer/exp";
import "./home.css";
import resume from "../assets/Resume.pdf";

export default function Home() {
    useEffect(() => {
        const canvas = document.querySelector(".network-canvas");
        const context = canvas.getContext("2d");
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        let animationFrame;
        let nodes = [];

        const resizeCanvas = () => {
            const ratio = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * ratio;
            canvas.height = window.innerHeight * ratio;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            context.setTransform(ratio, 0, 0, ratio, 0, 0);
            nodes = Array.from(
                { length: window.innerWidth < 600 ? 26 : 56 },
                () => ({
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    radius: Math.random() * 1.7 + 0.5,
                    speedX: (Math.random() - 0.5) * 0.3,
                    speedY: (Math.random() - 0.5) * 0.3,
                }),
            );
        };

        const drawNetwork = () => {
            const height = window.innerHeight;
            context.clearRect(0, 0, window.innerWidth, height);
            nodes.forEach((node) => {
                if (!reduceMotion) {
                    node.x += node.speedX;
                    node.y += node.speedY;
                    if (node.x < -20 || node.x > window.innerWidth + 20)
                        node.speedX *= -1;
                    if (node.y < -20 || node.y > height + 20) node.speedY *= -1;
                }
            });

            nodes.forEach((node, index) => {
                nodes.slice(index + 1).forEach((other) => {
                    const distance = Math.hypot(
                        node.x - other.x,
                        node.y - other.y,
                    );
                    if (distance < 155) {
                        context.strokeStyle = `rgba(67, 190, 190, ${0.18 * (1 - distance / 155)})`;
                        context.lineWidth = 0.6;
                        context.beginPath();
                        context.moveTo(node.x, node.y);
                        context.lineTo(other.x, other.y);
                        context.stroke();
                    }
                });
                context.fillStyle = "rgba(61, 220, 205, .78)";
                context.beginPath();
                context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                context.fill();
            });

            if (!reduceMotion)
                animationFrame = window.requestAnimationFrame(drawNetwork);
        };

        resizeCanvas();
        drawNetwork();
        window.addEventListener("resize", resizeCanvas);

        const revealItems = document.querySelectorAll(".reveal");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 },
        );

        revealItems.forEach((item) => observer.observe(item));
        return () => {
            observer.disconnect();
            window.removeEventListener("resize", resizeCanvas);
            window.cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <div className="home-main">
            <div className="home-bg-container">
                <div className="home-bg">
                    <canvas className="network-canvas" aria-hidden="true" />
                    <div className="network-glow network-glow-one" />
                    <div className="network-glow network-glow-two" />
                    <div className="main-text">
                        <p className="eyebrow">DATA SCIENCE / AI / SOFTWARE</p>
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
            <section id="about" className="home-container reveal">
                <div className="info">
                    <div className="image-container">
                        <div className="image">
                            <div className="overlay"></div>
                        </div>
                    </div>
                    <div className="intro">
                        <h1>ABOUT ME</h1>
                        <p>
                            I'm an AI/ML Developer with an MS in Computer
                            Science from Arizona State University and experience
                            spanning computer vision, GenAI, and data science.
                            Currently building deep learning pipelines at
                            DriverAI, I've previously shipped agentic AI systems
                            and RAG features at Ascend, and led large scale ML
                            pipelines in banking at LTIMindtree, work that's
                            driven measurable business impact, from reducing
                            credit losses to improving model tool calling
                            accuracy.
                        </p>
                        <p>
                            I care about building solutions that solve real
                            problems, not just technically interesting ones. My
                            project portfolio reflects that range: from
                            PolicyRAG's hybrid retrieval system, to BeastWatch,
                            a YOLOv12 animal tracking model that placed as a
                            Voxel AI CV competition finalist, to fine tuning
                            CLIP for robot action prediction.
                        </p>
                        <p>
                            I'm always exploring new tools and techniques to
                            sharpen my craft, and I'm actively seeking
                            opportunities where I can keep learning, keep
                            building, and keep growing.
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
            <section id="exp" className="experience-container">
                <Experience />
            </section>
            <section id="skills" className="skill-container">
                <Skills />
            </section>
            <section id="projects" className="projects-container">
                <Projects />
            </section>
        </div>
    );
}
