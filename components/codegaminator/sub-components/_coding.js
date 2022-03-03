import Link from "next/link";

const Coding = () => {
    return (
        <div className="bg-green-600 text-white p-4 rounded-md space-y-3 lg:w-1/2 lg:rounded-l-none lg:p-8">

            <h3 className="header text-white text-xl">
                Coding
            </h3>

            <div className="space-y-2">

                <p>
                    Coding provides a doorway into the world of programming, software development and website development. It focuses on the principles of software design and development on different platforms with more emphasis on web and mobile application development... Students of this course will understand the concepts of programming using conventional programming languages as well as website development.
                </p>

                <p>
                    The course is designed for novices in programming. However, intermediate level computer skills are required, and knowledge of HTML and CSS would be an added advantage. Students of this course should be able to Understand the core concepts of programming in any programming language, using PHP. Develop static and dynamic web applications using HTML, CSS, Javascripts and PHP.
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

export default Coding;