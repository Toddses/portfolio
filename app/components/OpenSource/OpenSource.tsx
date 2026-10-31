import { openSourceProjects } from "../../data/openSource";
import OpenSourceItem from "../OpenSourceItem/OpenSourceItem";

import styles from "./OpenSource.module.scss";

export default function OpenSource() {
	return (
		<section className={styles.openSource} id="open-source">
			<div className="inner">
				<header className={styles.header}>
					<span className={styles.eyebrow}>Beyond the Day Job</span>

					<h2>Other Things I've Built.</h2>

					<p>Open-source projects, developer tools, etc.</p>
				</header>

				<div className={styles.list}>
					{openSourceProjects.map((project) => (
						<OpenSourceItem key={project.id} project={project} />
					))}
				</div>
			</div>
		</section>
	);
}
