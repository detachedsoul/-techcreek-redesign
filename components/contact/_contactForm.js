

const ContactForm = () => {
    return (
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">

            <div className="order-2 lg:order-1 lg:border-r lg:border-r-slate-800 lg:col-span-7 lg:pr-12">

                <form className="space-y-4" method="POST">

                    <div className="grid gap-y-3 gap-x-4 lg:grid-cols-12">

                        <label
                            className="flex items-center bg-slate-800 text-slate-500 rounded-md lg:col-span-6"
                            htmlFor="name">
                            <span className="rounded-l-md pl-4">
                                <i className="fr fi-rr-user relative top-0.5"></i>
                            </span>

                            <input
                                className="rounded-r-md input pl-2 bg-slate-800"
                                type="text"
                                placeholder="Name"
                                name="name"
                                id="name" 
                                required 
                                autoComplete="off"
                            />
                        </label>

                        <label
						className="flex items-center bg-slate-800 text-slate-500 rounded-md lg:col-span-6"
						htmlFor="email">
                            <span className="rounded-l-md pl-4">
                                <i className="fr fi-rr-envelope relative top-0.5"></i>
                            </span>

                            <input
                                className="rounded-r-md input pl-2 bg-slate-800"
                                type="email"
                                placeholder="Email"
                                name="email"
                                id="email" 
                                required 
                                autoComplete="off"
                            />
                        </label>

                        <label
						className="flex items-center bg-slate-800 text-slate-500 rounded-md lg:col-span-12"
						htmlFor="subject">
                            <span className="rounded-l-md pl-4">
                                <i className="fr fi-rr-edit relative top-0.5"></i>
                            </span>

                            <input
                                className="rounded-r-md input pl-2 bg-slate-800"
                                type="text"
                                placeholder="Subject"
                                name="subject"
                                id="subject" 
                                autoComplete="off"
                            />
                        </label>

                        <label
						className="bg-slate-800 text-slate-500 rounded-md lg:col-span-12"
						htmlFor="messageContent">
                            <textarea className="input block  bg-slate-800 text-slate-500 rounded-md" name="messageContent" id="messageContent" rows="5"  placeholder="Message"></textarea>
                        </label>

                    </div>

                    <button className="bg-blue-700 py-2 w-full px-4 text-white rounded-md hover:bg-default-blue lg:col-span-12" type="submit">
                        Send Message
                        <i className="fr fi-rr-paper-plane pl-1 relative top-1"></i>
                    </button>

                </form>

            </div>

            <div className="space-y-2 lg:col-span-5 lg:order-2">

                <h3 className="header text-2xl">
                    Let's talk about everything
                </h3>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>

            </div>

        </div>
    );
}

export default ContactForm;