import React from "react";
import { Link } from "react-router-dom";

import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_left">
          <div className="fuji">
            <span>FUJI SUSHI - доставка японской премиум еды в Невельске</span>
          </div>
          <div className="policy">
            <Link to="/"> Политика конфиденциальности </Link>
          </div>
          <div className="developer">
            <a href="https://www.instagram.com/_bollodecanela/" target="blank">
              Разработка сайта - bollodecanela
            </a>
          </div>
        </div>
        <div className="footer_right">
          <div className="pay">
            <span>Мы принимаем:</span>
            <div className="payment_system">
              <img
                src="https://yoji-cdn.arora.pro/upload/57605119-91bb-4c26-aded-c31b450f1c37/file_manager/theme/mastercard-classic.svg?I=141021"
                alt=""
              />
              <img
                src="https://yoji-cdn.arora.pro/upload/57605119-91bb-4c26-aded-c31b450f1c37/file_manager/theme/visa-classic.svg?I=141021https://yoji-cdn.arora.pro/upload/57605119-91bb-4c26-aded-c31b450f1c37/file_manager/theme/visa-classic.svg?I=141021"
                alt=""
              />
            </div>
          </div>
          <div className="insta">
            <span>Следите за нами в Instagram</span>
            <a href="https://www.instagram.com/_bollodecanela/" target="blank">
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
