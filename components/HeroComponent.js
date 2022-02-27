import Link from "next/link";

const HeroComponent = () => {
    return ( 
        <div className="min-h-[70vh] grid place-content-center bg-index-hero bg-fixed bg-center bg-cover py-8 px-4 lg:px-[5%]">

            <div className="flex flex-col gap-2 lg:w-1/2 tracking-wider text-white">

                <h1 className="header text-3xl">
                    A New Way of Digital Literacy
                </h1>
                
                <p>
                    TechCreek is a habitat for the teeming population of youths making sense of their lives with their digital skills and competencies, and actively involved in the development of the ‘new economy’ from Rivers State.
                </p>

                <Link href="/">
                    <a className="bg-blue-700 ease-in-out delay-75 rounded-md py-2 px-4 w-max hover:bg-default-blue">
                        Get Started
                    </a>
                </Link>

            </div>

        </div>
    );
}
 
export default HeroComponent;