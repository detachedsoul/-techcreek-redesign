import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <header className="sticky top-0 bg-slate-900/70 shadow-lg backdrop-blur text-white py-1.5 px-[5%] flex flex-col gap-4 z-50 lg:flex-row lg:justify-between lg:items-center">

            <div className="flex items-center gap-4 justify-between">

                <Link href="/">
                    <a>
                        <Image src="/img/logo.png" objectFit="scale-down" alt="TechCreek" width={40} height={40} />
                    </a>
                </Link>

                <button className="lg:hidden" type="button" aria-label="Navbar toggle buttton">
                    <i className="fr fi-rr-menu-burger text-2xl"></i>
                </button>

            </div>

            <nav className="absolute ease-linear delay-500 -translate-x-full bg-slate-700 w-full top-full left-0 right-0 bottom-0 border-t border-slate-700 overflow-y-auto overscroll-none h-[calc(100vh-100%)] lg:static lg:translate-x-0 lg:border-none lg:bg-transparent lg:w-auto lg:h-auto">

                <ul className="flex flex-col gap-2 p-4 lg:flex-row lg:items-center lg:p-0">

                    <li>
                        <Link href="/">
                            <a className="py-2 px-3 rounded-md bg-default-blue block">
                                Home
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/about">
                            <a className="py-2 px-3 rounded-md hover:bg-default-blue block">
                                About
                            </a>
                        </Link>
                    </li>

                    <li className="relative">
                        <Link href="/services">
                            <a className="py-2 px-3 rounded-md hover:bg-default-blue block">
                                Services
                            </a>
                        </Link>

                        <div className="absolute top-[120%] scale-0 ease-in-out delay-500 w-full bg-slate-900 shadow-2xl rounded-md p-4 lg:fixed lg:w-max lg:top-[103%]">

                            <ul className="flex flex-col gap-2">

                                <li>
                                    <Link href="">
                                        <a className="hover:bg-default-blue rounded-md py-2 px-3 block text-white">
                                            Training & Events
                                        </a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="">
                                        <a className="hover:bg-default-blue rounded-md py-2 px-3 block text-white">
                                            Co-Working
                                        </a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="">
                                        <a className="hover:bg-default-blue rounded-md py-2 px-3 block text-white">
                                            Workchop
                                        </a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="">
                                        <a className="hover:bg-default-blue rounded-md py-2 px-3 block text-white">
                                            Incubation
                                        </a>
                                    </Link>
                                </li>

                            </ul>

                        </div>
                    </li>

                    <li>
                        <Link href="/contact">
                            <a className="py-2 px-3 rounded-md hover:bg-default-blue block">
                                Contact
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/login">
                            <a className="py-2 px-3 rounded-md hover:bg-default-blue block">
                                Login
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/register">
                            <a className="py-2 px-3 rounded-md hover:bg-default-blue block">
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