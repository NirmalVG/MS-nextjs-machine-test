const About = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-6 md:m-12 items-center">
            <div className="md:border-r-4 pl-6 md:pl-8 lg:pl-16">
                <h2 className="text-[36px] md:text-[44px] lg:text-[54px] font-semibold">
                    8 Years
                </h2>
                <p className="text-[24px] md:text-[30px] lg:text-[34px] font-normal">
                    of Success
                </p>
            </div>
            <div className="md:border-r-4 pl-6 md:pl-12 lg:pl-16">
                <h2 className="text-[36px] md:text-[44px] lg:text-[54px] font-semibold">
                    200+
                </h2>
                <p className="text-[24px] md:text-[30px] lg:text-[34px] font-normal">
                    Members
                </p>
            </div>
            <div className="md:border-r-4 pl-6 md:pl-12 lg:pl-16">
                <h2 className="text-[36px] md:text-[44px] lg:text-[54px] font-semibold">
                    155+
                </h2>
                <p className="text-[24px] md:text-[30px] lg:text-[34px] font-normal">
                    All Over The USA
                </p>
            </div>
            <div className="pl-6 md:pl-12 lg:pl-16">
                <h2 className="text-[36px] md:text-[44px] lg:text-[54px] font-semibold">
                    200k
                </h2>
                <p className="text-[24px] md:text-[30px] lg:text-[34px] font-normal">
                    Satisfied Clients
                </p>
            </div>
        </section>
    );
};

export default About;
