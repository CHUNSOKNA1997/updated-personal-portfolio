import { useEffect, useState } from "react";

export function useActiveSection() {
	const [activeSection, setActiveSection] = useState("about");

	useEffect(() => {
		const handleScroll = () => {
			const sections = ["about", "experience", "education", "projects", "skills", "contact"];

			let currentSection = "about";
			let closestSection = "";
			let closestDistance = Infinity;

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					const distanceFromTop = Math.abs(rect.top - 100);

					if (rect.top <= 150 && distanceFromTop < closestDistance) {
						closestDistance = distanceFromTop;
						closestSection = section;
					}
				}
			}

			if (closestSection) {
				currentSection = closestSection;
			}

			setActiveSection(currentSection);
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return activeSection;
}
