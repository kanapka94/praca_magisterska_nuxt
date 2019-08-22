const axios = require('axios')

axios.defaults.baseURL = 'https://www.thecocktaildb.com/api/json/v2/8673533'
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE'
axios.defaults.headers.get['Content-Type'] = 'application/json'

export default axios
