import axios from 'axios';
import { getProducts } from '../actions/index';
import { getCategories } from '../actions/index';

let url = 'https://api-js401.herokuapp.com/api/v1';
export const getApiData = () => {
  return dispatch => {
    return axios.get(`${url}/products`).then(response => {
      console.log(response);
      // dispatch(getCategories({ category: response.data }));
      dispatch(getProducts({ products: response.data }));
    });
  };
};


export const getApiDataCategory = () => {
  return dispatch => {
    return axios.get(`${url}/categories`).then(response => {
      console.log(response);
      dispatch(getCategories({ category: response.data }));
    });
  };
};

