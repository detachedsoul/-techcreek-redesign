/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="text-slate-200 bg-slate-800">

            <div className="grid gap-8 px-[5%] py-8 border-b border-slate-200 lg:grid-cols-12 lg:gap-12">

                <div className="space-y-3 lg:col-span-4">

                    <h3 className="header text-xl">
                        About
                    </h3>

                    <p>
                        Tech Creek is the pilot for a new set of creeks that would house creativity in design and system development in the Niger Delta.
                    </p>

                </div>

                <div className="space-y-3 lg:col-span-4">

                    <h3 className="header text-xl">
                        Quick Links
                    </h3>

                    <ul className="flex flex-col gap-3">

                        <li>
                            <Link href="/trainig/codegaminator">
                                <a className="text-sky-400 hover:underline hover:underline-offset-4 active:underline active:underline-offset-4">
                                    Codegaminators
                                </a>
                            </Link>
                        </li>
                        
                        <li>
                            <Link href="/trainig/codegaminator-junior">
                                <a className="text-sky-400 hover:underline hover:underline-offset-4 active:underline active:underline-offset-4">
                                    Codegaminators Junior
                                </a>
                            </Link>
                        </li>
                        
                        <li>
                            <Link href="/services/workchop">
                                <a className="text-sky-400 hover:underline hover:underline-offset-4 active:underline active:underline-offset-4">
                                    Workchop
                                </a>
                            </Link>
                        </li>
                        
                        <li>
                            <Link href="/services/incubation">
                                <a className="text-sky-400 hover:underline hover:underline-offset-4 active:underline active:underline-offset-4">
                                    Incubation
                                </a>
                            </Link>
                        </li>

                    </ul>

                </div>

                <div className="space-y-3 lg:col-span-4">

                    <h3 className="header text-xl">
                        Get In Touch
                    </h3>

                    <div className="space-y-2.5">
                    
                        <p>
                            <i className="fr fi-rr-marker relative top-0.5 pr-1.5"></i>
                            Rivers State ICT Center, Opp Pleasure Park Aba Road, Port Harcourt, Rivers State, Nigeria.
                        </p>
                        
                        <p>
                            <i className="fr fi-rr-clock relative top-0.5 pr-1.5"></i>
                            Mon - Fri. 8am - 5pm
                        </p>
                        
                        <p>
                            <i className="fr fi-rr-smartphone relative top-0.5 pr-1.5"></i>
                            +234-818-951-3676
                        </p>
                        
                        <p>
                            <i className="fr fi-rr-envelope relative top-0.5 pr-1.5"></i>
                             talk@techcreek.ng
                        </p>

                    </div>

                    <div className="space-y-2">

                        <h4 className="header">
                            Subscribe to our newsletter. We won't spam you, we promise!
                        </h4>

                        <form className="flex gap-2" method="POST">

                            <label className="rounded-md w-full" htmlFor="newsletter-input">
                                <input className="rounded-md w-full input" placeholder="Email address" type="email" id="newsletter-input" required />
                            </label>

                            <button className="bg-blue-700 px-4 rounded-md hover:bg-default-blue" type="submit">
                                Subscribe
                            </button>

                        </form>

                    </div>

                </div>

            </div>

            <div className="text-center py-4 px-2">
                &copy; {new Date().getFullYear()}. Created with all the <i className="fr fi-rr-heart relative top-[0.2rem] text-red-500"></i> in the world by <Link href="https://web.facebook.com/IamWisdomOjimah"><a className="text-sky-400 hover:underline underline-offset-4 active:underline active:uderline-offset-4 active:text-sky-400" target="_blank" rel="noopener noreferrer">Wisdom Ojimah</a></Link>
            </div>

            <button className="bg-default-blue/70 text-white rounded-lg py-2 px-3 fixed right-4 bottom-4 backdrop-blur" type="button" araia-label="Scroll back to top button" title="Scroll to top">
                <i className="fr fi-rr-angle-up"></i>
            </button>

        </footer>
    );
}

export default Footer;