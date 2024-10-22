import React from "react";

const Details = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-16 gap-8 md:gap-12 mt-6 md:mt-12 mb-6 md:mb-12">
            <div>
                <h2 className="text-[32px] md:text-[54px] font-normal leading-tight">
                    Lorem ipsum dolor sit amet,
                    <br /> consectetur
                </h2>
                <p className="text-[16px] md:text-[20px] font-normal mt-4 md:mt-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis velit nulla. In hac habitasse platea dictumst.
                    Fusce non venenatis velit. Proin luctus malesuada mauris
                    vitae mattis. Pellentesque iaculis elit lorem, et varius
                    ipsum dictum a. Etiam congue non sem et efficitur. Donec in
                    dolor nec tellus iaculis sagittis. Sed sit amet aliquam
                    augue. Praesent auctor, purus non convallis accumsan, nibh
                    odio gravida felis, vitae mollis massa lectus a neque.
                    Mauris mollis elit quis iaculis iaculis. Vestibulum molestie
                    nisl eget aliquet scelerisque. Vivamus efficitur dui eget
                    velit interdum, non dapibus nisi fringilla. Mauris fermentum
                    venenatis volutpat. Quisque efficitur ultricies erat eget
                    rutrum. Phasellus feugiat quam eget est dapibus, non
                    eleifend justo fermentum. Sed et commodo arcu, id euismod
                    dui.
                </p>
            </div>
            <div className="flex flex-col gap-6 md:gap-10 justify-center">
                <div className="border-l-2 border-black pl-6 md:pl-8">
                    <h4 className="text-[20px] md:text-[26px] font-medium">
                        Lorem ipsum
                    </h4>
                    <p className="text-[16px] md:text-[18px] font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis velit nulla. In hac habitasse platea
                        dictumst. Fusce non venenatis velit. Proin luctus
                        malesuada mauris vitae mattis. Pellentesque iaculis elit
                        lorem.
                    </p>
                </div>
                <div className="border-l-2 border-black pl-6 md:pl-8">
                    <h4 className="text-[20px] md:text-[26px] font-medium">
                        Lorem ipsum
                    </h4>
                    <p className="text-[16px] md:text-[18px] font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis velit nulla. In hac habitasse platea
                        dictumst. Fusce non venenatis velit. Proin luctus
                        malesuada mauris vitae mattis. Pellentesque iaculis elit
                        lorem.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Details;
