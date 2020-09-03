import axios from './myaxios'
//封装axios方法
export function Login(data){
    return axios({
        url:'users/cms/login',
        method:'POST',
        data
    })
}

export default {
  Login
}