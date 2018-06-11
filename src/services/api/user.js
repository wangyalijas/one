import BaseModule from '../http/index'

class DevelopmentManager extends BaseModule {
  constructor () {
    super()
    this.name = 'DevelopmentManager'
  }
  dev () {
    return this.get(`/users?page=1`)
  }
}

export default new DevelopmentManager()
