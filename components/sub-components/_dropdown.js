import Link from "next/link";

const DropdownLinks = ({ isActive }) => {

    const dropdownLinks = [
		{
			id: 1,
			link: "/trainig-events",
			linkName: "Training & Events",
		},
		{
			id: 2,
			link: "/services/co-working",
			linkName: "Co-Working",
		},
		{
			id: 3,
			link: "/services/workchop",
			linkName: "Workchop",
		},
		{
			id: 4,
			link: "/services/incubation",
			linkName: "Incubation",
		}
	];

    return (
        <div className={`absolute transition ease-in-out duration-700 top-[120%] w-full bg-slate-800 rounded-md py-2 px-2.5 ${isActive ? 'scale-100' : 'scale-0'} lg:shadow-xl lg:w-max lg:top-[130%]`}>
            
            <ul className="flex flex-col gap-1">

                {dropdownLinks.map(dropdownLink => ( 
                    <li key={dropdownLink.id}>
						<Link href={dropdownLink.link}>
							<a className="hover:bg-slate-900 rounded-md py-2 px-3 block text-white">
								{ dropdownLink.linkName }
							</a>
						</Link>
					</li>
                ))}

            </ul>

        </div>
    );
}
 
export default DropdownLinks;