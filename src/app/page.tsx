"use client";

import { useMousePosition } from "@/hooks/useMousePosition";
import { useActiveSection } from "@/hooks/useActiveSection";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

export default function Home() {
	const mousePosition = useMousePosition();
	const activeSection = useActiveSection();

	return (
		<div className="min-h-screen relative">
			<div
				className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
				style={{
					background: `radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.12), transparent 70%)`,
				}}
			></div>

			<div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 pb-20 lg:pb-0 pt-20 lg:pt-12">
				<div className="lg:flex lg:justify-between lg:gap-4">
					<Header activeSection={activeSection} />

					<main id="content" className="pt-24 lg:w-1/2 lg:py-24">
						<AboutSection />
						<ExperienceSection />
						<EducationSection />
						<ProjectsSection />
						<SkillsSection />
						<ContactSection />
						<Footer />
					</main>
				</div>
			</div>

			<MobileNav activeSection={activeSection} />
		</div>
	);
}
