import type { Project } from "../../types/Project";
import styles from "./Card.module.scss";

interface CardProps {
	project: Project;
	onMoreInfo: (project: Project) => void;
}

export default function Card({ project, onMoreInfo }: CardProps) {
	return (
		<article className={styles.card}>
			<img className={styles.image} src={project.image} alt="" />

			<div className={styles.content}>
				<h2>{project.title}</h2>

				<button
					type="button"
					className={styles.link}
					onClick={() => onMoreInfo(project)}
				>
					More Info
				</button>
			</div>
		</article>
	);
}
