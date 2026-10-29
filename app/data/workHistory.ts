import type { Work } from "../types/Work";

export const workHistory: Work[] = [
	{
		id: 1,
		company: "Example Company",
		title: "Senior Front-End Developer",
		location: "Remote",
		startDate: "2022",
		endDate: "Present",
		description:
			"Led development of modern web applications and interactive experiences for enterprise clients.",
		highlights: [
			"Built scalable React and TypeScript applications.",
			"Collaborated with designers and cross-functional teams.",
			"Improved performance, accessibility, and maintainability.",
		],
	},
	{
		id: 2,
		company: "Previous Company",
		title: "Web Developer",
		location: "Dayton, Ohio",
		startDate: "2016",
		endDate: "2022",
		description:
			"Developed and maintained websites and web applications across a variety of platforms.",
		highlights: [
			"Created responsive websites and reusable components.",
			"Integrated CMS platforms and external APIs.",
			"Maintained and optimized existing web applications.",
		],
	},
];
