import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import DropdownLinks from "./sub-components/_dropdown";

const Header = () => {

	const [navIsActive, setNavActive] = useState(false);
	const [dropdownIsActive, setDropdownActive] = useState(false);

	const router = useRouter();

	console.log(router);

    return (
		<header className="sticky top-0 bg-slate-900/70 border-b border-slate-800 backdrop-blur-md text-white py-1.5 px-[5%] flex flex-col gap-4 z-50 lg:flex-row lg:justify-between lg:items-center">
			<div className="flex items-center gap-4 justify-between">
				<Link href="/">
					<a>
						<Image
							src="/img/logo.png"
							objectFit="scale-down"
							alt="TechCreek"
							width={40}
							height={40}
						/>
					</a>
				</Link>

				<button
					className="lg:hidden"
					type="button"
					aria-label="Navbar toggle buttton"
					onClick={() => setNavActive(() => !navIsActive)}>
					<i
						className={`fr ${
							navIsActive ? "fi-rr-cross" : "fi-rr-menu-burger"
						} text-2xl`}></i>
				</button>
			</div>

			<nav
				className={`absolute transition ease-in-out duration-700 bg-slate-900 w-full top-full left-0 right-0 bottom-0 border-t border-slate-800 overflow-y-auto overscroll-none h-[calc(100vh-100%)] ${
					navIsActive ? "scale-100" : "scale-0"
				} lg:static lg:[overflow:unset] lg:scale-100 lg:border-none lg:bg-transparent lg:w-auto lg:h-auto`}>
				<ul className="flex flex-col gap-2 p-4 lg:flex-row lg:items-center lg:p-0">
					<li>
						<Link href="/">
							<a className={`py-2 px-3 rounded-md hover:bg-slate-800 block`}>
								Home
							</a>
						</Link>
					</li>

					<li>
						<Link href="/about">
							<a className={`py-2 px-3 rounded-md hover:bg-slate-800 block`}>
								About
							</a>
						</Link>
					</li>

					<li className="relative">
						<Link href="/services">
							<a
								className="py-2 px-3 rounded-md hover:bg-slate-800 block"
								onClick={(e) => {
									e.preventDefault();
									setDropdownActive(() => !dropdownIsActive);
								}}>
								Services
							</a>
						</Link>

						<DropdownLinks isActive={dropdownIsActive} />
					</li>

					<li>
						<Link href="/contact">
							<a className={`py-2 px-3 rounded-md hover:bg-slate-800 block`}>
								Contact
							</a>
						</Link>
					</li>

					<li>
						<Link href="/login">
							<a className={`py-2 px-3 rounded-md hover:bg-slate-800 block`}>
								Login
							</a>
						</Link>
					</li>

					<li>
						<Link href="/register">
							<a className={`py-2 px-3 rounded-md hover:bg-slate-800 block`}>
								Register
							</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;