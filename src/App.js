import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routing from "./routing";
import "antd/dist/antd.css";
import AuthContextProvider from "./contexts/authContext";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./contexts/cartContext";
import ProductsContextProvider from "./contexts/productsContext";
import FavoriteContextProvider from "./contexts/favoriteContext";
import LikesContextProvider from "./contexts/likesContext";
import CommentContextProvider from "./contexts/CommentContext";

const App = () => {
  return (
    <AuthContextProvider>
      <CommentContextProvider>
        <LikesContextProvider>
          <FavoriteContextProvider>
            <CartContextProvider>
              <ProductsContextProvider>
                <BrowserRouter>
                  <Header />
                  <Routing />
                  <Footer />
                </BrowserRouter>
              </ProductsContextProvider>
            </CartContextProvider>
          </FavoriteContextProvider>
        </LikesContextProvider>
      </CommentContextProvider>
    </AuthContextProvider>
  );
};

export default App;
