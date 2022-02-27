import Link from "next/link";

const SignUpComponent = () => {
    return (
        <div className="grid place-content-center min-h-screen py-8 px-4">

            <form className="bg-slate-800 p-4 rounded-md space-y-8 lg:px-8">

                <div className="text-center mx-auto w-[90%]">

                    <h3 className="text-center header text-2xl">
                        Sign Up
                    </h3>

                    <p>
                        Create a free account today
                    </p>

                </div>

                <div className="grid gap-4 lg:grid-cols-12">

                    <label className="flex items-center bg-white rounded-md lg:col-span-6" htmlFor="name">

                        <span className="rounded-l-md text-slate-900 pl-4">
                            <i className="fr fi-rr-user relative top-0.5"></i>
                        </span>

                        <input className="w-full rounded-r-md input pl-2" type="text" placeholder="Full name" name="name" id="name" />

                    </label>

                    <label className="flex items-center bg-white rounded-md lg:col-span-6" htmlFor="username">

                        <span className="rounded-l-md text-slate-900 pl-4">
                            <i className="fr fi-rr-user relative top-0.5"></i>
                        </span>

                        <input className="w-full rounded-r-md input pl-2" type="text" placeholder="Username" name="username" id="username" />

                    </label>

                    <label className="flex items-center bg-white rounded-md lg:col-span-6" htmlFor="email">

                        <span className="rounded-l-md text-slate-900 pl-4">
                            <i className="fr fi-rr-envelope relative top-0.5"></i>
                        </span>

                        <input className="w-full rounded-r-md input pl-2" type="email" placeholder="Email address" name="email" id="email" />

                    </label>

                    <label className="flex items-center bg-white rounded-md lg:col-span-6" htmlFor="password">

                        <span className="rounded-l-md text-slate-900 pl-4">
                            <i className="fr fi-rr-lock relative top-0.5"></i>
                        </span>

                        <input className="w-full rounded-r-md input pl-2" type="password" placeholder="Password" name="password" id="password" />

                    </label>

                    <div className="lg:col-span-12">

                        <label className="flex gap-1 items-center cursor-pointer" htmlFor="accept-terms">

                            <input className="form-checkbox rounded-md p-2 text-slate-900 ring-offset-slate-700 ring-offset-2 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-900" type="checkbox" name="accept-terms" id="accept-terms" />
                            
                            Accept terms & conditions

                        </label>

                    </div>

                    <button className="bg-blue-700 py-2 w-full px-4 text-white rounded-md hover:bg-default-blue lg:col-span-12" type="submit">
                        Sign Up
                    </button>

                </div>

                <p>
                    Already have an account? <Link href="/register"><a className="text-sky-400 hover:underline hover:underline-offset-4 active:underline active:underline-offset-4">Login instead</a></Link>
                </p>

            </form>

        </div>
    );
}
 
export default SignUpComponent;