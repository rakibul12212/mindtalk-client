
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Nav from '../Layout/Nav/Nav';
import Footer from '../Layout/Footer/Footer';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Login from '../Pages/RegisterPage/Login';
import Signup from '../Pages/RegisterPage/Signup';
import AboutUs from '../Pages/AboutUs/AboutUs';
import Specialization from '../Pages/Specialization/Specialization';
import Contact from '../Pages/contact/Contact';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/about",
          element: <AboutUs/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
        {
          path: "/services",
          element: <Specialization/>,
        },
        {
          path: "/nav",
          element: <Nav/>,
        },
        {
          path: "/footer",
          element: <Footer/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/signup",
          element: <Signup/>,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage/>,
    },
  ]);
  

export default router;