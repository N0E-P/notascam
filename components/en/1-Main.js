import { HiChevronDoubleDown } from "react-icons/hi";
import Link from "next/link";

export default function Main() {
	return (
		<div>
			<div className="w-full mt-5 sm:mt-15 md:mt-10 text-center h-screen max-w-[1240px] mx-auto p-2 justify-center">
				<h1 className="text-gray-800">Welcome to</h1>
				<Link href={"/"}>
					<h1 className="py-6 text-red-500 underline">Not-A-Scam.com</h1>
				</Link>
				<div className="py-5">
					<p className="py-2 text-gray-700 text-center text-lg md:text-xl lg:text-2xl ">
						"I've made my first trillion thanks to not-a-scam.com."
					</p>
					<p className=" px-2 text-red-500 text-center text-lg md:text-xl lg:text-2xl  ">
						- Elon Musk
					</p>
					<div className="flex justify-center">
						<img src={"stars.png"} width="250px" height="351px" alt="/" />
					</div>
				</div>
				<div className="flex justify-center">
					<div className="grid grid-cols-3 gap-10">
						<img
							className=" bg-blue-100 rounded-full m-2 mt-4 sm:m-5 shadow-lg shadow-gray-400 p-1 hover:scale-105 ease-in duration-300"
							src={"sasha.jpg"}
							alt=""
							width="200"
							height="200"
						/>
						<img
							className=" bg-blue-100 rounded-full m-2 mt-4 sm:m-5 shadow-lg shadow-gray-400 p-1 hover:scale-105 ease-in duration-300"
							src={"sie.jpg"}
							alt=""
							width="200"
							height="200"
						/>
						<img
							className=" bg-blue-100 rounded-full m-2 mt-4 sm:m-5 shadow-lg shadow-gray-400 p-1 hover:scale-105 ease-in duration-300"
							src={"lenoe.jpg"}
							alt=""
							width="200"
							height="200"
						/>
					</div>
				</div>
				<div className="flex justify-center mt-12">
					<Link href="/#presentation">
						<div className="animate-bounce rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer">
							<HiChevronDoubleDown className="text-red-500" size={36} />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
