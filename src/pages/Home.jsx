import React from "react";

import PropTypes from "prop-types";

import { Carousel, MenuItem } from "../components";

function Home({ onClickCategory }) {
  return (
    <div>
      <Carousel />
      <div className="catalog">
        <h4>Каталог</h4>
        <div className="container">
          <div className="catalog-items">
            <MenuItem onClickCategory={onClickCategory} />
          </div>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  onClickCategory: PropTypes.func.isRequired,
};

export default Home;
