import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./sub-components/_navbar";

const Header = () => {

	const [navIsActive, setNavActive] = useState(false);

    return (
		<header className="sticky top-0 bg-slate-900/70 border-b border-slate-800 backdrop-blur-xl text-white py-1.5 px-[5%] flex flex-col gap-4 z-50 lg:flex-row lg:justify-between lg:items-center">

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
				
				<Navbar />

			</nav>
			
		</header>
	);
}

export default Header;