import { useState } from "react";

import type { Project } from "../../types/Project";
import { projects } from "../../data/projects";

import Card from "../Card/Card";
import Modal from "../Modal/Modal";

import styles from "./CardList.module.scss";

export default function CardList() {
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	return (
		<section className={styles.cardList}>
			<div className={styles.grid}>
				{projects.map((project) => (
					<Card
						key={project.id}
						project={project}
						onMoreInfo={setSelectedProject}
					/>
				))}
			</div>

			<Modal
				title={selectedProject?.title ?? ""}
				isOpen={selectedProject !== null}
				onClose={() => setSelectedProject(null)}
			/>
		</section>
	);
}
