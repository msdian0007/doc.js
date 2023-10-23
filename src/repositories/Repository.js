import axios from "axios";

let devURL = "http://localhost:3001"
// let prodURL = "http://192.168.0.107:3001"

const defaultOptions = {
  baseURL: devURL
}

const httpClient = axios.create(defaultOptions)

// httpClient.interceptors.request(
//   function (config) {
//     const token = localStorage.getItem("token")
//     if (token) {
//       config.headers['Authorization'] = 'Bearer ' + token
//     }
//     return config
//   },
//   function (error) {
//     return Promise.reject(error)
//   }
// )

export default httpClient