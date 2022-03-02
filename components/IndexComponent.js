import HeroComponent from "./index/HeroComponent";
import CoreMission from "./index/CoreMissionComponent";
import IndexBlog from "./index/IndexBlog";

const IndexComponent = () => {
    return (
        <>
            <HeroComponent />

            <main className="py-12 px-[5%]">

                <CoreMission />

                <IndexBlog />

            </main>     
        </>
    );
}

export default IndexComponent;