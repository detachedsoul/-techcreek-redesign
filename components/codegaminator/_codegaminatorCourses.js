import Animation from "./sub-components/_animation";
import Coding from "./sub-components/_coding";
import GameDevelopment from "./sub-components/_gameDevelopment";

const CodegaminatorCourses = () => {
    return (
        <div className="space-y-12">

            <div className="text-center space-y-1">
                <h2 className="header text-2xl">
                    Courses we offer
                </h2>

                <p>
                    Here's a brief summary of the different courses we offer
                </p>

            </div>

            <div className="space-y-20">

                <Animation />

                <Coding />

                <GameDevelopment />

            </div>

        </div>
    );
}

export default CodegaminatorCourses;