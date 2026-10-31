import { useState } from "react";

import type { Project } from "../../types/Project";
import { projects } from "../../data/projects";

import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectModal from "../ProjectModal/ProjectModal";

import styles from "./ProjectCardList.module.scss";

export default function ProjectCardList() {
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	return (
		<section className={styles.cardList}>
			<div className="inner">
				<div className={styles.header}>
					<span className={styles.eyebrow}>Portfolio</span>

					<h2 id="project-list-heading">Things I've Done.</h2>
				</div>

				<div className={styles.grid}>
					{projects.map((project) => (
						<ProjectCard
							key={project.id}
							project={project}
							onMoreInfo={setSelectedProject}
						/>
					))}
				</div>

				<ProjectModal
					project={selectedProject}
					onClose={() => setSelectedProject(null)}
				/>
			</div>
		</section>
	);
}
