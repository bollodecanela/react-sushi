import React from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  removeCartItem,
  plusCartItem,
  minusCartItem,
} from "../redux/actions/cart";

import { OrderForm, CartItem } from "../components";
import emptyCartPng from "../assets/img/empty-cart.png";

function Cart() {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

  const addedSushi = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const onRemoveItem = (id) => {
    if (window.confirm("Вы действительно хотите удалить?")) {
      dispatch(removeCartItem(id));
    }
  };

  const onPlusItem = (id) => {
    dispatch(plusCartItem(id));
  };

  const onMinusItem = (id) => {
    if (items[id].items.length === 1) dispatch(removeCartItem(id));
    else dispatch(minusCartItem(id));
  };

  return totalCount ? (
    <div className="container">
      <div className="cart">
        <h1>Корзина</h1>
        {addedSushi.map((obj) => (
          <CartItem
            key={`${obj.id}_${obj.title}`}
            id={obj.id}
            name={obj.title}
            description={obj.description || "отсутствует"}
            price={obj.superPrice || obj.price}
            totalPrice={items[obj.id].totalPrice}
            totalCount={items[obj.id].items.length}
            image={obj.img}
            onRemove={onRemoveItem}
            onPlus={onPlusItem}
            onMinus={onMinusItem}
          />
        ))}
      </div>
      <OrderForm totalPrice={totalPrice} />
    </div>
  ) : (
    <div className="container">
      <div className="cart cart-empty">
        <h2>
          Корзина пустая <i>😕</i>
        </h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src={emptyCartPng} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>На главную</span>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
