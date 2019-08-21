export default function ({ $axios }) {
  $axios.onRequest(config => {
    config.headers.common['Allow-Control-Allow-Origin'] = '*'
  })
}
