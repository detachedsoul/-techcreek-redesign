import Head from "next/head";
import IndexComponent from "../components/IndexComponent";

const Index = () => {
    return (
        <>
            <Head>
                <title>TechCreek &mdash; Home</title>
            </Head>

            <IndexComponent />
        </>
    );
}

export default Index;