export default function Blog() {
	return (
		<div className="w-full p-4 items-center">
			<div className="max-w-[1400px] m-auto mb-10 ">
				<h1 className="mt-5 max-w-[300px] sm:max-w-[1400px] m-auto mb-12">
					Some Amazing Blog Articles:
				</h1>
				<div className="lg:grid grid-cols-3">
					<div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 lg:mr-4 ">
						<p className=" text-white text-lg">
							I started with Lego. I used to stay in my garden shed all the time,
							building cars and houses that I would end up blowing.
						</p>
						<p className="mt-5 text-white text-lg">
							My dream was to work for them. But even though I was slowly getting
							better, I would never have the creativity to be able to do it.
						</p>
						<div className="mt-6 max-w-[450px] hover:scale-105 ease-in duration-300 w-full h-auto m-auto ">
							<img
								className="rounded-xl"
								src="me/lego.JPG"
								width="2292px"
								height="2788px"
								alt="/"
							/>
						</div>
					</div>
					<div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 lg:ml-2 lg:mr-2 mt-8 lg:mt-0">
						<p className=" text-white text-lg">
							Later, I discovered Minecraft. It was a whole new world of possibilities
							and creations that had just opened up. I spent months and months on this
							game.
						</p>
						<p className="mt-5 text-white text-lg">
							I built houses, castles, farms, mansions and tons of other things. It
							has always been my favorite video game.
						</p>
						<div className="mt-6 max-w-[450px] hover:scale-105 ease-in duration-300 w-full h-auto m-auto">
							<img
								className="rounded-xl"
								src={"me/minecraft.JPG"}
								width="3072px"
								height="2304px"
								alt="/"
							/>
						</div>
					</div>
					<div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 lg:ml-4 mt-8 lg:mt-0">
						<p className=" text-white text-lg">
							One day, my father bought some Arduino. There are small cards that you
							can program and link with anything and everything. I had a lot of fun
							playing with them.
						</p>
						<p className="mt-5 text-white text-lg">
							I was doing pretty well, even though I was just copying and pasting
							code. I had even started to make my own remote control car.
						</p>
						<div className="mt-6 max-w-[450px] hover:scale-105 ease-in duration-300 w-full h-auto m-auto">
							<img
								className="rounded-xl"
								src={"me/arduino.png"}
								width="900px"
								height="675px"
								alt="/"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
