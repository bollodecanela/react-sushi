import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { submitOrder, clearCart } from "../redux/actions/cart";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import orderValidator from "../service/orderValidator";

import { BsPlusLg, BsDashLg } from "react-icons/bs";
import order from "../assets/img/order.png";

function OrderForm({ totalPrice }) {
  const dispatch = useDispatch();
  const [personCount, setPersonCount] = React.useState(1);
  const { items } = useSelector(({ cart }) => cart);

  const addedSushi = Object.keys(items).map((key) => {
    return {
      id: items[key].items[0].id,
      title: items[key].items[0].title,
      count: items[key].items.length,
    };
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(orderValidator),
  });

  const changePersonCount = (value) => {
    setPersonCount(personCount + value);
  };

  const onSubmit = async ({
    name,
    phone,
    email,
    street,
    building,
    entrance,
    level,
    flat,
    comment,
  }) => {
    await submitOrder(
      name,
      phone,
      email,
      personCount,
      street,
      building,
      entrance,
      level,
      flat,
      comment,
      addedSushi
    );
    await dispatch(clearCart());
    window.location.replace("/");
  };

  return (
    <div className="confirm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Персональная информация</legend>
          <p className="error-msg">
            {errors.name?.message ||
              errors.phone?.message ||
              errors.email?.message}
          </p>
          <div className="row">
            <label htmlFor="name" className="name">
              <span className="required-input">Имя</span>
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Ваше имя"
                {...register("name", {
                  required: true,
                })}
              />
            </label>
            <label htmlFor="telephone" className="phone">
              <span className="required-input">Телефон</span>
              <input
                name="phone"
                type="text"
                className="form-control"
                placeholder="Телефон"
                {...register("phone", {
                  required: true,
                })}
              />
            </label>
            <label htmlFor="email" className="email">
              <span className="required-input">Email</span>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="E-mail"
                {...register("email", {
                  required: true,
                })}
              />
            </label>
            <label htmlFor="cnt" className="cnt">
              <span>Кол-во приборов</span>
              <div className="row">
                <input
                  name="persons"
                  type="text"
                  className="form-control"
                  placeholder="1"
                  value={personCount}
                  onChange={(e) => setPersonCount(e.target.value)}
                />
                <div className="cnt-btn row">
                  <span
                    className="decbutton"
                    onClick={() => changePersonCount(-1)}
                  >
                    <BsDashLg />
                  </span>
                  <span
                    className="incbutton"
                    onClick={() => changePersonCount(1)}
                  >
                    <BsPlusLg />
                  </span>
                </div>
              </div>
            </label>
          </div>
        </fieldset>
        <div className="row adress-block">
          <fieldset className="adress">
            <legend>Адрес доставки</legend>
            {(errors.street?.message || errors.building?.message) && (
              <p className="error-msg">
                {errors.street?.message || errors.building?.message}
              </p>
            )}
            <label htmlFor="street" className="street">
              <span className="required-input">Улица</span>
              <input
                name="street"
                type="text"
                className="form-control"
                placeholder="Введите улицу"
                {...register("street", {
                  required: true,
                })}
              />
            </label>
            <label htmlFor="house" className="house">
              <span className="required-input">Номер дома</span>
              <input
                name="building"
                type="text"
                className="form-control"
                placeholder="Введите номер дома"
                {...register("building", {
                  required: true,
                })}
              />
            </label>
            <p>Дополнительная информация</p>
            <p className="error-msg">
              {errors.entrance?.message ||
                errors.level?.message ||
                errors.flat?.message}
            </p>
            <div className="row add-adress">
              <label htmlFor="entrance" className="entrance">
                <span className="input">Подъезд</span>
                <input
                  name="entrance"
                  type="text"
                  className="form-control"
                  placeholder="Подъезд"
                  {...register("entrance")}
                />
              </label>
              <label htmlFor="floor" className="floor">
                <span className="input">Этаж</span>
                <input
                  name="level"
                  type="text"
                  className="form-control"
                  placeholder="Этаж"
                  {...register("level")}
                />
              </label>
              <label htmlFor="flat" className="flat">
                <span className="input">Квартира</span>
                <input
                  name="flat"
                  type="text"
                  className="form-control"
                  placeholder="Квартира"
                  {...register("flat")}
                />
              </label>
              <label htmlFor="comment" className="comment">
                <p className="error-msg">{errors.comment?.message}</p>
                <span className="input">Комментарий</span>
                <input
                  name="comment"
                  type="text"
                  className="form-control"
                  placeholder="Введите комментарий"
                  {...register("comment")}
                />
              </label>
            </div>
          </fieldset>
          <fieldset className="submit">
            <img src={order} alt="" />
            <div className="total_price">
              <span>Итого к оплате</span>
              <span className="total-sum">{totalPrice} ₽</span>
            </div>
            <input type="submit" className="sub" value="Оформить" />
          </fieldset>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;
