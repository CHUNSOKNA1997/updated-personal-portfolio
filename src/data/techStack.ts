export interface TechStackItem {
	name: string;
	icon: string; // Icon name from devicon
	variant?: string; // Optional variant like 'line-wordmark', 'plain', etc.
}

export interface TechStackCategory {
	title: string;
	items: TechStackItem[];
}

export const techStack: TechStackCategory[] = [
	{
		title: "Languages",
		items: [
			{ name: "JavaScript", icon: "javascript", variant: "plain" },
			{ name: "TypeScript", icon: "typescript", variant: "plain" },
			{ name: "React", icon: "react", variant: "original" },
			{ name: "Next.js", icon: "nextjs", variant: "original" },
			{ name: "Vue.js", icon: "vuejs", variant: "plain" },
			{ name: "Laravel", icon: "laravel", variant: "original" },
			{ name: "Node.js", icon: "nodejs", variant: "original-wordmark" },
			{ name: "Express.js", icon: "express", variant: "original" },
			{ name: "Tailwind CSS", icon: "tailwindcss", variant: "original" },
		],
	},
	{
		title: "Database & Tools",
		items: [
			{ name: "MySQL", icon: "mysql", variant: "original-wordmark" },
			{ name: "PostgreSQL", icon: "postgresql", variant: "plain" },
			{ name: "Git", icon: "git", variant: "plain" },
			{ name: "AWS", icon: "amazonwebservices", variant: "original-wordmark" },
			{ name: "Docker", icon: "docker", variant: "plain" },
			{ name: "Figma", icon: "figma", variant: "original" },
		],
	},
];
