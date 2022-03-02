import AboutHero from  "./about/_aboutHero";
import AboutBriefInfo from  "./about/_aboutBriefIntro";
import AboutImageGallery from  "./about/_aboutGallery";
import OurTeam from  "./about/_ourTeam";

const AboutComponent = () => {
    return (
		<>
			<AboutHero />

			<main className="py-12 px-[5%]">
				
                <AboutBriefInfo  />

                <OurTeam  />

                <AboutImageGallery  />

			</main>
		</>
	);
}

export default AboutComponent;