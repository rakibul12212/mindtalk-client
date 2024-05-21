import React from 'react';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Nav from '../Layout/Nav/Nav';
import Footer from '../Layout/Footer/Footer';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

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
          path: "/nav",
          element: <Nav/>,
        },
        {
          path: "/footer",
          element: <Footer/>,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage/>,
    },
  ]);
  

export default router;