import type { Route } from "./+types/home";
import Intro from "../components/Intro/Intro";
import ProjectCardList from "../components/ProjectCardList/ProjectCardList";
//import TechnicalExpertise from "../components/TechnicalExpertise/TechnicalExpertise";
import WorkHistory from "../components/WorkHistory/WorkHistory";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Todd Miller, Web Developer" },
		{
			name: "description",
			content:
				"Todd H. Miller, the world famous web developer, presents his personal porfolio page.",
		},
	];
}

export default function Home() {
	return (
		<main className="home">
			<Intro />
			<ProjectCardList />
			<WorkHistory />
		</main>
	);
}
