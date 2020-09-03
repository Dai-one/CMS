//插件模块
import axios from 'axios'
const MyHttpServe = {}

MyHttpServe.install = (Vue) =>{
  axios.defaults.baseURL = 'http://localhost:8080'
  Vue.prototype.$http = axios
}

export default MyHttpServe