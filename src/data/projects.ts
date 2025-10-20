import { Project } from "./types";

export const projects: Project[] = [
	{
		title: "AI-Powered Task Management Platform",
		description:
			"Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
		link: "https://www.newline.co/courses/build-a-spotify-connected-app",
		imageUrl: "https://ext.same-assets.com/1031784112/3267000279.png",
		imageAlt: "Build a Spotify Connected App course",
	},
	{
		title: "Spotify Profile",
		description:
			"Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
		link: "https://spotify-profile.herokuapp.com/",
		imageUrl: "https://ext.same-assets.com/1031784112/3242063427.png",
		imageAlt: "Spotify Profile",
		technologies: ["React", "Express", "Spotify API", "Heroku"],
	},
	{
		title: "Halcyon Theme",
		description:
			"Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
		link: "https://halcyon-theme.netlify.app/",
		imageUrl: "https://ext.same-assets.com/1031784112/3705990346.png",
		imageAlt: "Halcyon Theme",
	},
	{
		title: "brittanychiang.com (v4)",
		description:
			"An old portfolio site built with Gatsby with 6k+ stars and 3k+ forks",
		link: "https://v4.brittanychiang.com/",
		imageUrl: "https://ext.same-assets.com/1031784112/2425062674.png",
		imageAlt: "brittanychiang.com v4",
		technologies: ["Gatsby", "Styled Components", "Netlify"],
	},
];
