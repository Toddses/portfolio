import type { Work } from "../../types/Work";
import styles from "./WorkHistoryItem.module.scss";

interface WorkHistoryItemProps {
	job: Work;
}

export default function WorkHistoryItem({ job }: WorkHistoryItemProps) {
	return (
		<article className={styles.item}>
			<div className={styles.header}>
				<div>
					<h3 className={styles.title}>{job.title}</h3>

					<div className={styles.company}>{job.company}</div>
				</div>

				<div className={styles.meta}>
					<span>
						{job.startDate} – {job.endDate}
					</span>
					<span>{job.location}</span>
				</div>
			</div>

			<p className={styles.description}>{job.description}</p>

			<ul className={styles.highlights}>
				{job.highlights.map((highlight, index) => (
					<li key={index}>{highlight}</li>
				))}
			</ul>
		</article>
	);
}
