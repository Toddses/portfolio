import { useEffect, useId, useRef } from "react";

import type { Project } from "../../types/Project";
import IconLink from "../IconLink/IconLink";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

import styles from "./ProjectModal.module.scss";

interface ProjectModalProps {
	project: Project | null;
	onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const titleId = useId();

	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;

		if (project && !dialog.open) {
			dialog.showModal();
		} else if (!project && dialog.open) {
			dialog.close();
		}
	}, [project]);

	return (
		<dialog
			ref={dialogRef}
			className={[
				styles.modal,
				project?.type === "app" ? styles.app : styles.site,
			].join(" ")}
			aria-labelledby={titleId}
			onClose={onClose}
		>
			{project && (
				<>
					<button
						type="button"
						className={styles.close}
						onClick={() => dialogRef.current?.close()}
						aria-label="Close project details"
					>
						<span className={styles.closeIcon}></span>
					</button>

					<div className={styles.layout}>
						<div className={styles.media}>
							<ImageCarousel
								key={project.id}
								images={
									project.images?.length
										? project.images
										: [
												{
													src: project.image,
													alt: project.imageAlt,
												},
											]
								}
							/>
						</div>

						<div className={styles.content}>
							<header className={styles.header}>
								{project.category && (
									<span className={styles.category}>{project.category}</span>
								)}

								<h2 id={titleId}>{project.title}</h2>
							</header>

							<div className={styles.details}>
								<div className={styles.section}>
									<h3>Overview</h3>
									{project.description
										.split(/\n\s*\n/)
										.map((paragraph, index) => (
											<p key={index}>{paragraph.trim()}</p>
										))}
								</div>

								{project.contribution && (
									<div className={styles.section}>
										<h3>My Contribution</h3>
										{project.contribution
											.split(/\n\s*\n/)
											.map((paragraph, index) => (
												<p key={index}>{paragraph.trim()}</p>
											))}
									</div>
								)}
							</div>

							{project.technologies && project.technologies.length > 0 && (
								<div className={styles.technologySection}>
									<h3>Technologies</h3>

									<ul className={styles.technologies}>
										{project.technologies.map((tech) => (
											<li key={tech}>{tech}</li>
										))}
									</ul>
								</div>
							)}

							{(project.website || project.github) && (
								<footer className={styles.links}>
									{project.website && (
										<IconLink
											text="Visit Website"
											url={project.website}
											icon="/images/up-right-from-square.svg"
										/>
									)}

									{project.github && (
										<IconLink
											text="View GitHub"
											url={project.github}
											icon="/images/github.svg"
										/>
									)}
								</footer>
							)}
						</div>
					</div>
				</>
			)}
		</dialog>
	);
}
