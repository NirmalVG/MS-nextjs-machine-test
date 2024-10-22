import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";

const Insights = () => {
    return (
        <section className="m-4 sm:m-12">
            <div className="flex flex-row justify-between mb-6">
                <div>
                    <h2 className="text-[32px] sm:text-[54px] font-light">
                        Latest Insights
                    </h2>
                </div>
                <div>
                    <button className="bg-[#EDEDED] rounded-full p-2 sm:p-4 mr-2">
                        <FaCaretLeft />
                    </button>
                    <button className="bg-[#EDEDED] rounded-full p-2 sm:p-4">
                        <FaCaretRight />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-insight-customer bg-cover bg-center h-[300px] sm:h-[400px] md:h-[584px] rounded-2xl pt-[180px] pl-4 sm:pt-[350px] sm:pl-6 text-white">
                    <p className="text-[14px] sm:text-[16px] font-normal">
                        21 March 2023
                    </p>
                    <h4 className="text-[20px] sm:text-[28px] font-medium">
                        dictumst. Fusce non venenatis velit. Proin luctus
                        malesuada mauris vitae mattis
                    </h4>
                    <p className="text-[16px] sm:text-[20px] font-medium">
                        Read More
                    </p>
                </div>
                <div className="bg-insight-client bg-cover bg-center h-[300px] sm:h-[400px] md:h-[584px] rounded-2xl pt-[180px] pl-4 sm:pt-[350px] sm:pl-6 text-white">
                    <p className="text-[14px] sm:text-[16px] font-normal">
                        21 March 2023
                    </p>
                    <h4 className="text-[20px] sm:text-[28px] font-medium">
                        dictumst. Fusce non venenatis velit. Proin luctus
                        malesuada mauris vitae mattis
                    </h4>
                    <p className="text-[16px] sm:text-[20px] font-medium">
                        Read More
                    </p>
                </div>
                <div className="bg-insight-work bg-cover bg-center h-[300px] sm:h-[400px] md:h-[584px] rounded-2xl pt-[180px] pl-4 sm:pt-[350px] sm:pl-6 text-white">
                    <p className="text-[14px] sm:text-[16px] font-normal">
                        21 March 2023
                    </p>
                    <h4 className="text-[20px] sm:text-[28px] font-medium">
                        dictumst. Fusce non venenatis velit. Proin luctus
                        malesuada mauris vitae mattis
                    </h4>
                    <p className="text-[16px] sm:text-[20px] font-medium">
                        Read More
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Insights;
