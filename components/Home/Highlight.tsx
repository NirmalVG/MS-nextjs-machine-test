const Highlight = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 m-6 md:m-12 bg-highlight-pattern items-center bg-cover bg-center min-h-screen justify-items-center">
            <div className="text-center md:text-left">
                <h2 className="text-[32px] md:text-[54px] font-light">
                    <span className="font-medium">Lorem Ipsum</span>
                    <br /> dolor sit consectetur
                </h2>
                <p className="text-[16px] md:text-[20px] font-normal mt-4 md:mt-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis velit nulla. In hac habitasse platea dictumst.
                    Fusce non venenatis velit. Proin luctus malesuada mauris
                    vitae mattis. Pellentesque iaculis elit lorem, et varius
                    ipsum dictum. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Donec mattis velit nulla. In hac habitasse
                    platea dictumst. Fusce non venenatis velit. Proin luctus
                    malesuada mauris vitae mattis. Pellentesque iaculis elit
                    lorem, et varius ipsum dictum.
                </p>
            </div>
            <div className="h-[500px] w-full md:w-[400px] bg-white rounded-xl mb-12 mt-8 md:mt-0 p-5">
                <h2 className="text-[24px] md:text-[29px] font-medium">
                    Lorem Ipsum?
                </h2>
                <div className="pt-[350px] md:pt-64 bg-education-pattern bg-cover bg-center pl-4 md:pl-10">
                    <h4 className="text-[20px] md:text-[29px] font-medium">
                        Lorem Ipsum
                    </h4>
                    <p className="text-[14px] md:text-[16px] font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis velit nulla. In hac habitasse platea
                        dictumst. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Highlight;
