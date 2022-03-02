import Image from "next/image";

const AboutBriefInfo = () => {
    return (
        <div className="grid gap-4 items-center lg:grid-cols-12 lg:gap-8">
            <div className="h-[200px] relative rounded-md w-full lg:col-span-6 lg:h-full">
                <Image
                    className="w-full aspect-square rounded-md"
                    src="/img/learn.jpg"
                    alt="About the Creek"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
            </div>

            <div className="space-y-3 lg:col-span-6">
                <h2 className="header text-2xl">
                    Welcome to the {`<Creek/>`}
                </h2>

                <div className="space-y-2">
                    <p>
                        Tech Creek is a habitat for the teeming
                        population of youths making sense out of their
                        lives with their digital skills and
                        competencies, and actively involved in the
                        development of the ‘new economy’ from Rivers
                        State.
                    </p>

                    <p>
                        Our culture is at the heart of everything we do.
                        It reinforces our core values which create the
                        perfect picture of our existence as the melting
                        pot for the development of tech capacities and
                        opportunities in the region.
                    </p>

                    <p>
                        “Tech Creek is the pilot for a new set of creeks
                        that would house creativity in design and system
                        development in the Niger Delta.”
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default AboutBriefInfo;