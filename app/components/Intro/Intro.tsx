import styles from "./Intro.module.scss";

export default function Intro() {
	return (
		<section className={styles.intro}>
			<div className="inner">
				<h1>Todd Miller is a Web Developer.</h1>

				<p>
					I am a web developer with 25 years of professional development
					experience. I have run the gamut from solo Perl programmer to
					Technical Lead on a team of 8. My expertise lies in full-stack React
					and Angular web applications with REST API back-ends as well as custom
					Drupal and Wordpress builds.
				</p>
				<p>
					Just like when I first started writing C code on my personal computer
					in 1998, I love getting my hands dirty with code, especially with a
					team. Over two decades later, I am still chasing the high of
					delivering an elegant solution to a difficult problem, and the
					well-written code that backs it.
				</p>
			</div>
		</section>
	);
}
