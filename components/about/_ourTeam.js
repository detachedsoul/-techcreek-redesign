import Image from "next/image";

const OurTeam = () => {

	const teamMembers =  [
		{
			id: 1,
			name: "Engr. Godwin Nwosu",
			title: "Director, TechCreek",
			img: "/img/engr-nwosu.jpg"
		},
		{
			id: 2,
			name: "Mr. Peter Akaliro",
			title: "Web Development Instructor, TechCreek",
			img: "/img/mr-peter.jpg"
		},
		{
			id: 3,
			name: "Sir Sampson David",
			title: "Web Development Instructor, TechCreek",
			img: "/img/sir-sampson-david.jpg"
		},
		{
			id: 4,
			name: "Sir Divine",
			title: "Cybersecurity Instructor, TechCreek",
			img: "/img/sir-divine.jpg"
		},
		{
			id: 5,
			name: "John Doe",
			title: "Intern, TechCreek",
			img: "/img/john-doe.png"
		},
		{
			id: 6,
			name: "Jane Doe",
			title: "Intern, TechCreek",
			img: "/img/jane-doe.png"
		},
	];

    return (
		<div className="my-16 space-y-8 mb-0">
			<div className="text-center">
				<h3 className="header text-2xl">
					Our Team
				</h3>

				<p>
					These are the people behind the success of TechCreek over
					the years
				</p>
			</div>

			<div className="grid gap-4 lg:grid-cols-12">
				{teamMembers.map((teamMember) => (
					<div
						className="bg-slate-800 rounded-md grid items-center gap-4 lg:col-span-4 lg:grid-cols-12"
						key={teamMember.id}>
						<div className="h-40 relative rounded-t-md lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-md w-full lg:col-span-5">
							<Image
								className="w-full aspect-square rounded-t-md lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-md"
								src={teamMember.img}
								alt={teamMember.name}
								layout="fill"
								objectFit="cover"
								objectPosition="center"
							/>
						</div>

						<div className="space-y-1.5 pb-4 px-4 lg:col-span-7 lg:pb-0 lg:px-0">
							<h3 className="header">{teamMember.name}</h3>

							<p>{teamMember.title}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default OurTeam;