import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routing from "./routing";
import "antd/dist/antd.css";
import AuthContextProvider from "./contexts/authContext";
import { BrowserRouter } from "react-router-dom";


const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
      <Header />
      <Routing />
      <Footer />
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;
