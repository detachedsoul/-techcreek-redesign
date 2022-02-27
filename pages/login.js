import Head from "next/head";
import LoginComponent from "../components/LoginComponent";

const Login = () => {
    return (
        <>
            <Head>
                <title>
                    TechCreek &mdash; Login
                </title>
            </Head>
            <LoginComponent />
        </>
    );
}
 
export default Login;