import {
  GET_ALL,
  GET_CATEGORIES,
  LOADING,
  CART,
  SELECTED,
  DELETE,
  TOTAL,
  FILTER_BY_CATEGORY,
  ORDER_BY_MORE_EXPENSIVE,
  ORDER_BY_LESS_EXPENSIVE,
  SEARCH,
} from "../Constants";

const dataInicial = {
  array: [],
  categories: [],
  isLoading: false,
  cart: [],
  select: [],
  total: 0,
};
export const reducerData = (state = dataInicial, action) => {
  switch (action.type) {
    case GET_ALL:
      return { ...state, array: action.payload };
    case GET_CATEGORIES:
      return { ...state, categories: action.payload };
    case CART:
      let newTotal = parseFloat(action.payload.price) + parseFloat(state.total);
      return {
        ...state,
        total: newTotal,
        cart: [...state.cart, action.payload],
      };
    case TOTAL:
      return { ...state, total: action.payload };
    case SELECTED:
      return { ...state, select: action.payload };

    case DELETE:
      return { ...state, cart: action.payload };
    case LOADING:
      return { ...state, isLoading: false };
    case FILTER_BY_CATEGORY:
      return { ...state, array: action.payload };
    case ORDER_BY_MORE_EXPENSIVE:
      let orderArray = state.array.sort((a, b) => b.price - a.price);
      return { ...state, array: orderArray };
    case ORDER_BY_LESS_EXPENSIVE:
      let newOrderArray = state.array.sort((a, b) => a.price - b.price);
      return { ...state, array: newOrderArray };
    case SEARCH:
      return { ...state, array: action.payload };

    default:
      return state;
  }
};
