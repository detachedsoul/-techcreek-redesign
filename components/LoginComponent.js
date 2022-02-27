import Link from "next/link";

const LoginComponent = () => {
    return (
        <div className="grid place-content-center min-h-screen py-8 px-4">

            <form className="bg-slate-800 p-4 rounded-md space-y-8 lg:px-8">

                <div className="text-center mx-auto w-[90%]">

                    <h3 className="text-center header text-2xl">
                        Sign In
                    </h3>

                    <p>
                        You need to sign in to access your dashboard
                    </p>

                </div>

                <div className="flex flex-col gap-4">

                    <label className="flex items-center bg-white rounded-md" htmlFor="username">

                        <span className="rounded-l-md text-slate-900 pl-4">
                            <i className="fr fi-rr-user relative top-0.5"></i>
                        </span>

                        <input className="w-full rounded-r-md input pl-2" type="text" placeholder="Username or email" name="username" id="username" />

                    </label>

                    <label className="flex items-center bg-white rounded-md" htmlFor="password">

                        <span className="rounded-l-md text-slate-900 pl-4">
                            <i className="fr fi-rr-lock relative top-0.5"></i>
                        </span>

                        <input className="w-full rounded-r-md input pl-2" type="password" placeholder="Password" name="password" id="password" />

                    </label>

                    <div className="flex flex-wrap gap-2 items-center justify-between lg:gap-8">

                        <label className="flex gap-1 items-center cursor-pointer" htmlFor="remember-me">

                            <input className="form-checkbox rounded-md p-2 text-slate-900 ring-offset-slate-700 ring-offset-2 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-900" type="checkbox" name="remember-me" id="remember-me" />
                            
                            Remember me

                        </label>

                        <Link href="/forgot-password">
                            <a className="text-sky-400 hover:underline hover:underline-offset-4 active:underline active:underline-offset-4">
                                Forgot Pasword
                            </a>
                        </Link>

                    </div>

                    <button className="bg-blue-700 py-2 w-full px-4 text-white rounded-md hover:bg-default-blue" type="submit">
                        Login
                    </button>

                </div>

                <p>
                    Don't have an account yet? <Link href="/register"><a className="text-sky-400 hover:underline hover:underline-offset-4 active:underline active:underline-offset-4">Create one</a></Link>
                </p>

            </form>

        </div>
    );
}
 
export default LoginComponent;