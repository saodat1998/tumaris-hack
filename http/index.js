import axios from 'axios'
import mock from '../mocks/$mock.js'
/*
const accessToken = '' // window.localStorage.getItem('accessToken')
const lang = this.$store.state.lang.activeLangCode
const headers = { Authorization: 'Bearer ' + accessToken, AcceptLanguage: lang } */
mock()
// create an axios instance
const service = axios.create({
  baseURL: process.env.baseUrl,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 17000, // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    /* if (process.client) {
      config.headers.Language = window.localStorage.getItem('langCode')
    } */

    // do something before request is sent
    /* if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation

    } */
    return config
  },
  (error) => {
    // do something with request error
    console.error(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response

    // if the custom code is not 20000, it is judged as an error.
    /* if (res.code !== 20000) {
      // error notification

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        // error notification
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    } */

    return res
  },
  (error) => {
    console.error('err' + error) // for debug
    // error notification
    return Promise.reject(error)
  }
)

export default service
