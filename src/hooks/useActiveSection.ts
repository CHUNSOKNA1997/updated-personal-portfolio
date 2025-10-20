import { useEffect, useState } from "react";

export function useActiveSection() {
	const [activeSection, setActiveSection] = useState("about");

	useEffect(() => {
		const handleScroll = () => {
			const sections = ["about", "experience", "education", "projects"];
			const scrollPosition = window.scrollY + window.innerHeight / 3;

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return activeSection;
}
