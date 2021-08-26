import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import categoriesReducer from './reducers/category-reducer';
import cartReducer from './reducers/cart-reducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import productsReducer from './reducers/products-reducer';
import thunk from 'redux-thunk';



const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
})
const store = () => {
  return createStore(reducers, applyMiddleware(thunk));
}

export default store();