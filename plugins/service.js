const createService = axios => ({
  getList: {
    alcohol: () => axios.$get(`/list.php?a=list`),
    categories: () => axios.$get(`/list.php?c=list`),
    glasses: () => axios.$get(`/list.php?g=list`),
    ingredients: () => axios.$get(`/list.php?i=list`)
  },
  filter: {
    alcohol: payload => axios.$get(`/filter.php?a=${payload}`),
    categories: payload => axios.$get(`/filter.php?c=${payload}`),
    glasses: payload => axios.$get(`/filter.php?g=${payload}`),
    ingredients: payload => axios.$get(`/filter.php?i=${payload}`)
  },
  drinks: {
    getRandom: () => axios.$get(`/random.php`),
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
