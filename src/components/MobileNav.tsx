"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";

interface MobileNavProps {
	activeSection: string;
}

export default function MobileNav({ activeSection }: MobileNavProps) {
	const [isScrolling, setIsScrolling] = useState(false);
	const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			setIsScrolling(true);

			// Clear any existing timeout
			if (scrollTimeoutRef.current) {
				clearTimeout(scrollTimeoutRef.current);
			}

			// Navbar height with margin: ~80px total
			const navbarOffset = 80;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.scrollY - navbarOffset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});

			// Keep navbar visible during navigation
			scrollTimeoutRef.current = setTimeout(() => {
				setIsScrolling(false);
			}, 1000);
		}
	};

	const navItems = [
		{ id: "about", label: "About" },
		{ id: "experience", label: "Experience" },
		{ id: "education", label: "Education" },
		{ id: "projects", label: "Projects" },
		{ id: "skills", label: "Skills" },
		{ id: "contact", label: "Contact" },
	];

	return (
		<motion.nav
			className="fixed top-4 left-2 right-2 z-50 lg:hidden"
			initial={{ y: 0, opacity: 1 }}
			animate={{ y: 0, opacity: 1 }}
		>
			<motion.div
				className="bg-slate-800/95 backdrop-blur-sm rounded-full shadow-lg px-2 py-3 sm:px-4"
				initial={{ scale: 0.95, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{
					duration: 0.3,
					ease: [0.4, 0, 0.2, 1]
				}}
			>
				<ul className="flex justify-around items-center gap-1">
					{navItems.map((item, index) => (
						<motion.li
							key={item.id}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								delay: index * 0.05,
								duration: 0.2,
								ease: [0.4, 0, 0.2, 1]
							}}
						>
							<motion.button
								onClick={() => scrollToSection(item.id)}
								className={`text-[10px] sm:text-xs font-medium px-2 py-1.5 sm:px-3 sm:py-2 rounded-full whitespace-nowrap relative ${
									activeSection === item.id
										? "text-white"
										: "text-slate-300"
								}`}
								aria-label={item.label}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								transition={{
									duration: 0.2,
									ease: [0.4, 0, 0.2, 1]
								}}
							>
								{activeSection === item.id && (
									<motion.span
										className="absolute inset-0 bg-slate-700 rounded-full shadow-md -z-10"
										layoutId="activeBackground"
										transition={{
											type: "spring",
											stiffness: 400,
											damping: 35,
											mass: 0.8
										}}
									/>
								)}
								<span className="relative z-10">{item.label}</span>
							</motion.button>
						</motion.li>
					))}
				</ul>
			</motion.div>
		</motion.nav>
	);
}
