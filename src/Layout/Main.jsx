
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Nav />
            <Outlet/>
            <Footer/>

        </div>
    );
};

export default Main;