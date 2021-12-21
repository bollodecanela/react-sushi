import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import cartSvg from "../assets/img/cart.svg";

function HeaderCart() {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);
  return (
    <div className="menu-cart">
      <Link to="/cart" className="button button-cart">
        <span>{totalPrice} ₽</span>
        <div className="button-delimiter"></div>
        <img src={cartSvg} alt="" />
        <span>{totalCount}</span>
      </Link>
    </div>
  );
}

export default HeaderCart;
