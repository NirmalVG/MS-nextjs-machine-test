import Image from "next/image";
import logo from "../../public/assets/logo.png";

const Header = () => {
    return (
        <header className="absolute top-0 left-0 w-full grid grid-cols-1 md:grid-cols-3 h-[106px] items-center px-6 md:px-12 bg-transparent z-10">
            <div className="flex items-center justify-start md:col-span-1">
                <Image
                    src={logo}
                    width={150}
                    height={50}
                    alt="logo"
                    className="object-cover"
                />
            </div>
            <div className="flex md:items-center md:justify-center md:col-span-1 mt-4 md:mt-0">
                <ul className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                    <li className="text-[16px] font-medium text-white">
                        About Us
                    </li>
                    <li className="text-[16px] font-medium text-white">
                        How We Help
                    </li>
                    <li className="text-[16px] font-medium text-white">
                        Pricing
                    </li>
                    <li className="text-[16px] font-medium text-white">
                        Portfolios
                    </li>
                    <li className="text-[16px] font-medium text-white">
                        Testimonials
                    </li>
                    <li className="text-[16px] font-medium text-white">
                        Insights
                    </li>
                </ul>
            </div>
            <div className="flex items-center md:justify-end justify-start md:col-span-1 mt-6 md:mt-0">
                <button className="border bg-white text-black px-4 py-2 w-[200px] rounded">
                    <p className="text-[16px] font-semibold">Contact Us</p>
                </button>
            </div>
        </header>
    );
};

export default Header;
