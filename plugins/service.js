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
    getRandom: () => axios.$get(`/random.php`)
  }
})

export default ({ app }, inject) => {
  app.$service = createService(app.$axios)

  inject('service', createService(app.$axios))
}
