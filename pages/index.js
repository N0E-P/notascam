import Head from "next/head";
import Main from "../components/en/1-Main";
import Presentation from "../components/en/2-Presentation";
import Project1 from "../components/en/Project1";
import Project2 from "../components/en/Project2";
import Project3 from "../components/en/Project3";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Not A Scam</title>
				<link rel="icon" href="/favicon.ico" />
				<meta property="og:title" content="Not A Scam" />
			</Head>
			<Main />
			<Project1 />
			<Project2 />
			<Project3 />
			<Presentation />
		</div>
	);
}
