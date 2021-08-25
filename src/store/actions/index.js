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


export const deleteFromCart = product => {
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

