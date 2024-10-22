import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer>
            {/* Top Section */}
            <section className="h-auto lg:h-[450px] bg-footer-banner bg-cover bg-center flex flex-col lg:flex-row justify-between items-center px-6 lg:px-12 text-white relative">
                <div className="absolute inset-0 bg-[#002A3ACC] opacity-80"></div>
                <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left lg:w-2/3 space-y-6 p-6">
                    <h2 className="text-[28px] lg:text-[46px] font-medium">
                        Let’s work Together
                    </h2>
                    <p className="lg:w-[771px]">
                        Lorem ipsum dolor sit amet consectetur. Mattis cursus
                        nulla ornare tristique euismod arcu tristique nisl id
                        nibh. Viverra feugiat viverra. Lorem ipsum dolor sit
                        amet consectetur.
                    </p>
                </div>
                <div className="relative z-10 mt-6 lg:mt-0">
                    <button className="bg-white text-[#002A3A] font-semibold px-6 py-2 rounded-lg">
                        View Vacancies
                    </button>
                </div>
            </section>

            {/* Bottom Section */}
            <section className="bg-[#002A3A] text-white">
                {/* Quick Links */}
                <div className="flex flex-col lg:flex-row p-6 lg:p-12 space-y-6 lg:space-y-0 lg:space-x-12">
                    <div className="flex-1">
                        <h2 className="text-lg font-semibold">Quick Links</h2>
                    </div>
                    <div className="flex-1">
                        <ul className="flex flex-wrap lg:flex-nowrap lg:space-x-10 space-y-4 lg:space-y-0 text-center lg:text-left">
                            <li>
                                <Link href="#">Home</Link>
                            </li>
                            <li>
                                <Link href="#">About Us</Link>
                            </li>
                            <li>
                                <Link href="#">Pricing</Link>
                            </li>
                            <li>
                                <Link href="#">Portfolios</Link>
                            </li>
                            <li>
                                <Link href="#">Insights</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Contact & Info Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 border-t-2 border-[#FFFFFF1C] py-6 lg:py-10 px-6 lg:px-12">
                    {/* Left Box */}
                    <div className="border-2 border-[#FFFFFF1C] p-6">
                        <div className="bg-[#083040] p-4 mb-4">
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="bg-[#083040] p-4 mb-4">
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="bg-[#083040] p-4 mb-4">
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="bg-[#083040] p-4">
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>

                    {/* Middle Box */}
                    <div className="border-2 border-[#FFFFFF1C] p-6">
                        <div className="bg-[#083040] p-4 mb-4">
                            <p>Lorem</p>
                        </div>
                        <div className="bg-[#083040] p-4 mb-4">
                            <p>Lorem</p>
                        </div>
                        <div className="bg-[#083040] p-4 mb-4">
                            <p>Consectetur</p>
                        </div>
                        <div className="bg-[#083040] p-4">
                            <p>Efficitur</p>
                        </div>
                    </div>

                    {/* Right Box (Contact Us) */}
                    <div className="border-2 border-[#FFFFFF1C] p-6">
                        <h2 className="text-[22px] lg:text-[26px] font-medium pb-3">
                            Contact Us
                        </h2>
                        <p className="text-[16px] pb-3 font-normal">
                            Lorem Ipsum, Iso lorem,
                            <br />
                            Iso Lorem Posum
                        </p>
                        <p className="text-[16px] font-semibold">
                            +91 00000 00000
                        </p>
                        <p className="text-[16px] font-semibold mb-3">
                            info@demo.com
                        </p>
                        <p className="text-[16px] font-semibold mb-3">
                            Follow us on
                        </p>
                        <div className="flex flex-row gap-3">
                            <div className="bg-[#23415A] p-2 rounded">
                                <FaFacebookF />
                            </div>
                            <div className="bg-[#23415A]  p-2 rounded">
                                <FaXTwitter />
                            </div>
                            <div className="bg-[#23415A] p-2 rounded">
                                <FaLinkedinIn />
                            </div>
                            <div className="bg-[#23415A] p-2 rounded">
                                <FaYoutube />
                            </div>
                            <div className="bg-[#23415A] p-2 rounded">
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className=" text-sm mt-6 ml-12 lg:mt-12 py-4 lg:py-6 border-t border-[#FFFFFF1C]">
                    <p>&copy;2024 Demo, All rights reserved.</p>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
