import type { Project } from "../types/Project";

export const projects = [
	{
		id: 1,
		type: "app",
		title: "VirtualPlant",
		image: "/images/projects/vp-thumb.webp",
		imageAlt: "Virtual Plant's Combined Cycle Power Plant",

		category: "Interactive Web Application",
		description:
			"An interactive application that allows users to explore Flowserve products, technical documentation and media within various industrial plants. Developed with a React front-end and a headless Drupal instance, the application uses a custom REST API to deliver product and supporting content to the front-end.",
		contribution:
			"As Technical Lead, I helped define the initial project scope, application architecture and component requirements. I guided technical decisions throughout development, conducted code reviews, QA and worked directly with client IT teams to meet internal security and deployment requirements. Alongside these leadership responsibilities, I remained actively involved in development, building components throughout the project lifecycle.",
		technologies: ["React", "Typescript", "PHP", "Drupal", "REST API"],

		website: "https://virtualplant.flowserve.com",
		github: "https://www.github.com/Toddses",

		images: [
			{
				src: "images/projects/vp01.webp",
				alt: "plant selection",
			},
			{
				src: "images/projects/vp02.webp",
				alt: "refinery",
			},
			{
				src: "images/projects/vp03.webp",
				alt: "concentrated solar power-parabolic mirror",
			},
			{
				src: "images/projects/vp04.webp",
				alt: "plant selection",
			},
			{
				src: "images/projects/vp05.webp",
				alt: "plant selection",
			},
			{
				src: "images/projects/vp06.webp",
				alt: "plant selection",
			},
			{
				src: "images/projects/vp07.webp",
				alt: "plant selection",
			},
		],
	},
	{
		id: 2,
		type: "site",
		title: "Project Two",
		imageAlt: "alt",
		image: "/images/project-placeholder.svg",
		description: "Lorem ipsum",
	},
	{
		id: 3,
		type: "app",
		title: "Project Three",
		imageAlt: "alt",
		image: "/images/project-placeholder.svg",
		description: "Lorem ipsum",
	},
] satisfies Project[];
