const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getItemTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const getTotalPrice = (obj) => {
  return Object.keys(obj).reduce((sum, key) => obj[key].totalPrice + sum, 0);
};
const getTotalCount = (obj) => {
  return Object.keys(obj).reduce((sum, key) => obj[key].items.length + sum, 0);
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM_CART": {
      const currentSushiItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentSushiItems,
          totalPrice: getItemTotalPrice(currentSushiItems),
        },
      };

      const totalCount = getTotalCount(newItems);
      const totalPrice = getTotalPrice(newItems);
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case "REMOVE_CART_ITEM": {
      const newItems = {
        ...state.items,
      };

      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }

    case "PLUS_CART_ITEM": {
      const newArrItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newArrItems,
          totalPrice: getItemTotalPrice(newArrItems),
        },
      };

      const totalCount = getTotalCount(newItems);
      const totalPrice = getTotalPrice(newItems);

      return {
        ...state,
        items: newItems,
        totalPrice,
        totalCount,
      };
    }

    case "MINUS_CART_ITEM": {
      const newArrItems = state.items[action.payload].items.slice(1);

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newArrItems,
          totalPrice: getItemTotalPrice(newArrItems),
        },
      };

      const totalCount = getTotalCount(newItems);
      const totalPrice = getTotalPrice(newItems);

      return {
        ...state,
        items: newItems,
        totalPrice,
        totalCount,
      };
    }

    case "CLEAR_CART": {
      return {
        items: {},
        totalCount: 0,
        totalPrice: 0,
      };
    }

    default:
      return state;
  }
};

export default cart;
