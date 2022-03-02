import Image from "next/image";

const AboutImageGallery = () => {
    return (
		<div className="my-16 space-y-8 mb-0">
			<div className="text-center">
				<h3 className="header text-xl">Image Gallery</h3>

				<p>Let's take you on a tour of our facilities</p>
			</div>

			<div className="grid gap-4 lg:grid-rows-4 lg:grid-cols-12">
				<div className="h-[200px] relative rounded-md w-full row-start-1 row-end-5 lg:h-[400px] lg:col-span-6">
					<Image
						className="w-full aspect-square rounded-md"
						src="/img/facilities.jpg"
						alt="Interior entrance"
						layout="fill"
						objectFit="cover"
						objectPosition="center"
					/>
				</div>

				<div className="h-[200px] relative rounded-md w-full lg:h-auto lg:row-span-2 lg:col-span-3">
					<Image
						className="w-full aspect-square rounded-md"
						src="/img/training.jpg"
						alt="Training halls"
						layout="fill"
						objectFit="cover"
						objectPosition="center"
					/>
				</div>

				<div className="h-[200px] relative rounded-md w-full lg:h-auto lg:row-span-2 lg:col-span-3">
					<Image
						className="w-full aspect-square rounded-md"
						src="/img/conference.jpg"
						alt="Conference hall"
						layout="fill"
						objectFit="cover"
						objectPosition="center"
					/>
				</div>

				<div className="h-[200px] relative rounded-md w-full lg:h-auto lg:row-span-2 lg:col-span-3">
					<Image
						className="w-full aspect-square rounded-md"
						src="/img/incubation.jpg"
						alt="Tech events hall"
						layout="fill"
						objectFit="cover"
						objectPosition="center"
					/>
				</div>

				<div className="h-[200px] relative rounded-md w-full lg:h-auto lg:row-span-2 lg:col-span-3">
					<Image
						className="w-full aspect-square rounded-md"
						src="/img/staircase.jpg"
						alt="Interior enterance"
						layout="fill"
						objectFit="cover"
						objectPosition="center"
					/>
				</div>
			</div>
		</div>
	);
}

export default AboutImageGallery;