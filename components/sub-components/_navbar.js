import { useContext } from "react";
import NavLinks from "./_navLinks";
import { Context } from "../Context";

const Navbar = () => {

    const { navIsActive } = useContext(Context);

    return (
        <nav
            className={`absolute transition ease-in-out duration-700 bg-slate-900 w-full top-full left-0 right-0 bottom-0 border-t border-slate-800 overflow-y-auto overscroll-none h-[calc(100vh-100%)] ${
                navIsActive ? "scale-100" : "scale-0"
                } lg:static lg:[overflow:unset] lg:scale-100 lg:border-none lg:bg-transparent lg:w-auto lg:h-auto`}>
            
            <NavLinks />
            
        </nav>
    );
}

export default Navbar;