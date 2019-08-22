export default function ({ $axios }) {
  $axios.setHeader('Access-Control-Allow-Origin', '*')
  $axios.setHeader('Access-Control-Request-Method', 'GET, POST, PUT, DELETE')
}
