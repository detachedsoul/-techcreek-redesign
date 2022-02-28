import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import DropdownLinks from "./_dropdown";

const Navbar = () => {

    const [dropdownIsActive, setDropdownActive] = useState(false);
    const router = useRouter();
    const links = [
        {
            id: 1,
            route: "/",
            linkName: "Home",
            isDropdown: false
        },
        {
            id: 2,
            route: "/about",
            linkName: "About",
            isDropdown: false
        },
        {
            id: 3,
            route: "/services",
            linkName: "Services",
            isDropdown: true
        },
        {
            id: 4,
            route: "/contact",
            linkName: "Contact",
            isDropdown: false
        },
        {
            id: 5,
            route: "/login",
            linkName: "Login",
            isDropdown: false
        },
        {
            id: 6,
            route: "/register",
            linkName: "Register",
            isDropdown: false
        }
    ];

    return (

        <ul className="flex flex-col gap-2 p-4 lg:flex-row lg:items-center lg:p-0">

            {
                links.map(link => (
                    <li className="relative" key={link.id}>

						<Link href={link.route}>
							<a className={`py-2 px-3 rounded-md hover:bg-slate-800 block ${router.asPath === link.route && 'bg-slate-800'}`} onClick={(e) => {
                                if (link.isDropdown) {
									e.preventDefault();
									setDropdownActive(() => !dropdownIsActive);
								} else {
                                    return;
                                }
                            }}>
								{ link.linkName }
							</a>
						</Link>

                        {
                            link.isDropdown && <DropdownLinks isActive={dropdownIsActive} />
                        }

					</li>
                ))
            }
            
        </ul>

    );
}

export default Navbar;