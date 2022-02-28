import Head from "next/head";
import AboutComponent from "../components/AboutComponent";

const About = () => {
    return (
        <>
            <Head>
                <title>TechCreek &mdash; About</title>
            </Head>

            <AboutComponent />
        </>
    );
}

export default About;