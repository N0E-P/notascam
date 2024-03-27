import Link from "next/link";
import Presentation from "../components/en/2-Presentation";
import Head from "next/head";

export default function blog4() {
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
				<p className="sm:mx-10 my-2 md:text-center py-3 p-4">
					“I think scamming people is sometimes bad, sometimes good, just depend if you do
					it with style! “ -Me
				</p>
				<p className="sm:mx-10 my-2 p-4 font-bold pb-0">1- Sell quantum bullshit</p>
				<p className="sm:mx-10 my-2 p-4 py-0">
					Disclaimer: Some people are really into bullshit quantum shit or other sectarian
					things, we are not making fun of them, but we're ironizing the situation.
				</p>
				<p className="sm:mx-10 my-2 p-4 py-0">
					When the word quantum comes in, a lot of people are lost. You can use this as an
					advantage to sell quantum stuff to people. (You don't even need to buy things,
					watch Spam and DropShipping blogs)
				</p>
				<p className="sm:mx-10 my-2 p-4 py-0">
					I will give you some examples before explaining to you how to do it so you can
					understand better. A lot of crap is sold on the internet based on sect bullshit
					(it is sadly true). The best and most shocking example is energy stones, you may
					think it is nothing, but there's a lot underneath. You can easily sell a 500$
					necklace with good storytelling, some people even say things like stones will
					heal you emotionally or physically. Curing disease is a bestseller bullshit, it
					comes when people are desperate and want to believe in something. Quantum bed
					for 2000$. Nothing more to say, just buy a random bed and ask ChatGPT some
					storytelling. Quantum cream (from guerlain) made a polemic, so the term
					“quantum” has been remove from their website, but it stays bullshit
					storytelling.{" "}
					<span>
						<a
							href="https://www.guerlain.com/fr/fr-fr/p/orchidee-imperiale-gold-nobile-la-creme-P061801.html"
							className="cursor-pointer text-blue-700 underline"
						>
							Watch here
						</a>
					</span>
					, they just sell a random cream for 650$ by using complexe words. People don't
					understand, but as a science student I do, and it is ridiculous xd. “Gold Nobile
					est capable d’aider à restaurer l’émission de biophotons d’une cellule âgée à un
					niveau proche de celui d’une cellule jeune.”, here is some good storytelling!
				</p>

				<p className="sm:mx-10 my-2 p-4 pt-0">
					So you got it, just be creative, and don't be scared to overprice it; the more
					expensive it is, the richer you will be! Just ask ChatGPT good storytelling for
					your product.
				</p>
				<p className="sm:mx-10 my-2 p-4 font-bold pb-0">2- Fake Giveaway</p>
				<p className="sm:mx-10 my-2 p-4 pt-0">
					Here, we won't watch to sell something but to grow our community. A bigger
					community means bigger monetization. You will be able to form a partnership if
					your community is large enough. Giveaway is obviously the best way to do it. Ask
					people to like, comment and subscribe your post, it will bump up compared to
					your normal post. The alternative part is to give the thing you promised, and if
					it is something like a car, it can quickly cost a lot of money. Just don't
					choose the winner. Simple and effective!
				</p>
				<p className="sm:mx-10 my-2 p-4 py-0">Some examples:</p>
				<p className="sm:mx-10 my-2 p-4 py-0">-Iphone giveaway</p>
				<p className="sm:mx-10 my-2 p-4 py-0">-Car giveaway</p>
				<p className="sm:mx-10 my-2 p-4 py-0">-Dream vacation giveaway</p>
				<p className="sm:mx-10 my-2 p-4 py-0">-Celebrity encounter giveaway</p>
				<p className="sm:mx-10 my-2 p-4 py-0">-Island giveaway</p>
				<p className="sm:mx-10 my-2 p-4 py-0">-Fly to mars giveaway</p>
				<p className="sm:mx-10 my-2 p-4 pt-0">-A personal moon base giveaway</p>
				<p className="sm:mx-10 my-2 p-4 font-bold pb-0">3- Dropshipping</p>
				<p className="sm:mx-10 my-2 p-4 pt-0">
					If you don't know what dropshipping is, I'll explain it with simple words. You
					sell products you don't own, and so you don't have to manage stock and delivery.
					The perfect app for this is Shopify, which has good features, so we don't have
					to do anything. Start to go on their website and create a workspace. Just watch
					a Youtube tutorial if you are too dumb to do it yourself… Stole someone else's
					website using the template feature. Now, go on a cheap selling platform, Teemu
					or Wish are perfect. Select some products you like, and you will be able to sell
					on your networks, then add them in your Shopify workspace with the feature.
					Choose the price you want, i recommend you pay 3x the original price, then press
					put it on your website. Now it is done. As long as you entered correct credit
					card information in Shopify you will get the money, you just have to advertise
					your shop on your networks, Tiktok is perfect for this! You can even automatize
					the process by using AI, but we will talk about this another time.
				</p>
			</div>
			<Presentation />
		</div>
	);
}
