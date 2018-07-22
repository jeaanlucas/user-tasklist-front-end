import axios from 'axios'

let api = 'http://localhost:8081/api/'

const http = axios.create({
  baseURL: api
})

http.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
}, (err) => {
  return Promise.reject(err)
})

http.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response.status === 401) {
    window.location = '#/'
  }

  return Promise.reject(error)
})

export default http
