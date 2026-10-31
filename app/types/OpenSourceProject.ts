export interface OpenSourceProject {
	id: number;
	title: string;
	category: string;
	description: string;
	technologies: string[];
	icon: string;
	links: {
		text: string;
		url: string;
		icon: string;
	}[];
}
