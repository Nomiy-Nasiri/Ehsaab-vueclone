export const GET_PRODUCTS = (state, payload) => {
  state.categories = payload;
};
export const SET_PRODUCTS = (state, payload) => {
  state.products = payload;
};

export const SEARCH_PRODUCTS = (state, payload) => {
  state.products = payload;
  state.categories = payload;
};
// export const CATEGORY_PRODUCTS = (state, payload) => {
//   state.categories = payload
// }
// export const SET_PRODUCT = (state, product) => {
//   state.product = product;
// };
export const GET_PRODUCT = (state, payload) => {
  state.product = payload;
  // console.log(payload);
};
export const ADD_TO_CART = (state, payload) => {
  state.cart.push(payload);
  // console.log(state.cart)
};
export const ADD_PRODUCT = (state, payload) => {
  let index = state.cart.findIndex((el) => el.id === payload.id);
  state.cart[index].quantity += 1;
  state.cart[index].totalprice =
    state.cart[index].quantity * state.cart[index].price;
};
export const  REDUCE_PRODUCT = (state ,payload) => {
  let index = state.cart.findIndex((el) => el.id === payload.id);
  if(state.cart[index].quantity > 1){
  state.cart[index].quantity -= 1;
  state.cart[index].totalprice =
    state.cart[index].quantity * state.cart[index].price;
  }
}
export const DELETE_PRODUCT = (state, product) => {
 state.cart = state.cart.filter(el =>{
  return el.id !== product.id
 })
}
