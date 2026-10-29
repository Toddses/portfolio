import { useState } from "react";

import { technicalExpertise } from "../../data/technicalExpertise";
import ExpertiseLayer from "../ExpertiseLayer/ExpertiseLayer";

import styles from "./TechnicalExpertise.module.scss";

export default function TechnicalExpertise() {
	const [openLayerId, setOpenLayerId] = useState<string | null>(null);

	const toggleLayer = (id: string) => {
		setOpenLayerId((current) => (current === id ? null : id));
	};

	return (
		<section
			className={styles.technicalExpertise}
			aria-labelledby="technical-expertise-heading"
		>
			<div className={styles.header}>
				<span className={styles.eyebrow}>Technical Expertise</span>

				<h2 id="technical-expertise-heading">Across the Stack.</h2>

				<p>
					From user interfaces to application architecture and back-end systems,
					I bring the experience to build, connect, and maintain the entire
					application.
				</p>
			</div>

			<div className={styles.diagram}>
				{technicalExpertise.map((layer, index) => (
					<div key={layer.id}>
						<ExpertiseLayer
							layer={layer}
							isOpen={openLayerId === layer.id}
							onToggle={() => toggleLayer(layer.id)}
						/>

						{index < technicalExpertise.length - 1 && (
							<div className={styles.connector} aria-hidden="true">
								<span />
								<small>
									{index === 0 ? "DATA & INTERACTION" : "SERVICES & CONTENT"}
								</small>
								<span />
							</div>
						)}
					</div>
				))}
			</div>

			<div className={styles.foundation}>
				<span>THE FOUNDATION</span>

				<p>
					Performance · Maintainability · Problem Solving · Technical Leadership
				</p>
			</div>
		</section>
	);
}
