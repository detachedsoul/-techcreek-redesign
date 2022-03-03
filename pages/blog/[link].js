import { blogPosts } from "../../components/index/_blogPosts";
import Head from "next/head";
import Image from "next/image";

const BlogPost = ({ post }) => {
    return (
        <>
            <Head>
                <title>
                    { post.map(content => content.title) }
                </title>
            </Head>
            {
                post.map(content  => (
                    <div className="my-16 px-[5%] grid gap-4 lg:w-[70%] lg:mx-auto"  key={content.id}>
                        
                        <div className="relative rounded-md h-[200px] lg:h-[350px] w-full">
                            <Image className="w-full aspect-square rounded-md" src={content.img} alt={content.title } layout="fill" objectFit="cover" objectPosition="center" title={ content.title } />
                        </div>

                        <div className="space-y-4 px-4">
                            
                            <div className="space-y-2">

                                <div className="flex flex-wrap items-center gap-y-2 gap-x-4">

                                    <p>
                                        <i className="fr fi-rr-calendar relative top-0.5 pr-1"></i> { content.date }
                                    </p>

                                    <p>
                                        <i className="fr fi-rr-user relative top-0.5 pr-1"></i> { content.author }
                                    </p>

                                </div>

                                <h1 className="header text-xl lg:text-3xl">
                                    { content.title }
                                </h1>

                            </div>

                            <div className="space-y-2">

                                <p>
                                    { content.body }
                                </p>

                            </div>

                        </div>

                    </div>
                ))
            }

        </>
    );
}

export const getStaticProps = async ({ params: { link } }) => {

    const post = blogPosts.filter(post => post.link === link);

    return {
        props: {
            post
        }
    }
}

export const getStaticPaths = async () => {
    const paths = blogPosts.map(({ link }) => ({ params: { link: link } }));

    return {
        paths,
        fallback: false
    }
}

export default BlogPost;