import React from 'react';
import { Route, Routes } from 'react-router';

import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';

const Routing = () => {
    let PUBLIC_ROUTES = [
        {
          link: "/",
          element: <Home />,
          id: 1,
        },
        {
          link: "/auth",
          element: <Auth />,
          id: 2,
        }
      ];
    return (
        <Routes>
            {PUBLIC_ROUTES.map((item) => (
              <Route path={item.link} element={item.element} />
            ))}
          </Routes>
    );
};

export default Routing;