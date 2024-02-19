export function FluitCards() {
	return (
		<div className="grid min-h-screen place-items-center">
			<ul className="flex w-full max-w-6xl gap-4">
				{imageIds.map(item => (
					<li
						key={item}
						className="relative h-[500px] w-full overflow-hidden rounded-2xl bg-rose-300"
					>
						<img
							src={`https://images.unsplash.com/photo-${item}?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlicmFudHxlbnwwfHwwfHx8MA%3D%3D`}
							alt=""
							className="absolute inset-0 h-full w-full  object-cover "
						/>
					</li>
				))}
			</ul>
			{/* <p className="text-4xl font-bold">Let's do it</p> */}
		</div>
	)
}

const imageIds = [
	'1500462918059-b1a0cb512f1d',
	'1531581147762-5961e6e2e6b1',
	'1626204327506-0d3ee11d7752',
	'1549068106-b024baf5062d',
]
