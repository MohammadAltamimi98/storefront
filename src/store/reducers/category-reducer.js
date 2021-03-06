const initialState = {
  categories: [
    {
      name: 'Food',
      displayName: 'Food',
      description: 'Check out our new online Grocery and Order freshly harvested products from our stores.Check the latest offers we have as well !',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5prfTaOTAyUDETilMUzfaFlgU5UA0MHluHfLLsq4JW18dqzFdidn6R9Es7voek4taAQ8&usqp=CAU'
    },
    {
      name: 'Electronics',
      displayName: 'Electronics',
      description: '  Check out our new and wide range of electronics that just arrived. Catch the 35% sales before the 30th-Oct!',
      url: 'https://cpsresources.com/wp-content/uploads/2014/12/appliance-electronics-industry.jpg'
    }
  ],
  active: ''
};


const categoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ACTIVE':
      const categories = state.categories;
      const active = payload;
      return { categories, active };
    default:
      return state;
  }
};
export default categoriesReducer;