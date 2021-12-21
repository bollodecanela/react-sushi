import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchSushi, fetchPromotion } from "../redux/actions/sushi";
import { addItemToCart } from "../redux/actions/cart";

import { CatalogItem, CatalogItemLoad } from "../components";

function Catalog() {
  const categoryBy = useSelector(({ category }) => category.categoryBy);
  const { items, isLoaded } = useSelector(({ sushi }) => sushi);
  const cartItems = useSelector(({ cart }) => cart.items);

  const dispatch = useDispatch();

  const handleAddSushi = (obj) => {
    dispatch(addItemToCart(obj));
  };

  let category = window.location.pathname.split("/")[1];
  React.useEffect(() => {
    if (category === "promotion") {
      dispatch(fetchPromotion());
    } else dispatch(fetchSushi(categoryBy));
  }, [dispatch, categoryBy, category]);

  return (
    <div className="catalog">
      <h4>{category === "promotion" ? "Акции" : categoryBy.name}</h4>
      <div className="container">
        <div className="cards">
          {isLoaded
            ? items.map((obj) => (
                <CatalogItem
                  key={obj.id}
                  onClickAddSushi={handleAddSushi}
                  addedCount={
                    cartItems[obj.id] && cartItems[obj.id].items.length
                  }
                  {...obj}
                />
              ))
            : Array(4)
                .fill(0)
                .map((_, index) => <CatalogItemLoad key={index} />)}
        </div>
      </div>
    </div>
  );
}

export default Catalog;
