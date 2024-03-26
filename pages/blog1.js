import Link from "next/link";
import Presentation from "../components/en/2-Presentation";
import Head from "next/head";

export default function blog1() {
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
					How to create your own NFTs
				</h2>
				<div className="mt-6 max-w-[400px] w-full h-auto m-auto ">
					<img className="rounded-xl" src="/images/nftblog.jpg" alt="/" />
				</div>
				<p className="sm:mx-10 my-2 md:text-center py-3 p-4">
					Hello my little scammers! Today we’ll learn how to create amazing NFTs, from
					start to finish.
				</p>
				<p className="sm:mx-10 mt-2 p-4 pb-0">1-Create the images</p>
				<p className="sm:mx-10 my-2 p-4">
					Firstly, we need to create all the layers we want for our NFTs. All the
					different options we want have to be drawn. You can do everything by hand,{" "}
					<span>
						<a
							href="https://www.youtube.com/watch?v=C8ArrxXsA8c"
							className="cursor-pointer text-blue-700 underline"
						>
							like me
						</a>
					</span>
					. (I know, I’m an artist) Or you can force your little brother to do it for you.
					Then we need to assemble all the images we want to sell.
				</p>
				<p className="sm:mx-10 my-2 p-4 pb-0">2-Put them on Opensea</p>
				<p className="sm:mx-10 my-2 p-4">
					You’ll first need to buy some cryptocurrency. In this example, we’ll be on the
					Ethereum blockchain, so you’ll need to buy some ETH. You can do it directly on{" "}
					<span>
						<a
							href="https://opensea.io"
							className="cursor-pointer text-blue-700 underline"
						>
							opensea.io
						</a>
					</span>
					. Or you can do it programmatically using Brownie or another software like it to
					use the blockchain directly from your computer using code.
				</p>
				<p className="sm:mx-10 my-2 p-4 pb-0">3-Get a fan base</p>
				<p className="sm:mx-10 my-2 p-4">
					You can create one on Discord, Twitter or Reddit. Only nerd social networks.
					Otherwise, it won't work. I’m very bad in this domain, so I’ll let you find what
					works.
				</p>
				<p className="sm:mx-10 my-2 p-4 pb-0">4-Spend all your money</p>
				<p className="sm:mx-10 my-2 p-4">
					That’s it. Now you’re rich! You can now take selfies in Dubai or on the hood of
					your Lamborghini
				</p>
			</div>
			<Presentation />
		</div>
	);
}
