import BaseModule from '../http/index'

class DevelopmentManager extends BaseModule {
  constructor () {
    super()
    this.name = 'DevelopmentManager'
  }
  devtest () {
    return this.get(`/users?page=1`)
  }
  master () {
    return 'master'
  }
  test () {
    return 'test'
  }
  test1 () {
    return 'test1'
  }
  test2 () {
    return 'test2'
  }
}

export default new DevelopmentManager()
