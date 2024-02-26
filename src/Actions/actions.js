import {
  API_CATEGORIES,
  API_URL,
  CART,
  DELETE,
  GET_ALL,
  GET_CATEGORIES,
  LOADING,
  SELECTED,
  TOTAL,
  SEARCH,
  FILTER_BY_CATEGORY,
  ALL_PRODUCTS,
  CATEGORIES
} from "../Constants";
import { get } from "../Services/FetchDataService";

export const getAllProducts = () => async (dispatch) => {
  // dispatch({ type: LOADING, payload: true });
  try {
    // const data = await get(API_URL);
    // const json = data[0].data;
    dispatch({ type: GET_ALL, payload: ALL_PRODUCTS });
  } catch (e) {
    console.log("error", e);
  }
};
export const getAllCategories = () => async (dispatch) => {
  dispatch({ type: LOADING, payload: true });
  try {
    // const data = await get(API_CATEGORIES);
    // const json = data[0].data;
    dispatch({ type: GET_CATEGORIES, payload: CATEGORIES });
  } catch (e) {
    console.log("error", e);
  }
};

export const addToCart = (data) => async (dispatch) => {
  try {
    console.log(data)
    dispatch({ type: CART, payload: data });
  } catch (e) {
    console.log("error", e);
  }
};
export const deleteToCart = (data, newTotal) => async (dispatch) => {
  try {
    dispatch({ type: DELETE, payload: data });
    dispatch({ type: TOTAL, payload: newTotal });
  } catch (e) {
    console.log("error", e);
  }
};
export const selectProduct = (data) => async (dispatch) => {
  try {
    dispatch({ type: SELECTED, payload: data });
  } catch (e) {
    console.log("error", e);
  }
};
export const filterBycategories = (category) => async (dispatch) => {
  try {
    // const data = await get(API_URL);
    // const json = data[0].data;

    const equalObjects = ALL_PRODUCTS.filter((arr) => arr.category_id === category);
    dispatch({ type: FILTER_BY_CATEGORY, payload: equalObjects });
  } catch (e) {
    console.log("error", e);
  }
};

export const searchResultsByName = (keywords) => async (dispatch, getState) => {
  dispatch({ type: LOADING, payload: true });
  // const allProducts = getState().data.array;
  const key = keywords.toLowerCase();

  try {
    const newArray = ALL_PRODUCTS.filter((item) => {
      return item.name.toLowerCase().includes(key);
    });
    console.log(newArray)
    dispatch({ type: SEARCH, payload: newArray });
    dispatch({ type: LOADING, payload: false });
  } catch (e) {
    console.log(e);
  }
};