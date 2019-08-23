const createService = axios => ({
  getList: {
    alcohol: () => axios.$get(`/lists/alcohol`),
    categories: () => axios.$get(`/lists/categories`),
    glasses: () => axios.$get(`/lists/glasses`),
    ingredients: () => axios.$get(`/lists/ingredients`)
  },
  filter: {
    alcohol: payload => axios.$get(`/filters/alcohol/${payload}`),
    categories: payload => axios.$get(`/filters/categories/${payload}`),
    glasses: payload => axios.$get(`/filters/glasses/${payload}`),
    ingredients: payload => axios.$get(`/filters/ingredients/${payload}`)
  },
  drinks: {
    getRandom: () => axios.$get(`/random`),
    getDrinkById: payload => axios.$get(`/drinks/id/${payload}`),
    getDrinkByName: payload => axios.$get(
      `/drinks/${encodeURI(payload)}`
    )
  },
  ingredients: {
    getIngredientById: payload => axios.$get(`/ingredients/id/${payload}`),
    getIngredientByName: payload => axios.$get(
      `/ingredients/${encodeURI(payload)}`
    )
  }
})

export default ({ app }, inject) => {
  app.$service = createService(app.$axios)

  inject('service', createService(app.$axios))
}
