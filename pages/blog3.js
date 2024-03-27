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
					How To Fish
				</h2>
				<div className="mt-6 max-w-[400px] w-full h-auto m-auto ">
					<img className="rounded-xl" src="/images/phishing_image.jpg" alt="/" />
				</div>
				<p className="sm:mx-10 my-2 md:text-center py-3 p-4">
					Today we will learn what phishing is and how to do it in only 60 minutes!
				</p>
				<p className="sm:mx-10 my-2 p-4 font-bold">1- What is phishing</p>
				<p className="sm:mx-10 my-2 p-4">
					Phishing is the art of gaining a lot of things by doing nothing. The hustler
					will send a link to the victim and gain access to his machine. It is seen as a
					“hacker” thing, but you can easily steal someone's work to hack someone else.
					(github is perfect for this)
				</p>
				<p className="sm:mx-10 my-2 p-4 font-bold">2- Your first phishing website</p>
				<p className="sm:mx-10 my-2 p-4 py-0">
					First, start by finding a website idea that stupid or old people will want to
					open. You can easily steal a website by downloading its entire architecture,
					don't hesitate to use other people's work for yourself!
				</p>
				<p className="sm:mx-10 my-2 p-4 py-0">
					Then, when you get your website you will have to create the hook! Don't worry,
					it isn't that hard, even if you never touch a computer in your life! We will use
					“beef” which is a free app that will manage your prey for you! Install it{" "}
					<span>
						<a
							href="https://beefproject.com/"
							className="cursor-pointer text-blue-700 underline"
						>
							here
						</a>
					</span>
					: then create a workspace. This will give you a sentence like{" "}
					{"“<script hacked jajajaja /script>”"} copy and paste it inside your main page
					website file by opening it with Notepad.
				</p>
				<p className="sm:mx-10 my-2 p-4 pt-0">You are now ready to fish!</p>
				<p className="sm:mx-10 my-2 p-4 pb-0 font-bold">3- You will get rich!!</p>
				<p className="sm:mx-10 my-2 p-4">
					Now just send your website using spam (watch our blog about spam) or any methode
					you like. When people open your link, they will be on the website you stole, but
					you will have access to their web browser. Just copy and paste their credit card
					information and it is a win! Beef has a lot of external features that can be
					cool, try them as you wish.{" "}
				</p>
				<p className="sm:mx-10 my-2 p-4 pb-0 font-bold">4- A bit of history</p>
				<p className="sm:mx-10 my-2 p-4 pb-0">Origin of the name: </p>
				<p className="sm:mx-10 my-2 p-4 pt-0">
					It obviously comes from fishing you idiot… However, the ‘f’ became ‘ph’ because
					some of the earliest hackers were known as phreaks. Phreaking refers to the
					exploration, experimenting and study of telecommunication systems. Phreaks and
					hackers have always been closely linked. The “ph” spelling was used to link
					phishing scams with these underground communities.
				</p>
				<p className="sm:mx-10 my-2 p-4 pb-0">The biggest phishing attack:</p>
				<p className="sm:mx-10  py-0 p-4">Colonial Pipeline in 2021 for 3.4 Billion</p>
				<p className="sm:mx-10 py-0 p-4">Facebook and Google in 2015 for 90 Million</p>
				<p className="sm:mx-10  p-4 py-0">Sony picture in 2014 for 80 Million</p>
			</div>
			<Presentation />
		</div>
	);
}
