import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import "./Header.css";
import { Badge } from "antd";
import { ShoppingCartOutlined, StarOutlined } from "@ant-design/icons";
import { cartContext } from "../../contexts/cartContext";
import { favoriteContext } from "../../contexts/favoriteContext";

const Header = () => {
  const location = useLocation();
  const { getCart, cartLength } = useContext(cartContext);
  const { getFavorite, favoriteLength } = useContext(favoriteContext)
  const {
    handleLogout,
    user: { email },
  } = useAuth();
  useEffect(() => {
    getCart();
  }, []);
  useEffect(() => {
    getFavorite()
  }, [])
  return (
    <nav className={location.pathname === "/" ? "header_active" : "header"}>
      {/* <div style={{width:'10vw'}}>menu</div> */}
      <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>
        <div className="menu__box">
          <li>
            <Link className="menu__item" to="/">
              ГЛАВНАЯ
            </Link>
          </li>
          <li>
            <Link className="menu__item" to="/products">
              ЧАСЫ
            </Link>
          </li>
          <li className="menu__item">ОБ AVIATOR</li>
          <li className="menu__item">НАШИ ПАРТНЁРЫ</li>
          <li className="menu__item">ОБСЛУЖИВАНИЕ</li>
          <li className="menu__item">СВЯЗАТЬСЯ С НАМИ</li>
          <img
            style={{ marginTop: "150px" }}
            width="120px"
            src="https://aviatorwatch.swiss/assets/template/images/logo-black.svg"
            alt=""
          />
        </div>
      </div>

      <Link to="/">
        <img
          width="110px"
          src="https://aviatorwatch.swiss/assets/template/images/logo-full.svg"
          alt="logo"
        />
      </Link>

      <div className="header-icons">
        {email === "tilekov@gmail.com" ? (
          <Link style={{ color: "white", cursor: "pointer" }} to="/admin">
            АДМИН
          </Link>
        ) : null}
        <Link to="/favorites">
          <Badge style={{ backgroundColor: "black" }} count={+favoriteLength}>
            <StarOutlined
              style={{ color: "white", fontSize: "20px", cursor: "pointer" }}
            />
          </Badge>
        </Link>
        <Link to="/cart">
          <Badge style={{ backgroundColor: "black" }} count={+cartLength}>
            <ShoppingCartOutlined
              style={{ color: "white", fontSize: "20px", cursor: "pointer" }}
            />
          </Badge>
        </Link>
        <div>
          {email ? (
            <Link to="/">
              <button className="sign-btn" onClick={handleLogout}>
                Выйти
              </button>
            </Link>
          ) : null}
          {email ? null : (
            <Link to="/auth">
              <button className="sign-btn">Войти</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
