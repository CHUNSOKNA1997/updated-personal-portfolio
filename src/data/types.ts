export interface Experience {
	period: string;
	title: string;
	company: string;
	companyUrl: string;
	description: string;
	technologies: string[];
}

export interface Education {
	period: string;
	degree: string;
	institution: string;
	institutionUrl?: string;
}

export interface Project {
	title: string;
	description: string;
	link: string;
	imageUrl: string;
	imageAlt: string;
	technologies?: string[];
}

export interface SocialLink {
	name: string;
	url: string;
	icon: React.ReactNode;
}
