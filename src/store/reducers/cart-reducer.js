let initialState = { cart: [], show: false };

function cartReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD':
      // console.log(state.cart);
      const products = state.cart.map(product => product.name);
      if (!products.includes(payload.name)) {
        return { cart: [...state.cart, payload], show: true };
      }

      return { cart: state.cart, show: true };
    case 'DELETE':
      const product = state.cart.filter(product => {
        return product.name !== payload.name;
      });
      return { cart: [...product], show: true };
    default:
      return state;
  }
};

export default cartReducer;
