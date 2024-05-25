
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';
import Container from '../Component/ui/Container';

const Main = () => {
    return (
        
        <div>
            <Nav />
            <Container>
              <Outlet/>
            </Container>
            <Footer/>

        </div>
        
    );
};

export default Main;