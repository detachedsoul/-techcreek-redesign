import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "./_blogPosts";

const IndexBlog = () => {
    return (
        <div className="my-16 space-y-8 mb-0">

            <div className="text-center">
				<h2 className="header text-2xl">
                    Latest Blog Posts
                </h2>

				<p>
                    Get to know the recent happening's in the Creek
				</p>
			</div>

            <div className="grid gap-4 items-start lg:grid-cols-12 mt-8">

                {
                    blogPosts.map(blogPost => (
                        <div className="bg-slate-800 pb-4 grid gap-4 space-y-2 rounded-md lg:col-span-4" key={blogPost.id}>

                            <div className="relative rounded-t-md h-[200px] w-full">
                                <Image className="w-full aspect-square rounded-t-md" src={ blogPost.img } alt={ blogPost.title } layout="fill" objectFit="cover" objectPosition="center" title={blogPost.title} />
                            </div>

                            <div className="grid gap-8 px-4">

                                <div className="space-y-1.5">

                                    <h3 className="header text-xl">
                                        <Link href={`/blog/${blogPost.link}`}>
                                            <a className="text-sky-400 underline-offset-4 hover:underline active:underline hover:text-default-blue active:text-default-blue">
                                                { blogPost.title }
                                            </a>
                                        </Link>
                                    </h3>

                                    <p>
                                        { blogPost.excerpt }
                                    </p>

                                </div>

                                <div className="flex items-center gap-2">

                                    <div className="rounded-full h-10 w-10 relative">
                                        <Image className="w-full h-full rounded-full" src={ blogPost.authorImg } alt={ blogPost.author } layout="fill" objectFit="cover" objectPosition="center" title={ blogPost.author } />
                                    </div>

                                    <div>

                                        <h3 className="header">
                                            { blogPost.author }
                                        </h3>

                                        <p>
                                            { blogPost.date } &bull; { blogPost.minsToRead } min read
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>
                    ))
                }

            </div>

        </div>
    );
}

export default IndexBlog;