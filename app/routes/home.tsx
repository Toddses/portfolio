import type { Route } from "./+types/home";
import CardList from "../components/CardList/CardList";
import Intro from "../components/Intro/Intro";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Todd Miller's Portfolio" },
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
			<CardList />
		</main>
	);
}
