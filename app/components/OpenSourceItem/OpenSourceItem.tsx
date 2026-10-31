import type { OpenSourceProject } from "../../types/OpenSourceProject";
import IconLink from "../IconLink/IconLink";

import styles from "./OpenSourceItem.module.scss";

interface OpenSourceItemProps {
	project: OpenSourceProject;
}

export default function OpenSourceItem({ project }: OpenSourceItemProps) {
	return (
		<article className={styles.item}>
			<div className={styles.iconWrapper}>
				<span
					className={styles.icon}
					style={{
						maskImage: `url("${project.icon}")`,
					}}
					aria-hidden="true"
				/>
			</div>

			<div className={styles.content}>
				<header className={styles.header}>
					<span className={styles.category}>{project.category}</span>

					<h3>{project.title}</h3>
				</header>

				{project.description.split(/\n\s*\n/).map((paragraph, index) => (
					<p key={index} className={styles.description}>
						{paragraph.trim()}
					</p>
				))}

				<ul className={styles.technologies}>
					{project.technologies.map((technology) => (
						<li key={technology}>{technology}</li>
					))}
				</ul>

				<div className={styles.links}>
					{project.links.map((link) => (
						<IconLink
							key={link.url}
							text={link.text}
							url={link.url}
							icon={link.icon}
						/>
					))}
				</div>
			</div>
		</article>
	);
}
