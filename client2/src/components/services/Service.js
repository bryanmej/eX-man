import axios from 'axios'

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:3000',
      withCredentials: true
    })
  }

  signup(data) {
    return this.service.post('/signup', data)
    .then(({data})=> console.log(data))
    .catch(err=> err)
  }

  login(data) {
    return this.service.post('/login', data)
    .then(({data}) => console.log(data))
    .catch(err=> console.log(err))
  }

  profile(data) {
    return this.service.get('/profile', data)
  }

  createExpense(data) {
    return this.service.post('/expense', data)
  }

  getExpenses() {
    return this.service.get('/expense')
    .then(({data})=> console.log(data))
    .catch(err=>console.log(err))
  }

}

export default AuthService