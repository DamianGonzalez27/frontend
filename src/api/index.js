import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.API_URL, // Aquí define la URL base de tu API
  headers: {
    'Content-Type': 'application/json'
  }
})

export const setAuthInterceptor = (token, axiosInstance) => {
  axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`
    return config
  })
}

export default axiosInstance
