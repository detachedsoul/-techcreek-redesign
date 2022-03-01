import AboutHero from  "./about/_aboutHero";
import AboutBriefInfo from  "./about/_aboutBriefIntro";
import AboutImageGallery from  "./about/_aboutGallery";

const AboutComponent = () => {
    return (
		<>
			<AboutHero />

			<main className="py-12 px-[5%]">
				
                <AboutBriefInfo  />

                <AboutImageGallery  />

			</main>
		</>
	);
}

export default AboutComponent;