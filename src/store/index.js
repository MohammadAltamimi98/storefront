import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categoriesReducer from './reducers/category-reducer';
import cartReducer from './reducers/cart-reducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import productsReducer from './reducers/products-reducer';


const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
})
const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();