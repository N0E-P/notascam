import Link from "next/link";
import Presentation from "../components/en/2-Presentation";
import Head from "next/head";

export default function blog3() {
	return (
		<div className="w-full p-4 items-center">
			<Head>
				<title>Not A Scam - Blog</title>
				<link rel="icon" href="/favicon.ico" />
				<meta property="og:title" content="Not A Scam" />
			</Head>
			<div className="max-w-[1400px] m-auto ">
				<Link href={"/"}>
					<h1 className="py-6 text-red-500 underline">Not-A-Scam.com</h1>
				</Link>
				<h2 className="text-center my-2 max-w-[700px] xl:max-w-[825px] m-auto">
					Alternative Business ideas
				</h2>
				<div className="mt-6 max-w-[400px] w-full h-auto m-auto ">
					<img className="rounded-xl" src="/images/autre_image.jpg" alt="/" />
				</div>
				<p className="sm:mx-10 my-2 md:text-center py-3 p-4">bla</p>
				<p className="sm:mx-10 my-2 p-4">blabla</p>
				<p className="sm:mx-10 my-2 text-justify p-4 ">
					bla{" "}
					<span>
						<a
							href="https://www.youtube.com/watch?v=nb471gm5Xeg"
							className="cursor-pointer text-blue-700 underline"
						>
							bla
						</a>
					</span>{" "}
					bla
				</p>
			</div>
			<Presentation />
		</div>
	);
}
