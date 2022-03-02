import { useEffect, useRef } from "react";
import Link from "next/link";
import Script from "next/script";

const Footer = () => {

    // Create a ref to the scroll to top button
    const toTopBtn = useRef();

    const scrollToTop = () => {
        scrollTo({
            top: 0,
            right: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {

        // Show or hid the scroll to top button based on user's scrolling
        window.onscroll = () => {
            if (document.documentElement.scrollTop >= 300 || document.body.scrollTop >= 300) {
                toTopBtn.current.classList.remove('translate-x-[150%]');
            } else {
                toTopBtn.current.classList.add('translate-x-[150%]');
            }
        };

    }, []);


    return (
        <>

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
                                    <input className="rounded-md w-full input placeholder:text-slate-900 text-slate-900" placeholder="Email address" type="email" id="newsletter-input" required />
                                </label>

                                <button className="bg-blue-700 px-4 rounded-md hover:bg-default-blue" type="submit">
                                    Subscribe
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

                <div className="text-center py-4 px-2">
                    &copy; 2022 &mdash; {new Date().getFullYear()}. Created with all the <i className="fr fi-rr-heart relative top-[0.2rem] text-red-500"></i> in the world by <Link href="https://web.facebook.com/IamWisdomOjimah"><a className="text-sky-400 hover:underline underline-offset-4 active:underline active:uderline-offset-4 active:text-sky-400" target="_blank" rel="noopener noreferrer">Wisdom Ojimah</a></Link>
                </div>

            </footer>

            <button className="bg-default-blue/70 transition ease-in-out duration-700 text-white rounded-lg py-2 px-3 fixed right-4 translate-x-[150%] bottom-4 backdrop-blur" type="button" aria-label="Scroll back to top button" title="Scroll to top" onClick={scrollToTop} ref={toTopBtn}>
                <i className="fr fi-rr-angle-up"></i>
            </button>

            <Script src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js" strategy="lazyOnload" defer />

        </>
    );
}

export default Footer;