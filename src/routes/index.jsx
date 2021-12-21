import React from "react";
import { Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCategory } from "../redux/actions/category";

import { Home, About, Delivery, Catalog, Cart } from "../pages";
import { HeaderCart, MenuBar } from "../components";

function Pages() {
  const dispatch = useDispatch();
  const onSelectCategory = React.useCallback(
    (category) => {
      dispatch(setCategory(category));
    },
    [dispatch]
  );

  return (
    <div className="main">
      <div className="menu">
        <div className="container">
          <MenuBar onClickCategory={onSelectCategory} />
          <HeaderCart />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home onClickCategory={onSelectCategory} />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/catalog/:id" element={<Catalog />} />
        <Route path="/promotion" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default Pages;
