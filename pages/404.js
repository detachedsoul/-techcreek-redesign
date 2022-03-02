import Link from "next/link";

const _404 = () => {
    return (
        <div className="grid place-content-center min-h-screen">
            
            <div className="text-center space-y-4">

                <p className="text-rose-600 tracking-wider">
                    404 ERROR
                </p>

                <div className="space-y-1">

                    <h1 className="header text-3xl">
                        Page not found.
                    </h1>

                    <p>
                        Sorry, we couldn't find the page you're looking for.
                    </p>

                </div>

                <Link href="/">
                    <a className="text-default-blue inline-flex items-center gap-1 animate-pulse hover:text-rose-600 active:text-rose-600">
                        Go back home 
                        <i className="fr fi-rr-arrow-right relative top-1"></i>
                    </a>
                </Link>

            </div>

        </div>
    );
}

export default _404;