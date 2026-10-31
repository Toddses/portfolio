import type { OpenSourceProject } from "../types/OpenSourceProject";

export const openSourceProjects: OpenSourceProject[] = [
	{
		id: 1,
		title: "object-fit-videos",
		category: "Open Source | JavaScript",

		description: `An open-source JavaScript polyfill developed to address inconsistent browser support for CSS "object-fit" and "object-position" on HTML video elements. The library allows developers to maintain consistent video sizing and positioning across browsers, including legacy versions of Internet Explorer, Edge, and Safari.

			Originally created to solve a real-world cross-browser compatibility problem, the library was packaged and published on npm as a lightweight, reusable solution for other developers. Despite its age and the widespread adoption of native browser support, the package continues to receive downloads years after its initial release.`,

		technologies: ["JavaScript", "CSS", "npm"],

		icon: "/images/cube.svg",

		links: [
			{
				text: "npm Package",
				url: "https://www.npmjs.com/package/object-fit-videos",
				icon: "/images/up-right-from-square.svg",
			},
			{
				text: "GitHub Source",
				url: "https://github.com/TricomB2B/object-fit-videos",
				icon: "/images/github.svg",
			},
		],
	},
	{
		id: 1,
		title: "timetracker",
		category: "Personal Project | React",

		description:
			"Simple time tracking software for keeping track of billable hours locally. Nothing overly impressive, but it gets the job done. I still use this today for tracking my hours, when needed.",

		technologies: ["React"],

		icon: "/images/stopwatch.svg",

		links: [
			{
				text: "GitHub Source",
				url: "https://github.com/Toddses/timetracker",
				icon: "/images/github.svg",
			},
		],
	},
];
