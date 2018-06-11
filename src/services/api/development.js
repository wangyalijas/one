import BaseModule from '../http/index'

class DevelopmentManager extends BaseModule {
  constructor () {
    super()
    this.name = 'DevelopmentManager'
  }
  getIndexList () {
    return this.get(`/users?page=1`)
  }
  master () {
    return 'master'
  }
}

export default new DevelopmentManager()
