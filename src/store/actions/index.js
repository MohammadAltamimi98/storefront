export const activeCategory = name => {
  return {
    type: 'ACTIVE',
    payload: name,
  };
};


export const addProduct = product => {
  return {
    type: 'ADD',
    payload: product,
  };
};


export const removeFromCart = product => {
  return {
    type: 'DELETE',
    payload: product,
  };
};


export const showCart = open => {
  return {
    type: 'SHOW',
    payload: open,
  };
};


export const decreaseInventory = product => {
  return {
    type: 'ADDEDPRODUCT',
    payload: product,
  };
};


export const getCategories = category => {
  return {
    type: 'GET_CATEGORY_FROM_API',
    payload: category,
  };
};
export default getCategories;


export const getProducts = product => {
  return {
    type: 'GET_PRODUCT_FROM_API',
    payload: product,
  };
};

