import Link from "next/link";

const Animation = () => {
    return (
        <div className="bg-yellow-600 text-white p-4 rounded-md space-y-3 lg:w-1/2 lg:ml-auto lg:rounded-r-none lg:p-8">

            <h3 className="header text-white text-xl">
                Animation
            </h3>

            <div className="space-y-2">

                <p>
                    This course is designed for people interested in pursuing a career in 2D Animation, as well as those seeking to enhance their animation skills in order to produce their own animated content and/or work with an animated video production team.
                </p>

                <p>
                    Participants will be taught how to animate using Moho (also known as Anime Studio), an incredibly versatile animation programme. They will also be taught the principles of animation and basic cinematography that will ensure their ability to produce outstanding animations, on their own and within a production team. Students of this course should be able to produce a short-animated video, as part of the production team.
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

export default Animation;