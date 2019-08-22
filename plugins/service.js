const createService = axios => ({
  getList: {
    alcohol: () => axios.$get(`/lists/alcohol`),
    categories: () => axios.$get(`/lists/categories`),
    glasses: () => axios.$get(`/lists/glasses`),
    ingredients: () => axios.$get(`/lists/ingredients`)
  },
  filter: {
    alcohol: payload => axios.$get(`/filter.php?a=${payload}`),
    categories: payload => axios.$get(`/filter.php?c=${payload}`),
    glasses: payload => axios.$get(`/filter.php?g=${payload}`),
    ingredients: payload => axios.$get(`/filter.php?i=${payload}`)
  },
  drinks: {
    getRandom: () => axios.$get(`/random`),
    getDrinkById: payload => axios.$get(`/lookup.php?i=${payload}`),
    getDrinkByName: payload => axios.$get(
      `/search.php?s=${encodeURI(payload)}`
    )
  },
  ingredients: {
    getIngredientById: payload => axios.$get(`/lookup.php?iid=${payload}`),
    getIngredientByName: payload => axios.$get(
      `/search.php?i=${encodeURI(payload)}`
    )
  }
})

export default ({ app }, inject) => {
  app.$service = createService(app.$axios)

  inject('service', createService(app.$axios))
}
