
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import OurMission from '../Mission/OurMission';
import Offer from '../Offer/Offer';
import Specialization from '../Specialization/Specialization';
import WhyUs from '../WhyUs/WhyUs';
import Contact from '../contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutUs/>
            <Specialization/>
            <Offer/>
            <OurMission/>
            <WhyUs/>
            <Contact/>
        </div>
    );
};

export default Home;