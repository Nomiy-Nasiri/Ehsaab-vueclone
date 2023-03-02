import axios from "axios";
export const getCategory = ({ commit }, payload) => {
  axios
    .get(`https://dummyjson.com/products/category/${payload}`)
    .then((response) => {
      commit("GET_PRODUCTS", response.data.products);
    });
};

export const getProducts = ({ commit }) => {
  axios.get(`https://dummyjson.com/products`).then((response) => {
    commit("SET_PRODUCTS", response.data.products);
  });
};
export const findProducts = ({ commit }, payload) => {
  axios
    .get(`https://dummyjson.com/products/search?q=${payload}`)
    .then((response) => {
      commit("SEARCH_PRODUCTS", response.data.products);
    });
};

export const getProduct = ({ commit }, payload) => {
  axios.get(`https://dummyjson.com/products/${payload}`).then((response) => {
    commit("GET_PRODUCT", response.data);
  });
};
export const addProductToCart = ({ commit, state }, payload) => {
  commit("ADD_TO_CART", payload);
};
export const updatePrice = ({ commit }, payload) => {
  commit("ADD_PRODUCT", payload);
};
export const ReducePrice = ({commit},payload) => {
  commit("REDUCE_PRODUCT", payload);
}
export const deleteProduct = ({commit},product)=>{
  commit("DELETE_PRODUCT",product)
}

// export const getProduct = ({commit},productId) =>{
//     axios.get(`https://dummyjson.com/products/${productId}`)
//     .then((response)=>{
//         commit("SET_PRODUCT", response.data)
//     })
// }
