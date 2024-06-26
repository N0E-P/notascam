import Link from "next/link";

export default function Blog() {
	return (
		<div className="w-full p-4 items-center">
			<div className="max-w-[1400px] m-auto mb-10 ">
				<h1 className="mt-5 max-w-[300px] sm:max-w-[1400px] m-auto mb-12">
					Some Amazing Blog Articles:
				</h1>
				<div className="lg:grid grid-cols-2">
					<Link href="/blog1">
						<div className="p-8 my-5 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 lg:mr-4 hover:scale-105 ease-in duration-300">
							<h2 className=" text-white text-2xl underline text-center">
								How to create your own NFTs
							</h2>
							<div className="mt-6 max-w-[450px] w-full h-auto m-auto ">
								<img
									width="800"
									className="rounded-xl"
									src="/images/nftblog.jpg"
									alt="/"
								/>
							</div>
						</div>
					</Link>
					<Link href="/blog2">
						<div className="p-8 my-5 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 lg:mr-4 hover:scale-105 ease-in duration-300">
							<h2 className=" text-white text-2xl underline text-center">
								Spam In The History Of Scams
							</h2>
							<div className="mt-6 max-w-[350px] w-full h-auto m-auto ">
								<img
									width="500"
									className="rounded-xl"
									src="/images/spam_image.jpg"
									alt="/"
								/>
							</div>
						</div>
					</Link>
					<Link href="/blog3">
						<div className="p-8 my-5 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 lg:mr-4 hover:scale-105 ease-in duration-300">
							<h2 className=" text-white text-2xl underline text-center">
								How To Fish
							</h2>
							<div className="mt-6 max-w-[450px] w-full h-auto m-auto ">
								<img
									className="rounded-xl"
									src="/images/phishing_image.jpg"
									width="800"
									alt="/"
								/>
							</div>
						</div>
					</Link>
					<Link href="/blog4">
						<div className="p-8 my-5 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 lg:mr-4 hover:scale-105 ease-in duration-300">
							<h2 className=" text-white text-2xl underline text-center">
								Alternative Business ideas
							</h2>
							<div className="mt-6 max-w-[500px] w-full h-auto m-auto ">
								<img
									width="800"
									className="rounded-xl"
									src="/images/autre_image.jpg"
									alt="/"
								/>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
