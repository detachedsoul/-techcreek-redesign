import ContactHero from  "./contact/_contactHero";
import ContactForm from  "./contact/_contactForm";

const ContactComponent = () => {
    return (
		<>
			<ContactHero />

			<main className="my-12 px-[5%]">
				
                <div className="grid gap-4">

                    <ContactForm />

                </div>

			</main>
		</>
	);
}

export default ContactComponent;