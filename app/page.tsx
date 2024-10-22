import AboutCEO from "@/components/Home/AboutCEO";
import Banner from "@/components/Home/Banner";
import Details from "@/components/Home/Details";
import Facilities from "@/components/Home/Facilities";
import About from "@/components/Home/About";
import Testimonials from "@/components/Home/Testimonials";
import Highlight from "@/components/Home/Highlight";
import Insights from "@/components/Home/Insights";
import Footer from "@/components/Home/Footer";

const HomePage = () => {
    return (
        <main>
            <Banner />
            <AboutCEO />
            <Details />
            <Facilities />
            <About />
            <Testimonials />
            <Highlight />
            <Insights />
            <Footer />
        </main>
    );
};

export default HomePage;
