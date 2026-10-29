import styles from "./Intro.module.scss";

export default function Intro() {
	return (
		<section className={styles.intro}>
			<h1>Todd Miller is a Web Developer.</h1>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat.
			</p>
		</section>
	);
}
