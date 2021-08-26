import axios from 'axios';
import getProducts from '../actions/index';
import { getCategories } from '../actions/index';

let url = 'https://api-js401.herokuapp.com/api/v1/products';
export const getApiData = () => {
  return dispatch => {
    return axios.get(url).then(response => {
      console.log(response);
      dispatch(getCategories({ category: response.data }));
      dispatch(getProducts({ products: response.data }));
    });
  };
};
