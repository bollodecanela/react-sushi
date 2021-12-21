const initialState = {
  categoryBy: {
    link: "sushi",
    name: "Суши",
  },
};

const category = (state = initialState, action) => {
  if (action.type === "SET_CATEGORY") {
    return {
      ...state,
      categoryBy: action.payload,
    };
  }
  return state;
};

export default category;
