const createService = axios => ({
  home: {},
  search: {}
})

export default ({ app }, inject) => {
  app.$service = createService(app.$axios)

  inject('service', createService(app.$axios))
}
