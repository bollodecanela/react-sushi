import React from "react";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const catalogItems = [
  { name: "Cуши", link: "sushi" },
  { name: "Роллы", link: "rolls" },
  { name: "Сеты", link: "sets" },
  { name: "Гунканы", link: "gunkans" },
  { name: "Сашими", link: "sashimi" },
  { name: "Супы", link: "soups" },
  { name: "Салаты", link: "salads" },
  { name: "Десерты", link: "desserts" },
  { name: "Напитки", link: "drinks" },
  { name: "Комплектующие", link: "parts" },
];

function MenuBar({ onClickCategory }) {
  return (
    <ul className="menu-bar link-animate">
      {catalogItems.map((obj, id) => (
        <li key={`${id}_${obj.link}`}>
          <Link
            to={`/catalog/${obj.link}`}
            onClick={() => onClickCategory(obj)}
          >
            {obj.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

MenuBar.propTypes = {
  onClickCategory: PropTypes.func.isRequired,
};

export default MenuBar;
