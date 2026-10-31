import IconLink from "../IconLink/IconLink";
import styles from "./Contact.module.scss";

export default function Contact() {
	return (
		<section className={styles.contact} id="contact">
			<div className="inner">
				<header className={styles.header}>
					<span className={styles.eyebrow}>Contact</span>

					<h2>Let's Talk.</h2>

					<p>Want to get in touch? Here are a few ways to find me.</p>
				</header>

				<div className={styles.links}>
					<IconLink
						text="My Resume"
						url="/docs/Todd-Miller-Resume.pdf"
						icon="/images/file.svg"
					/>

					<IconLink
						text="LinkedIn"
						url="https://www.linkedin.com/in/todd-miller-81a3a21/"
						icon="/images/linkedin.svg"
					/>

					<IconLink
						text="GitHub"
						url="https://github.com/Toddses"
						icon="/images/github.svg"
					/>

					<IconLink
						text="Send an Email"
						url="mailto:toddses@gmail.com"
						icon="/images/envelope.svg"
						target="_self"
					/>
				</div>

				<footer className={styles.footer}>
					<span>© {new Date().getFullYear()} Todd Miller</span>
				</footer>
			</div>
		</section>
	);
}
