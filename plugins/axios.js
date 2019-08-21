export default function ({ $axios }) {
  console.log($axios)
  $axios.setHeader('Allow-Control-Allow-Origin', '*')
  // $axios.onRequest(config => {
  //   config.headers.common['Allow-Control-Allow-Origin'] = '*'
  // })
}
