import React from "react";
import { Link } from "react-router-dom";

import logoPng from "../assets/img/logo.png";
function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo header-item">
            <img width="120" src={logoPng} alt="logo" />
            <div className="name">
              <h1>fuji sushi</h1>
              <p>Пол...суши это лава</p>
            </div>
          </div>
        </Link>
        <ul className="nav-bar link-animate header-item">
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/delivery">Доставка</Link>
          </li>
          <li>
            <Link to="/about">О нас</Link>
          </li>
          <li>
            <Link to="/promotion">Акции</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
