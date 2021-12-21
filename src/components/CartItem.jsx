import React from "react";
import PropTypes from "prop-types";

import { BsPlusLg, BsDashLg, BsXLg } from "react-icons/bs";

function CartItem({
  id,
  name,
  description,
  price,
  totalPrice,
  totalCount,
  image,
  onRemove,
  onPlus,
  onMinus,
}) {
  const handleRemoveClick = () => {
    onRemove(id);
  };

  const handlePlusClick = () => {
    onPlus(id);
  };

  const handleMinusClick = () => {
    onMinus(id);
  };

  return (
    <div className="cart_card">
      <div className="cart_item">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="cart_info">
          <div className="cart_summary">
            <h4>{name}</h4>
          </div>
          <div className="cart_ingredients">
            <span className="description">
              <b>Состав: </b>
              <span>{description}</span>
            </span>
          </div>
        </div>
        <div className="cart_price">
          <span> {price} ₽ </span>
        </div>
        <div className="count">
          <span className="increments_button" onClick={handlePlusClick}>
            <BsPlusLg />
          </span>
          <span>{totalCount}</span>
          <span className="decrements_button" onClick={handleMinusClick}>
            <BsDashLg />
          </span>
        </div>
        <div className="sum">
          <span> {totalPrice} ₽ </span>
        </div>
        <span className="delete" onClick={handleRemoveClick}>
          <BsXLg />
        </span>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  totalPrice: PropTypes.number,
};

export default CartItem;
