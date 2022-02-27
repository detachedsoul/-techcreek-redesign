import Head from "next/head";
import HeroComponent from "../components/HeroComponent";
import CoreMission from "../components/CoreMission";

const Index = () => {
    return (
        <>
            <Head>
                <title>TechCreek &mdash; Home</title>
            </Head>

            <HeroComponent />

            <main className="py-12 px-[5%]">

                <CoreMission />

            </main>
        </>
    );
}

export default Index;