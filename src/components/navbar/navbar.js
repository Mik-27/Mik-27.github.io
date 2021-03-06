import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 600) {
			// console.log("Scrolled", window.scrollY);
			setIsScrolled(true);
			document.querySelector(".navbar").classList.add("scrolled");
			document.querySelector(".navbar-title").style.fontSize = "1.5em";
		} else {
			setIsScrolled(false);
			document.querySelector(".navbar").classList.remove("scrolled");
			document.querySelector(".navbar-title").style.fontSize = "2.5em";
		}
	};

	// const handleNavDropdown = () => {
	// 	var nav = document.querySelector(".navbar-links");
	// 	console.log(nav);
	// 	if (nav === ".navbar-links") {
	// 		nav.classList.add("responsive");
	// 	} else {
	// 		nav.classList.remove("responsive");
	// 	}
	// 	console.log(nav);
	// };

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleScroll, { passive: true });
		};
	}, []);

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<div className="navbar-heading">
					<h2 className="navbar-title">
						Mihir <br />
						Thakur
					</h2>
				</div>
				<div
					className={
						isOpen
							? isScrolled
								? "navbar-links-mobile-scrolled"
								: "navbar-links-mobile"
							: "navbar-links"
					}
				>
					<ul>
						<Link
							to="about"
							spy={true}
							smooth={true}
							activeClass="active"
							offset={-100}
						>
							About
						</Link>
						<Link
							to="skills"
							spy={true}
							smooth={true}
							activeClass="active"
							offset={-50}
						>
							Skills
						</Link>
						<Link to="projects" spy={true} smooth={true} activeClass="active">
							Projects
						</Link>
						<Link
							to="exp"
							spy={true}
							smooth={true}
							activeClass="active"
							offset={-100}
						>
							Experience
						</Link>
					</ul>
					<a
						href="/"
						className="icon"
						onClick={(e) => {
							e.preventDefault();
							setIsOpen(!isOpen);
						}}
					>
						<i className="fa fa-bars"></i>
					</a>
				</div>
			</div>
		</nav>
	);
}
