import HeroComponent from "./index/HeroComponent";
import CoreMission from "./index/CoreMissionComponent";

const IndexComponent = () => {
    return (
        <>
            <HeroComponent />

            <main className="py-12 px-[5%]">

                <CoreMission />

            </main>     
        </>
    );
}

export default IndexComponent;