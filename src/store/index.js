import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categoriesReducer from './category.reducer';

import productsReducer from './products.reducer';


const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer
})

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();