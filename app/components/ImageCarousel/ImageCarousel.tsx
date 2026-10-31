import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import type { ProjectImage } from "../../types/Project";
import styles from "./ImageCarousel.module.scss";

interface ImageCarouselProps {
	images: ProjectImage[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: images.length > 1,
		align: "start",
	});

	const [activeIndex, setActiveIndex] = useState(0);

	const hasMultipleImages = images.length > 1;

	const onSelect = useCallback(() => {
		if (!emblaApi) return;

		setActiveIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;

		onSelect();

		emblaApi.on("select", onSelect);
		emblaApi.on("reInit", onSelect);

		return () => {
			emblaApi.off("select", onSelect);
			emblaApi.off("reInit", onSelect);
		};
	}, [emblaApi, onSelect]);

	const goToPrevious = useCallback(() => {
		emblaApi?.scrollPrev();
	}, [emblaApi]);

	const goToNext = useCallback(() => {
		emblaApi?.scrollNext();
	}, [emblaApi]);

	const goToSlide = useCallback(
		(index: number) => {
			emblaApi?.scrollTo(index);
		},
		[emblaApi],
	);

	if (images.length === 0) return null;

	return (
		<div
			className={styles.carousel}
			role="region"
			aria-roledescription="carousel"
			aria-label="Project screenshots"
		>
			<div className={styles.viewport} ref={emblaRef}>
				<div className={styles.container}>
					{images.map((image, index) => (
						<div
							className={styles.slide}
							key={`${image.src}-${index}`}
							role="group"
							aria-roledescription="slide"
							aria-label={`${index + 1} of ${images.length}`}
						>
							<img
								className={styles.image}
								src={image.src}
								alt={image.alt}
								draggable={false}
							/>
						</div>
					))}
				</div>
			</div>

			{hasMultipleImages && (
				<div className={styles.navigation}>
					<button
						type="button"
						className={`${styles.arrow} ${styles.previous}`}
						onClick={goToPrevious}
						aria-label="Previous screenshot"
					>
						<span aria-hidden="true"></span>
					</button>

					<div className={styles.pagination} aria-label="Choose screenshot">
						{images.map((image, index) => (
							<button
								key={`${image.src}-${index}`}
								type="button"
								className={[
									styles.dot,
									index === activeIndex ? styles.active : "",
								].join(" ")}
								onClick={() => goToSlide(index)}
								aria-label={`View screenshot ${index + 1}`}
								aria-current={index === activeIndex ? "true" : undefined}
							/>
						))}
					</div>

					<button
						type="button"
						className={`${styles.arrow} ${styles.next}`}
						onClick={goToNext}
						aria-label="Next screenshot"
					>
						<span aria-hidden="true"></span>
					</button>
				</div>
			)}
		</div>
	);
}
