import CodegaminatorHero from "./codegaminator/_codegaminatorHero";
import CodegaminatorAbout from "./codegaminator/_codegaminatorAbout";
import CodegaminatorCourses from "./codegaminator/_codegaminatorCourses";

const CodegaminatorComponent = () => {
    return (
        <>
			<CodegaminatorHero />

			<main className="my-12 space-y-16 px-[5%] lg:px-0">

                <CodegaminatorAbout />

                <CodegaminatorCourses />

			</main>
		</>
    );
}
 
export default CodegaminatorComponent;