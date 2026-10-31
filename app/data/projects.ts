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
			"An interactive application that allows users to explore Flowserve products, technical documentation and media within various industrial plants. Developed with a React front-end and a headless Drupal instance for data management, the application uses a custom REST API to deliver product and supporting content to the front-end.",
		contribution:
			"As Technical Lead, I helped define the initial project scope, application architecture and component requirements. I guided technical decisions throughout development, conducted code reviews, QA and worked directly with client IT teams to meet internal security and deployment requirements. Alongside these leadership responsibilities, I remained actively involved in development, building components throughout the project lifecycle.",
		technologies: ["React", "Typescript", "PHP", "Drupal", "REST API"],

		website: "https://virtualplant.flowserve.com",

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
		title: "Formative 3D",
		image: "/images/projects/formative3d-thumb.webp",
		imageAlt: "Formative 3D Homepage Hero",

		category: "Webflow Website",
		description:
			"A marketing-focused company website built in Webflow, featuring a flexible, component-based architecture. Reusable components provide a consistent design system while giving content editors the freedom to create and manage pages without developer involvement.",
		contribution:
			"As Lead Developer, I helped define the project scope and develop cost estimates, designed the component architecture, and oversaw development reviews and QA. I also built many of the site's reusable components, guided the project through launch, and trained the client to independently manage and update content within Webflow.",

		technologies: ["Webflow", "JavaScript", "CSS", "GSAP"],

		website: "https://www.formative3d.com",

		images: [
			{
				src: "/images/projects/formative3d01.webp",
				alt: "additive advantage page",
			},
		],
	},
	{
		id: 3,
		type: "site",
		title: "SelectTech",
		image: "/images/projects/selecttech-thumb.webp",
		imageAlt: "SelectTech Homepage Hero",

		category: "Drupal Website",
		description: `A marketing-focused company website built in Drupal, with a strong emphasis on content management and administrative usability. The site features a flexible, component-based architecture that allows content editors to build pages using reusable components.

			A custom image management system allows editors to upload images once, create aspect-ratio-specific crops, and automatically generate optimized, responsive image variants. This streamlines content management while ensuring visitors receive appropriately sized images across devices. The site also includes a searchable resource library and an intuitive administrative interface.`,
		contribution:
			"As Lead Developer, I helped establish the project scope and cost estimates, designed the component architecture, and oversaw development reviews and quality assurance. I also developed many of the site's reusable components. One of my primary technical contributions was designing and developing the image management system from the ground up.",

		technologies: ["Drupal", "JavaScript", "SCSS", "PHP", "Twig"],

		website: "https://www.selecttechservices.com",

		images: [
			{
				src: "/images/projects/selecttech01.webp",
				alt: "SelectTech Software and IT Systems page",
			},
			{
				src: "/images/projects/selecttech02.webp",
				alt: "SelectTech Facilities page",
			},
			{
				src: "/images/projects/selecttech03.webp",
				alt: "SelectTech Resources page",
			},
		],
	},
	{
		id: 4,
		type: "app",
		title: "Portfolio",
		image: "/images/projects/portfolio-thumb.webp",
		imageAlt: "My Portfolio (this)",

		category: "Personal Web Application",
		description: "I need a job.",
		contribution: `Built from the ground up using React, TypeScript, React Router and SCSS Modules (admittedly, SCSS seems unnecessary here). I developed a reusable component system, responsive layouts and interactive features to showcase my work without making the site unnecessarily complicated.

			I also used AI as a development partner throughout the project, helping brainstorm approaches and accelerating component development. While I have used this approach in the past, the experience reinforced a belief that AI has a valuable place in the process. Ultimately, though, without a human developer exercising real technical judgment and making the decisions that matter, the venture is folly.`,
		technologies: ["React", "Typescript"],

		website: "https://toddmiller.dev",
		github: "https://github.com/Toddses/portfolio",

		images: [
			{
				src: "images/projects/portfolio01.webp",
				alt: "top section",
			},
			{
				src: "images/projects/portfolio02.webp",
				alt: "bottom section",
			},
		],
	},
] satisfies Project[];
