import type { ExpertiseLayer } from "../types/ExpertiseLayer";

export const technicalExpertise: ExpertiseLayer[] = [
	{
		id: "interfaces",
		number: "01",
		title: "User Experience & Interfaces",
		summary: "Building fast, accessible, and intuitive interfaces.",
		description:
			"I develop responsive, component-driven interfaces that balance visual design with performance, usability, and long-term maintainability. My work ranges from marketing websites to complex, interactive web applications.",
		technologies: [
			"React",
			"TypeScript",
			"Next.js",
			"JavaScript",
			"HTML",
			"SCSS",
		],
		capabilities: [
			"Component architecture",
			"Responsive development",
			"Interactive experiences",
			"Accessibility",
			"Front-end performance",
		],
	},
	{
		id: "application",
		number: "02",
		title: "Application Logic & Integration",
		summary: "Connecting interfaces, data, and business requirements.",
		description:
			"I architect and develop the application logic that connects user interfaces to underlying systems. This includes API integration, state management, reusable application patterns, and translating complex requirements into maintainable software.",
		technologies: [
			"React",
			"TypeScript",
			"REST APIs",
			"Next.js",
			"Angular",
			"Electron",
		],
		capabilities: [
			"Application architecture",
			"API integration",
			"State management",
			"Data transformation",
			"Debugging and optimization",
		],
	},
	{
		id: "backend",
		number: "03",
		title: "Back-End Systems & Content",
		summary: "Creating the systems and services that power applications.",
		description:
			"My experience extends beyond the browser into content management, server-side development, database integration, and API-driven architectures. I build and maintain the systems that deliver reliable data and functionality to front-end applications.",
		technologies: [
			"Drupal",
			"PHP",
			"MySQL",
			"WordPress",
			"REST APIs",
			"Apache",
		],
		capabilities: [
			"Headless CMS architecture",
			"Content modeling",
			"Custom API development",
			"Database integration",
			"Server-side development",
		],
	},
];
