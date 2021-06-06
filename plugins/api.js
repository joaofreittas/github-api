export default function ({ $axios }, inject) {
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    }
  })
  api.setBaseURL(process.env.BASE_URL)
  inject('api', api)
}