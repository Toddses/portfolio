export type ProjectType = "app" | "site";

export interface ProjectImage {
	src: string;
	alt: string;
}

export interface Project {
	id: number;
	type: ProjectType;

	title: string;
	image: string;
	imageAlt: string;

	category?: string;
	description: string;
	contribution?: string;
	technologies?: string[];

	website?: string;
	github?: string;

	images?: ProjectImage[];
}
