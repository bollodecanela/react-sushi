import React from "react";
import PropTypes from "prop-types";

function CatalogItem({
  id,
  title,
  description,
  weight,
  price,
  superPrice,
  img,
  onClickAddSushi,
  addedCount,
}) {
  const onAddSushi = () => {
    const obj = {
      id,
      title,
      description,
      price: superPrice ? superPrice : price,
      img,
    };
    onClickAddSushi(obj);
  };

  return (
    <div className="card">
      <div className="item">
        <div className="image">
          <img src={img} alt="" />
        </div>
        <div className="summary">
          <div className="title">
            <span>{title}</span>
          </div>
          <div className="ingredients">{description}</div>
        </div>
        <div className="price">
          <div className="price-bottom">
            <div className="value">
              <span>{weight} грамм</span>
            </div>
            {superPrice !== null ? (
              <div className="pr">
                <span className="bad-price">{price} ₽</span>
                <span>{superPrice} ₽</span>
              </div>
            ) : (
              <div className="pr">
                <span>{price} ₽</span>
              </div>
            )}
          </div>
          <button className="bottom-button" onClick={onAddSushi}>
            <span>В корзину</span>
            {addedCount && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
}

CatalogItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  weight: PropTypes.number,
  price: PropTypes.number,
  superPrice: PropTypes.number,
  img: PropTypes.string,
  onClickAddSushi: PropTypes.func,
  addedCount: PropTypes.number,
};

CatalogItem.defaultProps = {
  title: "----",
  description: "----",
  weight: 0,
  price: 0,
  superPrice: 0,
};

export default CatalogItem;
