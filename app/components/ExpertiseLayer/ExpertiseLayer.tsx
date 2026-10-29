import { useId } from "react";
import type { Expertise } from "../../types/Expertise";

import styles from "./ExpertiseLayer.module.scss";

interface ExpertiseLayerProps {
	layer: Expertise;
	isOpen: boolean;
	onToggle: () => void;
}

export default function ExpertiseLayer({
	layer,
	isOpen,
	onToggle,
}: ExpertiseLayerProps) {
	const detailsId = useId();

	return (
		<article
			className={[
				styles.layer,
				styles[layer.id],
				isOpen ? styles.open : "",
			].join(" ")}
		>
			<div className={styles.header}>
				<span className={styles.number}>{layer.number}</span>

				<div className={styles.heading}>
					<h3>{layer.title}</h3>
					<p>{layer.summary}</p>
				</div>
			</div>

			<ul className={styles.technologies}>
				{layer.technologies.map((tech) => (
					<li key={tech}>{tech}</li>
				))}
			</ul>

			<div id={detailsId} className={styles.drawer} aria-hidden={!isOpen}>
				<div className={styles.drawerInner}>
					<div className={styles.details}>
						<p className={styles.description}>{layer.description}</p>

						<h4>Engineering Capabilities</h4>

						<ul className={styles.capabilities}>
							{layer.capabilities.map((capability) => (
								<li key={capability}>{capability}</li>
							))}
						</ul>
					</div>
				</div>
			</div>

			<div className={styles.footer}>
				<button
					type="button"
					className={styles.toggle}
					onClick={onToggle}
					aria-expanded={isOpen}
					aria-controls={detailsId}
				>
					{isOpen ? "Show Less" : "Read More"}

					<span className={styles.chevron} aria-hidden="true" />
				</button>
			</div>
		</article>
	);
}
