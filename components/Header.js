import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./sub-components/_navbar";

const Header = () => {

	const [navIsActive, setNavActive] = useState(false);

    return (
		<header className="sticky top-0 bg-slate-900/70 border-b border-slate-800 text-white py-1.5 px-[5%] flex flex-col gap-4 z-50 backdrop-blur-xl lg:flex-row lg:justify-between lg:items-center">
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

			<Navbar navIsActive={navIsActive} />

		</header>
	);
}

export default Header;