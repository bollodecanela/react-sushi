import React from "react";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import {
  desserts,
  drinks,
  gunkans,
  parts,
  rolls,
  salads,
  sashimi,
  sets,
  soups,
  sushi,
} from "../assets/img/catalog";

const catalogItems = [
  { name: "Cуши", link: "sushi", img: sushi },
  { name: "Роллы", link: "rolls", img: rolls },
  { name: "Сеты", link: "sets", img: sets },
  { name: "Гунканы", link: "gunkans", img: gunkans },
  { name: "Сашими", link: "sashimi", img: sashimi },
  { name: "Супы", link: "soups", img: soups },
  { name: "Салаты", link: "salads", img: salads },
  { name: "Десерты", link: "desserts", img: desserts },
  { name: "Напитки", link: "drinks", img: drinks },
  { name: "Комплектующие", link: "parts", img: parts },
];

function MenuItem({ onClickCategory }) {
  return catalogItems.map((obj) => (
    <div className="card" key={`${obj.name}_${obj.img}`}>
      <Link to={`/catalog/${obj.link}`} onClick={() => onClickCategory(obj)}>
        <div className="item">
          <div className="image">
            <img src={obj.img} alt="" />
          </div>
          <div className="summary">{obj.name}</div>
        </div>
      </Link>
    </div>
  ));
}

MenuItem.propTypes = {
  onClickCategory: PropTypes.func.isRequired,
};

export default MenuItem;
