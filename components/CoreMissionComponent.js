import Image from "next/image";

const CoreMission = () => {
    return (
        <>
            <h2 className="header text-3xl">
                Core Mission
            </h2>
            <p>
                As an organization, we are proplled to do what we do . . .
            </p>

            <div className="grid gap-4 items-start lg:grid-cols-12 mt-8">

                <div className="bg-slate-800 pb-4 grid gap-4 rounded-md lg:col-span-4">

                    <div className="relative rounded-t-md h-[200px] w-full">
                        <Image className="w-full aspect-square  rounded-t-md" src="/img/learn.jpg" alt="Mission: Learn" layout="fill" objectFit="cover" objectPosition="center" />
                    </div>

                    <div className="grid gap-1 px-4">
                        
                        <h3 className="header text-xl">
                            Learn
                        </h3>

                        <p>
                            We provide avenues for continuous
                            development for learners to acquire
                            new skills and practical competences
                            to meet the ever evolving needs of mankind.
                        </p>

                    </div>

                </div>

                <div className="bg-slate-800 pb-4 grid gap-4 rounded-md lg:col-span-4">

                    <div className="relative rounded-t-md h-[200px] w-full">
                        <Image className="w-full aspect-square  rounded-t-md" src="/img/create.png" alt="Mission: Create" layout="fill" objectFit="cover" objectPosition="center" />
                    </div>

                    <div className="grid gap-1 px-4">

                        <h3 className="header text-xl">
                            Create
                        </h3>

                        <p>
                            We serve as a nursery providing the
                            right Eco-System for Start-Ups and
                            #individuals in Port Harcourt and it’s
                            evirons, actively developing solutions
                            to meet local needs.
                        </p>

                    </div>

                </div>

                <div className="bg-slate-800 pb-4 grid gap-4 rounded-md lg:col-span-4">

                    <div className="relative rounded-t-md h-[200px] w-full">
                        <Image className="w-full aspect-square  rounded-t-md" src="/img/connect.jpg" alt="Mission: Connect" layout="fill" objectFit="cover" objectPosition="center" />
                    </div>

                    <div className="grid gap-1 px-4">

                        <h3 className="header text-xl">
                            Connect
                        </h3>

                        <p>
                            We serve as a nursery providing
                            the right Eco-System for Start-Ups
                            and individuals in Port Harcourt and
                            it’s evirons, actively developing
                            solutions to meet local needs.
                        </p>

                    </div>

                </div>

            </div>
        </>
    );
}

export default CoreMission;