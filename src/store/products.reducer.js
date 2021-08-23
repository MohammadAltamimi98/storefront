const initialState = {
  products: [
    {
      name: 'Sony PlayStation 5 Console',
      category: 'Electronics',
      price: 839,
      inventory: 250,
      picture: 'https://cdn.shopify.com/s/files/1/0385/8490/9956/products/6426149_sd_1500x1500.jpg?v=1603105704'
    },
    {
      name: 'iPhone 12 Pro Max',
      category: 'Electronics',
      price: 839,
      inventory: 250,
      picture: 'https://cdn.shopify.com/s/files/1/0385/8490/9956/products/6426149_sd_1500x1500.jpg?v=1603105704'
    }
    , {
      name: 'Apple Watch Series 6',
      category: 'Electronics',
      price: 389,
      inventory: 100,
      picture: 'https://cdn.shopify.com/s/files/1/0385/8490/9956/products/Apple_Watch_Series_6_GPS_40mm_Blue_Aluminum_Deep_Navy_Sport_Band_PDP_Image_Position-1_EN_3350x3350.jpg?v=1618542844'
    }
    ,
    {
      name: 'MacBook Air',
      category: 'Electronics',
      price: 969,
      inventory: 75,
      picture: 'https://cdn.shopify.com/s/files/1/0385/8490/9956/products/71vFKBpKakL._AC_SL1500_562x328.jpg?v=1609064061'
    }
    ,
    {
      name: 'Lasagna',
      category: 'Food',
      price: 12,
      inventory: 10,
      picture: 'https://www.jessicagavin.com/wp-content/uploads/2017/07/meat-lasagna-1200.jpg'
    }
    ,
    {
      name: 'BLUEBERRY MOUSSE CAKE',
      category: 'Food',
      price: 22,
      inventory: 25,
      picture: 'https://jasminegift.com/wp-content/uploads/2021/07/42.jpg'
    }]
}


const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ACTIVE':
      let product = state.products.filter(product =>
        product.category === payload ? product.category : null
      );
      return { ...state, product: product };
    default:
      return state;
  }
}

export default productsReducer;