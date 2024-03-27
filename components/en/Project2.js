export default function Project2() {
	return (
		<div className="w-full my-20 p-2 sm:p-8 items-center">
			<div className="max-w-[1000px] m-auto p-4 sm:p-8 bg-green-200 rounded-3xl shadow-lg shadow-gray-400">
				<h1 className="mb-5">Free Technical Support:</h1>
				<div className="mt-12 xl:mt-0 sm:p-4  w-full bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-3">
					<div className="aspect-w-16 aspect-h-9">
						<iframe
							className="rounded-xl"
							src="https://www.youtube.com/embed/Q_tc6SExHLE"
							allow="autoplay; encrypted-media; picture-in-picture"
							allowFullScreen
							title="video"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
