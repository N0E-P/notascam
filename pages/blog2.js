import Link from "next/link";
import Presentation from "../components/en/2-Presentation";
import Head from "next/head";

export default function blog2() {
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
					Spam In The History Of Scams
				</h2>
				<div className="mt-6 max-w-[400px] w-full h-auto m-auto ">
					<img className="rounded-xl" src="/images/spam_image.jpg" alt="/" />
				</div>
				<p className="sm:mx-10 my-2 p-4">
					Since the beginning of the Internet, spams have been polluting online spaces
					such as forums, social media chat rooms and anything that can allow two humans
					to communicate with each other. Spam can be seen as undesirable yet, for small
					businesses, it may as well be the only way to advertise themselves ? (No)
				</p>
				<p className="sm:mx-10 my-2 p-4">
					The word Spam comes from the name of the old canned Spiced ham that were given
					to the american army during world war II, The first public use of the word spam
					was around the beginning of the internet when in a sketch in the Tv series Monty
					Python Flying circus, Everyone was talking about the canned spice ham as it was
					put in every dish.
				</p>
				<p className="sm:mx-10 my-2 p-4">
					In a study made by Kaspersky, nearly half of all the emails exchanged online are
					spam and most of them came from russia. Russian data centers are often cheaper
					than in other countries and provide decent data protection laws. Bad actors
					often use those data protection maws to their advantage and commit a wide range
					of computer crime, from simple indesirable advertisement to password phishing.
				</p>
				<p className="sm:mx-10 my-2 p-4">
					With 340 billion mail sent daily, we can clearly see how half of 300 billion is
					still a huge number. A spam Email emits 0,03g of CO2 on average. That represents
					a small fraction of the global CO2 emission, but unlike Streaming or other
					services that emit CO2, Spams are unwanted and share no purpose.
				</p>
				<p className="sm:mx-10 my-2 p-4">
					Since spams are not going away, we may as well use it ! In our course, you may
					learn more about the ins and outs of our new and revolutionary technique named
					"Ethical Spamming". And as a reward for reaching the end of this article, I
					personally offer you a 2% discount on our amazing course by using the code
					"Python" in our Store !
				</p>
			</div>
			<Presentation />
		</div>
	);
}
