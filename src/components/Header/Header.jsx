import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import "./Header.css";
import { Badge } from "antd";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Header = () => {
  const location = useLocation();
  const {
    handleLogout,
    user: { email },
  } = useAuth();
  return (
    <nav className={location.pathname === "/" ? "header_active" : "header"}>
      <div style={{width:'10vw'}}>menu</div>
      <Link to="/">
      <img
        width="110px"
        src="https://aviatorwatch.swiss/assets/template/images/logo-full.svg"
        alt="logo"
      />
      </Link>

      <div className="header-icons">
        {email ? (
          <Link to="/auth">
            <img src="" alt="" />
            <UserOutlined
              style={{ color: "white", fontSize: "30px", cursor: "pointer" }}
              onClick={handleLogout}
            />
            {/* <button className="sign-btn" onClick={handleLogout}>
              Logout
            </button> */}
          </Link>
        ) : null}
        {email ? null : (
          <Link to="/auth">
            <UserOutlined
              style={{ color: "white", fontSize: "20px", cursor: "pointer" }}
            />
            {/* <button className="sign-btn">Login</button> */}
          </Link>
        )}
        <HeartOutlined
          style={{ color: "white", fontSize: "20px", cursor: "pointer" }}
        />
        <Badge style={{ backgroundColor: "black" }} count={5}>
          <ShoppingCartOutlined
            style={{ color: "white", fontSize: "20px", cursor: "pointer" }}
          />
        </Badge>
      </div>
    </nav>
  );
};

export default Header;
