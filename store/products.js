const state = () => ({
  products: [],
})
const getters = {
  getProducts(state) {
    return state.products
  },
}
const mutations = {
  addProduct(state, product) {
    state.products.push(product)
  },
}
const actions = {
  ADD_PRODUCTS({ commit }, product) {
    if (product) {
      commit('addProduct', product)
    }
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
