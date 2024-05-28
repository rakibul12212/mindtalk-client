
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import OurMission from '../Mission/OurMission';
import Offer from '../Offer/Offer';
import Specialization from '../Specialization/Specialization';
import Contact from '../contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutUs/>
            <Specialization/>
            <Offer/>
            <OurMission/>
            <Contact/>
        </div>
    );
};

export default Home;