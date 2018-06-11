import BaseModule from '../http/index'

class DevelopmentManager extends BaseModule {
  constructor () {
    super()
    this.name = 'DevelopmentManager'
  }
}

export default new DevelopmentManager()
