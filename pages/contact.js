import Head from "next/head";
import ContactComponent from "../components/ContactComponent";

const Contact = () => {
	return (
		<>
			<Head>
				<title>TechCreek &mdash; Contact</title>
			</Head>

			<ContactComponent />
		</>
	);
};

export default Contact;
