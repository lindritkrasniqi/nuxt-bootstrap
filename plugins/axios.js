export default ({ $axios, redirect, store, error }) => {
  // clear errors for every request
  $axios.onRequest(() => store.commit('errors/error', {}))

  // error handling for every request
  $axios.onError((e) => {
    switch (e.response.status) {
      case 401:
      case 403:
        redirect('/accounts/login')
        break
      case 404:
        error({
          message: 'Not found',
          statusCode: 404
        })
        break
      case 422:
        store.commit('errors/error', e.response.data)
        break
      default:
        // store.commit('notifications/error', {
        //   title: 'Error: code ' + e.response.status,
        //   message: e.response.data.message
        // })
    }
  })
}
