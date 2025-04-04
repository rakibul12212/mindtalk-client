import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import Container from "../Component/ui/Container";
// import Container from '../Component/ui/Container';

const Main = () => {
  return (
    <Container>
      <Nav />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Main;
