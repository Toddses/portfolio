import type { Project } from "../types/Project";

export const projects = [
	{
		id: 1,
		title: "Project One",
		image: "/images/project-placeholder.svg",
	},
	{
		id: 2,
		title: "Project Two",
		image: "/images/project-placeholder.svg",
	},
	{
		id: 3,
		title: "Project Three",
		image: "/images/project-placeholder.svg",
	},
] satisfies Project[];
