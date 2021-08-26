import axios from 'axios';
import { getProducts } from '../actions/index';
import { getCategories } from '../actions/index';

// let url = 'https://api-js401.herokuapp.com/api/v1';
export const getApiData = () => {
  return dispatch => {
    return axios.get('https://api-js401.herokuapp.com/api/v1/products').then(response => {
      console.log(response);
      // dispatch(getCategories({ category: response.data }));
      dispatch(getProducts({ products: response.data }));
    });
  };

};


export const getApiDataCategory = () => {
  return dispatch => {
    return axios.get('https://api-js401.herokuapp.com/api/v1/categories').then(response => {
      console.log(response);
      dispatch(getCategories({ category: response.data }));
    });
  };
};

