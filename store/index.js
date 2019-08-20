const state = () => ({
  drinks: [],
  loading: false
})

const mutations = {
  SET_DRINKS (state, payload) {
    state.drinks = [...payload]
  },
  SET_LOADING (state, payload) {
    state.loading = payload
  }
}

const actions = {
  async fetchDrinks ({ commit }, payload) {
    commit('SET_LOADING', true)
    let response = []
    if (payload.value && payload.criteria) {
      let service = this.$service.filter[payload.criteria]
      if (payload.criteria === 'id') {
        service = this.$service.drinks.getDrinkById
      } else if (payload.criteria === 'name') {
        service = this.$service.drinks.getDrinkByName
      }
      response = await service(payload.value)
    }
    commit('SET_DRINKS', response.drinks || [])
    setTimeout(() => {
      commit('SET_LOADING', false)
    }, 250)
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
