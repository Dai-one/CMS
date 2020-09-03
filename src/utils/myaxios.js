//引入axios
import axios from 'axios'
// 创建一个 axios 实例
const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout:2000,
    headers:{}
  });

  // 请求拦截器：在请求发出去之前，做一些验证工作
instance.interceptors.request.use(function (config) {
    console.log('请求拦截器',config)
    // 加token
    return config;
  }, function (error) {
    //请求错误执行
    return Promise.reject(error);
  });

// 响应拦截器：在响应到达之前，先进行数据过滤，错误处理
instance.interceptors.response.use(function (response) {
    if(response.status===200){
        if(response.status&&response.data.success){
            return response.data.data
        }else{
            alert('网络异常请稍后重试')
        }
    }
  }, function (error) {
    // 任何超出2xx范围的状态码都会触发此函数
    // 响应错误执行
    return Promise.reject(error);
  });

  //向外抛出
  export default instance