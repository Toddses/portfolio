import Button from "../Button/Button";
import type { Project } from "../../types/Project";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
	project: Project;
	onMoreInfo: (project: Project) => void;
}

export default function ProjectCard({ project, onMoreInfo }: ProjectCardProps) {
	return (
		<article className={styles.card}>
			<div className={styles.mediaWrapper}>
				<img
					className={styles.media}
					src={project.image}
					alt={project.imageAlt}
				/>
			</div>

			<div className={styles.content}>
				<h2>{project.title}</h2>

				<Button
					variant="text"
					className={styles.cardButton}
					onClick={() => onMoreInfo(project)}
				>
					More Info
				</Button>
			</div>
		</article>
	);
}
