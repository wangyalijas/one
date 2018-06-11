import BaseModule from '../http/index'

class DevelopmentManager extends BaseModule {
  constructor () {
    super()
    this.name = 'DevelopmentManager'
  }
  devtest () {
    return this.get(`/users?page=1`)
  }
}

export default new DevelopmentManager()
