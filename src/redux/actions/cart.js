import axios from "axios";

export const addItemToCart = (sushiObj) => ({
  type: "ADD_ITEM_CART",
  payload: sushiObj,
});

export const removeCartItem = (id) => ({
  type: "REMOVE_CART_ITEM",
  payload: id,
});

export const plusCartItem = (id) => ({
  type: "PLUS_CART_ITEM",
  payload: id,
});

export const minusCartItem = (id) => ({
  type: "MINUS_CART_ITEM",
  payload: id,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});

export const submitOrder = (
  name,
  phone,
  email,
  persons,
  street,
  building,
  entrance = null,
  level = null,
  flat = null,
  comment = null,
  order
) => {
  axios.post(`/order`, {
    name: name,
    phone: phone,
    email: email,
    persons: persons,
    street: street,
    building: building,
    entrance: entrance,
    level: level,
    flat: flat,
    comment: comment,
    order: order,
  });
};
