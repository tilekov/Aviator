import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div
        style={{
          marginTop: "70px",
          marginBottom: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "240px" }}>
          <p className="footer-text1">ОФИЦИАЛЬНЫЕ УВЕДОМЛЕНИЯ</p>
          <p className="footer-text2">ПРАВИЛА ПОЛЬЗОВАНИЯ САЙТОМ</p>
          <p className="footer-text2">УСЛОВИЯ ПРОДАЖИ</p>
          <p className="footer-text2">УВЕДОМЛЕНИЕ О КОНФИДЕНЦИАЛЬНОСТИ</p>
          <p className="footer-text2">COOKIE УВЕДОМЛЕНИЕ</p>
        </div>
        <div style={{ margin: "0px 100px"}}>
          <p className="footer-text1">МЫ В СОЦСЕТЯХ</p>
          <div style={{display:"flex"}}>
            <img
              width="18px"
              height="18px"
              className="footer-text2"
              src="https://cdn2.iconfinder.com/data/icons/social-icons-grey/512/INSTAGRAM-512.png"
              alt=""
            />
            <p style={{marginLeft:"7px"}} className="footer-text2">INSTAGRAM</p>
          </div>
          <div style={{display:"flex"}}>
            <img
              width="18px"
              height="18px"
              className="footer-text2"
              src="https://toppng.com/uploads/preview/facebook-icon-png-facebook-icon-vector-gray-11563211194xln6ugknxl.png"
              alt=""
            />
            <p style={{marginLeft:"7px"}} className="footer-text2">FACEBOOK</p>
          </div>
          <div style={{display:"flex"}}>
            <img
              width="18px"
              height="18px"
              className="footer-text2"
              src="https://cdn.iconscout.com/icon/free/png-256/twitter-110-434742.png"
              alt=""
            />
            <p style={{marginLeft:"7px"}} className="footer-text2">TWITTER</p>
          </div>
          <div style={{display:"flex"}}>
            <img
              width="18px"
              height="18px"
              className="footer-text2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Wikiversity-Mooc-Icon-Video.svg/500px-Wikiversity-Mooc-Icon-Video.svg.png"
              alt=""
            />
            <p style={{marginLeft:"7px"}} className="footer-text2">YOUTUBE</p>
          </div>
        </div>
        <div>
          <p className="footer-text1">ОНЛАЙН ПОДДЕРЖКА</p>
          <p className="footer-text2">+41 32 466 80 16</p>
          <p className="footer-text2">7:00 до 16:00 (Пн. - Пт.)</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "30px",
        }}
      >
        <img
          width="140px"
          src="https://aviatorwatch.swiss/assets/template/images/logo-black.svg"
          alt=""
        />
      </div>
    </>
  );
};

export default Footer;
