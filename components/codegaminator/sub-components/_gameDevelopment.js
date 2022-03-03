import Link from "next/link";

const GameDevelopment = () => {
    return (
        <div className="bg-blue-500 text-white p-4 rounded-md space-y-3 lg:w-1/2 lg:ml-auto lg:rounded-r-none lg:p-8">

            <h3 className="header text-white text-xl">
                Game Development
            </h3>

            <div className="space-y-2">

                <p>
                    This course is designed to teach the rudiments of game development and design from beginner to intermediate level. The course will cover basic to advanced techniques in development and optimization, glancing through different game types and mechanics. Most of the course will be handled within Unity 5 game development framework. Art will be designed in Adobe Photoshop. For deployment to Android phones, we will be using Android Studio.
                </p>

                <p>
                    Students of this course should be able to build and optimize simple games within Unity, deploy games to PC and Android OS, know all the basic elements of game design which would help when migrating from one platform to another.
                </p>

            </div>

            <Link href="/">
                <a className="inline-block px-4 py-2 rounded-md bg-slate-800 hover:bg-slate-900">
                    Enroll Now
                </a>
            </Link>

        </div>
    );
}

export default GameDevelopment;