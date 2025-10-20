interface NavigationProps {
	activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
	const sections = [
		{ id: "about", label: "About" },
		{ id: "experience", label: "Experience" },
		{ id: "education", label: "Education" },
		{ id: "projects", label: "Projects" },
	];

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
		e.preventDefault();
		const element = document.getElementById(sectionId);
		if (element) {
			const offset = 80;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	};

	return (
		<nav className="nav hidden lg:block mt-16" aria-label="In-page jump links">
			<ul className="mt-16 w-max">
				{sections.map((section) => (
					<li key={section.id}>
						<a
							className="group flex items-center py-3"
							href={`#${section.id}`}
							onClick={(e) => handleClick(e, section.id)}
						>
							<span
								className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 ${
									activeSection === section.id
										? "w-16 bg-slate-200"
										: "w-8 bg-slate-600"
								}`}
							></span>
							<span
								className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 ${
									activeSection === section.id
										? "text-slate-200"
										: "text-slate-500"
								}`}
							>
								{section.label}
							</span>
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
