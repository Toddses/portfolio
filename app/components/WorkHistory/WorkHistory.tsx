import { workHistory } from "../../data/workHistory";
import WorkHistoryItem from "../WorkHistoryItem/WorkHistoryItem";

import styles from "./WorkHistory.module.scss";

export default function WorkHistory() {
	return (
		<section
			className={styles.workHistory}
			aria-labelledby="work-history-heading"
		>
			<h2 id="work-history-heading" className={styles.heading}>
				Work History
			</h2>

			<div className={styles.list}>
				{workHistory.map((job) => (
					<WorkHistoryItem key={job.id} job={job} />
				))}
			</div>
		</section>
	);
}
