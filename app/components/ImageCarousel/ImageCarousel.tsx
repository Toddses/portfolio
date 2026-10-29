import { useState } from "react";

import type { ProjectImage } from "../../types/Project";
import styles from "./ImageCarousel.module.scss";

interface ImageCarouselProps {
	images: ProjectImage[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
	const [activeIndex, setActiveIndex] = useState(0);

	if (images.length === 0) return null;

	const hasMultipleImages = images.length > 1;

	const goToPrevious = () => {
		setActiveIndex((current) => (current - 1 + images.length) % images.length);
	};

	const goToNext = () => {
		setActiveIndex((current) => (current + 1) % images.length);
	};

	return (
		<div
			className={styles.carousel}
			role="region"
			aria-label="Project screenshots"
		>
			<div className={styles.viewport}>
				<img
					className={styles.image}
					src={images[activeIndex].src}
					alt={images[activeIndex].alt}
				/>

				{hasMultipleImages && (
					<>
						<button
							type="button"
							className={`${styles.arrow} ${styles.previous}`}
							onClick={goToPrevious}
							aria-label="Previous screenshot"
						>
							<span aria-hidden="true">‹</span>
						</button>

						<button
							type="button"
							className={`${styles.arrow} ${styles.next}`}
							onClick={goToNext}
							aria-label="Next screenshot"
						>
							<span aria-hidden="true">›</span>
						</button>
					</>
				)}
			</div>

			{hasMultipleImages && (
				<div className={styles.pagination} aria-label="Choose screenshot">
					{images.map((image, index) => (
						<button
							key={`${image.src}-${index}`}
							type="button"
							className={[
								styles.dot,
								index === activeIndex ? styles.active : "",
							].join(" ")}
							onClick={() => setActiveIndex(index)}
							aria-label={`View screenshot ${index + 1}`}
							aria-current={index === activeIndex ? "true" : undefined}
						/>
					))}
				</div>
			)}
		</div>
	);
}
