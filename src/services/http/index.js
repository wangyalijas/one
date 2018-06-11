import axios from 'axios'

class BaseModule {
  constructor () {
    this.http = axios.create({
      baseURL: '',
      timeout: 10000
    })
  }
  get (url, config = {}) {
    return this.$http.get(url, config)
  }

  post (url, data = undefined, config = {}) {
    return this.$http.post(url, {...data, ...config})
  }
}

export default BaseModule
