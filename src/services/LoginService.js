import HttpService from '@/services/http'

const AUTHORIZATION = 'authorization'

class LoginService {
  constructor () {
    this.http = HttpService
    this.localStorage = localStorage
  }
  authenticate (credentials) {
    return this.http.post('/login', credentials)
  }
  logout () {
    this.localStorage.clear()
  }
  login (data) {
    this.localStorage.setItem(AUTHORIZATION, ('Bearer ').concat(data.token))
  }
  get () {
    return this.localStorage.getItem(AUTHORIZATION)
  }
}

const service = new LoginService()
export default service
