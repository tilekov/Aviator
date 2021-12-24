import React from "react";
import { Navigate, Route, Routes } from "react-router";

import { useAuth } from "./contexts/authContext";

import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import EditProduct from "./components/EditProduct/EditProduct";
import DetailsProduct from "./components/DetailsProduct/DetailsProduct";
import ProductsList from "./components/ProductsList/ProductsList";
import AdminPage from "./components/AdminPage/AdminPage";
import CreditApp from "./components/CreditCard/CreditApp"
import Favorites from "./components/Favorites/Favorites";



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
    },
    {
      link: "/products",
      element: <ProductsList />,
      id: 3,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 4,
    },
    {
      link: "/product/:id",
      element: <DetailsProduct />,
      id: 5,
    },
    {
      link: "/credit",
      element: <CreditApp />,
      id: 6,
    },
    {
      link: "/favorites",
      element: <Favorites />,
      id: 6,
    },
  ];
  const ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 2,
    },
  ];
  const { user } = useAuth();
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} />
      ))}
      {user
        ? ADMIN_ROUTES.map((item) => (
            <Route
              key={item.id}
              path={item.link}
              element={
                user.email === "tilekov@gmail.com" ? (
                  item.element
                ) : (
                  <Navigate replace to="*" />
                )
              }
            />
          ))
        : null}
    </Routes>
  );
};

export default Routing;
