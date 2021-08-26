let initialState = { cart: [], show: false, count: 0 };

function cartReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD':
      // console.log(state.cart);
      const products = state.cart.map(product => product.name);
      if (!products.includes(payload.item)) {
        let count = state.count + 1;
        return { cart: [...state.cart, payload.item], show: true, count: count };
      }
      return { cart: state.cart, show: true, count: state.count };

    case 'DELETE':
      const product = state.cart.filter(product => {
        return product.item !== payload.item;
      });
      let count = state.count - 1;
      return { cart: [...product], show: true, count: count };

    default:
      return state;
  }
};

export default cartReducer;
